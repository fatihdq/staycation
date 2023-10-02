<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 2 means admin lodge
        // 3 means sub account for lodgeadmin
        if($request->user()->role === 2 || $request->user()->role === 3){
            return $next($request);
        };

        return redirect('/');
    }
}
