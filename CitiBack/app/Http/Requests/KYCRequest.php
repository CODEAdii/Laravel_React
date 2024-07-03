<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KYCRequest extends FormRequest
{
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'age' => 'required|integer',
            'date_of_birth' => 'required|date',
            'address' => 'required|string',
            'nationality' => 'required|string|max:255',
            'aadhaar_mask_no' => 'required|string|max:255',
            'pan_number' => 'required|string|max:255',
            'id_type' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'dl_number' => 'nullable|string|max:255',
            'ration_card_number' => 'nullable|string|max:255',
        ];
    }
}