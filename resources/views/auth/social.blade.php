@extends('layouts.app')

@section('title', trans('views.auth.social.title'))

@push('styles')
<link rel="stylesheet" href="/assets/css/pages/social.css">
@endpush

@section('content')
    <header>
        <h1><i class="fa fa-{{ $service }}"></i>&nbsp;{{
        trans('views.auth.social.headings.connect', ['service' => trans("views.auth.social.services.$service") === "views.auth.social.services.$service"
            ? $service : trans("views.auth.social.services.$service")]) }}</h1>
        <div class="avatar">
            <img src="{{ $user->avatar }}" alt="{{ $user->nickname }}">
        </div>
        <h4>{{ $user->nickname }}</h4>
        <h3>@lang('views.auth.social.headings.tip'):</h3>
    </header>
    <section class="submission">
        <form action="{{ route('social-connect') }}" method="POST" id="social-form" class="pn-social-form"
              autocomplete="off">
            {{ csrf_field() }}
            <input type="hidden" name="service" value="{{ $service }}">
            <input type="hidden" name="avatar" value="{{ $user->avatar }}">
            <input type="hidden" name="id" value="{{ $user->id }}">
            <div class="pn-social-form-inner">
                <ol class="questions">
                    <li>
                        <span><label for="name">@lang('views.auth.social.inputs.name'):</label></span>
                        <input id="name" name="name" type="text" value="{{ $user->name }}" required/>
                    </li>
                    <li>
                        <span><label for="email">@lang('views.auth.social.inputs.email'):</label></span>
                        <input id="email" name="email" type="email" value="{{ $user->email }}" required/>
                    </li>
                </ol>
                <button class="submit" type="submit"></button>
                <div class="controls">
                    <button class="prev"></button>
                    <button class="next"></button>
                    <div class="progress"></div>
                    <span class="number">
                        <span class="number-current"></span>
                        <span class="number-total"></span>
                    </span>
                    <span class="error-message"></span>
                </div>
            </div>
            <span class="loading-message"></span>
            <span class="final-message"></span>
        </form>
    </section>
@stop

@push('scripts.footer')
<script>
    var data = {
        errors: {
            empty: "@lang('views.auth.social.errors.empty')",
            email: "@lang('views.auth.social.errors.email')"
        },
        success: "@lang('views.auth.social.success')",
        failed: "@lang('views.auth.social.failed')",
        loading: "@lang('views.auth.social.loading')"
    };
</script>
<script src="/assets/js/pages/social.js"></script>
@endpush