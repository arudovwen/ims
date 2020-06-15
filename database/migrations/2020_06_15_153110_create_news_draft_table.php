<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsDraftTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_draft', function (Blueprint $table) {
            $table->id();
            $table->string('subject')->nullable();
            $table->string('author')->nullable();
            $table->text('content')->nullable();
            $table->boolean('featured')->nullable();
            $table->string('category')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('status');
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
        Schema::dropIfExists('news_draft');
    }
}
