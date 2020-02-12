<?php

use Illuminate\Http\Request;

Route::post('url/new', 'UrlController@store');
Route::get('product/url/get', 'UrlController@index');

Route::post('product/new', 'ProductController@store');


Route::post('login', 'UserController@authenticate');
Route::post('register', 'UserController@register');
Route::post('checkIfEmailExists', 'UserController@checkIfEmailExists');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('get-products', 'ProductController@index');
    Route::post('update-product', 'ProductController@update');
    Route::post('remove-product', 'ProductController@remove');
    
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
