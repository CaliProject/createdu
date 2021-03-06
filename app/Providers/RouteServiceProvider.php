<?php

namespace Createdu\Providers;

use Createdu\User;
use Site;
use Crypt;
use Carbon\Carbon;
use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Createdu\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        $this->setTimeLocale();
        $this->adjustLocale();

        parent::boot($router);

        $this->bindModels($router);
    }

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        $this->mapWebRoutes($router);

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    protected function mapWebRoutes(Router $router)
    {
        $router->group([
            'namespace' => $this->namespace, 'middleware' => 'web',
        ], function ($router) {
            require app_path('Http/Routes/entry.php');
        });
    }

    /**
     * Set the Carbon locale.
     *
     * @author Cali
     */
    protected function setTimeLocale()
    {
        Carbon::setLocale(substr($this->app->getLocale(), 0, 2));
    }

    /**
     * Adjust the locale with different browser languages.
     *
     * @author Cali
     */
    private function adjustLocale()
    {
        if (request()->hasCookie('lang')) {
            $this->setLocale(Crypt::decrypt(request()->cookie('lang')));
        } else {
            // TODO: Uncomment when we're ready
//            request()->header('accept-language') ? $this->setLocale(substr(request()->header('accept-language'), 0, 2)) : null;
        }
    }

    /**
     * Switch locale
     *
     * @param $locale
     */
    private function setLocale($locale)
    {
        if (in_array($locale, Site::supportedLocales())) {
            app()->setLocale($locale);
        }
    }

    /**
     * Route models binding.
     *
     * @param $router
     */
    protected function bindModels($router)
    {
        $router->bind('name', function ($value) {
            return User::whereName($value)->firstOrFail();
        });
    }
}
