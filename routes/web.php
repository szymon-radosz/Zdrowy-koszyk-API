<?php


Route::get('/', function () {
    return view('dashboard');
});

Route::get('{slug}', function () {
    return view('dashboard');
});
