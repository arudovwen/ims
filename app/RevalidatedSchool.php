<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RevalidatedSchool extends Model
{
    protected $table = 'revalidated_schools';
    protected $fillable = ['school','category','details','status'];
}
