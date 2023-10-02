<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Inertia\Inertia;
use Session;

class RegisterController extends Controller
{
    public function index(){
        if (Auth::check()){
            return redirect('/');
        }

        return Inertia::render('RegisterPage');
    }

    public function store(Request $request){
        $request->validate([
            'firstname' => 'required',
            'lastname'  => 'required',
            'phone'     => 'required|regex:/[0-9]/',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|min:6',
        ]);

        try {
            $data = $request->all();
            User::create([
                'firstname' => $request->firstname,
                'lastname'  => $request->lastname,
                'phone'     => $request->phone,
                'email'     => $request->email,
                'password'  => Hash::make($request->password),
                "role"      => 1
            ]);
        } catch(\Exception $e) {
            return redirect('register')->with('status','danger')->with('message',  'Register Failed!!');
        }

        return redirect('login')->with('status','success')->with('message', 'Register Succesfully!');
    }
}
