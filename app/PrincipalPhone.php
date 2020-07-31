<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrincipalPhone extends Model
{
    protected $table = 'principals_phone';
    protected $fillable = ['name','sect','lga','present_posting','zone','phone_no','remarks'];
}
