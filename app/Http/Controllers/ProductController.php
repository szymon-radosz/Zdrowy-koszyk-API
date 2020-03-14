<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Ingredient;
use App\ScanHistory;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::paginate(15);

            return response()->json(['status' => 'OK', 'result' => ['products' => $products]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot get products']);
        }
    }

    public function store(Request $request)
    {
        try {
            $name = $request->name ? $request->name : "";
            $barcode = $request->barcode ? $request->barcode : "";
            $details = $request->details ? $request->details : "";

            $barcodeCount = Product::where('barcode', $barcode)
                                    ->count();
            
            if($barcodeCount === 0){
                $product = new Product;

                $product->name = $name;
                $product->barcode = $barcode;
                $product->details = $details;

                $product->save();

                return response()->json(['status' => 'OK', 'result' => $product]);
            }else{
                return response()->json(['status' => 'OK', 'result' => "BARCODE ISTNIEJE"]);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => $e->getMessage()]);
        }
    }

    public function update(Request $request)
    {
        try {
            $id = $request->input('id');
            $name = $request->input('name');
            $barcode = $request->input('barcode');
            $details = $request->input('details');

            $product = Product::where('id', $id)
                ->update([
                    "name" => $name,
                    "barcode" => $barcode,
                    "details" => $details
                ]);

            return response()->json(['status' => 'OK', 'result' => ['product' => $product]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot get product']);
        }
    }

    public function remove(Request $request)
    {
        try {
            $id = $request->input('id');

            $product = Product::where('id', $id)
                ->delete();

            return response()->json(['status' => 'OK', 'result' => ['product' => $product]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot remove product']);
        }
    }

    public function find(Request $request)
    {
        try {
            $barcode = $request->barcode ? $request->barcode : "";
            $deviceId = $request->deviceId ? $request->deviceId : "";
            $deviceBrand = $request->deviceBrand ? $request->deviceBrand : "";

            $product = Product::where('barcode', $barcode)
                                    ->first();

            $scanHistory = new ScanHistory;
            $scanHistory->barcode = $barcode;
            $scanHistory->device_id = $deviceId;
            $scanHistory->brand = $deviceBrand;
            $scanHistory->save();
            
            if($product->details){
                $ingriedients = explode(',', $product->details);
            
                $product->ingredients =  Ingredient::where(function ($query) use ($ingriedients) {
                    foreach ($ingriedients as $ingredient) {
                        $wordsList = explode(' ', $ingredient);

                        foreach($wordsList as $singleWord){
                            
                            //if string is "" or single word then you get all results from ingredients
                            if($singleWord && strlen($singleWord) > 2){
                                //var_dump($singleWord);
                                $query->where('keywords', 'like', '%' . $singleWord . '%', 'or');
                            }
                           
                        }
                       
                    }
                })
                ->get();
            }

            return response()->json(['status' => 'OK', 'result' => $product]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => $e->getMessage()]);
        }
    }
}
