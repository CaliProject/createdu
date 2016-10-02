@extends('layouts.app')

@section('title', trans('views.auth.login.header_title'))

@push('styles')
<link rel="stylesheet" href="/assets/css/pages/auth.css">
@endpush

@section('content')
    <div class="Auth Auth--sign-in">
        <div class="Auth__wrapper">
            <div class="Auth__box">
                <div class="Auth__logo">
                    <a href="/">
                        <img src="/assets/logo.png" alt="logo">
                    </a>
                </div>
                <div class="Auth__title">
                    <h4>@lang('views.auth.login.header_title')@lang('views.auth.login.in')@site('siteTitle')</h4>
                </div>
                <form class="Auth__form" method="POST">
                    {!! csrf_field() !!}
                    <input type="hidden" name="remember" value="on">
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="text" id="credential" name="credential" required>
                        <label class="Input__label Input__label--createdu" for="credential">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.login.credential')</span>
                        </label>
                    </div>
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="password" id="password" name="password" required>
                        <label class="Input__label Input__label--createdu" for="password">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.login.password')</span>
                        </label>
                        <span class="Input__eye"></span>
                    </div>
                    <div class="Input text-center">
                        <button class="Auth__submit" type="submit"></button>
                    </div>
                </form>
                @if(site('registrationOn'))
                <div class="Auth__oauth">
                    @foreach(explode(",", Site::supportedOAuths()) as $service)
                        <a class="Auth__oauth__service {{ $service }}" href="@route('social', compact('service'))"></a>
                    @endforeach
                </div>
                @endif
                <div class="Auth__separator"></div>
                <div class="Auth__extra">
                    @lang('views.auth.login.no_account')&nbsp;<a href="@route('sign-up')">@lang('views.auth.login.register')</a>
                    @if(site('registrationOn'))
                    <div class="pull-right">
                        <a href="@route('reset')">@lang('views.auth.login.forgot_password')</a>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/pages/auth.js"></script>
@endpush
