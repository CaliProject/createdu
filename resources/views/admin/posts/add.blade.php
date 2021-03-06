@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.posts.sub.add'))

@section('breadcrumb')
    <li><a href="@route('admin.index', ['section' => 'posts'], false)" data-pjax><i class="icon-note"></i>&nbsp;@lang('views.admin.titles.posts.sub.index')</a></li>
    <li class="active"><i class="icon-pencil"></i>&nbsp;@lang('views.admin.titles.posts.sub.add')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <div class="paenl panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.titles.posts.sub.add')</h4>
                </div>
                <div class="panel-body">
                    @include('admin.posts.partials.form', ['method' => 'POST'])
                </div>
            </div>
        </div>
    </div>
@endsection