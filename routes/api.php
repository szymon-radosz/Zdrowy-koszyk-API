<?php

use Illuminate\Http\Request;

Route::post('url/new', 'UrlController@store');
Route::get('product/url/get', 'UrlController@index');

Route::post('product/new', 'ProductController@store');

Route::post('product-to-accept/new', 'ProductToAcceptController@store');

Route::post('login', 'UserController@authenticate');
Route::post('register', 'UserController@register');
Route::post('checkIfEmailExists', 'UserController@checkIfEmailExists');

// Route::get('product/find/{barcode}/{deviceId?}/{deviceBrand?}', array('middleware' => 'cors', 'uses' => 'ProductController@find'));
// Route::get('product/search/{querySearch}', array('middleware' => 'cors', 'uses' => 'ProductController@findBySearchInput'));

Route::get('product/search/{querySearch}', 'App\Http\Controllers\ProductController@findBySearchInput');
Route::get('product/find/{barcode}/{deviceId?}/{deviceBrand?}', 'ProductController@find');


Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');
    
    Route::get('get-products', 'ProductController@index');
    Route::post('update-product', 'ProductController@update');
    Route::post('remove-product', 'ProductController@remove');

    Route::get('products-to-accept/get', 'ProductToAcceptController@index');
    Route::post('product-to-accept/update', 'ProductToAcceptController@update');

    Route::get('get-weekly-scans', 'DashboardController@getWeeklyScans');
    Route::get('get-weekly-products-to-accept', 'DashboardController@getWeeklyProductsToAccept');
    
    
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
