<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('tel')->unique(); // Hashed telephone number
            $table->string('password');
            $table->text('social_info')->nullable();
            $table->unsignedInteger('experience');
            $table->unsignedBigInteger('credit');
            $table->boolean('active')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('user_metas', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->string('key')->index();
            $table->longText('value');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->primary(['user_id', 'key']);
        });

        Schema::create('user_avatars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->index();
            $table->string('src')->nullable()->index();
            // 0: Local, 1: Remote
            $table->unsignedTinyInteger('type');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_avatars');
        Schema::drop('user_metas');
        Schema::drop('users');
    }
}
