<?php
namespace App\Http\Controllers;

use App\Models\Community;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CommunityController extends Controller
{
  public function index() {
    $communities = Community::withCount('members', 'posts')->latest()->paginate(12);

    return Inertia::render('Communities/Index', ['communities' => $communities]);
  }

  public function store(Request $req) {
    $data = $req->validate([
      'name' => ['required', 'string', 'max:80', 'unique:communities,name'],
      'description' => ['nullable', 'string', 'max:1000'],
      'is_private' => ['boolean'],
    ]);

    $community = Community::create([
      'owner_id' => $req->user()->id,
      'name' => $data['name'],
      'slug' => Str::slug($data['name']) . '-' . Str::random(6),
      'description' => $data['description'] ?? null,
      'is_private' => $data['is_private'] ?? false,
    ]);

    $community->members()->attach($req->user()->id, ['role' => 'owner']);

    return redirect()->route('communities.show', $community->slug)->with('message', 'Komunitas dibuat');
  }

  public function show(Community $community) {
    $this->authorize('view', $community);

    $user = auth()->user();

    $posts = $community->posts()
      ->with([
        'author:id,name',
        'comments' => fn ($query) => $query->latest()->with('author:id,name'),
      ])
      ->latest()
      ->paginate(10)
      ->through(function ($post) use ($user) {
        return [
          'id' => $post->id,
          'title' => $post->title,
          'body' => $post->body,
          'created_at' => $post->created_at?->toIso8601String(),
          'created_at_human' => $post->created_at?->diffForHumans(),
          'author' => $post->author?->only(['id', 'name']),
          'comments' => $post->comments->map(function ($comment) use ($user) {
            return [
              'id' => $comment->id,
              'body' => $comment->body,
              'created_at' => $comment->created_at?->toIso8601String(),
              'created_at_human' => $comment->created_at?->diffForHumans(),
              'author' => $comment->author?->only(['id', 'name']),
              'can_delete' => $user ? $user->can('delete', $comment) : false,
            ];
          })->values(),
        ];
      });

    return Inertia::render('Communities/Show', [
      'community' => $community->only(['id', 'name', 'slug', 'description', 'is_private']),
      'posts' => $posts,
      'membership' => $user ? $community->roleOf($user) : null,
    ]);
  }

  public function update(Request $req, Community $community) {
    $this->authorize('update', $community);

    $data = $req->validate([
      'description' => ['nullable', 'string', 'max:1000'],
      'is_private' => ['boolean'],
    ]);

    $community->update($data);

    return back()->with('message', 'Komunitas diperbarui');
  }

  public function destroy(Community $community) {
    $this->authorize('delete', $community);

    $community->delete();

    return redirect()->route('communities.index')->with('message', 'Komunitas dihapus');
  }
}

