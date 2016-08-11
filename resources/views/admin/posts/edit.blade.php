@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.posts.sub.edit'))

@section('breadcrumb')
    <li><a href="@route('admin.index', ['section' => 'posts'], false)"><i class="icon-note"></i>@lang('views.admin.titles.posts.sub.index')</a></li>
    <li class="active">@lang('views.admin.titles.posts.sub.edit')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4>@lang('views.admin.titles.posts.sub.edit')</h4>
                </div>
                <div class="panel-body">
                    @include('admin.posts.partials.form', ['method' => 'PATCH'])
                </div>
            </div>
        </div>
    </div>
@endsection