@extends('user.settings.base')

@section('title', trans('views.profile.settings.titles.overview'))

@section('pane.content')
    <div class="row">
        <div class="col-sm-12">
            <div class="Well">
                <h4 class="text-success">@lang('views.profile.settings.overview.joined-since', ['when' => Auth::user()->created_at->diffForHumans(), 'where' => site('siteTitle')])</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-success"><i class="icon-badge"></i></h1>
                {{-- TODO: Conditional --}}
                <h4 class="text-success">@lang('views.profile.settings.overview.invalid-membership')</h4>
                <a href="@route('users.profile.settings', ['section' => 'membership'], false)" class="btn btn-success btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.overview.go-join')</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-primary"><i class="icon-wallet"></i></h1>
                <h4 class="text-primary">@lang('views.global.user.credit'):{{ Auth::user()->readableCredit() }}</h4>
                <a href="@route('users.profile.settings', ['section' => 'credits'], false)" class="btn btn-primary btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.overview.go-pay')</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-warning"><i class="icon-graph"></i></h1>
                <h4 class="text-warning">@lang('views.global.user.exp'):{{ Auth::user()->readableExp() }}</h4>
                <a href="@route('users.profile.settings', ['section' => 'history'], false)" class="btn btn-warning btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.overview.go-check')</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="Well text-center">
                @if(Auth::user()->tel)
                    <h1 class="text-success"><i class="icon-screen-smartphone"></i></h1>
                    <h4 class="text-success">@lang('views.profile.settings.privacy.bound-tel')</h4>
                    <a href="@route('users.profile.settings', ['section' => 'privacy'], false)" class="btn btn-danger btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.privacy.unbind-tel')</a>
                @else
                    <h1 class="text-danger"><i class="icon-screen-smartphone"></i></h1>
                    <h4 class="text-danger">@lang('views.profile.settings.overview.tel-unbound')</h4>
                    <a href="@route('users.profile.settings', ['section' => 'privacy'], false)" class="btn btn-danger btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.overview.go-bind')</a>
                @endif
            </div>
        </div>
        <div class="col-md-6">
            <div class="Well text-center">
                <h1 class="text-primary"><i class="icon-envelope-open"></i></h1>
                {{-- TODO: Conditional --}}
                <h4 class="text-primary">@lang('views.profile.settings.overview.email-unconfirmed')</h4>
                <a href="@route('users.profile.settings', ['section' => 'privacy'], false)" class="btn btn-blue btn-sm btn-block btn-round btn-well center-block">@lang('views.profile.settings.overview.go-confirm')</a>
            </div>
        </div>
    </div>
@stop