<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_general_ci';

            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('title', 191)->index();
            $table->longText('body');
            // 0: draft, 1: to be reviewed, 2: published
            $table->unsignedTinyInteger('status');
            $table->boolean('sticky');
            $table->boolean('essential');
            $table->unsignedBigInteger('thumbnail')->nullable();

            $table->timestamp('published_at');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('thumbnail')->references('id')->on('media');
        });

        Schema::create('post_metas', function (Blueprint $table) {
            $table->unsignedBigInteger('post_id');
            $table->string('key');
            $table->longText('value');
            $table->timestamps();

            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->primary(['post_id', 'key']);
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('post_metas');
        Schema::drop('posts');
    }
}
