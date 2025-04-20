<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class forumResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "judul" => $this->judul,
            "deskripsi" => $this->deskripsi,
            "body" => $this->body,
            "user" => [
                "name" => optional($this->user)->name ?? 'Unknown',
            ],
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
