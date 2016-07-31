<?php

namespace Createdu\Events;

interface ShouldNotifySlack {

    /**
     * Get the message ready to send to slack.
     *
     * @return mixed
     */
    public function getSlackMessage();

    /**
     * Whether we should have attachment or not.
     *
     * @return mixed
     */
    public function shouldAttach();
}