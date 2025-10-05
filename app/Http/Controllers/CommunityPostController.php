<?php
namespace App\Http\Controllers;

use App\Models\{Community, CommunityPost};
use Illuminate\Http\Request;

class CommunityPostController extends Controller
{
  public function store(Request $req, Community $community) {
    $this->authorize('create', [CommunityPost::class, $community]);
    $data = $req->validate([
      'title' => ['required','string','max:150'],
      'body'  => ['required','string','max:10000'],
    ]);
    $community->posts()->create([
      'user_id' => $req->user()->id,
      'title' => $data['title'],
      'body'  => $data['body'],
    ]);
    return back()->with('message','Postingan dibuat');
  }

  public function update(Request $req, Community $community, CommunityPost $post) {
    $this->authorize('update', $post);
    $data = $req->validate([
      'title' => ['required','string','max:150'],
      'body'  => ['required','string','max:10000'],
    ]);
    $post->update($data);
    return back()->with('message','Postingan diperbarui');
  }

  public function destroy(Community $community, CommunityPost $post) {
    $this->authorize('delete', $post);
    $post->delete();
    return back()->with('message','Postingan dihapus');
  }
}
