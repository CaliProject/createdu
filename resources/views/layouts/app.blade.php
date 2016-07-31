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
            signOutMessages = JSON.parse("{!! addslashes(json_encode(trans('views.logout'))) !!}");

    </script>

    @stack('scripts.header')

</head>
<body id="app">

    @yield('content')

    <!-- JavaScripts -->
    <script src="/assets/js/app.js"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
    <script>
        // Enable pusher logging - don't include this in production
//        Pusher.logToConsole = true;
//
//        var pusher = new Pusher('619a49d4f147e6f3751f', {
//            encrypted: true   
//        });
//
//        var channel = pusher.subscribe('test_channel');
//        channel.bind('', function(data) {
//            alert(data.message);
//        });
    </script>
    @stack('scripts.footer')

</body>
</html>
