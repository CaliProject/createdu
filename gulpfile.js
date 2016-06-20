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

elixir(function (mix) {
    /*
     |------------------------------------------------------------
     | Social Auth Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass(['pages/social.scss'], 'public/assets/css/pages/social.css')
        .browserify([
            'vendor/stepsForm.js',
            'pages/social.js',
        ], 'public/assets/js/pages/social.js');

    /*
     |------------------------------------------------------------
     | Admin App Assets
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */
    mix.sass([
        'pages/admin/app.scss'
    ], 'public/assets/css/pages/admin/app.css')
        .browserify([
            'admin/app.js',
        ], 'resources/assets/js/builds/admin/app.js')
        .scripts([
            'jquery/jquery.min.js',
            'jquery/jquery.pjax.js',
            'jquery/jquery-ui.js',
            'admin/vendor/pace.min.js',
            'jquery/jquery.blockui.js',
            'vendor/bootstrap.js',
            'jquery/jquery.slimscroll.min.js',
            'admin/vendor/switchery.js',
            'jquery/jquery.uniform.min.js',
            'classie.js',
            'admin/vendor/off-canvas-menu.main.js',
            'admin/vendor/waves.js',
            'vendor/jquery.waypoints.min.js',
            'jquery/jquery.counterup.js',
            'admin/vendor/toastr.min.js',
            'vendor/select2.min.js',
            'jquery/flot/jquery.flot.min.js',
            'jquery/flot/jquery.flot.time.min.js',
            'jquery/flot/jquery.flot.symbol.min.js',
            'jquery/flot/jquery.flot.resize.min.js',
            'jquery/flot/jquery.flot.tooltip.min.js',
            'jquery/ajaxfileupload.js',
            'jquery/jquery.datatables.min.js',
            'admin/vendor/MetroJs.min.js',
            'admin/vendor/curvedLines.js',
            'vendor/sweetalert.min.js',
            'vendor/cropper.min.js',
            'admin/modern.js',
            'builds/admin/app.js',
        ], 'public/assets/js/admin/app.js');
});
