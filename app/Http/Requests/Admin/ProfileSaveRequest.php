<?php

namespace Createdu\Http\Requests\Admin;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class ProfileSaveRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'       => 'required',
            'credit'     => 'required',
            'experience' => 'required',
            'email'      => 'required|email',
        ];
    }
}
