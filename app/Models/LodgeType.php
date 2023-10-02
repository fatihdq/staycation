<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Lodge;

class LodgeType extends Model
{
    use HasFactory;

    protected $fillable = [
        "*"
    ];
    protected $table = "lodgetype";
    protected $primaryKey = "id";
    public $incrementing = true;

    public function lodge(){
        return $this->hasMany(Lodge::class, 'id', 'type');
    }
}
