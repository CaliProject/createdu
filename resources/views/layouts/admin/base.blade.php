<!doctype html>
<html lang="{{ app()->getLocale() }}" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}">
    <base href="{{ url('/') }}">

    <title>@yield('title') @site('adminTitle')</title>

    {{-- Fonts --}}
    <link href="//cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">

    {{-- Styles --}}
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}
    <link rel="stylesheet" href="/assets/css/pages/admin/app.css">

    @if($theme = Auth::user()->meta('admin.theme'))
        <link href="/assets/css/pages/admin/themes/{{ $theme->theme }}.css" class="theme-color" rel="stylesheet">
    @else
        <link href="/assets/css/pages/admin/themes/dark.css" class="theme-color" rel="stylesheet">
    @endif

    {{-- Styles Stack --}}
    @stack('styles')

    {{-- Favicons --}}
    <link rel="icon" href="/assets/logo.png?ver={{ $logoVer = site('logoVersion') ?: 0 }}">
    <link rel="shortcut icon" href="/assets/logo.png?ver={{ $logoVer }}">
    <link rel="apple-touch-icon" href="/assets/logo.png?ver={{ $logoVer }}">
    <link rel="apple-touch-icon-precomposed" href="/assets/logo.png?ver={{ $logoVer }}">

    <!--[if IE]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script src="/assets/js/modernizr.custom.js"></script>
    {{--<script src="/assets/js/admin/snap.svg-min.js"></script>--}}

    <script>
    @if($theme)
        var THEME_COLOR = "{{ $theme->color }}";
    @endif

        var themeSettings = {
                    fixedHeader: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.fixed-header', 'value', true) }}',
                    fixedSidebar: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.fixed-sidebar') }}',
                    horizontalBar: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.horizontal-bar') }}',
                    toggleSidebar: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.toggle-sidebar') }}',
                    compactMenu: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.compact-menu') }}',
                    hoverMenu: '{{ Auth::user()->adminThemeSettingMeta('admin.theme.hover-menu') }}',
                    errors: {
                        staticHeader: "@lang('views.admin.navbar.settings.errors.static-header-horizontal-bar')",
                        fixedSidebar: "@lang('views.admin.navbar.settings.errors.fixed-sidebar-hover-menu')"
                    }
                },
                CurrentUser = JSON.parse('{!! addslashes(Auth::user()) !!}'),
                SiteSettings = {
                    title: "@site('siteTitle')"
                },
                DataTableLines = JSON.parse('{!! addslashes(json_encode(trans('views.datatable'))) !!}');
        var pjaxContainer = '#page-container';

    </script>
    {{-- Scripts Stack --}}
    @stack('scripts.header')
</head>
<body class="page-header-fixed" id="app">

    @yield('content')

{{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
<script src="/assets/js/admin/app.js"></script>
@if(session()->has('status'))
    <script>
        $(function () {
            toastr['{{ session('status') }}']('{{ session('message') }}');
        });
    </script>
@endif
{{-- Scripts Stack --}}
@stack('scripts.footer')

</body>
</html>