<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    public function index() {
        return Inertia::render("Chatbot");
    }

    public function store(Request $request): JsonResponse
{
    $prompt = $request->input('prompt');
    $apiKey = env('GEMINI_API_KEY');
    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$apiKey}";

    $body = [
        "contents" => [
            [
                "role" => "user",
                "parts" => [
                    ["text" => $prompt]
                ]
            ]
        ]
    ];

    $response = Http::post($url, $body);

    if ($response->failed()) {
        Log::error('Gemini API Error', [
            'status' => $response->status(),
            'body' => $response->body(),
        ]);

        return response()->json([
            'reply' => 'Maaf, Bibot sedang tidak dapat merespon.'
        ]);
    }

    $reply = $response->json('candidates.0.content.parts.0.text') ?? 'Bibot tidak bisa menjawab saat ini.';

    return response()->json([
        'reply' => $reply
    ]);
}
}
