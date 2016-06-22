<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class UserMeta extends Model {

    /**
     * Mass assignable attributes.
     * 
     * @var array
     */
    protected $fillable = [
        'key', 'value'
    ];

    /**
     * No incremental id.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The user it belongs to
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author Cali
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
