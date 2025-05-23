<?php

namespace App\Http\Controllers;

use App\Http\Resources\PemulihanResource;
use App\Models\Pemulihan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemulihanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginated = Pemulihan::where("user_id", auth()->id())->latest()->paginate(6);
        return Inertia::render("Pemulihan/index",[
            'pemulihans' => PemulihanResource::collection($paginated)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Pemulihan/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $data = $request->validate([
            "tujuan" => "required|string",
            "hari" => "required|string",
            "catatan" => "required|max:100"
       ],
        [
            "tujuan.required" => "Tujuan tidak boleh kosong",
            "hari.required" => "Hari tidak boleh kosong",
            "catatan.required" => "Catatan tidak boleh kosong",
            "catatan.max" => "Catatan maksimal 100 karakter"
        ]);

        $data["user_id"] = auth()->id();

        Pemulihan::create($data);

        return to_route('pemulihan.index')->with("success", "tujuan created successfully");

    }

    /**
     * Display the specified resource.
     */
    public function show(Pemulihan $pemulihan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pemulihan $pemulihan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pemulihan $pemulihan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pemulihan $pemulihan)
    {
        $pemulihan->delete();

        return to_route("pemulihan.index")->with("message", "Catatan Selesai");
    }
}
