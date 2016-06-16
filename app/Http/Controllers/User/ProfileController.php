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
}