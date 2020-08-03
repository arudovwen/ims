<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWaecCandidatesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('waec_candidates_tables', function (Blueprint $table) {
           
            $table->id();
            $table->string('name');
            $table->string('present_posting');
            $table->string('sect');
            $table->string('lga');
            $table->string('zone');
            $table->string('phone_no');
            $table->string('remarks');
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
        Schema::dropIfExists('waec_candidates_tables');
    }
}
