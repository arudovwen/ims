<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrincipalTransfer extends Model

{
    protected $table = 'principal_transfer_list';
    protected $fillable = ['name','sgl','present_posting','zone_1','proposed_posting','lga_2','zone_2','remarks'];
}