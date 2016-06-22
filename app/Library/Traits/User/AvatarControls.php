<?php

namespace Createdu\Library\Traits\User;

use Createdu\Avatar;

trait AvatarControls {

    /**
     * The user's avatars
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author Cali
     */
    public function avatars()
    {
        return $this->hasMany(Avatar::class);
    }

    /**
     * Fetch the latest avatar.
     *
     * @return mixed
     * @author Cali
     */
    public function avatar()
    {
        return $this->avatars()->latest()->first();
    }
    
    /**
     * Fetch the latest local avatar.
     *
     * @return mixed
     * @author Cali
     */
    public function localAvatar()
    {
        return $this->avatars()->latest()->where('type', Avatar::TYPE_LOCAL)->first();
    }

    /**
     * Get the current avatar version number.
     *
     * @return int
     * @author Cali
     */
    public function avatarVersion()
    {
        return $this->avatars()->where('type', Avatar::TYPE_LOCAL)->count();
    }

    /**
     * Get versioned avatar.
     *
     * @param $ver
     * @return mixed
     * @author Cali
     */
    public function avatarWithVersion($ver)
    {
        return $this->avatars()->where('type', Avatar::TYPE_LOCAL)
            ->skip(abs($ver - 1))->take(1)->first() ?: $this->localAvatar();
    }

    /**
     * Fetch the user's avatar url.
     *
     * @return string
     *
     * @author Cali
     */
    public function getAvatarUrlAttribute()
    {
        if ($this->avatars()->count() === 0) {
            return Avatar::defaultUrl();
        }

        return $this->avatar()->type === Avatar::TYPE_LOCAL ?
            route('users.avatar', ['user' => $this->id, 'v' => $this->avatarVersion()]) :
            $this->avatar()->src;
    }
}