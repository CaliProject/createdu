<?php

namespace Createdu\Library\Traits\User;

use Createdu\Role;

trait HasRoles {

    /**
     * The user's roles.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
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
        if (! $this->hasRole($role)) {
            if (is_string($role)) {
                $role = Role::whereName($role)->first();
            }

            $this->roles()->save($role);
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
        // If we have any role.
        if (! is_null($this->roles)) {
            if ($role instanceof Role) {
                return $this->roles->contains($role->primaryKey, $role->id);
            } elseif (is_string($role)) {
                return $this->roles->contains(Role::name, $role);
            } else {
                return ! ! $role->intersect($this->roles)->count();
            }
        } else {
            return false;
        }
    }
}