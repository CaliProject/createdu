<?php

namespace Createdu\Listeners\User;

use Createdu\Events\User\Auth\UserHasRegistered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyAdmins
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
        //
    }
}
