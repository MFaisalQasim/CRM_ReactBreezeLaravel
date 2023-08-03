<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UseStateHookController extends Controller
{
    public function functionCompuseStateHook() {        
        return Inertia::render('UseStateHooks/UseStateHookComponent');
    }
}
