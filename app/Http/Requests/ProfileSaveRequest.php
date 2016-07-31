<?php

namespace Createdu\Http\Requests;

use Createdu\Http\Requests\Request;

class ProfileSaveRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

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
