<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Support\Str;
use \Illuminate\Foundation\Auth\User as Authenticatable;
use Hash;
use App\Models\Lodge;
use App\Models\Role;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasUlids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "firstname",
        "lastname",
        "phone",
        "email",
        "password",
        "identitytype",
        "identitynumber",
        "consent",
        "agreetnc",
        "regionid",
        "role",
    ];
    protected $table = "users";
    protected $primaryKey = "id";
    public $incrementing = false;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];




    public function newUniqueId(){
        return Str::ulid();
    }

    public function getUlidAttribute(){
        return Ulid::fromString($this->attributes['id']);
    }

    public function setPasswordAttribute($pass) {
        $this->attributes['password'] = Hash::make($pass);
    }

    public function roles()
    {
        return $this->belongsTo( Role::class, 'role', 'id' );
    }

    public function lodges(){
        return $this->hasMany(Lodge::class, 'id', 'userid');
    }
}
