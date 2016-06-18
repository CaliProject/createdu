<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->text('referer');
            $table->string('uri')->index();
            $table->string('browser');
            $table->string('platform');
            $table->string('device');
            $table->string('robot')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->boolean('mobile');
            $table->ipAddress('ip');
            $table->string('country')->index();
            $table->string('city')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('statistics');
    }
}
