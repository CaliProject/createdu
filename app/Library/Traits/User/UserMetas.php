<?php

namespace Createdu\Library\Traits\User;

trait UserMetas {

    /**
     * Get or set the user's meta.
     *
     * @param      $key
     * @param null $value
     * @return bool|string|object
     *
     * @author Cali
     */
    public function meta($key, $value = null, $new = false)
    {
        $meta = $this->metas()->whereKey($key)->first();

        if ($value) {
            if (! $meta) {
                $meta = $this->metas()->create(compact('key', 'value'));
            } else {
                if ($new) {
                    $this->metas()->create(compact('key', 'value'));
                } else {
                    $this->metas()->whereKey($key)->update(compact('value'));
                }
            }
        }

        return is_null($meta) ? false : (json_decode($meta->value) ?: $meta->value);
    }

    /**
     * Helper reader method for metas.
     *
     * @param      $key
     * @param      $property
     * @param bool $default
     * @return bool
     *
     * @author Cali
     */
    public function metaReader($key, $property, $default = false)
    {
        $meta = $this->meta($key);

        if ($meta) {
            return property_exists($meta, $property) ? $meta->{$property} : $default;
        } else {
            return $default;
        }
    }
}