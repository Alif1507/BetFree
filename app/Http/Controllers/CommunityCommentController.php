<?php
namespace App\Http\Controllers;

use App\Models\{Community, CommunityPost, CommunityComment};
use Illuminate\Http\Request;

class CommunityCommentController extends Controller
{
  public function store(Request $req, Community $community, CommunityPost $post) {
    // hanya member komunitas yang boleh komentar
    abort_unless($community->isMember($req->user()), 403);
    $data = $req->validate(['body' => ['required','string','max:5000']]);
    $post->comments()->create([
      'user_id' => $req->user()->id,
      'body' => $data['body'],
    ]);
    return back()->with('message','Komentar ditambahkan');
  }

  public function destroy(Community $community, CommunityPost $post, CommunityComment $comment) {
    $this->authorize('delete', $comment);
    $comment->delete();
    return back()->with('message','Komentar dihapus');
  }
}