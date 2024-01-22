<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class PostController extends Controller
{
    public function functionCompPosts() {        
        $user = User::get();
        return Inertia::render('Posts/PostComponent',compact('user'));
        
    }
    public function classCompPosts() {        
        return Inertia::render('Posts/NewPostComponent');
    }
}
