<?php

namespace App\Providers;

use App\Models\Forum;
use App\Models\Pemulihan;
use App\Policies\forumPolicy;
use App\Policies\pemulihanPolicy;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    protected $policies = [
        Pemulihan::class => pemulihanPolicy::class,
        Forum::class => forumPolicy::class
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
