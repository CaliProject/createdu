<?php

namespace Createdu\Events;

use Createdu\Events\Event;
use Createdu\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewMessage extends Event implements ShouldBroadcast {

    use SerializesModels;

    public $user;

    public $content;

    public $fromUser;

    /**
     * Create a new event instance.
     *
     * @param User $user
     * @param User $fromUser
     * @param      $content
     */
    public function __construct(User $user, User $fromUser, $content)
    {
        $this->user = $user;
        $this->fromUser = $fromUser;
        $this->content = $content;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['private-user-' . $this->user->id];
    }
}
