@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.data-center.main'))

@section('breadcrumb')
    <li class="active"><i class="icon-support"></i>@lang('views.admin.titles.data-center.main')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <div class="panel panel-white info-box">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">@stat('totalUsers')</p>
                        <span class="info-box-title">@lang('views.admin.pages.data-center.index.total-users')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-users"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="panel panel-white info-box">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">@stat('totalPageViews')</p>
                        <span class="info-box-title">@lang('views.admin.pages.data-center.index.total-page-views')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-target"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="panel panel-white info-box">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">@stat('totalPosts')</p>
                        <span class="info-box-title">@lang('views.admin.pages.data-center.index.total-posts')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-note"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="panel panel-white info-box">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">@stat('totalCourses')</p>
                        <span class="info-box-title">@lang('views.admin.pages.data-center.index.total-courses')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-book-open"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <div class="panel panel-white info-box">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">@stat('totalComments')</p>
                        <span class="info-box-title">@lang('views.admin.pages.data-center.index.total-comments')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-bubbles"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.pages.data-center.index.visitor-records')</h4>
                </div>
                <div class="panel-body">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th class="col-xs-4 text-right">@lang('views.admin.pages.data-center.index.most', ['item' => trans('views.admin.pages.data-center.index.attributes.browser')])</th>
                            <td class="col-xs-4">{{ Stat::mostBrowser()->name }}</td>
                        </tr>
                        <tr>
                            <th class="col-xs-6 text-right">@lang('views.admin.pages.data-center.index.most', ['item' => trans('views.admin.pages.data-center.index.attributes.platform')])</th>
                            <td class="col-xs-6">{{ Stat::mostPlatform()->name }}</td>
                        </tr>
                        <tr>
                            <th class="col-xs-6 text-right">@lang('views.admin.pages.data-center.index.most', ['item' => trans('views.admin.pages.data-center.index.attributes.city')])</th>
                            <td class="col-xs-6">{{ Stat::mostCity()->name }}</td>
                        </tr>
                        <tr>
                            <th class="col-xs-6 text-right">@lang('views.admin.pages.data-center.index.most', ['item' => trans('views.admin.pages.data-center.index.attributes.device')])</th>
                            <td class="col-xs-6">{{ Stat::mostDevice()->name }}</td>
                        </tr>
                        <tr>
                            <th class="col-xs-6 text-right">@lang('views.admin.pages.data-center.index.most', ['item' => trans('views.admin.pages.data-center.index.attributes.uri')])</th>
                            <td class="col-xs-6">{{ Stat::mostUri()->name }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.pages.dashboard.uri')</h4>
                </div>
                <div class="panel-body">
                    <ul class="list-unstyled">
                        @foreach(Stat::getTop('uri', 8) as $page)
                            <li>
                                <b>{{ $page->name == '/' ? trans('views.admin.pages.dashboard.home') : $page->name }}</b>
                                <div class="text-primary pull-right">{{ $page->ratio }}%</div>
                                <div class="clearfix">
                                    <div class="progress progress-xs bs-n m-t-xs m-b-xs">
                                        <div class="progress-bar progress-bar" role="progressbar" style="width: {{ $page->ratio }}%"></div>
                                    </div>
                                </div>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection