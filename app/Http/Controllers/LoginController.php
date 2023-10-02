<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Inertia\Inertia;
use Session;

class LoginController extends Controller
{
    public function index(){
        if (Auth::check()){
            return redirect('/');
        }

        return Inertia::render('LoginPage');
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended(route("home"))
                        ->with('status','success')->with('message','Success Sign in');
        }

        return redirect(route("login.index"))->withErrors(['password' => 'Email and/or password invalid.']);
    }

    public function logout(){
        Session::flush();
        Auth::logout();

        return redirect('login');
    }

    public function toUserProfile(){
        $role = Auth::user()->role;
        if ($role === 0){
            return redirect(route('spradm.dashboard.index'));
        } else if ($role === 1){
            return redirect('/');
        } else if ($role === 2){
            return redirect('dashboard');
        }
    }
}
