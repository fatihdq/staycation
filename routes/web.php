<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\SuperAdmin\DashboardController;
use App\Http\Controllers\SuperAdmin\LodgeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegionController;


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

Route::get('/', [HomeController::class,'index'])->name('home');

Route::get('detail-page', function(){
    return Inertia::render('DetailPage');
});



Route::group(['middleware' =>['guest']], function (){
    Route::get('login',[LoginController::class, 'index'])->name('login.index');
    Route::post('login/postLogin',[LoginController::class, 'login'])->name('login.post');

    Route::get('register',[RegisterController::class, 'index'])->name('register.index');
    Route::post('register/store',[RegisterController::class, 'store'])->name('register.post');

});

Route::group(['middleware' => ['auth']], function(){
    Route::get('logout',[LoginController::class, 'logout'])->name('logout');

    Route::get('booking',function(){
    return Inertia::render('BookingPage');
    });

    Route::get('payment',function(){
        return Inertia::render('BookingPaymentPage');
    });

    Route::get('complete',function(){
        return Inertia::render('BookingCompletePage');
    });

    Route::get('toUserProfile',[LoginController::class,'toUserProfile'])->name('to.user.profile');
});

Route::group(['middleware' => ['auth','super.admin']], function(){
    Route::get('staycation/dashboard',[DashboardController::class, 'index'])->name("spradm.dashboard.index");

    Route::get('staycation/lodge',[LodgeController::class, 'index'])->name('spradm.lodge.index');
    Route::get('staycation/lodge/create',[LodgeController::class,'create'])->name('spradm.lodge.create');
    Route::get('staycation/lodge/{id}/edit',[LodgeController::class,'edit'])->name('spradm.lodge.edit');

    Route::post('staycation/lodge/store',[LodgeController::class,'store'])->name('spradm.lodge.store');
    Route::put('staycation/lodge/{id}/update',[LodgeController::class, 'update'])->name('spradm.lodge.update');
    Route::put('staycation/lodge/{id}/deactive',[LodgeController::class, 'deactive'])->name('spradm.lodge.deactive');
    Route::delete('staycation/lodge/{id}/destroy',[LodgeController::class, 'destroy'])->name('spradm.lodge.destroy');



});

Route::get('admin',function(){
    return Inertia::render('Admin/Dashboard')->name('admin.dashboard');
});

Route::get('/getProvinces',[RegionController::class,'getParent']);
Route::get('/getRegencies',[RegionController::class,'getChild']);
Route::get('/getDistricts',[RegionController::class,'getChild']);
Route::get('/getVillages',[RegionController::class,'getChild']);

Route::get('storage/{filename}', function ($filename)
{
    $path = storage_path('public/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});







