<?php

namespace Createdu;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Message extends Model {

    /**
     * {@inheritdoc}
     * @var int
     */
    protected $perPage = 15;

    /**
     * {@inheritdoc}
     * @var array
     */
    protected $fillable = [
        'content', 'metas', 'read'
    ];

    /**
     * {@inheritdoc}
     * @var array
     */
    protected $hidden = [
        'updated_at'
    ];

    /**
     * Set 'to' user.
     *
     * @param User $user
     * @return $this
     */
    public function to(User $user)
    {
        $this->to_user_id = $user->id;

        return $this;
    }

    /**
     * Set 'from' user.
     *
     * @param User $user
     * @return $this
     */
    public function from(User $user)
    {
        $this->from_user_id = $user->id;

        return $this;
    }

    /**
     * Insert message and metas.
     *
     * @param array $attr
     * @param null  $metas
     * @return $this
     */
    public function said($attr = [], $metas = null)
    {
        $this->save();
        $this->update($attr);

        if ($metas)
            $this->metas = $metas;

        return $this;
    }

    /**
     * {@inheritdoc}
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return array_merge($this->attributesToArray(), $this->extraSerializeAttributes());
    }

    /**
     * Getter for `metas` attribute.
     *
     * @return mixed
     */
    public function getMetasAttribute()
    {
        return isset($this->attributes['metas']) && !is_null($this->attributes['metas']) ? unserialize($this->attributes['metas']) : null;
    }

    /**
     * Setter for `metas` attribute.
     *
     * @param $value
     */
    public function setMetasAttribute($value)
    {
        $this->attributes['metas'] = serialize($value);
        $this->save();
    }

    /**
     * Get the extra serialize attributes.
     *
     * @return array
     * @author Cali
     */
    protected function extraSerializeAttributes()
    {
        return [
            'time' => $this->getDynamicTime()
        ];
    }

    /**
     * Get dynamic time based on the current time.
     *
     * @return mixed
     */
    protected function getDynamicTime()
    {
        $days = Carbon::now()->diffInDays($this->created_at);

        if (! $days) {
            return $this->created_at->format('H:i');
        } elseif ($days >= 1 && $days <= 30) {
            switch ($days) {
                case 1:
                    return $this->created_at->format(trans('locales.dates.yesterday') . " H:i");
                case 2:
                case 3:
                case 4:
                case 5:
                    return $this->created_at->format(trans('locales.dates.days-ago', compact('days')) . ' H:i');
                default:
                    return $this->created_at->format('m-d H:i');
            }
        } else {
            return $this->created_at->format('Y-m-d H:i');
        }
    }
}
