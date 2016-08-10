<?php

namespace Createdu\Http\Controllers\User;

use Createdu\User;
use Createdu\Message;
use Illuminate\Http\Request;
use Createdu\Events\User\NewMessage;
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
    public function getConversations(User $user)
    {
        $this->preventSelf($user);

        $messages = $this->user()->messagesWith($user)->take((new Message)->getPerPage())->get()->reverse()->flatten();

        return $this->successResponse(compact('messages'));
    }

    /**
     * Send a message to a user.
     *
     * @param User $user
     * @return array
     */
    public function send(User $user)
    {
        $this->preventSelf($user);

        $message = $this->user()->sendMessageTo($user, $this->request->input('message'));
        event(new NewMessage($message));

        return $this->successResponse([
            'm' => $message
        ]);
    }

    /**
     * @param User $user
     * @return array
     */
    public function readMessages(User $user)
    {
        $this->user()->readAllMessages($user);

        return $this->successResponse();
    }

    /**
     * Prevent from talking to self.
     *
     * @param User $user
     */
    protected function preventSelf(User $user)
    {
        if ($user->id == $this->user()->id) {
            abort(403);
        }
    }
}