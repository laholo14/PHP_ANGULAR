<?php

use App\Http\Controllers\API\CommandeController;
use App\Http\Controllers\API\IngredientController;
use App\Http\Controllers\API\RepasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('repas')->group(function () {
    Route::get('/', [RepasController::class, 'readAll']);
    Route::get('/{id}', [RepasController::class, 'readById']);
    Route::post('/', [RepasController::class, 'create']);
});

Route::prefix('ingredient')->group(function () {
    Route::get('/', [IngredientController::class, 'readAll']);
    Route::get('/{id}', [IngredientController::class, 'readById']);
    Route::post('/', [IngredientController::class, 'create']);
});

Route::prefix('commande')->group(function () {
     Route::get('/', [CommandeController::class, 'readAll']);
    // Route::get('/{id}', [IngredientController::class, 'readById']);
    Route::post('/', [CommandeController::class, 'create']);
});
