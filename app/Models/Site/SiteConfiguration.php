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
     * Initial setup for migration.
     * 
     * @author Cali
     */
    public static function initialSetup()
    {
        static::siteTitle("创学");
        static::description(".");
        static::separator("::");
        static::keywords("创学");
        static::siteRobotIgnores("admin");
        static::adminIgnoresMaintenance("1");
        static::adminEmail(env('ADMIN_EMAIL'));
        static::registrationOn("1");
        static::smtpEmailOn("0");
        static::forceSsl("0");
        static::subDomainNameExclusions("avatars");
    }
}