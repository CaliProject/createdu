<?php

namespace Createdu\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;

class CenterController extends Controller
{
    public function showFactory()
    {
        return view('admin.centers.factory');
    }
}
