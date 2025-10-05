<?php
namespace App\Http\Controllers;

use App\Models\Community;
use Illuminate\Http\Request;

class CommunityMembershipController extends Controller
{
  public function join(Request $req, Community $community) {
    $this->authorize('join', $community);
    if (!$community->isMember($req->user())) {
      $community->members()->attach($req->user()->id, ['role' => 'member']);
    }
    return back()->with('message','Bergabung ke komunitas');
  }

  public function leave(Request $req, Community $community) {
    // owner tidak boleh leave (harus transfer owner)
    if ($community->owner_id === $req->user()->id) {
      return back()->with('message','Owner tidak bisa keluar, transfer kepemilikan dulu.');
    }
    $community->members()->detach($req->user()->id);
    return redirect()->route('communities.index')->with('message','Keluar dari komunitas');
  }
}
