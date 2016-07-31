<?php

namespace Createdu\Listeners\User;

use Slack;
use Createdu\Events\User\Auth\UserHasRegistered;

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
     * @param  UserHasRegistered  $event
     * @return void
     */
    public function handle(UserHasRegistered $event)
    {
        $message = sprintf('【%s】网站有新用户注册, 昵称: %s', site('siteTitle'), $event->user->name);

        Slack::send($message);
    }
}
