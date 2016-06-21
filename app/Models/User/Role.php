<?php

namespace Createdu;

use Illuminate\Database\Eloquent\Model;

class Role extends Model {

    /*
     |------------------------------------------------------------
     | Role Model
     | 权限 模型
     |------------------------------------------------------------
     |
     | One user can have multiple different roles at once and
     | each role also contains several permissions too. It
     | has a unique name and meanwhile a readable label.
     |
     | @author Cali
     |
     */

    /**
     * The name attribute.
     */
    const name = "name";

    /**
     * Default role id.
     */
    const DEFAULT_ROLE = 'member';

    /**
     * Fillable attributes.
     *
     * @var array
     */
    protected $fillable = [
        self::name, 'label'
    ];

    /**
     * Get the default roles.
     * 
     * @return array
     */
    public static function defaultRoles()
    {
        return [
            'member'        => '网站用户|Site Member',
            'apprentice'    => '学生成员|Apprentice',
            'tutor'         => '专业教师|Tutor',
            'administrator' => '网站管理员|Site Admin'
        ];
    }

    /**
     * Assign the default permissions.
     * 
     * @author Cali
     */
    public static function assignPermissions()
    {
        $tutor = static::whereName('tutor')->first();
        $tutor->givePermission(Permission::whereName('publish-courses')->first());

        $admin = static::whereName('administrator')->first();
        foreach (array_keys(Permission::defaultPermissions()) as $key) {
            $admin->givePermission(Permission::whereName($key)->first());
        }
    }

    /*
     * Relationship starts
     */

    /**
     * The users associated with the role.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     *
     * @author Cali
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * What permissions it has.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     *
     * @author Cali
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    /*
     * Relationships ends
     */

    public function givePermission(Permission $permission)
    {
        return $this->permissions()->save($permission);
    }
}
