<?php

namespace Createdu\Events;

interface ShouldNotify {

    /**
     * Get notification attributes.
     *
     * @return mixed
     */
    public function getNotification();

    /**
     * Store the related user.
     *
     * @return mixed
     */
    public function user();
}