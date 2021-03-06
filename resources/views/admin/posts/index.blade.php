@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.posts.sub.index'))

@section('breadcrumb')
    <li class="active"><i class="icon-note"></i>&nbsp;@lang('views.admin.titles.posts.sub.index')</li>
@endsection

@section('app.content')
    @include('admin.partials.delete', ['record' => 'posts'])
    <script>
        var stickMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.stick-messages'))) !!}");
        var essencifyMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.essencify-messages'))) !!}");
        var stickUrl = "@route('admin.posts.stick', [], false)";
        var essencifyUrl = "@route('admin.posts.essencify', [], false)";
    </script>
    <div class="row">
        <div class="panel panel-white">
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-4">
                        <b>
                            @lang('views.admin.pages.posts.index.table.count',[
                                'perPage' => $posts->perPage(),
                                'total'   => $posts->total()
                            ])
                        </b>
                    </div>
                    <div class="col-sm-4 pull-right">
                        <form :action="'@route('admin.posts.search', ['keyword' => ''], false)/'+keyword" method="GET" class="pjax no-ajax">
                            <input type="text" class="form-control input-rounded search-input" placeholder="@lang('views.admin.operation.search', ['record' => trans('views.admin.records.post')])" v-model="keyword" value="{{ $keyword or '' }}">
                            <i class="fa fa-search"></i>
                        </form>
                    </div>
                    <div class="col-sm-4 text-right">
                        <a href="@route('admin.posts.add', [], false)" class="btn btn-info" data-pjax><i class="fa fa-plus"></i>@lang('views.admin.titles.posts.sub.add')</a>
                    </div>
                </div>
                @if($posts->count())
                    <div class="row">
                        <div class="col-xs-12">
                            <span class="text-primary">@lang('views.admin.operation.bulk-actions')</span>
                            <div class="actions" style="display: inline-block">
                                <button class="btn btn-danger btn-rounded m-l-lg bulk-delete">@lang('views.admin.operation.delete')</button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-responsive">
                        <thead>
                        <th>
                            <div class="ios-switch switch-sm">
                                <input type="checkbox" class="js-switch">
                            </div>
                        </th>
                        <th>@lang('validation.attributes.title')</th>
                        <th>@lang('validation.attributes.status')</th>
                        <th>@lang('validation.attributes.sticky')</th>
                        <th>@lang('validation.attributes.essential')</th>
                        <th>@lang('views.admin.pages.posts.index.table.created_at')</th>
                        <th></th>
                        </thead>
                        <tfoot>
                        <th>
                            <div class="ios-switch switch-sm">
                                <input type="checkbox" class="js-switch">
                            </div>
                        </th>
                        <th>@lang('validation.attributes.title')</th>
                        <th>@lang('validation.attributes.status')</th>
                        <th>@lang('validation.attributes.sticky')</th>
                        <th>@lang('validation.attributes.essential')</th>
                        <th>@lang('views.admin.pages.posts.index.table.created_at')</th>
                        <th></th>
                        </tfoot>
                        <tbody>
                        @foreach($posts as $post)
                            <tr action-id="{{ $post->id }}">
                                <th scope="row">
                                    <div class="ios-switch switch-sm">
                                        <input type="checkbox" class="js-switch">
                                        {{ $post->id }}
                                    </div>
                                </th>
                                <td>{{ str_limit($post->title,30) }}</td>
                                <td>
                                    @lang('views.admin.pages.posts.index.status.' . $post->status)
                                </td>
                                <td>
                                    @lang('views.admin.pages.posts.index.sticky.' . $post->sticky)
                                </td>
                                <td>
                                    @lang('views.admin.pages.posts.index.essential.' . $post->essential)
                                </td>
                                <td>
                                    <time data-time="{{ $post->created_at->format('Y-m-d H:i:s') }}">
                                        {{ $post->created_at->diffForHumans() }}
                                    </time>
                                </td>
                                <td>
                                    <a href="@route('admin.posts.index', ['post' => $post->id], false)" data-pjax><i class="icon-pencil icon-lg"></i></a>
                                    <a href="#" class="m-l-sm text-danger btn-naked" data-delete><i class="icon-close icon-lg"></i></a>
                                    <a href="#" class="m-l-sm text-success btn-naked" data-stick><i class="icon-like icon-lg"></i></a>
                                    <a href="#" class="m-l-sm text-info btn-naked" data-essencify><i class="icon-fire icon-lg"></i></a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                @else
                    <div class="well text-center">
                        <h1><i class="icon-ban fa-3x"></i></h1>
                        <h2>@lang('views.admin.operation.no-result',['record' => trans('views.admin.records.post')])</h2>
                    </div>
                @endif
                @if($posts->count())
                    <div class="row">
                        <div class="col-xs-12">
                            <span class="text-primary">@lang('views.admin.operation.bulk-actions')</span>
                            <div class="actions" style="display: inline-block;">
                                <button class="btn btn-danger btn-rounded m-l-lg bulk-delete">@lang('views.admin.operation.delete')</button>
                            </div>
                        </div>
                    </div>
                @endif
                <div class="row text-center">
                    {!! $posts->links() !!}
                </div>
                @if($posts->count())
                    <div class="row text-center text-primary">
                        <b>
                            @lang('views.admin.pages.posts.index.table.count',[
                                'perPage' => $posts->perPage(),
                                'total'   => $posts->total()
                            ])
                        </b>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/posts/index.js" pjax-script></script>
@endpush