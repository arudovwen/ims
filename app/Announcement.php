<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    
    protected $table = 'announcement';
    protected $fillable = ['subject','content','cover_image','status'];
}
