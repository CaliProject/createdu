<?php

namespace Createdu\Http\Controllers\Admin;

use Createdu\User;
use Createdu\Avatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Createdu\Http\Controllers\Controller;
use Createdu\Library\Features\Users\Invitation;
use Createdu\Http\Requests\Admin\ProfileSaveRequest;
use Createdu\Http\Requests\Admin\UpdateUserPasswordRequest;


class UsersController extends Controller {

    /**
     * 显示个人资料视图
     *
     * @return View
     *
     * @author Tim
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
     *
     * @author Tim
     */
    public function saveProfile(ProfileSaveRequest $request)
    {
        $user = $request->user();
        if($user->credit !== $request->input('credit')) {
            $temp = $request->input('credit') - $user->credit;
            $user->credit($temp);
        }
        if($user->experience !== $request->input('experience')) {
            $temp = $request->input('experience') - $user->experience;
            $user->exp($temp);
        }

        return $user->update($request->except(['_token', '_method','credit','experience'])) ?
            $this->successResponse(trans('views.admin.pages.settings.updated', ['setting' => trans('views.admin.pages.users.profile.basics.heading')])) :
            $this->errorResponse(trans('views.admin.pages.settings.updated-error', ['setting' => trans('views.admin.pages.users.profile.basics.heading')]));
    }

    /**
     * 更新管理员密码
     *
     * @param UpdateUserPasswordRequest $request
     * @return array
     *
     * @author Tim
     */
    public function updatePassword(UpdateUserPasswordRequest $request)
    {
        $request->user()->changePassword($request->input('password'));

        return $this->successResponse(trans('views.admin.pages.settings.updated', [
            'setting' => trans('views.admin.pages.users.profile.password.heading')
        ]));
    }

    /**
     * 上传头像
     *
     * @param Request $request
     * @return Response
     *
     * @author Tim
     */
    public function uploadAvatar(Request $request)
    {
        Avatar::move($request->file('avatar'), $request->user());

        return response(json_encode([
            'url' => $request->user()->avatarUrl
        ]), 200, [
            'Content-type' => 'text/html'
        ]);
    }

    /**
     * 删除一条用户记录
     *
     * @param User $user
     * @return array
     * @throws \Exception
     */
    public function deleteUser(User $user)
    {
        $user->delete();
        
        return $this->successResponse();
    }

    /**
     * 批量操作用户记录
     *
     * @param Request $request
     * @return array
     */
    public function bulkAction(Request $request)
    {
        $action = $request->action;

        switch ($action) {
            case 'delete':
                foreach (explode(',', $request->input('IDs')) as $id) {
                    $user = User::findOrFail($id);
                    $user->delete();
                }
                break;
        }

        return $this->successResponse();
    }
    /**
     * Bind/Unbind the user's OAuth service.
     *
     * @param         $service
     * @param Request $request
     * @return array
     */
    public function bindOrUnbindOAuth($service, Request $request)
    {
        if ($request->user()->boundOAuth($service)) {
            $request->user()->unbindOAuth($service);

            return $this->successResponse([
                'message' => trans('views.admin.pages.users.profile.social.unbind-success', compact('service')),
                'reload'  => true
            ]);
        }

        $fromAdmin = $request->has('admin');

        return $this->successResponse(['redirectUrl' => route('users.profile.oauth', compact('service', 'fromAdmin'))]);
    }

    /**
     * 显示邀请码页面
     * 
     * @return mixed
     */
    public function showInvitations()
    {
        return Invitation::hasCodes() ? 
            view('admin.users.invitation',['codes' => Invitation::getCodes()]) :
            view('admin.users.invitation');
    }

    /**
     * 生成$quantity个邀请码
     *
     * @param Request $request
     * @return array
     */
    public function generateInvitationCode(Request $request)
    {
        $this->validate($request,[
            'quantity' => 'required'
        ]);
        
        Invitation::generateCodes($request->input('quantity'));
        
        return $this->successResponse(trans('views.admin.pages.users.invitations.generated'));
    }
}
