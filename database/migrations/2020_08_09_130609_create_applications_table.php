<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('group');
            $table->string('phase');
            $table->string('ref');
            $table->boolean('payment');
            $table->string('payment_status');
            $table->string('price');
            $table->longText('response');
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
        Schema::dropIfExists('applications');
    }
}
