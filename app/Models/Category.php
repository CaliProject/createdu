<?php

namespace Createdu\Models;

use Createdu\Course;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * 守卫变量
     * @var array
     */
    protected $guarded = [

    ];

    /**
     * 一个category可以有多个course
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
