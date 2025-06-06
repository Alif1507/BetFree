<?php

use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\PemulihanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QnaController;
use App\Http\Resources\forumResource;
use App\Models\Forum;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    $paginate = Forum::where("user_id", auth()->id())->latest()->paginate(6);
    return Inertia::render('Dashboard', [
        'forums' => forumResource::collection($paginate)
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::resource("/pemulihan", PemulihanController::class);
    Route::resource("/qna", QnaController::class);
    Route::get('/chatbot', [ChatbotController::class, 'index']);
    Route::post('/chatbot', [ChatbotController::class, 'store']);

    Route::get("/forum", [ForumController::class, "index"])->name("forum.index");
    Route::post("/forum", [ForumController::class, "store"])->name("forum.store");
    Route::put("/forum/{id}", [ForumController::class, "update"])->name("forum.update");
    Route::get("/forum/{id}/edit", [ForumController::class, "edit"])->name("forum.edit");
    Route::delete("/forum/{id}", [ForumController::class, "destroy"])->name("forum.destroy");
});

require __DIR__.'/auth.php';
