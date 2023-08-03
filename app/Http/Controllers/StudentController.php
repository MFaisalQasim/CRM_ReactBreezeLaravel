<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function functionCompStudents() {        
        return Inertia::render('Students/StudentsComponent');
    }
}
