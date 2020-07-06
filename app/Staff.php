<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $table  = 'staffs';
    protected $fillable = ['imssbn'	,'surname',	'first_name',	'middle_name',	'dob',	'doe',	'current_rank',	'cgl',	'department'];
}
