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
    try {
        $prompt = $request->input('prompt');
        $apiKey = env('GEMINI_API_KEY');
        $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={$apiKey}";

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

        // Log the full response for debugging
        Log::info('Gemini API response', [
            'status' => $response->status(),
            'body' => $response->body()
        ]);

        if ($response->failed()) {
            return response()->json([
                'reply' => 'Gemini API gagal. Status: ' . $response->status(),
                'error' => json_decode($response->body(), true)
            ], 500);
        }

        // Safely get reply text
        $text = data_get($response->json(), 'candidates.0.content.parts.0.text', 'Gemini tidak mengembalikan jawaban.');

        return response()->json([
            'reply' => $text
        ]);
    } catch (\Throwable $e) {
        Log::error('Gemini error', ['msg' => $e->getMessage()]);
        return response()->json([
            'reply' => 'Server error: ' . $e->getMessage()
        ], 500);
    }
}



}
