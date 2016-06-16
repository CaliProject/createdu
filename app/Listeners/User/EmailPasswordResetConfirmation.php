<?php

namespace Createdu\Listeners\User;

use Createdu\Events\User\Auth\UserHasReset;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class EmailPasswordResetConfirmation
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
     * @param  UserHasReset  $event
     * @return void
     */
    public function handle(UserHasReset $event)
    {
        //
    }
}
