@extends('layouts.app')

@section('title', trans('views.auth.reset.title'))

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
                    <h4>@lang('views.auth.reset.title')</h4>
                </div>
                <form class="Auth__form" role="form" method="POST" action="@route('reset')">
                    {{ csrf_field() }}

                    <input type="hidden" name="token" value="{{ $token }}">

                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="email" id="email" name="email" value="{{ $email or old('email') }}" required autocomplete="off">
                        <label class="Input__label Input__label--createdu" for="email">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.register.email')</span>
                        </label>
                    </div>

                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="password" id="password" name="password" required autocomplete="off">
                        <label class="Input__label Input__label--createdu" for="password">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.reset.new_password')</span>
                        </label>
                        <span class="Input__eye"></span>
                    </div>

                    <div class="Input text-center">
                        <button class="Auth__submit" type="submit"></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/pages/auth.js"></script>
@endpush