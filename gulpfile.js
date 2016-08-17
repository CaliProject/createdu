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
        .browserify([
            'app.js'
        ], assetsDir + 'js/builds/app.js')
        .scripts([
            'plugins/classie.js',
            'plugins/jquery/jquery.min.js',
            'plugins/jquery/ajaxfileupload.js',
            'plugins/jquery/timeago.js',
            'plugins/selectFx.js',
            'plugins/boxesFx.js',
            'plugins/dynamics.min.js',
            'plugins/imagesloaded.pkgd.min.js',
            'plugins/masonry.pkgd.min.js',
            'plugins/jquery/jquery.uniform.min.js',
            'plugins/jquery/jquery.slimscroll.min.js',
            'plugins/toastr.min.js',
            'plugins/bootstrap.js',
            'plugins/switchery.js',
            'plugins/sweetalert.min.js',
            'plugins/borderMenu.js',
            'pusher.min.js',
            'builds/app.js'
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
            'plugins/summernote.min.js',
            'plugins/summernote-zh-CN.min.js',
            'admin/modern.js',
            'pusher.min.js',
            'builds/admin/app.js',
        ], publicDir + 'js/admin/app.js');

    mix.browserify([
            'admin/users/index.js'
        ], assetsDir + 'js/builds/admin/users/index.js')
        .browserify([
            'admin/users/profile.js'
        ], assetsDir + 'js/builds/admin/users/profile.js')
        .browserify([
            'admin/pages/dashboard.js'
        ], assetsDir + 'js/builds/admin/pages/dashboard.js')
        .browserify([
            'admin/pages/summernote.js'
        ], assetsDir + 'js/builds/admin/pages/summernote.js')
        .browserify([
            'admin/center/factory.js'
        ], assetsDir + 'js/builds/admin/center/factory.js')
        .browserify([
            'admin/pages/delete.js'
        ], assetsDir + 'js/builds/admin/pages/delete.js')
        .browserify([
            'admin/posts/index.js'
        ], assetsDir + 'js/builds/admin/posts/index.js');

    mix.copy(assetsDir + 'js/builds/admin/users', publicDir + 'js/admin/users');
    mix.copy(assetsDir + 'js/builds/admin/pages', publicDir + 'js/admin/pages');
    mix.copy(assetsDir + 'js/builds/admin/posts', publicDir + 'js/admin/posts');
    mix.copy(assetsDir + 'js/builds/admin/center', publicDir + 'js/admin/center');

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

    /*
     |------------------------------------------------------------
     | Home Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.scripts([
        'pages/home.js'
    ], publicDir + 'js/pages/home.js');
});
