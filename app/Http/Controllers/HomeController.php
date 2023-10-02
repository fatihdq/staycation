<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\User;

class HomeController extends Controller
{
    public function index(){
        if (Auth::check()){
            $user = Auth::user();
            $userData = [
                "name" => "{$user->firstname} {$user->lastname}",
                "email" => $user->email
            ];
        }else{
            $userData = null;
        }
        $data = [
            "data1" => "data1"
            ];
            

        return Inertia::render('HomePage',[ 
            "data" => $data,
            "user" => $userData
        ]);
    }
}
