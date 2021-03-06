<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group([
    'domain' => str_replace('https://', '', str_replace('http://', '', config('app.url')))
], function () {
    Router::auth()
        ->language()
        ->robots()
        ->users();

    Router::home();
});

Router::admins();