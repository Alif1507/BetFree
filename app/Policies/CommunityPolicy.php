<?php
namespace App\Policies;

use App\Models\{community, User};

class CommunityPolicy
{
  public function view(User $user, community $community): bool {
    return !$community->is_private || $community->isMember($user);
  }

  public function update(User $user, community $community): bool {
    return $community->owner_id === $user->id || $community->roleOf($user) === 'moderator';
  }

  public function delete(User $user, community $community): bool {
    return $community->owner_id === $user->id;
  }

  public function join(User $user, community $community): bool {
    return !$community->is_private; 
  }
}
