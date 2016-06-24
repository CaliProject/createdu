<?php

namespace Createdu\Providers;

use Createdu\User;
use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->bindAdminUsers();
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bind variable to admin users page.
     *
     * @return array
     */
    public function bindAdminUsers()
    {
        return view()->composer('admin.users.index', function ($view) {
            $users = User::paginate();

            return $view->with(compact('users'));
        });
    }
}
