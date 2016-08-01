<?php

namespace Createdu;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model {

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
        return array_merge($this->toArray(), $this->extraAttributes());
    }

    /**
     * Get the extra attributes.
     *
     * @return array
     */
    public function extraAttributes()
    {
        return [
            'time' => $this->created_at->toIso8601String()
        ];
    }

    /**
     * Read the notification.
     *
     * @return bool
     */
    public function read()
    {
        $this->read = true;

        return $this->save();
    }
}
