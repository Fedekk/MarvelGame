<?php
namespace App\Http\Controllers;

use MongoDB\Client as Mongo;
use Illuminate\Support\Facades\Redis;

class PlayController extends Controller {
    public function start(){
        $number = (string) rand(1,100);
        if(!Redis::exists('number')){
        Redis::set('number',$number);
        Redis::expire("Expire in one day", 86400);
        echo 'rerew';
        }
        $valore = Redis::get('number');
        return view('play', ['valore' => $valore]);
    }
}