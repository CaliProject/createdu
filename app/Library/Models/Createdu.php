<?php
namespace Createdu\Library\Models;

use File;

class Createdu {
    
    /**
     * Get advanced server information.
     *
     * @return array
     * @author Cali
     */
    public static function advancedServerInfo()
    {
        $php_version = phpversion();
        $mysql_version = mysqli_get_server_info(mysqli_connect(config('database.connections.mysql.host'), config('database.connections.mysql.username'),
            config('database.connections.mysql.password')));
        $operating_system = PHP_OS;

        try {
            $server_software = $_SERVER['SERVER_SOFTWARE'];
        } catch (\Exception $e) {
            $server_software = 'Unknown';
        }

        return compact('php_version', 'mysql_version', 'operating_system', 'server_software');
    }
}