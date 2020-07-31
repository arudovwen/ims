<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrincipalTransfer extends Model
{
    protected $table = 'principal_transfer_list';
    protected $fillable = ['sgl','present_posting','zone'];
}
