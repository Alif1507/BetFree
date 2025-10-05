<?php
namespace App\Policies;

use App\Models\{CommunityPost, User, community};

class CommunityPostPolicy
{
  public function create(User $user, community $community): bool {
    return $community->isMember($user);
  }

  public function update(User $user, CommunityPost $post): bool {
    return $post->user_id === $user->id
      || $post->community->owner_id === $user->id
      || $post->community->roleOf($user) === 'moderator';
  }

  public function delete(User $user, CommunityPost $post): bool {
    return $this->update($user, $post);
  }
}
