<?php

namespace Createdu\Http\Controllers\User;

use Createdu\Events\NewMessage;
use Createdu\User;
use Illuminate\Http\Request;
use Createdu\Http\Controllers\Controller;

class ConversationsController extends Controller {

    /**
     * Global request.
     *
     * @var Request
     */
    protected $request;

    /**
     * ConversationsController constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->request = $request;
    }

    /**
     * Get the current user.
     *
     * @return User
     */
    protected function user()
    {
        return $this->request->user();
    }

    /**
     * @param User $user
     * @return array
     */
    public function send(User $user)
    {
        if ($user->id == $this->user()->id) {
            abort(403);
        }

        event(new NewMessage($user, $this->user(), $this->request->input('message')));

        return $this->successResponse([
            ''
        ]);
    }
}