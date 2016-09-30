<?php

namespace Createdu\Http\Middleware;

use Closure;

class CheckForInvitation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! site('registrationOn')) {
            if ($request->user() != null) {
                return redirect()->route('sign-in');
            } else {
                return $next($request);
            }
        }

        return false;
    }
}
