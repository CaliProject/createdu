<?php

namespace Createdu\Providers;

use Createdu\Course;
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
        $this->bindAdminCourses();
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
    
    public function bindAdminCourses()
    {
        return view()->composer('admin.courses.index', function ($view) {
            $courses = Course::paginate();
            
            return $view->with(compact('courses'));
        });
    }
}
