<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApplicationGroup extends Model
{
    protected $table = 'application_groups';
    protected $fillable = ['title','description','purpose','phases'];
}
