<?php
namespace App\Policies;

use App\Models\{CommunityComment, User};

class CommunityCommentPolicy
{
  public function update(User $user, CommunityComment $comment): bool {
    return $comment->user_id === $user->id
      || $comment->post->community->owner_id === $user->id
      || $comment->post->community->roleOf($user) === 'moderator';
  }
  public function delete(User $user, CommunityComment $comment): bool {
    return $this->update($user, $comment);
  }
}
