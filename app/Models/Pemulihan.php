<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pemulihan extends Model
{
   protected $fillable = [
        "tujuan",
        "hari",
        "catatan"
   ];
}
