<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Lodge;
use App\Models\LodgeType;
use App\Models\Region;
use App\Http\Requests\LodgeRequest;
use Image;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $userData = [
            "name" => "{$user->firstname} {$user->lastname}",
            "email" => $user->email
        ];

        $data = [
            "pageTitle" => "dashboard"

        ];
        return Inertia::render('AdminStaycation/Dashboard',[
            "data"=> $data,
            "user"=> $userData
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
