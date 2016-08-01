<?php

namespace Createdu\Http\Requests\Admin;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class UpdateUserPasswordRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'password' => 'required|min:3|max:50|confirmed'
        ];
    }
}
