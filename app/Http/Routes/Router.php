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
     * Home Related Routes.
     *
     * @return static
     * @author Cali
     */
    public static function home()
    {
        Route::get('/', 'HomeController@index')->name('home');

        return new static;
    }

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
            Route::get('signup', 'Auth\AuthController@showRegistrationForm')->name('sign-up');
            Route::post('signup', 'Auth\AuthController@register');

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
        Route::get('~!{language}', 'Dashboard\HomeController@changeLanguage');

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
            'namespace' => "User",
            'as'        => 'users'
        ], function () {
            Route::post('checkin', 'ProfileController@checkIn');
        });

        Route::group([
            'namespace' => 'User',
            'as'        => 'users.',
            'domain'    => 'avatars.' . str_replace('http://', '', str_replace('https://', '', config('app.url')))
        ], function () {
            Route::get('u/{user?}', 'ProfileController@getAvatar')->name('avatar');
        });

        return new static;
    }

    /**
     * Admin related routes.
     *
     * @return static
     * @author Cali
     */
    public static function admins()
    {
        Route::group([
            'namespace' => 'Admin',
            'as'        => 'admin.',
            'domain'    => 'admin.' . str_replace('http://', '', str_replace('https://', '', config('app.url')))
        ], function () {
            Route::get('{section?}', 'AdminController@show')->name('index');
            Route::patch('save/settings', 'AdminController@changeSetting')->name('change-settings');
            Route::patch('save/settings/color', 'AdminController@changeThemeColor')->name('change-theme-color');

            // Users management.
            Route::group([
                'prefix' => 'users',
                'as'     => 'users.'
            ], function () {
                Route::get('search/{keyword}', 'UsersController@searchUsers')->name('search');
                Route::get('invitations', 'UsersController@showInvitations')->name('invitations');
                Route::delete('{user?}', 'UsersController@deleteUser')->name('delete');
                Route::patch('bulk', 'UsersController@bulkAction')->name('bulk');
                Route::post('invitations', 'UsersController@generateInvitationCode');

                Route::group(['prefix' => 'edit', 'as' => 'edit.'], function () {
                    Route::get('{user}', 'UsersController@showUserProfile')->name('profile');
                    Route::patch('{user}', 'UsersController@updateUserProfile')->name('update');
                    Route::patch('{user}/password', 'UsersController@updateUserPassword')->name('password');
                });

                Route::group(['prefix' => 'profile', 'as' => 'profile.'], function () {
                    Route::get('/', 'UsersController@showProfile')->name('index');

                    Route::patch('save', 'UsersController@saveProfile')->name('save');
                    Route::patch('password', 'UsersController@updatePassword')->name('update-password');
                    Route::post('oauth/{service}', 'UsersController@bindOrUnbindOAuth')->name('oauth');
                    Route::get('oauth/{service}', 'UsersController@redirectToService');
                    Route::post('avatar', 'UsersController@uploadAvatar')->name('upload-avatar');
                    Route::post('resize', 'UsersController@resizeAvatar')->name('resize-avatar');
                });
            });
        });

        return new static;
    }
}