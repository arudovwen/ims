<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormTemplate extends Model
{
    protected $table = 'form_templates';
    protected $fillable = ['title','group','template','options','phase'];
}
