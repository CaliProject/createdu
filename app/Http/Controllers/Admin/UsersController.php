<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Http\Requests\Admin\UpdateUserPasswordRequest;
use Createdu\User;
use Illuminate\Support\Facades\Auth;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\ProfileSaveRequest;


class UsersController extends Controller {

    /**
     * 显示个人资料视图
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showProfile()
    {

        return view("admin.users.profile");
    }

    /**
     * 更新用户个人资料
     *
     * @param ProfileSaveRequest $request
     * @return array
     */
    public function saveProfile(ProfileSaveRequest $request)
    {
        return User::where('id', Auth::user()->id)
            ->update($request->except(['_token', '_method'])) ? $this->successResponse(
            ['message' => trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.users.profile.basics.heading')
            ])]
        ) : $this->errorResponse([
            'message' => trans('views.admin.pages.settings.updated-error', [
                'setting' => trans('views.admin.pages.users.profile.basics.heading')
            ])
        ]);
    }

    /**
     * @param UpdateUserPasswordRequest $request
     * @return array
     */
    public function updatePassword(UpdateUserPasswordRequest $request)
    {
        $request->user()->changePassword($request->input('password'));

        return $this->successResponse(trans('views.admin.pages.settings.updated', [
            'setting' => trans('views.admin.pages.users.profile.password.heading')
        ]));
    }
}
