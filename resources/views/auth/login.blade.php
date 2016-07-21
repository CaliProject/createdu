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
                    <img src="/assets/logo.png" alt="logo">
                </div>
                <form class="Auth__form" action="" method="POST">
                    <span class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="text" id="name" name="name">
                        <label class="Input__label Input__label--createdu" for="name">
                            <span class="Input__label-content Input__label-content--createdu">用户名</span>
                        </label>
                    </span>
                    <span class="Input Input--createdu">
                        <input class="Input__field Input__field--createdu" type="password" id="password" name="password">
                        <label class="Input__label Input__label--createdu" for="password">
                            <span class="Input__label-content Input__label-content--createdu">密码</span>
                        </label>
                    </span>

                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/pages/auth.js"></script>
@endpush
