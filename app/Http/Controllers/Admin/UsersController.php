<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\ProfileSaveRequest;
use Createdu\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    /**
     * 显示个人资料视图
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showProfile(){

        return view("admin.users.profile");
    }

    /**
     * 更新用户个人资料
     *
     * @param ProfileSaveRequest $request
     * @return array
     */
    public function saveProfile(ProfileSaveRequest $request){

        return User::where('id',Auth::user()->id)
                    ->update($request->except(['_token','_method'])) ? $this->successResponse(
                        ['message' => trans('views.admin.pages.settings.updated',[
                            'setting' => trans('views.admin.pages.users.profile.basics.heading')
                        ])]
        ) : $this->errorResponse([
            'message' => trans('views.admin.pages.settings.updated-error',[
                'setting' => trans('views.admin.pages.users.profile.basics.heading')
            ])
        ]);
    }
}
