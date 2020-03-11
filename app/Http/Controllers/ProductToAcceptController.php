<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductToAccept;
use App\Product;

class ProductToAcceptController extends Controller
{
    public function index()
    {
        try {
            $products = ProductToAccept::paginate(15);

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

            $product = new ProductToAccept;

            $product->name = $name;
            $product->barcode = $barcode;
            $product->details = $details;

            $product->save();

            return response()->json(['status' => 'OK', 'result' => $product]);
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

            $productCount = Product::where('barcode', $barcode)
                        ->count();

            if($productCount === 0){
                $product = new Product;

                $product->name = $name;
                $product->barcode = $barcode;
                $product->details = $details;

                $product->save();
            }else{
                $product = Product::where('barcode', $barcode)
                    ->update([
                        "name" => $name,
                        "details" => $details
                    ]);
            }

            $productRemove = ProductToAccept::where('id', $id)
                ->delete();

            return response()->json(['status' => 'OK', 'result' => ['product' => $productRemove]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot get product']);
        }
    }
}
