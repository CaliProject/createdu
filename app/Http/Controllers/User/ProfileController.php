<?php

namespace Createdu\Http\Controllers\User;

use SMS;
use Cache;
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

    /**
     * The minutes for verification to be expired.
     *
     * @var int
     */
    protected $verificationExpireMinutes = 10;

    /**
     * Verification cache key.
     *
     * @var string
     */
    protected $cacheKey = "user-%s-tel-verify";

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

        $code = random_int(1000, 9999);

        Cache::put(sprintf($this->cacheKey, $this->request->user()->id), $code, $this->verificationExpireMinutes);

        SMS::sendTemplateMessage(1, [$code, $this->verificationExpireMinutes], $this->request->tel ?: $this->request->input('tel'));

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
            'tel'          => 'required_unless:unbind,yes|numeric|digits_between:9,12',
            'verification' => 'required|numeric|digits:4'
        ]);

        $key = sprintf($this->cacheKey, $this->request->user()->id);

        if ($this->request->input('verification') == Cache::get($key)) {
            $this->request->user()->telVerified($this->request->input('tel'));
            Cache::forget($key);
        }

        return $this->successResponse();
    }
}