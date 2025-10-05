<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class community extends Model
{
    protected $fillable = [
        'owner_id',
        'name',
        'slug',
        'description',
        'is_private',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'community_users')
            ->using(CommunityUser::class)
            ->withPivot('role')
            ->withTimestamps();
    }

    public function posts(): HasMany
    {
        return $this->hasMany(CommunityPost::class);
    }

    public function isMember(User $user): bool
    {
        return $this->members()->where('user_id', $user->id)->exists();
    }

    public function roleOf(User $user): ?string
    {
        $member = $this->members()->where('user_id', $user->id)->first();

        return $member && $member->pivot ? ($member->pivot->role ?? null) : null;
    }
}

