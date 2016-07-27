<?php

namespace Createdu;

use Createdu\Library\Traits\User\HasRoles;
use Createdu\Library\Traits\User\Sociable;
use Createdu\Library\Traits\User\UserMetas;
use Createdu\Library\Traits\Model\TimeSortable;
use Createdu\Library\Traits\User\AvatarControls;
use Createdu\Events\User\Auth\UserHasRegistered;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable {

    /*
    |------------------------------------------------------------
    | User Model Class
    | 用户 模型类
    |------------------------------------------------------------
    | 
    | @author Cali
    |
    */

    use Sociable, TimeSortable, AvatarControls, UserMetas, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * How many items to display per page.
     * 
     * @var int
     */
    protected $perPage = 35;

    /**
     * Registers the user.
     *
     * @param      $attributes
     * @param null $social_info
     * @param bool $fire
     * @return static
     *
     * @event UserHasRegistered
     * @author Cali
     */
    public static function register($attributes, $social_info = null, $fire = true)
    {
        if (is_null($social_info)) {
            $user = self::create(
                self::getRegisterAttributes($attributes)
            );
        } else {
            $user = static::create($attributes);
            // Store for future authentication
            $user->social_info = $social_info;

            $user->saveRemoteAvatar($attributes['avatar'])
                ->save();
        }

        $user->assignRole();

        if ($fire) {
            event(new UserHasRegistered($user));
        }

        return $user;
    }

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
     * Create an admin account.
     *
     * @param $attributes
     * @return User
     * @author Cali
     */
    public static function createAdmin($attributes)
    {
        $admin = static::register($attributes, null, false);
        $admin->assignRole('administrator');
        $admin->activated();

        return $admin;
    }

    /**
     * Set the user active.
     *
     * @return $this
     * @author Cali
     */
    public function activated()
    {
        if (! $this->active) {
            $this->active = true;
            $this->save();

            return $this;
        }

        return $this;
    }

    /**
     * {@inheritdoc}
     * @author Cali
     */
    public function jsonSerialize()
    {
        $attributes = $this->attributesToArray();

        return array_merge($attributes, $this->extraSerializeAttributes());
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
            'avatarUrl' => $this->avatarUrl,
            'checkedIn' => $this->checkedIn()
        ];
    }

    /**
     * If the user is an admin.
     *
     * @return bool
     * @author Cali
     */
    public function isAdmin()
    {
        return $this->hasRole('administrator');
    }

    /**
     * User's metas.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function metas()
    {
        return $this->hasMany(UserMeta::class);
    }

    /**
     * Helper for admin theme setting metas.
     *
     * @param        $key
     * @param string $property
     * @param bool   $default
     * @return bool
     *
     * @author Cali
     */
    public function adminThemeSettingMeta($key, $property = 'value', $default = false)
    {
        return $this->metaReader($key, $property, $default);
    }

    /**
     * Change the admin theme setting.
     *
     * @param array $attribute
     * @author Cali
     */
    public function changeAdminThemeSetting(array $attribute)
    {
        $value = json_encode([
            'type'  => $attribute['type'],
            'value' => $attribute['value']
        ]);

        $this->meta('admin.theme.' . $attribute['type'], $value);
    }

    /**
     * Change the admin theme color.
     *
     * @param array $attribute
     * @author Cali
     */
    public function changeAdminThemeColor(array $attribute)
    {
        $value = json_encode([
            'theme' => $attribute['theme'],
            'color' => $attribute['color']
        ]);

        $this->meta('admin.theme', $value);
    }

    /**
     * Search users by the keyword.
     *
     * @param $query
     * @param $keyword
     * @return mixed
     *
     * @author Cali
     */
    public static function scopeSearch($query, $keyword)
    {
        return $query->where('name', 'like', "%{$keyword}%")
            ->orWhere('email', 'like', "%{$keyword}%");
    }

    /**
     * See if the user has checked in today.
     *
     * @return boolean
     */
    public function checkedIn()
    {
        /** @var null|UserMeta $latestCheck */
        $latestCheck =  $this->metas()->whereKey('check_in')->latest()->first();

        return is_null($latestCheck) ? false : $latestCheck->created_at->isToday();
    }

    /**
     * Check in the user.
     *
     * @return bool|object|string|null
     */
    public function checkIn()
    {
        if (! $this->checkedIn()) {
            /* TODO: Change to settable dynamic amount */
            $this->credit(20);

            return $this->meta('check_in', 'checked', true);
        }
    }

    /**
     * Set or get the user's credit.
     *
     * @param null $amount
     * @return mixed|int
     */
    public function credit($amount = null)
    {
        if (is_null($amount)) {
            return $this->getAttribute('credit');
        } else {
            return $this->increment('credit', intval($amount));
        }
    }

    /**
     * Get user's profile link.
     *
     * @return string
     */
    public function profileLink()
    {
        return route('users.profile', ['user' => $this->name], false);
    }

    /**
     * Get the readable formatted credit.
     *
     * @return string
     */
    public function readableCredit()
    {
        return number_format($this->credit());
    }

    /**
     * Get the readable formatted experience.
     *
     * @return string
     */
    public function readableExp()
    {
        return number_format($this->experience);
    }
}
