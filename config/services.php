<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model'  => Createdu\User::class,
        'key'    => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'google' => [
        'client_id'     => env('GOOGLE_ID'),
        'client_secret' => env('GOOGLE_SECRET'),
        'redirect'      => env('GOOGLE_REDIRECT'),
    ],

    'facebook' => [
        'client_id'     => env('FACEBOOK_ID'),
        'client_secret' => env('FACEBOOK_SECRET'),
        'redirect'      => env('FACEBOOK_REDIRECT'),
    ],

    'qq' => [
        'client_id'     => env('QQ_ID'),
        'client_secret' => env('QQ_SECRET'),
        'redirect'      => env('QQ_REDIRECT'),
    ],

    'weibo' => [
        'client_id'     => env('WEIBO_ID'),
        'client_secret' => env('WEIBO_SECRET'),
        'redirect'      => env('WEIBO_REDIRECT'),
    ],

    'weixin' => [
        'client_id'     => env('WEIXIN_ID'),
        'client_secret' => env('WEIXIN_SECRET'),
        'redirect'      => env('WEIXIN_REDIRECT'),
    ],
];
