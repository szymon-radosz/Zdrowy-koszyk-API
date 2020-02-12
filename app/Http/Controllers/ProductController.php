<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

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

            $product = new Product;

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
}
