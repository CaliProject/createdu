<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;
use Createdu\Library\Traits\Model\TimeSortable;

class Course extends Model
{
    use TimeSortable;

    /**
     * 不允许注入属性
     * 
     * @var array
     */
    protected $guarded = ['_token','_method'];

    /**
     * 分页显示条数
     * 
     * @var int
     */
    protected $perPage = 35;
}
