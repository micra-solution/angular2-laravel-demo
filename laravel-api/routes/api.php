<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/user',function(){

	$token = JWTAuth::getToken();
	$user = JWTAuth::toUser($token);
	return $user;

})->middleware('jwt.auth');

Route::get('/users',[

	'uses' => 'ApiController@users'

])->middleware('jwt.auth');


Route::post('/auth',[

	'uses' => 'ApiController@authenticate'

]);

Route::post('/register',[

	'uses' => 'ApiController@register'

]);

