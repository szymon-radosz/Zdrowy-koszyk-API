<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Url;

class UrlController extends Controller
{
    public function index()
    {
        try {
            $url = Url::where('checked', 0)->first();

            Url::where('id', $url->id)->update(['checked' => 1]);
    
            return response()->json(['status' => 'OK', 'result' => $url->url]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Błąd przy zapisywaniu url.']);
        }
    }

    public function store(Request $request)
    {
        try {
            $url = $request->url;

            if($url){
                $newUrl = new Url;

                $newUrl->url = $url;
                $newUrl->checked = 0;
    
                $newUrl->save();
    
                return response()->json(['status' => 'OK', 'result' => $newUrl]);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Błąd przy zapisywaniu url.']);
        }
    }
}
