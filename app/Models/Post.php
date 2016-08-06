<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;
use Createdu\Library\Traits\Model\TimeSortable;

class Post extends Model
{
    use TimeSortable;

    protected $guarded = ['_token','_method'];
}
