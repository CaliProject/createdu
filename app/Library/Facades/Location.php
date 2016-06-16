<?php

namespace Createdu\Library\Facades;

use Illuminate\Support\Facades\Facade;

class Location extends Facade {

    /**
     * {@inheritdoc}
     */
    protected static function getFacadeAccessor()
    {
        return \Createdu\Library\Models\Location::class;
    }
}