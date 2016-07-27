@extends('user.settings.base')

@section('title', '帐号总览')

@section('pane.content')
    <div class="row">
        <div class="col-sm-12">
            <div class="Well">
                <h4 class="text-success">我在{{ Auth::user()->created_at->diffForHumans() }}加入的@site('siteTitle')</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-success"><i class="icon-badge"></i></h1>
                <h4 class="text-success">您还未开通会员</h4>
                <a href="#" class="btn btn-success btn-sm btn-block btn-round btn-well center-block">前往开通</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-primary"><i class="icon-wallet"></i></h1>
                <h4 class="text-primary">@lang('views.global.user.credit'):{{ Auth::user()->readableCredit() }}</h4>
                <a href="#" class="btn btn-primary btn-sm btn-block btn-round btn-well center-block">前往充值</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="Well text-center">
                <h1 class="text-warning"><i class="icon-graph"></i></h1>
                <h4 class="text-warning">@lang('views.global.user.exp'):{{ Auth::user()->readableExp() }}</h4>
                <a href="#" class="btn btn-warning btn-sm btn-block btn-round btn-well center-block">查看记录</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="Well text-center">
                <h1 class="text-danger"><i class="icon-screen-smartphone"></i></h1>
                <h4 class="text-danger">您还未绑定手机号</h4>
                <a href="@route('users.profile.privacy')" class="btn btn-danger btn-sm btn-block btn-round btn-well center-block">立即绑定</a>
            </div>
        </div>
        <div class="col-md-6">
            <div class="Well text-center">
                <h1 class="text-primary"><i class="icon-envelope-open"></i></h1>
                <h4 class="text-primary">您还未确认您的邮箱</h4>
                <a href="@route('users.profile.privacy')" class="btn btn-blue btn-sm btn-block btn-round btn-well center-block">前往确认</a>
            </div>
        </div>
    </div>
@stop