<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;

class RegionController extends Controller
{
    public function getParent(){
        $provinces = Region::whereNull('parentid')->get();
        return response()->json($provinces);
    }
    public function getChild(Request $request){
        $regencies = Region::where('parentid','=',$request->id)->get();
        return response()->json($regencies);
    }
}
