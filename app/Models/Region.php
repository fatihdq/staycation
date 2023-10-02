<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $table = "region";
    protected $primaryKey = "id";

    public function users(){
        return $this->hasMany(User::class, 'id', 'regionid');
    }
    public function lodges(){
        return $this->hasMany(Lodge::class, 'id', 'regionid');
    }


    public function child(){
        return $this->hasMany(self::class, 'id', 'parentid');
    }

    public function parent()
    {
        return $this->belongsTo(self::class, 'parentid', 'id')->with('parent');
    }
}
