@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.courses.sub.edit'))

@section('breadcrumb')
    <li><a href="@route('admin.index', ['section' => 'courses'], false)" data-pjax><i class="icon-book-open"></i>&nbsp;@lang('views.admin.titles.courses.sub.index')</a></li>
    <li class="active"><i class="icon-pencil"></i>&nbsp;@lang('views.admin.titles.courses.sub.edit')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.titles.courses.sub.edit')</h4>
                </div>
                <div class="panel-body">
                    @include('admin.courses.partials.form', ['method' => 'PATCH'])
                </div>
            </div>
        </div>
    </div>
@endsection