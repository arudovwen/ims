<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApprovedPrivateSchool extends Model
{
    protected $table = 'approved_private_schools';
    protected $fillable = ['name_of_proprietor','location','year_of_approval','phone_no','lga'];
}
