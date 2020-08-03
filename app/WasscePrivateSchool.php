<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WasscePrivateSchool extends Model
{
 
    protected $table = 'wassce_private_schools';
    protected $fillable = ['centre_no','name_of_school','entry_figures','type'];
}
