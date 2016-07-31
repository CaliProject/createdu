<?php

namespace Createdu\Listeners\User;

use Slack;
use Createdu\Events\ShouldNotifySlack;

class NotifySlack
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param ShouldNotifySlack $event
     */
    public function handle(ShouldNotifySlack $event)
    {
        if ($attachment = $event->shouldAttach())
            return Slack::attach($attachment)->send($event->getSlackMessage());

        Slack::send($event->getSlackMessage());
    }
}
