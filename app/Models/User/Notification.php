<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    const NORMAL_TYPE = 'normal';

    const CREDIT_TYPE = 'credit';

    const EXP_TYPE = 'experience';

    const USER_TYPE = 'user';

    const ANNOUNCEMENT_TYPE = 'announcement';

    const PROFILE_TYPE = 'profile';

    /**
     * Fillable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'type', 'content'
    ];

    /**
     * Hidden attributes.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'updated_at'
    ];

    /**
     * {@inheritdoc}
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return array_merge($this->toArray(), [
            'time' => $this->created_at->diffForHumans()
        ]);
    }
}
