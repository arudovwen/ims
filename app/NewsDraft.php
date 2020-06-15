<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsDraft extends Model
{
    protected $table = 'news_draft';
    protected $fillable = ['subject','author','content','featured','cover_image','category','status'];
}
