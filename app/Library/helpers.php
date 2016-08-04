<?php

/**
 * Environment file not found.
 */
const ENV_NOT_FOUND = - 1;

/**
 * Environment file is not writable.
 */
const ENV_DENIED = - 2;

/**
 * Environment file updated.
 */
const ENV_UPDATED = 1;

/**
 * Verification code expire time.
 */
const VERIFICATION_EXPIRE_MINUTES = 10;

/**
 * Verification cache key.
 */
const CACHE_KEY = "user-%s-tel-verify";

if (! function_exists('env_put')) {
    /**
     * Store or update an environment variable.
     *
     * @param      $key
     * @param      $value
     * @param bool $new_line
     * @return int
     *
     * @author Cali
     */
    function env_put($key, $value, $new_line = false)
    {
        $path = base_path('.env');
        $key = strtoupper($key);

        if (str_contains($value, " ")) {
            $value = str_replace(" ", "-", $value);
        }

        if (file_exists($path)) {
            $content = $new_line ? "\n\r{$key}={$value}" : "\n{$key}={$value}";

            if (is_null(env($key))) {
                try {
                    file_put_contents($path, $content, FILE_APPEND);
                } catch (Exception $e) {
                    return ENV_DENIED;
                }
            } else {
                $content = str_replace($new_line ? "\n\r" : "\n", "", $content);

                $v = env($key);
                if (is_bool($v)) {
                    $v = strval($v ? 'true' : 'false');
                }

                try {
                    file_put_contents($path,
                        str_replace("{$key}={$v}", $content, file_get_contents($path))
                    );
                } catch (Exception $e) {
                    return ENV_DENIED;
                }
            }

            return ENV_UPDATED;
        }

        return ENV_NOT_FOUND;
    }
}

if (! function_exists('site')) {
    /**
     * Helper for getting the site configuration.
     *
     * @param $name
     * @return string|null|bool
     *
     * @author Cali
     */
    function site($name)
    {
        $site = app('Site');

        return call_user_func_array([$site, $name], []);
    }
}

if (! function_exists('resize_avatar')) {
    /**
     * Resize avatar by the given path.
     *
     * @param $path
     * @return bool
     *
     * @author Cali
     */
    function resize_avatar($path, $width, $height, $x, $y)
    {
        switch (getimagesize($path)['mime']) {
            case 'image/gif':
                $source_image = imagecreatefromgif($path);
                break;
            case 'image/jpeg':
                $source_image = imagecreatefromjpeg($path);
                break;
            case 'image/png':
                $source_image = imagecreatefrompng($path);
                break;
        }

        $cropped_image = imagecreatetruecolor($width, $height);
        imagecopy($cropped_image, $source_image, 0, 0,
            $x, $y, $width, $height);

        $resized_avatar = imagejpeg($cropped_image, $path);

        imagedestroy($source_image);
        imagedestroy($cropped_image);

        return $resized_avatar;
    }
}

if (! function_exists('root_domain')) {
    /**
     * Get the root domain of the url.
     *
     * @param $url
     * @return string
     *
     * @author Cali
     */
    function root_domain($url = null)
    {
        $url = $url ?: config('app.url');
        if (preg_match('%[^:\.\/]+(?:(?<ext>\.(?:com|net|org|edu|gov|biz|tv|me|pro|name|cc|co|info|cm|dev))|(?<ctr>\.(?:cn|us|hk|tw|uk|it|fr|br|in|de))|\k<ext>\k<ctr>)+$%i', $url, $match)) {
            return $match[0];
        }

        return $url;
    }
}

if (! function_exists('request_is_route')) {
    /**
     * Detect if the request belongs to the given route.
     *
     * @param       $route
     * @param array $attributes
     * @param bool  $all
     * @return bool
     * 
     * @author Cali
     */
    function request_is_route($route, $attributes = [], $all = false)
    {
        return request()->is(substr(route($route, $attributes, false), 1) . ($all ? '*' : ''));    
    }
}

if (! function_exists('sms')) {
    /**
     * Send sms verification.
     *
     * @param $to
     * @param $template
     * @param $params
     * @return mixed
     *
     * @author Cali
     */
    function sms($to = null, $params = null, $template = null)
    {
        if (Auth::guest())
            return false;

        $template = $template ?: 1;
        $params = $params ?: [generate_verification(), VERIFICATION_EXPIRE_MINUTES];
        $to = $to ?: Auth::user()->tel;

        return SMS::sendTemplateMessage($template, $params, $to);
    }
}

if (! function_exists('generate_verification')) {
    /**
     * Generate verification code.
     *
     * @return int
     * @author Cali
     */
    function generate_verification()
    {
        $code = random_int(1000, 9999);

        Cache::put(sprintf(CACHE_KEY, Auth::id()), $code, VERIFICATION_EXPIRE_MINUTES);

        return $code;
    }
}

if (! function_exists('sms_validate')) {
    /**
     * Validate sms verification code.
     *
     * @param null $key
     * @return bool
     *
     * @author Cali
     */
    function sms_validate($code, $key = null)
    {
        $key = $key ?: sprintf(CACHE_KEY, Auth::id());

        if ($code == Cache::get($key)) {
            Cache::forget($key);

            return true;
        }

        return false;
    }
}

if (! function_exists('random_trans')) {
    /**
     * Get a random translation line.
     *
     * @param       $key
     * @param array $data
     * @return mixed
     *
     * @author Cali
     */
    function random_trans($key, $data = [])
    {
        if (is_string(trans($key))) {
            return trans($key, $data);
        }

        $keys = array_keys(trans($key));
        $key = $key . '.' . $keys[random_int(0, count($keys) - 1)];

        return trans($key, $data);
    }
}