<?php

namespace Createdu;

use Artisan;
use Illuminate\Http\Request;
use Createdu\Library\Models\Configuration;

class SiteConfiguration extends Configuration {

    /*
    |------------------------------------------------------------
    | SiteConfiguration Model Class
    | 站点设置 模型类
    |------------------------------------------------------------
    |
    | @author Cali
    |
    */

    /**
     * If the app is in beta.
     * 
     * @var bool
     */
    protected $beta = true;

    /**
     * Current version number.
     * 
     * @var string
     */
    protected $version = "1.0";
    
    /**
     * The keys that need to prepend a prefix.
     *
     * @var array
     */
    protected $needPrefixKeys = [
        "url", "title", "description", "separator", "keywords"
    ];

    /**
     * The prefix to be prepended on $needPrefixKeys.
     *
     * @var string
     */
    protected $prefix = 'site_';

    /**
     * Get the title suffix in views.
     * 获取视图中的标题后缀
     *
     * @return string
     * @author Cali
     */
    public static function title()
    {
        return static::separator() . " " . static::siteTitle();
    }

    /**
     * Get the admin title suffix in admin views.
     * 获取后台管理标题后缀
     *
     * @return string
     * @author Cali
     */
    public static function adminTitle()
    {
        return static::separator() . " " . trans('views.admin.main-title') . " " . static::title();
    }

    /**
     * Get the site logo.
     *
     * @return string
     * @author Cali
     */
    public static function logo()
    {
        return url('assets/logo.png?ver=' . static::logoVersion() ?: '0');
    }

    /**
     * Get the current supported locales.
     * 
     * @return array
     */
    public static function supportedLocales()
    {
        return [
            'en', 'zh'
        ];
    }

    /**
     * Get current version.
     * 
     * @return string
     */
    public function getCurrentVersion()
    {
        return $this->version;
    }

    /**
     * See if we're in beta.
     * 
     * @return bool
     */
    public function isBeta()
    {
        return $this->beta;
    }

    /**
     * Cache by different type.
     * 
     * @param        $type
     * @param string $action
     * 
     * @author Cali
     */
    public static function doCacheByType($type, $action = 'refresh')
    {
        switch ($type) {
            case 'main-cache':
                Artisan::call($action === 'refresh' ? 'config:cache' : 'config:clear');
                if ($action !== 'refresh') {
                    Artisan::call('cache:clear');
                }
                break;
            case 'route-cache':
                Artisan::call($action === 'refresh' ? 'route:cache' : 'route:clear');
                break;
            default:
                Artisan::call('view:clear');
                break;
        }
    }

    /**
     * Update general basics settings.
     * 更新常规设置中的基础设置
     * 
     * @param Request $request 经过基础设置验证&过滤的数据表单
     * @author Cali & Tim
     */
    public static function saveGeneralBasicsSettings($request)
    {
        if ((! ! site('registrationOn')) ^ $on = ($request->input('registration') === 'yes')) {
            static::registrationOn($on ? '1' : '0');
        }

        static::massiveUpdate($request->except(['_token', 'registration']));
        env_put('ADMIN_EMAIL', $request->input('admin_email'));
    }

    /**
     * Update general seo settings.
     * 更新常规设置中的seo设置
     *
     * @param Request $request 经过seo表单验证的数据
     * @author Cali & Tim
     */
    public static function saveGeneralSeoSettings($request)
    {
        if (($keywords = implode(',', $request->input('site_keywords'))) != site('keywords')) {
            static::keywords($keywords);
        }
        if (($ignoreUris = implode(',', $request->input('site_robot_ignores'))) != site('siteRobotIgnores')) {
            static::siteRobotIgnores($ignoreUris);
        }

        static::massiveUpdate($request->only(['site_separator', 'site_description']));
    }

    /**
     * Save oAuth settings.
     *
     * @param         $service
     * @param Request $request
     * @author Cali
     */
    public static function saveServicesOAuthSettings($service, Request $request)
    {
        if (($on = $request->input('on', 'off') == 'on' ? 1 : 0) != site("{$service}On")) {
            static::__callStatic("{$service}On", [$on]);
        }

        $service = strtoupper($service);

        env_put("{$service}_ID", trim($request->input('app_id')), true);
        env_put("{$service}_SECRET", trim($request->input('app_secret')));
        env_put("{$service}_REDIRECT", trim($request->input('redirect')));
    }

    /**
     * Save email settings.
     *
     * @param Request $request
     * @author Cali
     */
    public static function saveServicesSMTPSettings(Request $request)
    {
        $attributes = $request->except(['_token', 'on']);

        if (($on = $request->input('on', 'off') == 'on' ? 1 : 0) != site('smtpEmailOn')) {
            static::__callStatic("smtpEmailOn", [$on]);
        }

        foreach ($attributes as $attribute => $value) {
            env_put(strtoupper($attribute), trim($value));
        }
    }

    /**
     * Save pusher settings.
     *
     * @param Request $request
     * @author Cali
     */
    public static function saveServicesPushSettings(Request $request)
    {
        if (($on = $request->input('on', 'off') == 'on' ? 1 : 0) != site('pusherOn')) {
            static::__callStatic("pusherOn", [$on]);
        }

        env_put("PUSHER_APP_ID", trim($request->input('app_id')), true);
        env_put("PUSHER_KEY", trim($request->input('key')));
        env_put("PUSHER_SECRET", trim($request->input('secret')));
    }

    /**
     * Assign massive attributes at the same time.
     *
     * @param array $attributes
     * @author Cali
     */
    public static function massiveUpdate(array $attributes)
    {
        foreach ($attributes as $key => $value) {
            if ($value !== site(camel_case($key))) {
                static::__callStatic(camel_case($key), [$value]);
            }
        }
    }

    /**
     * Initial setup for migration.
     * 
     * @author Cali
     */
    public static function initialSetup()
    {
        static::siteTitle("创学");
        static::description(".");
        static::siteMotto("一家集众人之智的民间学堂.");
        static::separator("::");
        static::keywords("创学");
        static::siteRobotIgnores("admin");
        static::adminIgnoresMaintenance("1");
        static::adminEmail(env('ADMIN_EMAIL'));
        static::registrationOn("1");
        static::smtpEmailOn("0");
        static::forceSsl("0");
        static::subDomainNameExclusions("avatars");
        static::supportedOAuths("qq", "weibo", "weixin", "google", "facebook");
        static::company("创学教育有限公司");
        static::icp("粤ICP备16047320号-1");
    }
}