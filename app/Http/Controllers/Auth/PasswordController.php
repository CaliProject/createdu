<?php

namespace Createdu\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Createdu\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get the e-mail subject line to be used for the reset link email.
     *
     * @return string
     */
    protected function getEmailSubject()
    {
        return trans('passwords.subject');
    }

    /**
     * Get the response for after the reset link has been successfully sent.
     *
     * @param  string  $response
     * @return array|\Symfony\Component\HttpFoundation\Response
     */
    protected function getSendResetLinkEmailSuccessResponse($response)
    {
        return $this->successResponse(trans($response));
    }

    /**
     * Get the response for after the reset link could not be sent.
     *
     * @param  string  $response
     * @return array|\Symfony\Component\HttpFoundation\Response
     */
    protected function getSendResetLinkEmailFailureResponse($response)
    {
        return $this->errorResponse(trans($response));
    }

    /**
     * Get the password reset validation rules.
     *
     * @return array
     */
    protected function getResetValidationRules()
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ];
    }

    /**
     * Get the password reset credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function getResetCredentials(Request $request)
    {
        return array_merge($request->only(
            'email', 'password', 'token'
        ), [
            'password_confirmation' => $request->input('password')
        ]);
    }

    /**
     * Get the response for after a successful password reset.
     *
     * @param  string  $response
     * @return array|\Symfony\Component\HttpFoundation\Response
     */
    protected function getResetSuccessResponse($response)
    {
        return $this->successResponse(trans($response), route('home'));
    }

    /**
     * Get the response for after a failing password reset.
     *
     * @param $response
     * @return array|\Symfony\Component\HttpFoundation\Response
     */
    protected function getResetFailureResponse($response)
    {
        return $this->errorResponse(trans($response));
    }
}
