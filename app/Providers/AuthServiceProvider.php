<?php

namespace Createdu\Providers;

use Createdu\Permission;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
//        'Createdu\Model' => 'Createdu\Policies\ModelPolicy',
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        $this->registerPermissions($gate);
    }

    /**
     * Get all the permissions.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     * @author Cali
     */
    protected function getPermissions()
    {
        try {
            return Permission::with('roles')->get();
        } catch (\Exception $e) {
            // If the database is not migrated yet.
            return [];
        }
    }

    /**
     * Register all the permissions in the database.
     *
     * @param GateContract $gate
     * @author Cali
     */
    public function registerPermissions(GateContract $gate)
    {
        foreach ($this->getPermissions() as $permission) {
            $gate->define($permission->name, function ($user) use ($permission) {
                return $user->hasRole($permission->roles);
            });
        }
    }
}
