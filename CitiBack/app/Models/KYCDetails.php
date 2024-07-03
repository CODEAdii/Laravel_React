<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KYCDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name_in_aadhar',
        'aadhar_card_number',
        'pan_number',
        'driving_liscence',
        'ration_card',
        'id_type',
        'status'
    ];
       /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        // Define any attributes you want to hide when serialized
    ];

}
