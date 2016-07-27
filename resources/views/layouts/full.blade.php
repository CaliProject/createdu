@extends('layouts.app')

@section('content')

    @include('layouts.partials.navbar')

    <main class="Stage">
        @yield('app.content')
    </main>

    @include('layouts.partials.footer')

@stop