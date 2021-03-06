<?php

namespace Createdu\Events\User\Auth;

use Createdu\User;
use Createdu\Events\Event;
use Createdu\Events\ShouldNotifySlack;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserHasRegistered extends Event implements ShouldBroadcast, ShouldNotifySlack
{
    use SerializesModels;

    /**
     * User dependency.
     *
     * @var User
     */
    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['administrator'];
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function getSlackMessage()
    {
        return sprintf('【%s】网站有新用户注册, 昵称: * %s *', site('siteTitle'), $this->user->name);
    }

    /**
     * {@inheritdoc}
     *
     * @return bool
     */
    public function shouldAttach()
    {
        return false;
    }
}
