<?php

namespace Createdu\Events\User\Auth;

use Createdu\User;
use Createdu\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserHasRegistered extends Event implements ShouldBroadcast
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
}
