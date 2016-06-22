<?php

namespace Createdu\Http\Controllers\Admin;

use Illuminate\Http\Request;
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

    /**
     * Change admin theme setting.
     *
     * @param Request $request
     * @return array
     *
     * @author Cali
     */
    public function changeSetting(Request $request)
    {
        $user = $request->user();
        $user->changeAdminThemeSetting([
            'type'  => $request->input('type'),
            'value' => $request->input('value') == 'true'
        ]);

        return $this->successResponse([
            'message' => trans('views.admin.theme-setting-changed', [
                'type' => trans('views.admin.navbar.settings.' . $request->input('type'))
            ])
        ]);
    }

    /**
     * Change admin theme color.
     *
     * @param Request $request
     * @return array
     *
     * @author Cali
     */
    public function changeThemeColor(Request $request)
    {
        $user = $request->user();
        $user->changeAdminThemeColor([
            'theme' => $request->input('theme'),
            'color' => $request->input('color')
        ]);

        return $this->successResponse(['message' => trans('views.admin.theme-color-changed')]);
    }
}