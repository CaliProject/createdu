<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAUserHasAGender()
    {
        $user = json_decode('{"gender": "male"}');

        $this->assertEquals('male', $user->gender);
    }
}
