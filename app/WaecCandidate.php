<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WaecCandidate extends Model
{
  
    protected $table = 'waec_candidates_tables';
    protected $fillable = ['sect','lga','present_posting','zone','phone_no','remarks'];
}
