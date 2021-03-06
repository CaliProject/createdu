<?php

namespace Createdu\Library\Models;

use Site;
use Createdu\User;
use Illuminate\Mail\Message;
use Illuminate\Mail\Mailer as BaseMailer;

class Mailer {

    /**
     * The email subject.
     *
     * @var string
     */
    protected $subject = "";

    /**
     * The associated user.
     *
     * @var User|null
     */
    protected $user;

    /**
     * The email content.
     *
     * @var string
     */
    protected $content;

    /**
     * Extra data passing to view.
     *
     * @var array
     */
    protected $data = [];

    /**
     * BaseMailer object.
     *
     * @var BaseMailer
     */
    protected $mailer;

    /**
     * Email address.
     *
     * @var string
     */
    protected $address;

    /**
     * Mailer constructor and injects BaseMailer
     *
     * @author Cali
     */
    public function __construct(BaseMailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Dispatch static methods to instance methods.
     *
     * @param $method
     * @param $parameters
     * @return mixed
     *
     * @author Cali
     */
    public static function __callStatic($method, $parameters)
    {
        $instance = new static;

        return call_user_func_array([$instance, $method], $parameters);
    }

    /**
     * Dynamically call methods.
     *
     * @param $name
     * @param $arguments
     * @return mixed
     *
     * @author Cali
     */
    public function __call($name, $arguments)
    {
        if (in_array($name, get_class_methods($this))) {
            return call_user_func_array([$this, $name], $arguments);
        }

        return call_user_func_array([$this->mailer, $name], $arguments);
    }

    /**
     * Set the current mail subject.
     *
     * @param string $subject
     * @return Mailer
     *
     * @author Cali
     */
    public function subject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * Send the email.
     *
     * @param null $callback
     * @return $this
     *
     * @author Cali
     */
    public function send($callback = null)
    {
        if (! view()->exists($this->content())) {
            $this->mailer->raw($this->content(), $callback ?: $this->messageBuilder());

            return $this;
        }

        $this->mailer->send($this->content(), $this->messageData(), $callback ?: $this->messageBuilder());

        return $this;
    }

    /**
     * Set the current content, view or a string.
     *
     * @param $content
     * @return $this
     *
     * @author Cali
     */
    public function load($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the current content.
     *
     * @return mixed
     * @author Cali
     */
    public function content()
    {
        return $this->content;
    }

    /**
     * Set up the message builder.
     *
     * @return \Closure
     * @author Cali
     */
    protected function messageBuilder()
    {
        return function (Message $message) {
            if (! is_null($this->address)) {
                $message->to($this->address)
                    ->from(config('mail.username'), Site::siteTitle())
                    ->subject($this->subject);
            } else {
                $message->to($this->getUser()->email)
                    ->from(config('mail.username'), Site::siteTitle())
                    ->subject($this->subject);
            }
        };
    }

    /**
     * Set extra data to pass in the view.
     *
     * @param $parameters
     * @return $this
     *
     * @author Cali
     */
    public function with($parameters)
    {
        $this->data = $parameters;

        return $this;
    }

    /**
     * Prepare the message data.
     *
     * @return mixed
     * @author Cali
     */
    protected function messageData()
    {
        $user = $this->getUser();

        return array_merge(compact('user'), $this->data);
    }

    /**
     * Manually set the user.
     *
     * @param mixed $user
     * @return Mailer
     *
     * @author Cali
     */
    public function user(User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Manually set the email address.
     *
     * @param $email
     * @return $this
     *
     * @author Cali
     */
    public function to($email)
    {
        if (! is_null($email) && $email !== '') {
            $this->address = $email;
        }

        return $this;
    }

    /**
     * Get the current user.
     *
     * @return mixed
     * @author Cali
     */
    public function getUser()
    {
        return $this->user ?: auth()->user();
    }
}