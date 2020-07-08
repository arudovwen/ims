<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $table  = 'staffs';
    protected $fillable = ['s/n','imssbn'	,'surname',	'first_name',	'middle_name',	'dob',	'doe',	'current_rank',	'cgl',	'department','bank_name','bank_acc','bvn'];
}
