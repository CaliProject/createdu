<?php

namespace Createdu\Http\Requests\Admin\Settings;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class GeneralSEORequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'site_separator'   => 'required|max:50',
            'site_description' => 'required|min:10|max:300'
        ];
    }
}
