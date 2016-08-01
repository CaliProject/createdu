<?php

namespace Createdu\Events\User;

use Createdu\User;
use Createdu\Notification;
use Createdu\Events\Event;
use Createdu\Events\ShouldNotify;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CreditHasChanged extends Event implements ShouldNotify, ShouldBroadcast {

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
     * @var
     */
    protected $credit;

    /**
     * @var null
     */
    private $extraMessage;

    /**
     * Create a new event instance.
     *
     * @param User $user
     * @param      $credit
     * @param null $extraMessage
     */
    public function __construct(User $user, $credit, $extraMessage = null)
    {
        $this->user = $user;
        $this->credit = $credit;
        $this->extraMessage = $extraMessage;
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
     * @return array
     */
    public function getNotification()
    {
        return $this->user->notifications()->create([
            'content' => $this->getMessage(),
            'type'    => Notification::CREDIT_TYPE
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
     * Get the notification message.
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    protected function getMessage()
    {
        $message = $this->credit > 0 ?
            trans('notifications.content.credit.increase', ['credit' => $this->credit]) :
            trans('notifications.content.credit.decrease', ['credit' => abs($this->credit)]);

        return is_null($this->extraMessage) ? $message : $this->extraMessage . $message;
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
