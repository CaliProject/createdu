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
                <form class="Auth__form" role="form" action="@route('reset-password')" method="POST">
                    {!! csrf_field() !!}
                    <div class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="email" id="email" name="email" required>
                        <label class="Input__label Input__label--createdu" for="email">
                            <span class="Input__label-content Input__label-content--createdu">@lang('views.auth.reset.placeholder')</span>
                        </label>
                    </div>
                    <div class="Input text-center">
                        <button class="Auth__submit" type="submit"></button>
                    </div>
                </form>
                <div class="Auth__separator"></div>
                <div class="Auth__extra text-center">
                    <a href="/">@lang('views.auth.reset.back')</a>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/pages/auth.js"></script>
@endpush
