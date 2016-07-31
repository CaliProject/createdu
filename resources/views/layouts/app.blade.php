<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title') @site('title')</title>

    <!-- Fonts -->
    <link href="//cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="/assets/css/app.css">
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}
    <link rel="icon" href="/assets/logo.png">
    <link rel="shortcut icon" href="/assets/logo.png">
    <link rel="apple-touch-icon" href="/assets/logo.png">
    <link rel="apple-touch-icon-precomposed" href="/assets/logo.png">

    @stack('styles')

    <script src="/assets/js/modernizr.custom.js"></script>

    <script>
        var CurrentUser = JSON.parse('{!! Auth::check() ? addslashes(Auth::user()) : '{}' !!}'),
            _TOKEN = "{{ csrf_token() }}",
            PUSHER_KEY = "{{ config('broadcasting.connections.pusher.key') }}",
            signOutMessages = JSON.parse("{!! addslashes(json_encode(trans('views.logout'))) !!}");

    </script>

    @stack('scripts.header')

</head>
<body id="app">

    @yield('content')

    <audio src="/assets/audio/NewMessage.mp3" preload="auto" id="new-message-sound"></audio>
    <audio src="/assets/audio/Notification.mp3" preload="auto" id="notification-sound"></audio>

    <!-- JavaScripts -->
    <script src="/assets/js/app.js"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
    @include('layouts.scripts.pusher')
    @stack('scripts.footer')

</body>
</html>
