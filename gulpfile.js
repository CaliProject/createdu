var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var assetsDir = 'resources/assets/',
    publicDir = 'public/assets/';

elixir(function (mix) {
    /*
     |------------------------------------------------------------
     | Main App Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass([
        'app.scss'
    ], publicDir + 'css/app.css')
        .scripts([
            'plugins/classie.js',
            'plugins/jquery/jquery.min.js',
            // 'plugins/jquery/jquery.pjax.js',
            // 'plugins/pace.min.js',
            'plugins/bootstrap.js',
            'plugins/switchery.js',
            'plugins/sweetalert.min.js'
        ], publicDir + 'js/app.js');

    /*
     |------------------------------------------------------------
     | Social Auth Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass([
        'pages/social.scss'
    ], publicDir + 'css/pages/social.css')
        .browserify([
            'plugins/stepsForm.js',
            'pages/social.js',
        ], publicDir + 'js/pages/social.js');

    /*
     |------------------------------------------------------------
     | Admin App Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass([
        'admin/app.scss'
    ], publicDir + 'css/pages/admin/app.css')
        .browserify([
            'admin/helpers.js',
            // 'admin/listeners.js',
            'admin/app.js'
        ], assetsDir + 'js/builds/admin/app.js')
        .scripts([
            'plugins/jquery/jquery.min.js',
            'plugins/jquery/jquery.pjax.js',
            'plugins/jquery/jquery-ui.js',
            'plugins/pace.min.js',
            'plugins/jquery/jquery.blockui.js',
            'plugins/bootstrap.js',
            'plugins/jquery/jquery.slimscroll.min.js',
            'plugins/switchery.js',
            'plugins/jquery/jquery.uniform.min.js',
            'plugins/classie.js',
            'plugins/waves.js',
            'plugins/jquery/jquery.waypoints.min.js',
            'plugins/jquery/jquery.counterup.js',
            'plugins/toastr.min.js',
            'plugins/select2.min.js',
            'plugins/jquery/flot/jquery.flot.min.js',
            'plugins/jquery/flot/jquery.flot.time.min.js',
            'plugins/jquery/flot/jquery.flot.symbol.min.js',
            'plugins/jquery/flot/jquery.flot.resize.min.js',
            'plugins/jquery/flot/jquery.flot.tooltip.min.js',
            'plugins/jquery/ajaxfileupload.js',
            'plugins/jquery/jquery.datatables.min.js',
            'plugins/curvedLines.js',
            'plugins/sweetalert.min.js',
            'plugins/cropper.min.js',
            'admin/modern.js',
            'builds/admin/app.js',
        ], publicDir + 'js/admin/app.js');

    mix.browserify([
        'admin/users/index.js'
    ], assetsDir + 'js/builds/admin/users/index.js');

    mix.copy(assetsDir + 'js/builds/admin/users', publicDir + 'js/admin/users');

    /*
     |------------------------------------------------------------
     | Auth Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass([
        'pages/auth.scss'
    ], publicDir + 'css/pages/auth.css')
        .browserify([
            'pages/auth.js'
        ], publicDir + 'js/pages/auth.js');
});
