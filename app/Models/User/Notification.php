<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{

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
