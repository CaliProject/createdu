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

    /**
     * 表单验证消息提醒
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required'       => '昵称不可为空！',
            'name.unique'         => '昵称已存在！',
            'credit.required'     => '积分不可为空！',
            'experience.required' => '经验不可为空！',
            'email.required'      => '邮箱不可为空！',
            'email.email'         => '邮箱格式不正确！',
        ];
    }
}
