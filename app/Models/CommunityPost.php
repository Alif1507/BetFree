<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CommunityPost extends Model
{
    protected $fillable = [
        "community_id",
        "user_id",
        "title",
        "body"
    ];

    public function community(): BelongsTo
    {
        return $this->belongsTo(community::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function comments(): HasMany
    {
        return $this->hasMany(CommunityComment::class,'post_id');
    }


}
