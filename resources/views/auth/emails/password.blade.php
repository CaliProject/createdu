@extends('layouts.emails.base')

@push('styles')
<style>
    .reset-button {
        width: 150px;
        border-radius: 8px;
        position: relative;
        background: rgba(30, 20, 30, 0.7);
        text-align: center;
        margin-bottom: 1.5em;
    }
    .reset-button a {
        width: 100%;
        padding: .85em 0;
        display: inline-block;
    }
    .reset-button a:hover {
        text-decoration: none;
    }
</style>
@endpush

@section('content')
    <p>@lang('passwords.email.description')</p>
    <h3>@lang('passwords.email.click')</h3>
    <div class="reset-button">
        <a href="@route('reset', compact('token'))">@lang('passwords.email.reset-button')</a>
    </div>
    <small>@lang('emails.fallback')</small>
    <br>
    <a href="@route('reset', compact('token'))">@route('reset', compact('token'))</a>
@stop