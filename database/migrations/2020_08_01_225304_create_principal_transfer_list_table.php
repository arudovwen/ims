<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrincipalTransferListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('principal_transfer_list', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sgl');
            $table->string('present_posting');
            $table->string('zone_1');
            $table->string('proposed_posting');
            $table->string('lga_2');
            $table->string('zone_2');
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
        Schema::dropIfExists('principal_transfer_list');
    }
}
