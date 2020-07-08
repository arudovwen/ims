<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staffs', function (Blueprint $table) {
            // $table->id();
            $table->string('s/n')->nullable();
            $table->string('imssbn')->nullable();
            $table->string('surname')->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('dob')->nullable();
            $table->string('doe')->nullable();
            $table->string('current_rank')->nullable();
            $table->string('cgl')->nullable();
            $table->string('department')->nullable();
            $table->string('bank_acc')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bvn')->nullable();
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
        Schema::dropIfExists('staffs');
    }
}
