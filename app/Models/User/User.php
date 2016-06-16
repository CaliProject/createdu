<?php

namespace Createdu;

use Createdu\Library\Traits\User\Sociable;
use Createdu\Library\Traits\User\UserMetas;
use Createdu\Library\Traits\Model\TimeSortable;
use Createdu\Library\Traits\User\AvatarControls;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /*
    |------------------------------------------------------------
    | User Model Class
    | 用户 模型类
    |------------------------------------------------------------
    | 
    | @author Cali
    |
    */
    
    use Sociable, TimeSortable, AvatarControls, UserMetas;

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
     * Assign a role to a user.
     *
     * @param int $role
     * @return $this
     * @author Cali
     */
    public function assignRole($role = Role::DEFAULT_ROLE)
    {
        if ($role instanceof Role) {
            $this->roles()->attach($role->id);
        }
        if (is_string($role)) {
            $role = Role::where('name', $role)->first();
            $this->roles()->attach($role->id);
        } else {
            $this->roles()->attach($role);
        }

        return $this;
    }

    /**
     * Check if has a role.
     *
     * @param $role
     * @return bool
     *
     * @author Cali
     */
    public function hasRole($role)
    {
        if ($role instanceof Role) {
            return ! ! $this->roles()
                ->where($role->primaryKey, $role->id)
                ->first();
        }

        // If a string given
        return ! ! $this->roles()->where(Role::name, $role)->first();
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
            'avatarUrl' => $this->avatarUrl
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
}
