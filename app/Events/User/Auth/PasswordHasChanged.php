<?php

namespace Createdu\Events\User\Auth;

use Createdu\User;
use Createdu\Notification;
use Createdu\Events\Event;
use Createdu\Events\ShouldNotify;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PasswordHasChanged extends Event implements ShouldBroadcast, ShouldNotify
{

    use SerializesModels;

    /**
     * @var User
     */
    public $user;

    /**
     * @var Notification
     */
    protected $notification;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
        $this->notification = $this->getNotification();
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['user-' . $this->user->id];
    }

    /**
     * {@inheritdoc}
     *
     * @return Notification
     */
    public function getNotification()
    {
        return $this->user->notifications()->create([
            'content' => trans('notifications.content.user.password-updated'),
            'type'    => Notification::USER_TYPE
        ]);
    }

    /**
     * {@inheritdoc}
     *
     * @return User
     */
    public function user()
    {
        return $this->user;
    }

    /**
     * Broadcast with notification.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'notification' => array_merge($this->notification->toArray(), $this->notification->extraAttributes())
        ];
    }
}
