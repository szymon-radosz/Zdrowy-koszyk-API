<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\ScanHistory;
use App\ProductToAccept;

class DashboardController extends Controller
{
    public function getWeeklyScans()
    {
        try {
            $scans = ScanHistory::where('created_at', '>', Carbon::now()->startOfWeek())
                ->where('created_at', '<', Carbon::now()->endOfWeek())
                ->count();

            return response()->json(['status' => 'OK', 'result' => ['scans' => $scans]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot get scans count']);
        }
    }

    public function getWeeklyProductsToAccept()
    {
        try {
            $products = ProductToAccept::where('created_at', '>', Carbon::now()->startOfWeek())
                ->where('created_at', '<', Carbon::now()->endOfWeek())
                ->count();

            return response()->json(['status' => 'OK', 'result' => ['products' => $products]]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'ERR', 'result' => 'Cannot get scans count']);
        }
    }
}
