<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrincipalAppointment extends Model
{
   

    protected $table = 'principal_appointment';
    protected $fillable = ['name','sgl','proposed_posting','st','lga_2','zone_2','remarks'];
}
