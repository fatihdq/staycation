<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        "*"
    ];
    protected $table = "roles";
    protected $primaryKey = "id";
    public $incrementing = true;

    public function user(){
        return $this->hasMany(User::class, 'id', 'role');
    }
}
