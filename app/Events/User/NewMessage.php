<?php

namespace Createdu\Events\User;

use Createdu\Message;
use Createdu\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewMessage extends Event implements ShouldBroadcast {

    use SerializesModels;

    /**
     * The message sent.
     *
     * @var Message
     */
    protected $message;

    /**
     * Create a new event instance.
     *
     * @param Message $message
     * @param      $content
     */
    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['pm-' . $this->message->to_user_id];
    }

    /**
     * {@inheritdoc}
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'message' => $this->message->jsonSerialize()
        ];
    }
}
