<?php

namespace Createdu\Providers;

use Createdu\Course;
use Createdu\Post;
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
        $this->bindAdminPosts();
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

    /**
     * 绑定后台课程页面的属性数据
     *
     * @return array
     */
    public function bindAdminCourses()
    {
        return view()->composer('admin.courses.index', function ($view) {
            $courses = Course::paginate();
            
            return $view->with(compact('courses'));
        });
    }

    /**
     * 绑定后台文章页面的属性数据
     *
     * @return array
     */
    public function bindAdminPosts()
    {
        return view()->composer('admin.posts.index', function ($view) {
            $posts = Post::paginate();

            return $view->with(compact('posts'));
        });
    }
}
