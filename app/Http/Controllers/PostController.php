<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function functionCompPosts() {        
        return Inertia::render('Posts/PostComponent');
    }
    public function classCompPosts() {        
        return Inertia::render('Posts/NewPostComponent');
    }
}
