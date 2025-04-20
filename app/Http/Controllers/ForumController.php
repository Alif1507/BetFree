<?php

namespace App\Http\Controllers;

use App\Http\Resources\forumResource;
use App\Models\Forum;
use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginated = Forum::with("user")->latest()->paginate(6);
        return Inertia::render("Forum", [
            'forums' => forumResource::collection($paginated)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                "judul" => "required|string",
                "deskripsi" => "required|string",
                "body" => "required|string"
            ],
            [
                'judul.required' => 'Judul wajib diisi.',
                'deskripsi.required' => 'Deskripsi tidak boleh kosong.',
                'body.required' => 'Isi pertanyaan atau cerita tidak boleh kosong.',
            ]
        );

        $data['user_id'] = auth()->id();

        Forum::create($data);

        return to_route('forum.index')->with("message", "Forum Berhasil dibuat");
    }

    /**
     * Display the specified resource.
     */
    public function show(Forum $forum)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $data = Forum::findOrfail($id);

        return Inertia::render("forum/create", [
            "dataa" => new forumResource($data)
        ]);

        // Gate::authorize("update", $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Forum $forum)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Forum $forum)
    {
        //
    }
}
