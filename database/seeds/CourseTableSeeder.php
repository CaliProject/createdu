<?php

use Illuminate\Database\Seeder;

class CourseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = factory(\Createdu\Course::class)->times(20)->make();
        \Createdu\Course::insert($courses->toArray());
//        factory(\Createdu\Course::class)->times(20)->create();
    }
}
