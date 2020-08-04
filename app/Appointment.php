<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable =['name','email','phone_no','organization','type',
    'reason_for_visit','whom_to_see','department','time','date','status','detail'];
}
