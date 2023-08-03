<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplianceController extends Controller
{
    public function functionCompAppliance() {        
        return Inertia::render('Appliances/ApplianceComponent');
    }
}
