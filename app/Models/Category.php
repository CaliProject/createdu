<?php

namespace Createdu\Models;

use Createdu\Course;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];
    
    protected $table = 'categories';
    
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
