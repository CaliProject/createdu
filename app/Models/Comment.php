<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;
use Createdu\Library\Traits\Model\TimeSortable;

class Comment extends Model
{
    use TimeSortable;
}
