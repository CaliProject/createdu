<?php

class Router {

    /*
     |------------------------------------------------------------
     | Router Wrapper Class
     | 主路由分配 类
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */

    /**
     * Auth & Register Related Routes.
     * 验证 & 注册相关路由
     *
     * @return static
     * @author Cali
     */
    public static function auth()
    {
        // Authentication Routes...
        Route::get('signin', 'Auth\AuthController@showLoginForm')->name('sign-in');
        Route::post('signin', 'Auth\AuthController@login');
        Route::get('signout', 'Auth\AuthController@logout')->name('exit');

        // Password Reset Routes...
        Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm')->name('reset');
        Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail')->name('reset-password');
        Route::post('password/reset', 'Auth\PasswordController@reset');

        // Email Confirmation...
        Route::get('auth/confirm', 'Auth\AuthController@confirmRegistration')->name('confirm-email');

        if (site('registrationOn')) {
            // Registration Routes...
            Route::get('register', 'Auth\AuthController@showRegistrationForm')->name('sign-up');
            Route::post('register', 'Auth\AuthController@register');

            // Third Party Authentications...
            Route::get('auth/{service}', 'Auth\AuthController@socialLogin')->name('social');
            Route::post('auth', 'Auth\AuthController@connect')->name('social-connect');
        }
        Route::get('auth/{service}/callback', 'Auth\AuthController@callback')->name('social-callback');

        return new static;
    }

    /**
     * Language Routes.
     * 语言切换路由
     *
     * @return static
     * @author Cali
     */
    public static function language()
    {
        Route::get('~{language}', 'Dashboard\HomeController@changeLanguage');

        return new static;
    }

    /**
     * Get the robots.txt file dynamically.
     *
     * @return static
     * @author Cali
     */
    public static function robots()
    {
        Route::get('robots.txt', 'Dashboard\HomeController@generateRobotsTxt');

        return new static;
    }

    /**
     * User related routes.
     *
     * @return static
     * @author Cali
     */
    public static function users()
    {
        Route::group([
            'namespace' => 'User',
            'as'        => 'users.',
            'domain'    => 'avatars.' . str_replace('http://', '', str_replace('https://', '', env('APP_URL')))
        ], function () {
            Route::get('u/{user?}', 'ProfileController@getAvatar')->name('avatar');
        });

        return new static;
    }
}