<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class qna extends Model
{
    protected $fillable = ['user_id', 'answers', 'correct_count', 'wrong_count'];

    protected $casts =[
        'answers' => 'array'
    ];
}
