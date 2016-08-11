<?php

namespace Createdu\Library\Traits\User;

use Createdu\User;
use Createdu\Message;

trait CanSendMessages {

    /**
     * Get user's related messages.
     *
     * @return mixed
     */
    public function messages()
    {
        return Message::where('from_user_id', $this->id)->orWhere('to_user_id', $this->id)->latest();
    }

    /**
     * Get the associated conversation messages with the given user.
     *
     * @param User $user
     * @param      $lastId
     * @return mixed
     */
    public function messagesWith(User $user, $lastId = null)
    {
        $query = [
            [
                ['from_user_id', $this->id],
                ['to_user_id', $user->id]
            ],
            [
                ['from_user_id', $user->id],
                ['to_user_id', $this->id]
            ]
        ];

        if ($lastId) {
            foreach ($query as $k => $q) {
                $query[$k] = array_merge($q, [['id', '<', $lastId]]);
            }
        }

        return Message::where($query[0])->orWhere($query[1])->latest();
    }

    /**
     * Get user's current conversations side list.
     *
     * @return mixed
     */
    public function conversationsList()
    {
        /* TODO: Dynamic list in meta */
        $users = static::where('id', '!=', $this->id)->take(8)->get();

        return $users->map(function ($user) {
            return [
                'id'          => $user->id,
                'avatar'      => $user->avatarUrl,
                'name'        => $user->name,
                'description' => $user->description,
                'unread'      => $this->unreadMessagesCount($user),
                'open'        => false,
                'messages'    => [],
                'loading'     => false,
                'sending'     => false
            ];
        });
    }

    /**
     * Send a message to other user.
     *
     * @param User   $user
     * @param string $content
     * @param null   $metas
     *
     * @return $this
     */
    public function sendMessageTo(User $user, $content = '', $metas = null)
    {
        $m = new Message;

        return $m->from($this)->to($user)->said(compact('content'), $metas);
    }

    /**
     * Get unread messages count of the conversation.
     *
     * @param User $user
     * @return int|string
     */
    public function unreadMessagesCount(User $user)
    {
        $count = Message::where([
            ['from_user_id', $user->id],
            ['to_user_id', $this->id],
            ['read', false]
        ])->count();

        return $count > 99 ? '99+' : $count;
    }

    /**
     * Read all messages of the current conversation.
     *
     * @param User $user
     * @return mixed
     */
    public function readAllMessages(User $user)
    {
        return Message::where([
            ['from_user_id', $user->id],
            ['to_user_id', $this->id],
            ['read', false]
        ])->update([
            'read' => true
        ]);
    }
}