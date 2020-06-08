<?php

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
if (App::environment('production')) {
    URL::forceScheme('https');
}

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('create','DirectoryController@create');
Route::put('update','DirectoryController@update');
Route::get('get-schools','DirectoryController@getSchools');
Route::get('get-school/{id}','DirectoryController@getSchool');
Route::delete('delete-school','DirectoryController@singleDelete');
Route::post('mass-delete','DirectoryController@massDelete');
