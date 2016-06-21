@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.dashboard'))

@section('breadcrumb')
    <li class="active">@lang('views.admin.titles.dashboard')</li>
@stop

@section('app.content')
    {{--<script>--}}
        {{--var visitorsData = JSON.parse("{!! addslashes(json_encode(Stat::visitorsStats())) !!}");--}}
    {{--</script>--}}
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <div class="panel info-box panel-white">
                <div class="panel-body">
                    <div class="info-box-stats">
                        <p class="counter">{{  $newUsers = Stat::users('this_month') }}</p>
                        <span class="info-box-title">@lang('views.admin.pages.dashboard.new-users-this-month')</span>
                    </div>
                    <div class="info-box-icon">
                        <i class="icon-users"></i>
                    </div>
                    <div class="info-box-progress">
                        <div class="progress progress-xs progress-squared bs-n">
                            <div class="progress-bar progress-bar-success" role="progressbar" style="width: @stat('newUsersRatio', $newUsers)%">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@push('scripts.footer')
{{--<script src="/assets/js/admin/pages/dashboard.js" pjax-script></script>--}}
@endpush