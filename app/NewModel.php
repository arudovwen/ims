<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewModel extends Model
{
    protected $table = 'news';
    protected $fillable = ['subject','author','content','featured','cover_image','category','status'];
}
