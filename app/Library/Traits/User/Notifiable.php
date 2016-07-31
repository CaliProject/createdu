<?php

namespace Createdu\Library\Traits\User;

use Createdu\Notification;

trait Notifiable {

    /**
     * Get all the notifications.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * Get all the unread notifications.
     *
     * @return mixed
     */
    public function unreadNotifications()
    {
        return $this->notifications()->whereRead(false)->latest();
    }

    /**
     * Get the inbox only notifications.
     *
     * @return mixed
     */
    public function inboxNotifications()
    {
        return $this->unreadNotifications()->take(25)->get();
    }

    /**
     * Quick getter for unread count.
     *
     * @return mixed
     */
    public function getUnreadAttribute()
    {
        return $this->unreadNotifications()->count() >= 100 ? '99+' : $this->unreadNotifications()->count();
    }
}