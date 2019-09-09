<?php
namespace App\Http\Controllers;

use MongoDB\Client as Mongo;
use Illuminate\Support\Facades\Redis;

class PlayController extends Controller {
    public function start(){
        $redis = new Redis();
        $number = (string) rand(1,100);
        if(!$redis::exists('number'))
        $check=  $redis::set('number',$number, 'EX', 60*24);
        return view('play', ['number' => $redis::get('number')]);
    }
}