<?php

namespace Createdu\Http\Controllers\Admin;

use Site;
use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\Settings\GeneralSEORequest;
use Createdu\Http\Requests\Admin\Settings\GeneralBasicsRequest;

class SettingController extends Controller
{
    /**
     * 显示常规设置页面
     *
     * @return mixed
     */
    public function showGeneral()
    {
        return view('admin.settings.general');
    }

    public function saveGeneralBasicsSetting(GeneralBasicsRequest $request)
    {
        return $this->saveGeneralSettings('basics',$request);
    }
    
    public function saveGeneralSEOSetting(GeneralSEORequest $request)
    {
        return $this->saveGeneralSettings('seo',$request);
    }
    
    public function saveGeneralSettings($type,$request)
    {
        Site::__callStatic(camel_case("save_general_{$type}_settings"), [$request]);
        
        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans("views.admin.pages.settings.general.$type.heading")
            ])
        );
    }
}
