<?php

namespace Createdu\Library\Traits\Auth;

use Site;
use Auth;
use Validator;
use Socialite;
use Createdu\User;
use Illuminate\Http\Request;

trait SocialAuthenticatesUsers {

    /*
     |------------------------------------------------------------
     | Authenticates Users w/ Social Platforms
     | 社交平台验证登录
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */

    /**
     * Validates the input.
     *
     * @var Validator
     */
    protected $validator;

    /**
     * Redirect user to the related service auth.
     *
     * @param $service
     * @return \Illuminate\Http\Response
     *
     * @author Cali
     */
    public function socialLogin($service)
    {
        if (! in_array($service, explode(",", Site::supportedOAuths())))
            return redirect('/');
        
        return Socialite::with($service)->redirect();
    }

    /**
     * Handle the callback from OAuth.
     *
     * @param  $service
     * @return \Illuminate\View\View
     *
     * @author Cali
     */
    public function callback($service)
    {
        // Check if the user has signed up already
        $user = User::socialize($service);

        if (! $user instanceof User && ! is_bool($user)) {
            // If not, ask for the user's input
            return view('auth.social', compact('user', 'service'));
        }

        if (Auth::guest()) {
            Auth::login($user, true);
        } else {
            if (session()->has('redirect')) {
                return redirect(session()->get('redirect'))->with($user === false ? [
                    'status' => 'error',
                    'message' => trans('views.admin.pages.users.profile.social.bind-error', compact('service'))
                ] : [
                    'status' => 'success',
                    'message' => trans('views.admin.pages.users.profile.social.bind-success', compact('service'))
                ]);
            }
        }
        
        return redirect($this->redirectPath());
    }

    /**
     * Connect the user and persist it.
     *
     * @param Request $request
     * @return array
     *
     * @author Cali
     */
    public function connect(Request $request)
    {
        if (! $this->socialValidated($request)) {
            return [
                'status'   => 'error',
                'messages' => $this->failedMessages()
            ];
        }

        $this->createAndLoginUser($request);

        return [
            'status'   => 'succeeded',
            'redirect' => $this->redirectPath()
        ];
    }

    /**
     * If passes the validation.
     *
     * @param Request $request
     * @return bool
     *
     * @author Cali
     */
    protected function socialValidated(Request $request)
    {
        $this->validator = Validator::make($request->all(), [
            'name' => 'required|max:191|min:3|unique:users',
            'email'    => 'required|email|max:191|unique:users'
        ]);

        return ! $this->validator->fails();
    }

    /**
     * Get the failed messages for displaying.
     *
     * @return array
     *
     * @author Cali
     */
    protected function failedMessages()
    {
        return array_values($this->validator->messages()->toArray());
    }

    /**
     * Save the user information along with social account id.
     *
     * @param Request $request
     * @return User
     *
     * @author Cali
     */
    protected function saveUserWithSocialInfo(Request $request)
    {
        // Store social info for future authentication
        $user = User::register(
            $request->all(),
            collect([
                $request->input('service') => $request->input('id')
            ])->toJson()
        );

        return $user;
    }

    /**
     * Create the user and log in.
     *
     * @param Request $request
     *
     * @author Cali
     */
    private function createAndLoginUser(Request $request)
    {
        Auth::login($this->saveUserWithSocialInfo($request), true);
    }
}