<?php

namespace Createdu\Http\Controllers\User;

use Createdu\Media;
use Createdu\User;
use Createdu\Message;
use Illuminate\Http\Request;
use Createdu\Events\User\NewMessage;
use Createdu\Http\Controllers\Controller;

class ConversationsController extends Controller {

    /**
     * Global request.
     *
     * @var Request
     */
    protected $request;

    /**
     * ConversationsController constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->request = $request;
    }

    /**
     * Get the current user.
     *
     * @return User
     */
    protected function user()
    {
        return $this->request->user();
    }

    /**
     * Get conversations with user.
     *
     * @param User $user
     * @return array
     */
    public function getConversations(User $user)
    {
        $this->preventSelf($user);

        $messages = $this->user()
            ->messagesWith($user, $this->request->has('lastId') ? intval($this->request->input('lastId')) : null)
            ->take((new Message)->getPerPage())
            ->get()
            ->reverse()
            ->flatten();

        return $this->successResponse(compact('messages'));
    }

    /**
     * Send a message to a user.
     *
     * @param User $user
     * @return array
     */
    public function send(User $user)
    {
        $this->preventSelf($user);

        $message = $this->makeMessage($user);
        event(new NewMessage($message));

        return $message->metas ? response(json_encode([
            'm' => $message
        ]), 200, [
            'Content-type' => 'text/html'
        ]) : $this->successResponse([
            'm' => $message
        ]);
    }

    /**
     * User read the messages of the conversation.
     *
     * @param User $user
     * @return array
     */
    public function readMessages(User $user)
    {
        $this->user()->readAllMessages($user);

        return $this->successResponse();
    }

    /**
     * Prevent from talking to self.
     *
     * @param User $user
     */
    protected function preventSelf(User $user)
    {
        if ($user->id == $this->user()->id) {
            abort(403);
        }
    }

    /**
     * Create the message.
     *
     * @param User $user
     * @return Message
     */
    protected function makeMessage(User $user)
    {
        if ($this->request->hasFile('image')) {
            $media = Media::move($this->request->file('image'), $this->user());
            $message = $this->user()->sendMessageTo($user, '[' . trans('views.chat.image-message') . ']', $media);
        } else {
            $message = $this->user()->sendMessageTo($user, $this->request->input('message'));
        }

        return $message;
    }
}