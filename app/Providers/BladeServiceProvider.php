<?php

namespace Createdu\Providers;

use Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerUrlDirective();
        $this->registerRouteDirective();
        $this->registerSiteDirective();
        $this->registerAuthDirectives();
        $this->registerStatDirective();
    }

    /**
     * Register @url(...).
     *
     * @see url()
     * @author Cali
     */
    private function registerUrlDirective()
    {
        Blade::directive('url', function ($expression) {
            return "<?php echo url{$expression} ?>";
        });
    }

    /**
     * Register @route(...).
     *
     * @see route()
     * @author Cali
     */
    private function registerRouteDirective()
    {
        Blade::directive('route', function ($expression) {
            return "<?php echo route{$expression} ?>";
        });
    }
    
    /**
     * Register @site(...).
     *
     * @see \Createdu\Library\Facades\Site
     * @author Cali
     */
    private function registerSiteDirective()
    {
        Blade::directive('site', function ($expression) {
            return "<?php echo Site::callByExpression{$expression} ?>";
        });
    }

    /**
     * Register @check and @guest for Auth Facade.
     *
     * @author Cali
     */
    private function registerAuthDirectives()
    {
        Blade::directive('check', function () {
            return "<?php if(auth()->check()): ?>";
        });
        Blade::directive('endcheck', function () {
            return "<?php endif; ?>";
        });
        Blade::directive('guest', function () {
            return "<?php if(auth()->guest()): ?>";
        });
        Blade::directive('endguest', function () {
            return "<?php endif; ?>";
        });
    }

    /**
     * Register @stat for Stat Facade.
     *
     * @author Cali
     */
    protected function registerStatDirective()
    {
        Blade::directive('stat', function ($exp) {
            return "<?php echo Stat::callByExpression{$exp} ?>";
        });
    }
}
