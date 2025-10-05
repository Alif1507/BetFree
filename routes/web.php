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
use App\Http\Controllers\{
  CommunityController, CommunityMembershipController,
  CommunityPostController, CommunityCommentController
};

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


Route::middleware(['auth','verified'])->group(function () {

  Route::get('/communities', [CommunityController::class,'index'])->name('communities.index');
  Route::post('/communities', [CommunityController::class,'store'])->name('communities.store');

  Route::prefix('/c/{community:slug}')->group(function () {
    Route::get('/', [CommunityController::class,'show'])->name('communities.show');
    Route::patch('/', [CommunityController::class,'update'])->name('communities.update');
    Route::delete('/', [CommunityController::class,'destroy'])->name('communities.destroy');

    Route::post('/join',  [CommunityMembershipController::class,'join'])->name('communities.join');
    Route::post('/leave', [CommunityMembershipController::class,'leave'])->name('communities.leave');


    Route::post('/posts', [CommunityPostController::class,'store'])->name('communities.posts.store');
    Route::patch('/posts/{post}', [CommunityPostController::class,'update'])->name('communities.posts.update');
    Route::delete('/posts/{post}', [CommunityPostController::class,'destroy'])->name('communities.posts.destroy');


    Route::post('/posts/{post}/comments', [CommunityCommentController::class,'store'])->name('communities.posts.comments.store');
    Route::delete('/posts/{post}/comments/{comment}', [CommunityCommentController::class,'destroy'])->name('communities.posts.comments.destroy');
  });

});

require __DIR__.'/auth.php';
