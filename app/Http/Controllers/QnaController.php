<?php

namespace App\Http\Controllers;

use App\Models\qna;
use Illuminate\Http\Request;
use Inertia\Inertia;


class QnaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Forms");
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
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'answers' => 'required|array',
            'correct_count' => 'required|integer',
            'wrong_count' => 'required|integer',
        ]);

        $qna = Qna::create($data);

        return response()->json([
            'success' => true,
            'data' => $qna
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(qna $qna)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(qna $qna)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, qna $qna)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(qna $qna)
    {
        //
    }
}
