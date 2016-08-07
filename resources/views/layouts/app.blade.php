<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

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
            signOutMessages = JSON.parse("{!! addslashes(json_encode(trans('views.logout'))) !!}"),
            carbonLines = JSON.parse("{!! addslashes(json_encode(trans('locales.carbon'))) !!}");

        @if(Auth::check())
            var conversations = JSON.parse("{!! addslashes(json_encode(Auth::user()->conversationsList())) !!}");
        @endif
    </script>

    @stack('scripts.header')

</head>
<body id="app">

    @yield('content')

    <div class="audio_files">
        <audio src="/assets/audio/Notification.mp3" preload="auto" id="notification-sound"></audio>
        <audio src="/assets/audio/Toastr.mp3" preload="auto" id="toastr-sound"></audio>
        <audio src="/assets/audio/Message_Received.mp3" preload="auto" id="message-received-sound"></audio>
        <audio src="/assets/audio/Message_Sent.mp3" preload="auto" id="message-sent-sound"></audio>
    </div>

    <!-- JavaScripts -->
    <script src="/assets/js/app.js"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}

    @if(session()->has('status'))
        <script>
            $(function () {
                toastr['{{ session('status') }}']('{{ session('message') }}');
            });
        </script>
    @endif

    @include('layouts.scripts.pusher')
    @stack('scripts.footer')

</body>
</html>
