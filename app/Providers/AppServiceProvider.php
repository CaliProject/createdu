<?php

namespace Createdu\Providers;

use Createdu\SiteConfiguration;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerSiteSingleton();
    }

    /**
     * Registers the site configuration singleton.
     *
     * @author Cali
     */
    private function registerSiteSingleton()
    {
        $this->app->singleton('Site', function () {
            return new SiteConfiguration;
        });
    }
}
