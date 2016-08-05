<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = factory(Createdu\Post::class)->times(20)->make();
        \Createdu\Post::insert($posts->toArray());
//        factory(\Createdu\Post::class)->times(20)->create();
    }
}
