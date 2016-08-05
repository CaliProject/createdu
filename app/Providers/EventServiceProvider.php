<?php

namespace Createdu\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider {

    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'Createdu\Events\User\Auth\UserHasRegistered'  => [
            'Createdu\Listeners\User\EmailRegisterConfirmation',
            'Createdu\Listeners\User\NotifySlack'
        ],
        'Createdu\Events\User\Auth\UserHasLoggedIn'    => [
//            'Createdu\Listeners\User\EmailConfirmation@handleLoggedIn',
        ],
        'Createdu\Events\User\Auth\UserHasReset'       => [
            'Createdu\Listeners\User\EmailPasswordResetConfirmation',
        ],
        'Createdu\Events\User\Auth\PasswordHasChanged' => [

        ],
        'Createdu\Events\User\CreditHasChanged'        => [

        ],
        'Createdu\Events\User\ExperienceHasChanged'    => [

        ],
        'Createdu\Events\User\LeveledUp'               => [

        ],
        'Createdu\Events\AnnouncementHasMade'          => [

        ],
        'Createdu\Events\NewMessage'                   => [
            'Createdu\Listeners\User\StoreMessage'
        ]
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}
