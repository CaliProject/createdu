@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.settings.sub.general'))

@section('breadcrumb')
    <li><a href="@route('admin.settings.general', [], false)" data-pjax><i class="icon-equalizer"></i>&nbsp;@lang('views.admin.titles.settings.main')</a></li>
    <li class="active">@lang('views.admin.titles.settings.sub.general')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-lg-6 col-sm-12">
            <div class="panel panel-white">
                <div class="panel-heading clearfix">
                    <h4 class="panel-title">@lang('views.admin.pages.settings.general.basics.heading')</h4>
                </div>
                <div class="panel-body">
                    <form action="@route('admin.settings.save-general', ['type' => 'basics'], false)" class="form-horizontal" method="post">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="site_title" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.basics.site-title')</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="site_title" id="site_title" value="@site('siteTitle')">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="registration" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.basics.registration-on')</label>
                            <div class="col-sm-10">
                                <div class="radio-inline">
                                    <input type="radio" name="registration" value="yes"{{ site('registrationOn') ? ' checked' : '' }}>
                                    @lang('views.admin.pages.settings.general.basics.registration-on-yes')
                                </div>
                                <div class="radio-inline">
                                    <input type="radio" name="registration" value="no"{{ !site('registrationOn') ? ' checked' : '' }}>
                                    @lang('views.admin.pages.settings.general.basics.registration-on-no')
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="admin_email" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.basics.admin-email')</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="admin_email" id="admin_email">
                                <small class="help-block">
                                    @lang('views.admin.pages.settings.general.basics.admin-email-help')
                                    <a href="#">@lang('views.admin.pages.settings.general.basics.admin-email-setting')</a>
                                </small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="icp" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.basics.icp')</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="icp" id="icp" value="@site('icp')">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.operation.update')</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="panel panel-white">
                <div class="panel-heading clearfix">
                    <h4 class="panel-title">@lang('views.admin.pages.settings.general.seo.heading')</h4>
                </div>
                <div class="panel-body">
                    <form action="@route('admin.settings.save-general', ['type' => 'seo'], false)" class="form-horizontal" method="post">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="site_separator" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.seo.separator')</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="site_separator" id="site_separator" value="@site('separator')">
                                <small class="help-block">@lang('views.admin.pages.settings.general.seo.separator-help')</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="site_description" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.seo.description')</label>
                            <div class="col-sm-10">
                                <textarea name="site_description" id="site_description" rows="5" class="form-control">@site('description')</textarea>
                                <small class="help-block">@lang('views.admin.pages.settings.general.seo.description-help')</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="site_keywords" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.seo.keywords')</label>
                            <div class="col-sm-10">
                                <select name="site_keywords[]" id="keywords-select" style="display: none;width: 100%;" multiple>
                                    @foreach(explode(",",site('keywords')) as $keyword)
                                        <option value="{{ $keyword }}" selected>{{ $keyword }}</option>
                                    @endforeach
                                </select>
                                <small class="help-block">@lang('views.admin.pages.settings.general.seo.keywords-help')</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="site_robot_ignores" class="control-label col-sm-2">@lang('views.admin.pages.settings.general.seo.ignores')</label>
                            <div class="col-sm-10">
                                <select name="site_robot_ignores[]" id="ignores-select" style="display: none;width: 100%;" multiple>
                                    @if(site('siteRobotIgnores'))
                                        @foreach(explode(",",site('siteRobotIgnores')) as $ignore)
                                            <option value="{{ $ignore }}" selected>{{ $ignore }}</option>
                                        @endforeach
                                    @endif
                                </select>
                                <small class="help-block">@lang('views.admin.pages.settings.general.seo.ignores-help')</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.operation.update')</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/settings/general.js"></script>
@endpush