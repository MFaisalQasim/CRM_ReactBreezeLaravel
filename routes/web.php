<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ApplianceController;
use App\Http\Controllers\UseStateHookController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// functionCompPosts
Route::get('/posts', [PostController::class, 'functionCompPosts'])->name('post.functionCompPosts');

// classCompPosts
Route::get('/posts/new', [PostController::class, 'classCompPosts'])->name('post.classCompPosts');

// functionCompProducts
Route::get('/products', [ProductController::class, 'functionCompProducts'])->name('post.functionCompProducts');

// functionCompStudents
Route::get('/students', [StudentController::class, 'functionCompStudents'])->name('post.functionCompStudents');

// functionCompStudents
Route::get('/appliance', [ApplianceController::class, 'functionCompAppliance'])->name('post.functionCompAppliance');

// useStateHooks
Route::get('/use-state-hook', [UseStateHookController::class, 'functionCompuseStateHook'])->name('post.functionCompuseStateHook');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
