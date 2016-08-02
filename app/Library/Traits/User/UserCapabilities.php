<?php

namespace Createdu\Library\Traits\User;

use Createdu\Library\Traits\Model\TimeSortable;

trait UserCapabilities {

    use Sociable, TimeSortable, AvatarControls, UserMetas, HasRoles, Notifiable, HasExtraAttributes;

}