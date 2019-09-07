<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redis;
use MongoDB\Client as Mongo;

class TestController extends Controller
{

    public function test()
    {
        // Redis::set('name', 'Taylor');
        // $test = Redis::get('name');
        // return $test;
        // $redis = Redis::set('name','Taylor');
        // $test = Redis::get('name');
        // return $test;
        $mongo = new Mongo;
        $connection = $mongo->dati_dinamici->personaggi;
        return $connection->find()->toArray();
    }
}
