<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WasscePrivateSchool extends Model
{
 
    protected $table = 'waec_private_schools';
    protected $fillable = ['centre_no','name_of_school','name_of_principal','phone_no'];
}
