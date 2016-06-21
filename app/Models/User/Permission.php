<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model {

    /*
     |------------------------------------------------------------
     | Permission Model
     |------------------------------------------------------------
     |
     | Permissions to be granted in order to do something
     |
     | @author Cali
     |
     */

    /**
     * Fillable attributes.
     * 
     * @var array
     */
    protected $fillable = [
        'name', 'label'    
    ];
    
    /**
     * Get the default permissions.
     * 
     * @return array
     */
    public static function defaultPermissions()
    {
        return [
            'view-dashboard'  => 'Visit admin dashboard page',
            'manage-users'    => 'Manage registered users',
            'change-settings' => '',
            'publish-posts'   => '',
            'publish-courses' => '',
            'manage-posts'    => '',
            'manage-courses'  => ''
        ];
    }

    /*
     * Relationship starts
     */

    /**
     * The roles it belongs to.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     *
     * @author Cali
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    /*
     * Relationship ends
     */
}
