@extends('layouts.admin.app')

@section('title', isset($keyword) ? trans('views.admin.pages.users.index.search-heading', compact('keyword')) : trans('views.admin.titles.users.sub.index'))

@section('breadcrumb')
    <li class="active"><i class="icon-user"></i>&nbsp;@lang('views.admin.titles.users.sub.index')</li>
@stop

@section('app.content')
    <script>
        var deleteMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.delete-messages'))) !!}");
        var deleteUrl = "@route('admin.users.delete')",
                bulkUrl = "@route('admin.users.bulk')";
    </script>
    <div class="row">
        <div class="panel panel-white">
            {{--<div class="panel-heading">--}}
                {{--<a href="@route('admin.index', ['section' => 'users'], false)" data-pjax>--}}
                    {{--<h4 class="panel-title">--}}
                        {{--@lang('views.admin.pages.users.index.heading')--}}
                    {{--</h4>--}}
                {{--</a>--}}
            {{--</div>--}}
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-8">
                        <b>@lang('views.admin.pages.users.index.table.count', [
                            'perPage' => $users->perPage(),
                            'total' => $users->total()
                        ])</b>
                    </div>
                    <div class="col-sm-4 text-right">
                        <form :action="'@route('admin.users.search', ['keyword' => ''], false)/'+keyword" method="GET" class="pjax no-ajax">
                            <input type="text" class="form-control input-rounded search-input"
                                   placeholder="@lang('views.admin.operation.search',['record' => trans('views.admin.records.user')])..." v-model="keyword" value="{{ isset($keyword) ? $keyword : '' }}" required>
                            <i class="fa fa-search"></i>
                        </form>
                    </div>
                </div>
                @if($users->count())
                <div class="row">
                    <div class="col-xs-12">
                        <span class="text-primary">@lang('views.admin.operation.bulk-actions')</span>
                        <div class="actions" style="display: inline-block;">
                            <button class="btn btn-danger btn-rounded m-l-lg bulk-delete">@lang('views.admin.operation.delete')</button>
                        </div>
                    </div>
                </div>
                <table class="table table-responsive">
                    <thead>
                    <tr>
                        <th>
                            <div class="ios-switch switch-sm">
                                <input type="checkbox" class="js-switch">
                                #
                            </div>
                        </th>
                        <th>@lang('validation.attributes.name')</th>
                        <th>@lang('validation.attributes.email')</th>
                        <th>@lang('views.admin.pages.users.index.table.registered_at')</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>
                            <div class="ios-switch switch-sm">
                                <input type="checkbox" class="js-switch">
                                #
                            </div>
                        </th>
                        <th>@lang('validation.attributes.name')</th>
                        <th>@lang('validation.attributes.email')</th>
                        <th>@lang('views.admin.pages.users.index.table.registered_at')</th>
                        <th>&nbsp;</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    @foreach($users as $user)
                        <tr delete-id="{{ $user->id }}">
                            <th scope="row">
                                @if(Auth::id() !== $user->id)
                                <div class="ios-switch switch-sm">
                                    <input type="checkbox" class="js-switch">
                                    {{ $user->id }}
                                </div>
                                @else
                                {{ $user->id }}
                                @endif
                            </th>
                            <td>
                                <a href="#" class="btn-block btn-naked">
                                    <img class="user-avatar img-circle" src="{{ $user->avatarUrl }}"
                                         alt="{{ $user->name }}">
                                    <span>{{ $user->name }}</span>
                                </a>
                            </td>
                            <td>{{ $user->email }}</td>
                            <td>
                                <time datetime="{{ $user->created_at->format('Y-m-d H:i:s') }}">
                                    {{ $user->created_at->diffForHumans() }}
                                </time>
                            </td>
                            <td class="text-center">
                                <a href="{{ Auth::id() === $user->id ? route('admin.users.profile.index') : route('admin.users.edit.profile', ['user' => $user->id]) }}" class="m-l-sm text-primary btn-naked" data-pjax>
                                    <i class="icon-pencil" style="font-size: 1.4em"></i>
                                </a>
                                @if(Auth::id() !== $user->id)
                                    <a href="#" class="m-l-sm text-danger btn-naked" data-delete>
                                        <i class="icon-close" style="font-size: 1.4em"></i>
                                    </a>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
                @else
                    <div class="well text-center">
                        <h1><i class="icon-ban fa-3x"></i></h1>
                        <h2>@lang('views.admin.operation.no-result',['record' => trans('views.admin.records.user')])</h2>
                    </div>
                @endif
                @if($users->count())
                <div class="row">
                    <div class="col-xs-12">
                        <span class="text-primary">@lang('views.admin.operation.bulk-actions')</span>
                        <div class="actions" style="display: inline-block;">
                            <button class="btn btn-danger btn-rounded m-l-lg bulk-delete">@lang('views.admin.operation.delete')</button>
                        </div>
                    </div>
                </div>
                @endif
                <div class="text-center row">
                    {!! $users->links() !!}
                </div>
                @if($users->count())
                <div class="row text-center text-primary">
                    <b>@lang('views.admin.pages.users.index.table.count', [
                            'perPage' => $users->perPage(),
                            'total' => $users->total()
                        ])</b>
                </div>
                @endif
            </div>
        </div>
    </div>
@stop

@push('scripts.footer')
<script src="/assets/js/admin/pages/delete.js" pjax-script></script>
@endpush