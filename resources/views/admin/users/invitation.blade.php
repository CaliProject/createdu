@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.users.sub.invitations'))

@section('breadcrumb')
    <li><a href="@route('admin.index', ['section' => 'users'], false)"><i class="icon-user"></i>&nbsp;@lang('views.admin.titles.users.sub.index')</a></li>
    <li class="active">@lang('views.admin.titles.users.sub.invitations')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-xs-12">
            <blockquote>
                @lang('views.admin.pages.users.invitations.tips')
            </blockquote>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.pages.users.invitations.heading')</h4>
                </div>
                <div class="panel-body">
                    <form action="@route('admin.users.invitations')" method="POST" class="form-horizontal no-ajax">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <div class="col-sm-1 col-sm-offset-1">
                                <label for="quantity" class="control-label">@lang('validation.attributes.quantity')</label>
                            </div>
                            <div class="col-sm-8">
                                <input type="text" name="quantity" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block btn-rounded" data-pjax>@lang('views.admin.pages.users.invitations.generate')</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <div class="panel panel-white">
                <div class="panel-body">
                    @if(empty($codes))
                        <div class="well text-center">
                            <h1><i class="icon-ban fa-3x"></i></h1>
                            <h2>@lang('views.admin.pages.users.invitations.no-result')</h2>                            
                        </div>
                    @else
                        <table class="table">
                            <thead>
                            <tr>
                                <th>@lang('views.admin.pages.users.invitations.table.code')</th>
                                <th>@lang('views.admin.pages.users.invitations.table.date')</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($codes as $code)
                                <tr>
                                    <td>{{ $code->code }}</td>
                                    <td>{{ \Carbon\Carbon::parse($code->date)->diffForHumans() }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection