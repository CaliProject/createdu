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
        Route::get('media/{year}/{month}/{user}/{path}', 'HomeController@getMedia');

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
        Route::get('auth/confirm', 'User\ProfileController@confirmRegistration')->name('confirm-email');

        // Registration Routes...
        Route::get('signup', 'Auth\AuthController@showRegistrationForm')->name('sign-up');
        Route::post('signup', 'Auth\AuthController@register');

        if (site('registrationOn')) {
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
            'as'        => 'users.'
        ], function () {
            Route::get('@{name}', 'ProfileController@showProfile')->name('profile');
            Route::post('checkin', 'ProfileController@checkIn')->name('check-in');
            Route::patch('read/notification', 'ProfileController@readNotifications');

            Route::post('get-chat/{user}', 'ConversationsController@getConversations');
            Route::post('chat/{user}', 'ConversationsController@send');
            Route::patch('chat/{user}', 'ConversationsController@readMessages');

            Route::group([
                'prefix' => 'profile',
                'as' => 'profile.'
            ], function () {
                Route::post('avatar', 'ProfileController@uploadAvatar')->name('upload-avatar');
                Route::get('{section?}', 'ProfileController@showSettings')->name('settings');

                Route::group([
                    'prefix' => 'edit'
                ], function () {
                    Route::patch('/', 'ProfileController@updateProfile');
                });

                // Password routes
                Route::group([
                    'prefix' => 'password'
                ], function () {
                    Route::patch('/', 'ProfileController@updatePassword');
                });

                // Privacy routes
                Route::group([
                    'prefix' => 'privacy'
                ], function () {
                    Route::patch('tel', 'ProfileController@sendVerification')->name('tel');
                    Route::post('tel/verify', 'ProfileController@verifyTel')->name('verify-tel');
                    Route::post('email', 'ProfileController@resendLink')->name('email');
                    Route::post('email/verify', 'ProfileController@verifyEmail')->name('verify-email');
                    Route::get('oauth/{service}', 'ProfileController@redirectToService')->name('oauth');
                    Route::post('oauth/{service}', 'ProfileController@bindOrUnbindOAuth');
                });
            });

            Route::group([
                'prefix'    => 'avatars'
            ], function () {
                Route::get('{user?}', 'ProfileController@getAvatar')->name('avatar');
            });
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
            'domain'    => 'admin.' . root_domain()
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
                    Route::post('avatar', 'UsersController@uploadAvatar')->name('upload-avatar');
                    Route::post('resize', 'UsersController@resizeAvatar')->name('resize-avatar');
                });
            });
            Route::group([
                'prefix' => 'courses',
                'as'     => 'courses.'
            ], function () {
                Route::get('search/{keyword}', 'CoursesController@searchCourses')->name('search');
                Route::patch('bulk', 'CoursesController@bulkAction')->name('bulk');
                Route::patch('trash/{course?}', 'CoursesController@trashCourse')->name('trash');
                Route::patch('revert/{course?}', 'CoursesController@revertCourse')->name('revert');
                Route::delete('{course?}', 'CoursesController@deleteCourse')->name('delete');

                Route::get('add', 'CoursesController@showAddCourse')->name('add');
                Route::get('{status?}', 'CoursesController@showCourse')->name('index');
                Route::get('edit/{course}', 'CoursesController@showEditCourse')->name('edit');
                Route::post('add', 'CoursesController@addCourse');
                Route::patch('edit/{course}', 'CoursesController@updateCourse');
                
                Route::group([
                    'prefix' => 'api',
                    'as'     => 'api.',
                ], function () {
                    Route::get('{course?}', 'CoursesController@getCourse')->name('get');
                });
                
            });
            Route::group([
                'prefix' => 'posts',
                'as'     => 'posts.'
            ], function () {
                Route::get('search/{keyword}', 'PostsController@searchPosts')->name('search');
                Route::patch('bulk', 'PostsController@bulkAction')->name('bulk');
                Route::patch('stick/{post?}', 'PostsController@stickPost')->name('stick');
                Route::patch('essencify/{post?}', 'PostsController@essencifyPost')->name('essencify');
                Route::delete('{post?}', 'PostsController@deletePost')->name('delete');

                Route::get('add', 'PostsController@showAddPost')->name('add');
                Route::get('{post}', 'PostsController@showPost')->name('index');
                Route::post('add', 'PostsController@addPost');
                Route::patch('{post}', 'PostsController@updatePost');
            });
            Route::group([
                'prefix' => 'centers',
                'as'     => 'centers.'
            ], function () {
                Route::get('factory', 'CenterController@showFactory')->name('factory');
                Route::post('factory', 'CenterController@createFactory');
            });
            Route::group([
                'prefix' => 'settings',
                'as'     => 'settings.'
            ], function () {
                Route::get('general', 'SettingController@showGeneral')->name('general');
                Route::post('general/basics', 'SettingController@saveGeneralBasicsSetting')->name('save-general-basics');
                Route::post('general/SEO', 'SettingController@saveGeneralSEOSetting')->name('save-general-SEO');
                Route::get('services', 'SettingController@showServices')->name('services');
                Route::post('oauth/{service?}', 'SettingController@saveOauth')->name('save-oauth');
                Route::post('smtp', 'SettingController@saveSMTP')->name('save-smtp');
                Route::post('smtp/test', 'SettingController@sendTestSMTP')->name('send-test');
                Route::post('push', 'SettingController@savePush')->name('save-push');

                Route::group([
                    'prefix' => 'advanced',
                    'as'     => 'advanced.'
                ], function () {
                    Route::get('index', 'SettingController@showAdvancedIndex')->name('index');
                    Route::post('develop', 'SettingController@saveDevelop')->name('save-develop');
                });
            });
        });

        return new static;
    }
}