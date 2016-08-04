<?php

namespace Createdu\Http\Middleware;

use Closure;
use Createdu\Statistic;

class RecordStatistics {

    protected $excludes = [
        ['route' => 'users.avatar', 'all' => true],
    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (strtoupper($request->method()) === 'GET') {
            if ($this->filterAdmin() && $this->filterExclusions()) {
                Statistic::visited($request);
            }
        }

        return $next($request);
    }

    /**
     * Filter excluded paths that is unnecessary to record in statistics.
     *
     * @return bool
     *
     * @author Cali
     */
    protected function filterExclusions()
    {
        foreach ($this->excludes as $exclude) {
            if ($exclude['all']) {
                if (request_is_route($exclude['route'], [], true)) {
                    return false;
                }
            } else {
                if (request_is_route($exclude['route'])) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Filter all admin uris.
     *
     * @return bool
     *
     * @author Cali
     */
    protected function filterAdmin()
    {
        if (str_contains(request()->url(), route('admin.index'))) {
            return false;
        }

        return true;
    }
}
