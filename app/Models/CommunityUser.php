<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CommunityUser extends Pivot
{
    protected $table = 'community_users';

    protected $fillable = [
        'community_id',
        'user_id',
        'role',
    ];
}

