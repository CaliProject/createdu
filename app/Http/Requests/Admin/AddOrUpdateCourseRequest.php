<?php

namespace Createdu\Http\Requests\Admin;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class AddOrUpdateCourseRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'       => 'required',
            'description' => 'required'
        ];
    }
}
