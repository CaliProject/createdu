@extends('layouts.app')

@section('title', trans('views.auth.register.header_title'))

@push('styles')
<link rel="stylesheet" href="/assets/css/pages/auth.css">
@endpush

@section('content')
    <div class="Auth Auth--sign-up">
        <div class="Auth__wrapper">
            <div class="Auth__box">
                <div class="Auth__logo">
                    <a href="/">
                        <img src="/assets/logo.png" alt="logo">
                    </a>
                </div>
                <div class="Auth__title">
                    <h4>@lang('views.auth.register.header_title')@lang('views.auth.register.in')@site('siteTitle')</h4>
                </div>
                <form class="Auth__form" role="form" method="POST">
                    {!! csrf_field() !!}
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="text" id="name" name="name" required autocomplete="off">
                        <label class="Input__label Input__label--createdu" for="name">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.register.username')</span>
                        </label>
                    </div>
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="email" id="email" name="email" required autocomplete="off">
                        <label class="Input__label Input__label--createdu" for="email">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.register.email')</span>
                        </label>
                    </div>
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="password" id="password" name="password" required autocomplete="off">
                        <label class="Input__label Input__label--createdu" for="password">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.register.password')</span>
                        </label>
                        <span class="Input__eye"></span>
                    </div>
                    {{--<div class="Input Input--createdu">--}}
                        {{--<input class="Input__field Input__field--createdu" type="password" id="password_confirmation" name="password_confirmation" required>--}}
                        {{--<label class="Input__label Input__label--createdu" for="password_confirmation">--}}
                            {{--<span class="Input__label-content Input__label-content--createdu">@lang('views.auth.register.confirm_password')</span>--}}
                        {{--</label>--}}
                    {{--</div>--}}
                    <div class="Input text-center">
                        <button class="Auth__submit" type="submit"></button>
                    </div>
                </form>
                <div class="Auth__separator"></div>
                <div class="Auth__extra">
                    @lang('views.auth.register.have_account')&nbsp;<a href="@route('sign-in')">@lang('views.auth.login.header_title')</a>
                    <div class="pull-right">
                        <a href="@route('reset')">@lang('views.auth.login.forgot_password')</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/pages/auth.js"></script>
@endpush
