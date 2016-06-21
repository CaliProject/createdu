<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Http\Controllers\Controller;

class AdminController extends Controller {

    /**
     * AdminController constructor.
     */
    public function __construct()
    {
        $this->authorize('view-dashboard');
    }

    /**
     * Show different sections views.
     * 
     * @param null $section
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($section = null)
    {
        if (is_null($section)) {
            return view('admin.dashboard');
        }

        return view("admin.{$section}.index");
    }
}