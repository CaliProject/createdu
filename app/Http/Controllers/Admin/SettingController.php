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
    
    public function showServices()
    {
        return view('admin.settings.services');
    }

    /**
     * 保存basics常规设置
     * 
     * @param GeneralBasicsRequest $request
     * @return array
     */
    public function saveGeneralBasicsSetting(GeneralBasicsRequest $request)
    {
        return $this->saveGeneralSettings('basics',$request);
    }

    /**
     * 保存SEO常规设置
     * 
     * @param GeneralSEORequest $request
     * @return array
     */
    public function saveGeneralSEOSetting(GeneralSEORequest $request)
    {
        return $this->saveGeneralSettings('seo',$request);
    }

    /**
     * 保存常规设置
     * 
     * @param $type
     * @param $request
     * @return array
     */
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
