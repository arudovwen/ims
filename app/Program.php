<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table  = 'programs';
    protected $fillable = ['name','about','cover_image'];
}
