<?php

namespace Createdu\Library\Traits\User;

use Createdu\Media;

trait MediaControls {

    /**
     * Media relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function media()
    {
        return $this->hasMany(Media::class);
    }
}