<?php

namespace Createdu\Http\Controllers\User;

use Createdu\User;
use Createdu\Avatar;
use Illuminate\Http\Request;
use Createdu\Http\Controllers\Controller;
use Createdu\Library\Traits\Controller\ImageResponse;

class ProfileController extends Controller {

    use ImageResponse;

    /**
     * The HTTP request.
     *
     * @var Request
     */
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth', ['except' => 'getAvatar']);
    }

    /**
     * Fetch user's avatar.
     * 
     * @param User    $user
     * @param Request $request
     * @return mixed
     * 
     * @author Cali
     */
    public function getAvatar(User $user)
    {
        // Latest avatar
        if (($avatar = $user->localAvatar())) {
            return $this->imageResponse($avatar->src);
        } else {
            return $this->imageResponse(Avatar::DEFAULT_URI, false);
        }
    }

    /**
     * Check in the user.
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|array
     */
    public function checkIn()
    {
        if (! $this->request->user()->checkedIn()) {
            $this->request->user()->checkIn();

            return $this->successResponse('签到成功!');
        } else {
            return redirect('/');
        }
    }
}