<?php

namespace App\Providers;

use App\Models\community;
use App\Models\CommunityComment;
use App\Models\CommunityPost;
use App\Models\Forum;
use App\Models\Pemulihan;
use App\Policies\CommunityCommentPolicy;
use App\Policies\CommunityPolicy;
use App\Policies\CommunityPostPolicy;
use App\Policies\forumPolicy;
use App\Policies\pemulihanPolicy;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    protected $policies = [
        Pemulihan::class => pemulihanPolicy::class,
        Forum::class => forumPolicy::class,
        community::class => CommunityPolicy::class,
        CommunityPost::class => CommunityPostPolicy::class,
        CommunityComment::class => CommunityCommentPolicy::class,

    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
