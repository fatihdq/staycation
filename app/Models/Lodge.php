<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\LodgeType;
use App\Models\Region;

class Lodge extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        "name",
        "description",
        "disabled",
        "type",
        "address",
        "regionid",
        "imageurl",
        "userid"
    ];
    protected $table = "lodge";
    protected $primaryKey = "id";
    public $incrementing = false;

    public function newUniqueId(){
        return Str::ulid();
    }

    public function getUlidAttribute(){
        return Ulid::fromString($this->attributes['id']);
    }
    public function user() {
        return $this->belongsTo(User::class, "userid" , "id");
    }

    public function lodgeType() {
        return $this->belongsTo(lodgeType::class, "type" , "id");
    }

    public function region() {
        return $this->belongsTo(Region::class, "regionid", "id");
    }
}
