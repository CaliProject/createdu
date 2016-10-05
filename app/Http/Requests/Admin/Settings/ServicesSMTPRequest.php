<?php

namespace Createdu\Http\Requests\Admin\Settings;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class ServicesSMTPRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mail_driver'     => 'required|in:smtp,mailgun',
            'mail_host'       => 'required|max:100',
            'mail_port'       => 'required|numeric',
            'mail_password'   => 'required',
            'mail_encryption' => 'required|in:tsl,ssl'
        ];
    }
}
