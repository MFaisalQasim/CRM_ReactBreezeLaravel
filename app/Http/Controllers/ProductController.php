<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function functionCompProducts() {        
        return Inertia::render('Products/ProductComponent');
    }
}
