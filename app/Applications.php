<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Applications extends Model
{
 
 
    protected $fillable = ['group','response','status','phase','ref','payment','payment_status','price',];
}
