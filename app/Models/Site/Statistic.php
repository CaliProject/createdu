<?php

namespace Createdu;

use DB;
use Location;
use Carbon\Carbon;
use Jenssegers\Agent\Agent;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Createdu\Library\Traits\Model\TimeSortable;

class Statistic extends Model {

    use TimeSortable;

    /**
     * Every attribute but id is mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Call dynamic method by string.
     *
     * @param $expression
     * @return mixed
     *
     * @author Cali
     */
    public static function callByExpression($expression, $params = [])
    {
        $parameters = [];
        array_push($parameters, $params);

        return static::__callStatic(camel_case($expression), $parameters);
    }

    /**
     * Record the visitation.
     *
     * @param Request $request
     * @author Cali
     */
    public static function visited(Request $request)
    {
        $userAgent = new Agent();
        $location = Location::get();

        static::create([
            'referer'  => url()->previous(),
            'uri'      => $request->path(),
            'browser'  => $userAgent->browser(),
            'platform' => $userAgent->platform(),
            'device'   => $userAgent->device(),
            'mobile'   => ! $userAgent->isDesktop(),
            'ip'       => $location->ip,
            'country'  => $location->isoCode,
            'city'     => $location->cityName,
            'robot'    => $userAgent->isRobot() ? $userAgent->robot() : null,
            'user_id'  => $request->user() ? $request->user()->id : null
        ]);
    }

    /**
     * Magically call the methods.
     *
     * @param $name
     * @param $arguments
     * @return mixed
     * 
     * @author Cali
     */
    public function __call($name, $arguments)
    {
        $class = strtoupper(substr($name, 0, 1)) . substr($name, 1);
        
        $class = __NAMESPACE__ . '\\' . str_singular($class);
        
        if (class_exists($class)) {
            if (count($arguments)) {
                return call_user_func_array([$class, camel_case($arguments[0])], [])->count();
            } else {
                return $class::count();
            }
        }

        return parent::__call($name, $arguments);
    }
    
    /**
     * Get new users count by the sorting method.
     *
     * @param       $method
     * @param array $params
     * @return int
     *
     * @author Cali
     */
    public static function newUsers($method = 'today', $params = [])
    {
        return call_user_func_array([new User, camel_case($method)], $params)->count();
    }

    /**
     * Get the ratio for new users.
     *
     * @param int $count
     * @return float
     *
     * @author Cali
     */
    public static function newUsersRatio($count)
    {
        return ($count / User::count()) * 100;
    }

    /**
     * Get a specific scope page views.
     *
     * @param string $method
     * @param array  $params
     * @return int
     *
     * @author Cali
     */
    public static function pageViews($method = 'today', $params = [])
    {
        return call_user_func_array([new static, camel_case($method)], $params)->count();
    }

    /**
     * Get the ratio for page views.
     *
     * @param int $count
     * @return float
     *
     * @author Cali
     */
    public static function pageViewsRatio($count)
    {
        if ($count || static::count())
            return ($count / static::count()) * 100;
    }

    /**
     * 获取（今日）新课程的数量
     * 
     * @param string $method
     * @param array $params
     * @return mixed
     * @author Tim
     */
    public static function newCourses($method = 'today', $params = [])
    {
        return call_user_func_array([new Course, camel_case($method)], $params)->count();
    }

    /**
     * 获取新课程的所占百分比
     * 
     * @param $count
     * @return float
     * @author Tim
     */
    public static function newCoursesRatio($count)
    {
        return $count ? ($count / Course::count()) * 100 : 0;
    }

    /**
     * 获取（今日）新文章的数量
     *
     * @param string $method
     * @param array $params
     * @return mixed
     * @author Tim
     */
    public static function newPosts($method = 'today', $params = [])
    {
        return call_user_func_array([new Post, camel_case($method)], $params)->count();
    }

    /**
     * 获取新文章所占百分比
     *
     * @param $count
     * @return float|int
     * @author Tim
     */
    public static function newPostsRatio($count)
    {
        return $count ? ($count / Post::count()) * 100 : 0;
    }

    /**
     * 获取（今日）新评论的数量
     *
     * @param string $method
     * @param array $params
     * @return mixed
     * @author Tim
     */
    public static function newComments($method = 'today', $params = [])
    {
        return call_user_func_array([new Comment, camel_case($method)], $params)->count();
    }

    /**
     * 获取新评论所占百分比
     *
     * @param $count
     * @return float|int
     * @author Tim
     */
    public static function newCommentsRatio($count)
    {
        return $count ? ($count / Comment::count()) * 100 : 0;
    }


    /**
     * Get the unique visitors (UV).
     * 
     * @param string $method
     * @param array  $params
     * @return mixed
     * 
     * @author Cali
     */
    public static function uniqueVisitors($method = 'today', $params = [])
    {
        return call_user_func_array([new static, camel_case($method)], $params)
            ->select('user_id')
            ->where('user_id', '!=', 'null')
            ->distinct()
            ->get()->count();
    }

    /**
     * Get the unique ips.
     * 
     * @param string $method
     * @param array  $params
     * @return mixed
     * 
     * @author Cali
     */
    public static function uniqueIPs($method = 'today', $params = [])
    {
        return call_user_func_array([new static, camel_case($method)], $params)
            ->select('ip')
            ->where('ip', '!=', 'null')
            ->distinct()
            ->get()->count();
    }

    /**
     * Get the total page views.
     *
     * @return int
     * @author Cali
     */
    public static function totalPageViews()
    {
        return static::count();
    }

    /**
     * Get the total user count.
     *
     * @return int
     * @author Cali
     */
    public static function totalUsers()
    {
        return User::count();
    }

    /**
     * 获取文章总数
     *
     * @return int
     * @author Tim
     */
    public static function totalPosts()
    {
        return Post::count();
    }

    /**
     * 获取课程总数
     *
     * @return int
     * @author Tim
     */
    public static function totalCourses()
    {
        return Course::count();
    }

    /**
     * Get the total comment count.
     *
     * @return int
     * @author Cali
     */
    public static function totalComments()
    {
        return Comment::count();
    }

    /**
     * Get the most browser.
     *
     * @return mixed
     * @author Cali
     */
    public static function mostBrowser()
    {
        return self::getMostRecord('browser', true);
    }

    /**
     * Get the most platform.
     *
     * @return mixed
     * @author Cali
     */
    public static function mostPlatform()
    {
        return self::getMostRecord('platform', true);
    }

    /**
     * Get the most city.
     *
     * @return mixed
     * @author Cali
     */
    public static function mostCity()
    {
        return self::getMostRecord('city', true);
    }

    /**
     * Get the most device.
     *
     * @return mixed
     * @author Cali
     */
    public static function mostDevice()
    {
        return self::getMostRecord('device');
    }

    /**
     * Get the most uri.
     *
     * @return mixed
     * @author Cali
     */
    public static function mostUri()
    {
        return self::getMostRecord('uri');
    }

    /**
     * Get a most record.
     *
     * @param      $column
     * @return mixed
     * @author Cali
     */
    protected static function getMostRecord($column)
    {
        return static::select(DB::raw("count({$column}) as count, {$column} as name"))
            ->groupBy($column)->orderBy('count', 'desc')->first();
    }

    /**
     * Get top eight records in the database.
     *
     * @param $column
     * @return mixed
     *
     * @author Cali
     */
    public static function getTopFive($column)
    {
        return static::getTop($column);
    }

    /**
     * Get the top records by the given limit.
     *
     * @param      $column
     * @param int  $take
     * @param bool $no_bots
     * @return mixed
     *
     * @author Cali
     */
    public static function getTop($column, $take = 5, $no_bots = true)
    {
        $totalRecords = static::count();
        $query = static::select(DB::raw("count({$column}) as count, {$column} as name"));

        if ($no_bots) {
            $query->whereNull('robot');
        }

        $records = $query->groupBy($column)->orderBy('count', 'desc')->take($take)->get();

        foreach ($records as $record) {
            $record->ratio = floor(($record->count / $totalRecords) * 100);
        }

        return $records;
    }

    /**
     * Get visitor statistics in the past week.
     * For rendering charts in view.
     * 
     * @return array
     * @author Cali
     */
    public static function visitorsStats()
    {
        $visitors = [];
        $dates = [];
        for ($i = 1; $i > -6; $i--) {
            array_push($visitors, [
                abs(5 + $i), static::whereBetween((new static)->getTimeColumn(),
                    [Carbon::today()->addDays($i - 1), $i === 1 ? Carbon::now() : Carbon::today()->addDays($i)])->count()
            ]);
            array_push($dates, [
                abs(5 + $i), $i === 1 ? trans('locales.dates.today') : Carbon::today()->addDays($i - 1)->diffForHumans()
            ]);
        }
        
        return [
            'visitors' => array_reverse($visitors),
            'dates' => array_reverse($dates)
        ];
    }
}