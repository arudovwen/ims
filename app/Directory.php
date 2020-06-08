<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Directory extends Model
{
    //

    protected $table = 'directories';
    protected $fillable = ['name','address','phone_no','email','level','lga','accreditation','ownership','type','sector'];
}
