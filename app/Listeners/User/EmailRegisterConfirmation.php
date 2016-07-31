<?php

namespace Createdu\Listeners\User;

use Crypt;
use Mailer;
use Createdu\Events\User\Auth\UserHasRegistered;

class EmailRegisterConfirmation
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
        // Create the token
        $token = Crypt::encrypt($event->user->email);

        try {
            // Send it to the user
            Mailer::subject(trans('emails.confirmation.subject'))
                ->to($event->user->email)
                ->user($event->user)
                ->load('auth.emails.confirm')
                ->with(compact('token'))
                ->send();
        } catch (\Exception $e) {
            /* TODO: Error handler */
        }
    }
}
