<?php

namespace Createdu\Http\Controllers\User;

use SMS;
use Cache;
use Crypt;
use Createdu\User;
use Createdu\Avatar;
use Illuminate\Http\Request;
use Createdu\Http\Controllers\Controller;
use Createdu\Events\User\Auth\UserHasRegistered;
use Createdu\Library\Traits\Controller\ImageResponse;

class ProfileController extends Controller {

    use ImageResponse;

    /**
     * The HTTP request.
     *
     * @var Request
     */
    protected $request;

    /**
     * ProfileController constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth', ['except' => ['getAvatar', 'showProfile']]);
    }

    /**
     * Fetch user's avatar.
     *
     * @param User $user
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
     * Display one's profile page.
     *
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showProfile(User $user)
    {
        return view('user.profile', compact('user'));
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

    /**
     * Show my profile for settings.
     *
     * @param null $section
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showSettings($section = null)
    {
        if (is_null($section))
            return view('user.settings.index');

        if (! view()->exists("user.settings.{$section}"))
            abort(404);

        return view("user.settings.{$section}");
    }

    /**
     * Send SMS verification.
     *
     * @return array
     */
    public function sendVerification()
    {
        $this->validate($this->request, [
            'tel' => 'required_unless:unbind,yes|numeric|digits_between:9,12'
        ]);

        sms($this->request->user()->tel ?: $this->request->input('tel'));

        return $this->successResponse();
    }

    /**
     * Verify SMS.
     *
     * @return array
     */
    public function verifyTel()
    {
        $this->validate($this->request, [
            'tel'          => 'required_unless:unbind,yes',
            'verification' => 'required|numeric|digits:4'
        ]);

        if (sms_validate($this->request->input('verification'))) {
            $this->request->user()->telVerified($this->request->input('tel'));
        }

        return $this->successResponse();
    }

    /**
     * Send the link to user's email again.
     *
     * @return array
     */
    public function resendLink()
    {
        event(new UserHasRegistered($this->request->user()));

        return $this->successResponse(trans('views.profile.settings.privacy.resend-success'));
    }

    /**
     * Confirm the registration through email.
     *
     * @param Request $request
     * @return mixed
     *
     * @author Cali
     */
    public function confirmRegistration(Request $request)
    {
        $email = Crypt::decrypt($request->input('token'));

        // TODO: Push into notification stack
        if ($email == $request->user()->email) {
            $request->user()->activated();
        }

        return redirect(route('users.profile.settings', ['section' => 'privacy']));
    }

    /**
     * Update user's password.
     *
     * @return array
     */
    public function updatePassword()
    {
        $this->validate($this->request, [
            'password_old' => 'required_unless:social,yes|different:password',
            'password'     => 'required|confirmed|min:6'
        ]);

        $user = $this->request->user();

        if (! $this->request->has('social')) {
            if (! auth()->attempt(['id' => $user->id, 'password' => $this->request->input('password_old')], false, false)) {
                return $this->errorResponse(trans('views.profile.settings.password.invalid-old-password'));
            }
        }

        $user->changePassword($this->request->input('password'));

        return $this->successResponse(trans('views.profile.settings.password.password-changed'));
    }

    /**
     * Upload new avatar.
     *
     * @return array
     */
    public function uploadAvatar()
    {
        Avatar::move($this->request->file('avatar'), $this->request->user());

        return response(json_encode([
            'url' => route('users.avatar', ['user' => $this->request->user()->id])
        ]), 200, [
            'Content-type' => 'text/html'
        ]);
    }
}