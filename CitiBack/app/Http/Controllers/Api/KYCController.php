<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\KYCRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use App\Models\KYCDetails;

class KYCController extends Controller
{
    /**
     * Submit KYC details.
     *
     * @param  \App\Http\Requests\KYCRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function submitKYC(KYCRequest $request)
    {
        try {
            $validatedData = $request->validated();

            // Extract the last four digits of Aadhaar Mask Number and hash them using bcrypt
            $lastFourDigits = substr($validatedData['aadhaar_mask_no'], -4);
            $hashedAadhaarLastFour = Hash::make($lastFourDigits);

            // Store the KYC details in the database
            $kycDetails = KYCDetails::create([
                'user_id' => auth()->id(),
                'name_in_aadhar' => $validatedData['firstName'] . ' ' . $validatedData['lastName'],
                'aadhar_card_number' => $hashedAadhaarLastFour,
                'pan_number' => Crypt::encrypt($validatedData['panNumber']),
                'driving_license' => Crypt::encrypt($validatedData['dlNumber']),
                'ration_card' => Crypt::encrypt($validatedData['rationCardNumber']),
                'id_type' => $validatedData['idType'],
                'status' => 0,
            ]);

            // Return a JSON response indicating success
            return response()->json([
                'message' => 'KYC details submitted successfully',
                'data' => $kycDetails,
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Return a JSON response indicating failure
            return response()->json([
                'error' => 'Failed to submit KYC details',
                'message' => $e->getMessage(), // Optional: Include error message for debugging
            ], 500);
        }
    }
}