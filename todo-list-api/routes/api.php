<?php

    Route::get('todo', 'Api\TodoController@index');
    Route::post('todo', 'Api\TodoController@create');
    Route::delete('todo/{id}', 'Api\TodoController@destroy');
