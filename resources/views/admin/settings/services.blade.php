@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.settings.sub.services'))

@section('breadcrumb')
    <li><a href="@route('admin.settings.general', [], false)"><i class="icon-equalizer"></i>&nbsp;@lang('views.admin.titles.settings.main')</a></li>
    <li class="active">@lang('views.admin.titles.settings.sub.services')</li>
@endsection

@section('app.content')
<div class="row">
    <nav class="tab-menu menu--nav">
        <ul class="menu__list nav nav-tabs" role="tablist">
            <li role="presentation" class="menu__item menu__item--current active"><a href="#oauth-tab" class="menu__link" role="tab" data-toggle="tab">@lang('views.admin.pages.settings.services.oauth.heading')</a></li>
            <li role="presentation" class="menu__item"><a href="#email-tab" class="menu__link" role="tab" data-toggle="tab">@lang('views.admin.pages.settings.services.email.heading')</a></li>
            <li role="presentation" class="menu__item"><a href="#push-tab" class="menu__link" role="tab" data-toggle="tab">@lang('views.admin.pages.settings.services.push.heading')</a></li>
        </ul>
    </nav>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active fade in" id="oauth-tab">
            <div class="panel panel-transparent">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.pages.settings.services.oauth.heading')</h4>
                </div>
            </div>
            <div class="panel-body">
                <div class="clearfix m-b-md">
                    <blockquote>
                        <p>@lang('views.admin.pages.settings.services.oauth.tips')</p>
                    </blockquote>
                </div>
                @include('admin.settings.partials.oauth', [
                    'service'    => 'QQ',
                    'app_id'     => 'APP_ID',
                    'app_secret' => 'APP_SECRET',
                    'apply_url'  => 'http://connect.qq.com'
                ])
                @include('admin.settings.partials.oauth', [
                    'service'    => 'Weibo',
                    'app_id'     => 'APP_KEY',
                    'app_secret' => 'APP_SECRET',
                    'apply_url'  => 'http://open.weibo.com/apps'
                ])
                @include('admin.settings.partials.oauth', [
                    'service'    => 'Weixin',
                    'app_id'     => 'APP_ID',
                    'app_secret' => 'APP_SECRET',
                    'apply_url'  => 'https://open.weixin.qq.com/'
                ])
                @include('admin.settings.partials.oauth', [
                    'service'    => 'facebook',
                    'app_id'     => 'APP_ID',
                    'app_secret' => 'APP_SECRET',
                    'apply_url'  => 'https://developers.facebook.com/quickstarts/?platform=web'
                ])
                @include('admin.settings.partials.oauth', [
                    'service'    => 'Google',
                    'app_id'     => 'APP_ID',
                    'app_secret' => 'APP_SECRET',
                    'apply_url'  => 'https://console.cloud.google.com/home/dashboard'
                ])
            </div>
        </div>
        <div class="tab-pane active fade in" role="tabpanel" id="email-tab">
            @include('admin.settings.partials.smtp')
        </div>
        <div class="tab-pane active fade in" role="tabpanel" id="push-tab">
            @include('admin.settings.partials.push')
        </div>
    </div>
</div>
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/setting/services.js" pjax-script></script>
@endpush