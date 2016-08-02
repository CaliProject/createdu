<?php

namespace Createdu\Library\Traits\User;

trait HasExtraAttributes {

    /**
     * Get appropriate attributes for registration.
     *
     * @param $attributes
     * @return array
     *
     * @author Cali
     */
    private static function getRegisterAttributes($attributes)
    {
        $attributes['password'] = bcrypt($attributes['password']);

        return $attributes;
    }

    /**
     * Get the phone number. (Decrypted)
     *
     * @return null|string
     */
    public function getTelAttribute()
    {
        $tel = $this->attributes['tel'];

        return empty($tel) ? null : \Crypt::decrypt($tel);
    }

    /**
     * Set the phone number. (Auto-encrypted)
     *
     * @param $value
     */
    public function setTelAttribute($value)
    {
        $this->attributes['tel'] = \Crypt::encrypt($value);
    }

    /**
     * Get user's gender attribute.
     *
     * @return mixed
     */
    public function getGenderAttribute()
    {
        $gender = $this->meta('gender');
        if ($gender && in_array($gender, static::GENDER_TYPES)) {
            return $gender;
        }

        return static::GENDER_TYPES[0];
    }

    /**
     * Set user's gender.
     *
     * @param $value
     */
    public function setGenderAttribute($value)
    {
        if (in_array(strtolower($value), static::GENDER_TYPES)) {
            $this->meta('gender', strtolower($value));
        }
    }

    /**
     * Get user's description.
     *
     * @return bool|object|string
     */
    public function getDescriptionAttribute()
    {
        if ($description = $this->meta('description')) {
            return $description;
        }

        return '';
    }

    /**
     * Set user's description.
     *
     * @param $value
     */
    public function setDescriptionAttribute($value)
    {
        $this->meta('description', trim($value));
    }
}