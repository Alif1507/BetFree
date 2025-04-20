<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pemulihan extends Model
{
   protected $fillable = [
        "tujuan",
        "hari",
        "catatan",
        "user_id"
   ];

   public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
