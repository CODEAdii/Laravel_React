<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\KYCController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();    
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/signup', [AuthController::class, 'Signup']);
Route::post('/login', [AuthController::class, 'login']);


Route::post('/submit-kyc', [KYCController::class, 'submitKYC'])->name('submit-kyc');
Route::get('/kyc-status', [KYCController::class, 'checkKYCStatus'])->name('kyc-status');