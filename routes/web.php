<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});



Route::get('/clients', function () {
    return view('back_end/clients');
})->middleware('cors')->name('b-client');

//back office

Route::get('/back-voiture', function () {
    return view('back_end/voitures');
})->name('b-voiture');

Route::get('/back-contrat', function () {
    return view('back_end/contrat');
})->name('b-contrat');


Route::get('/dash', function () {
    return view('back_end/dashboard');
})->name('dash');
