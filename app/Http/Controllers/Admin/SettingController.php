<?php

namespace Createdu\Http\Controllers\Admin;

use Illuminate\Http\Request;

use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function showGeneral()
    {
        return view('admin.settings.general');
    }
}
