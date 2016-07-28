<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_general_ci';

            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->text('body');
            $table->string('user_agent');
            $table->unsignedBigInteger('parent');
            
            $table->unsignedBigInteger('commentable_id')->index();
            $table->string('commentable_type', 191)->index();
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
        Schema::drop('comments');
    }
}
