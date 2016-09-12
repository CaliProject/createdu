<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/
//
$factory->define(Createdu\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

//$factory->define(Createdu\User::class, function () {
//    $locale = app()->getLocale();
//    $faker = Faker\Factory::create($locale == 'zh' ? 'zh_CN' : 'en_US');
//
//    return [
//        'name' => $faker->name,
//        'email' => $faker->email,
//        'password' => bcrypt(str_random(10)),
//        'remember_token' => str_random(10),
//    ];
//});

$factory->define(Createdu\Course::class, function (Faker\Generator $faker) {
    return [
        'user_id'     => 1,
        'title'       => $faker->sentence,
        'description' => $faker->paragraph(5),
        'category_id' => 1,
        'created_at'  => \Carbon\Carbon::now()->toDateTimeString(),
        'updated_at'  => \Carbon\Carbon::now()->toDateTimeString(),
    ];
});

$factory->define(Createdu\Post::class, function (Faker\Generator $faker) {
    return [
        'user_id' => 1,
        'title'   => $faker->sentence,
        'body'    => $faker->paragraph,
        'created_at'  => \Carbon\Carbon::now()->toDateTimeString(),
        'updated_at'  => \Carbon\Carbon::now()->toDateTimeString(),
    ];
});