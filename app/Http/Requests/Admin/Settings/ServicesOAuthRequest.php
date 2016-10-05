<?php

namespace Createdu\Http\Requests\Admin\Settings;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class ServicesOAuthRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'app_id'     => 'required',
            'app_secret' => 'required',
            'redirect'   => 'required|url'
        ];
    }
}
