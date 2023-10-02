<?php

namespace App\Http\Controllers\SuperAdmin;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Lodge;
use App\Models\LodgeType;
use App\Models\Region;
use App\Http\Requests\LodgeRequest;
use Image;


class LodgeController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $userData = [
            "name" => "{$user->firstname} {$user->lastname}",
            "email" => $user->email
        ];
        if ($request->has("disabled")){
            if ($request->query("disabled") == "1"){
                $lodges = $this->getLodgeData(NULL, 1);
            } else {
                $lodges = $this->getLodgeData(NULL, 0);
            }
        }else{
            $lodges = $this->getLodgeData(NULL, NULL);
        }


        $data = [
            "pageTitle" => "lodge",
            "lodge" => $lodges
        ];

        return Inertia::render('AdminStaycation/Lodge',[
            "data" => $data,
            "user"=> $userData
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $lodgeType = LodgeType::all();


        $userData = [
            "name" => "{$user->firstname} {$user->lastname}",
            "email" => $user->email
        ];

        $data = [
            "pageTitle" => "lodge"

        ];
        return Inertia::render('AdminStaycation/CreateLodge',[
            "data" => $data,
            "user"=> $userData,
            "lodgeType" => $lodgeType
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LodgeRequest $request)
    {

        $images = array();
        foreach($request->image as $img){
            $imageName = time().'.'.$img->extension();
            array_push($images, $imageName);
            $img->storeAs('public/images',$imageName);
        }

        DB::beginTransaction();
        try {
            $user = User::create([
                'firstname' => $request->name,
                'phone'     => $request->phone,
                'email'     => $request->email,
                'password'  => $request->password,
                "role"      => 2
            ]);
            // Role 2 means admin lodge

            Lodge::create([
                'name' => $request->name,
                'description' => $request->description,
                'type' => $request->type,
                'regionid' => $request->village,
                'address' => $request->address,
                'imageurl' => json_encode($images),
                'userid' => $user->id
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return redirect(route('spradm.lodge.index'))->with('status','warning')->with('message', 'Something Went Wrong!');

        }

        return redirect(route('spradm.lodge.index'))->with('status','success')->with('message', 'Lodge Created Successfully!');
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
        $user = Auth::user();
        $userData = [
            "name" => "{$user->firstname} {$user->lastname}",
            "email" => $user->email
        ];

        $lodgeType = LodgeType::all();
        $lodge = $this->getLodgeData($id, null)[0];

        $data = [
            "pageTitle" => "lodge",
            "lodge" => $lodge
        ];

        return Inertia::render('AdminStaycation/EditLodge',[
            "data" => $data,
            "user"=> $userData,
            "lodgeType" => $lodgeType
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LodgeRequest $request, string $id)
    {
        $lodge = $this->getLodgeData($id)[0];

        DB::beginTransaction();
        try {
            Lodge::where('id',$id)
                ->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'type' => $request->type,
                    'regionid' => $request->village,
                    'address' => $request->address,
                    'imageurl' => json_encode($images),
            ]);
            DB::commit();

            $updatedImg = array();
            foreach($request->image as $img){
                array_push($updatedImg,$img->getClientOriginalName());
            }
            foreach($lodge->imageurl as $img){
                $currentImg = explode("/",$img)[3];
                if (!in_array($currentImg, $updatedImg)){
                    Storage::delete('public/images/'.$currentImg);
                }
            }

            $images = array();
            foreach($request->image as $img){
                $destinationPath = '/public/images/'.$img->getClientOriginalName();
                if (!Storage::exists($destinationPath)){
                    $imageName = time().'.'.$img->extension();
                    array_push($images, $imageName);
                    $img->storeAs('public/images',$imageName);
                }else{
                    $imageName = $img->getClientOriginalName();
                    array_push($images, $imageName);
                }
            }
        } catch (\Exception $e){
           DB::rollback();
            return redirect(route('spradm.lodge.index'))->with('status','warning')->with('message', 'Something Went Wrong!');

        }

        return redirect(route('spradm.lodge.index'))->with('status','success')->with('message', 'Lodge Edited Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        dd($id);
        $lodge = $this->getLodgeData($id , null)[0];
        $userid = $lodge->userid;
        $imageurl = $lodge->imageurl;
        $user = User::where('id',$userid)->first();

        DB::beginTransaction();
        try{

            $lodge::destroy($id);
            $user::destroy($userid);


            foreach($lodge->imageurl as $img){
                $currentImg = explode("/",$img)[3];
                Storage::delete('public/images/'.$currentImg);
            }
            DB::commit();

        } catch(\Exception $e){
            DB::rollback();
            return redirect(route('spradm.lodge.index'))->with('status','warning')->with('message', 'Something Went Wrong!');

        }
        return redirect(route('spradm.lodge.index'))->with('status','success')->with('message', 'Lodge Deleted Successfully!');
    }

    public function deactive(LodgeRequest $request, $id){
        DB::beginTransaction();
        try {
            Lodge::where('id',$id)
                ->update([
                    'disabled' => $request->disabled,
            ]);
            DB::commit();
        } catch (\Exception $e){
            DB::rollback();
            return redirect(route('spradm.lodge.index'))->with('status','warning')->with('message', 'Something Went Wrong!');
        }
        return redirect(route('spradm.lodge.index'))->with('status','success')->with('message', 'Lodge Updated Successfully!');
    }

    private function getLodgeData($id , $isDisabled){
        $numPaginate = 10;

        if ($id !== NULL) {
            $lodges = Lodge::select('id','userid','name','description','disabled','type','regionid','address','imageurl','created_at')
            ->where('id',$id)
            ->with(['user' => function($query) {
                $query->select('id','firstname','phone','email');
            },'lodgeType' => function($query){
                $query->select('id','name');
            },'region' => function($query){
                $query->with('parent');
            }])->get();
        } else {
            if ($isDisabled === NULL){
                $lodges = Lodge::select('id','userid','name','description','disabled','type','regionid','address','imageurl','created_at')
                ->with(['user' => function($query) {
                    $query->select('id','firstname','phone','email');
                },'lodgeType' => function($query){
                    $query->select('id','name');
                },'region' => function($query){
                    $query->with('parent');
                }])->orderBy('created_at','ASC')->paginate($numPaginate);

            }
            else {
                if ($isDisabled === 1){
                    $lodges = Lodge::select('id','userid','name','description','disabled','type','regionid','address','imageurl','created_at')
                    ->where('disabled',true)
                    ->with(['user' => function($query) {
                        $query->select('id','firstname','phone','email');
                    },'lodgeType' => function($query){
                        $query->select('id','name');
                    },'region' => function($query){
                        $query->with('parent');
                    }])->orderBy('created_at','ASC')->paginate($numPaginate);
                    $lodges->appends(["disabled" => true]);

                } else if ($isDisabled === 0) {
                    $lodges = Lodge::select('id','userid','name','description','disabled','type','regionid','address','imageurl','created_at')
                    ->where('disabled',false)
                    ->with(['user' => function($query) {
                        $query->select('id','firstname','phone','email');
                    },'lodgeType' => function($query){
                        $query->select('id','name');
                    },'region' => function($query){
                        $query->with('parent');
                    }])->orderBy('created_at','ASC')->paginate($numPaginate);
                    $lodges->appends(["disabled" => false]);

                }
            }

        }
        foreach ($lodges as $lodge){
            unset($lodge->regionid);
            unset($lodge->type);
            $lodge->imageurl = json_decode($lodge->imageurl,true);
            $imageUrl = array();
            foreach($lodge->imageurl as $url){
                array_push($imageUrl, Storage::url('images/'.$url));
            }
            unset($lodge->imageurl);
            $lodge->imageurl = $imageUrl;


            $region['village']['id'] = $lodge->region->id;
            $region['village']['name'] = $lodge->region->name;
            $region['district']['id'] = $lodge->region->parent->id;
            $region['district']['name'] = $lodge->region->parent->name;
            $region['regency']['id'] = $lodge->region->parent->parent->id;
            $region['regency']['name'] = $lodge->region->parent->parent->name;
            $region['provincy']['id'] = $lodge->region->parent->parent->parent->id;
            $region['provincy']['name'] = $lodge->region->parent->parent->parent->name;

            unset($lodge->region);
            $lodge['region'] = $region;
        }

        return $lodges;
    }
}
