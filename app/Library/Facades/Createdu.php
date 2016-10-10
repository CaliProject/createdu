<?php
namespace Createdu\Library\Facades;

use Illuminate\Support\Facades\Facade;

class Createdu extends Facade {
    
    protected static function getFacadeAccessor()
    {
        return \Createdu\Library\Models\Createdu::class;
    }
}