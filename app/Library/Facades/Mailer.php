<?php

namespace Createdu\Library\Facades;

use Illuminate\Support\Facades\Facade;

class Mailer extends Facade {

    /**
     * Get the registered name of the component.
     *
     * @return mixed
     */
    protected static function getFacadeAccessor()
    {
        return \Createdu\Library\Models\Mailer::class;
    }
}