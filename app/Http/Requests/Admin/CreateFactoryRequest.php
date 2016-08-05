<?php

namespace Createdu\Http\Requests\Admin;

use Createdu\Http\Requests\Admin\AdminRequest as Request;

class CreateFactoryRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'model'    => 'required',
            'quantity' => 'numeric|required'
        ];
    }
}
