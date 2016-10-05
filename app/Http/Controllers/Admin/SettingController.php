<?php

namespace Createdu\Http\Controllers\Admin;

use Site;
use Createdu\Http\Requests;
use Createdu\Http\Controllers\Controller;
use Createdu\Http\Requests\Admin\Settings\GeneralSEORequest;
use Createdu\Http\Requests\Admin\Settings\ServicesPushRequest;
use Createdu\Http\Requests\Admin\Settings\ServicesSMTPRequest;
use Createdu\Http\Requests\Admin\Settings\ServicesOAuthRequest;
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
     * @param GeneralBasicsRequest $request 经过basics request验证的数据表单
     * @return array
     */
    public function saveGeneralBasicsSetting(GeneralBasicsRequest $request)
    {
        Site::saveGeneralBasicsSettings($request);

        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.settings.general.basics.heading')
            ])
        );
    }

    /**
     * 保存SEO常规设置
     * 
     * @param GeneralSEORequest $request 经过seo request验证的数据表单
     * @return array
     */
    public function saveGeneralSEOSetting(GeneralSEORequest $request)
    {
        Site::saveGeneralSEOSettings($request);

        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.settings.general.seo.heading')
            ])
        );
    }

    /**
     * 保存第三方登录服务设置
     * 
     * @param $service 服务商
     * @param ServicesOAuthRequest $request 经过oauth request验证的数据表单
     * @return array
     */
    public function saveOAuth($service,ServicesOAuthRequest $request)
    {
        Site::saveServicesOAuthSettings($service, $request);

        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.settings.services.oauth.heading')
            ])
        );
    }

    /**
     * 保存smtp协议相关设置
     * 
     * @param ServicesSMTPRequest $request 经过smtp request验证的数据表单
     * @return array
     */
    public function saveSMTP(ServicesSMTPRequest $request)
    {
        Site::saveServicesSMTPSettings($request);

        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.settings.services.email.heading')
            ])
        );
    }

    /**
     * 保存实时推送相关设置
     * 
     * @param ServicesPushRequest $request 经过push request验证的数据表单
     * @return array
     */
    public function savePush(ServicesPushRequest $request)
    {
        Site::saveServicesPushSettings($request);

        return $this->successResponse(
            trans('views.admin.pages.settings.updated', [
                'setting' => trans('views.admin.pages.settings.services.push.heading')
            ])
        );
    }

    
    
}
