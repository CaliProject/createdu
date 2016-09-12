<?php

namespace Createdu\Http\Requests\Admin\Settings;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class GeneralBasicsRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'site_title'   => 'required|max:50',
            'admin_email'  => 'required|max:50',
            'icp'          => 'required|max:50',
            'registration' => 'required|in:yes,no',
        ];
    }
}
