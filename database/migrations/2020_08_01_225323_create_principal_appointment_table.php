<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrincipalAppointmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('principal_appointment', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sgl');
            $table->string('proposed_posting');
            $table->string('st');        
            $table->string('lga_2');
            $table->string('zone_2');
            $table->string('remarks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('principal_appointment');
    }
}
