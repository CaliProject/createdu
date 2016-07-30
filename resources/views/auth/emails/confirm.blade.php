@extends('layouts.emails.base')

@push('styles')
<style>
    .confirm-button {
        width: 150px;
        border-radius: 500px;
        position: relative;
        background: rgba(30, 20, 30, 0.7);
        text-align: center;
        margin-bottom: 1.5em;
    }
    .confirm-button a {
        width: 100%;
        padding: .85em 0;
        display: inline-block;
        text-decoration: none;
    }
    .confirm-button a:hover {
        text-decoration: none;
    }
</style>
@endpush

@section('content')
    <p>@lang('emails.confirmation.subject')</p>
    <h3>@lang('emails.confirmation.description')</h3>
    <div class="confirm-button">
        <a href="@route('confirm-email', compact('token'))">@lang('emails.confirmation.button')</a>
    </div>
    <small>@lang('emails.fallback')</small>
    <br>
    <a style="width: 100%;text-overflow: ellipsis;overflow: hidden;" href="@route('confirm-email', compact('token'))">@route('confirm-email', compact('token'))</a>
@stop