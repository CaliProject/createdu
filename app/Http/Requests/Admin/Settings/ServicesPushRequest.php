<?php

namespace Createdu\Http\Requests\Admin\Settings;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class ServicesPushRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'app_id' => 'required',
            'key'    => 'required',
            'secret' => 'required'
        ];
    }
}
