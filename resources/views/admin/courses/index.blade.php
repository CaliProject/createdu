@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.courses.sub.index'))

@section('breadcrumb')
    <li class="active"><i class="icon-book-open"></i>@lang('views.admin.titles.courses.sub.index')</li>
@endsection

@section('app.content')
    @include('admin.partials.delete', ['record' => 'courses'])
    <div class="row">
        <div class="panel panel-white">
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-4">
                        <b>
                            @lang('views.admin.pages.courses.index.table.count',[
                                'perPage' => $courses->perPage(),
                                'total'   => $courses->total()
                            ])
                        </b>
                    </div>
                    <div class="col-sm-4 pull-right">
                        <form :action="'@route('admin.courses.search', ['keyword' => ''], false)/'+keyword" method="GET" class="pjax no-ajax">
                            <input type="text" class="form-control input-rounded search-input" placeholder="@lang('views.admin.operation.search', ['record' => trans('views.admin.records.course')])..." v-model="keyword" value="{{ $keyword or '' }}">
                            <i class="fa fa-search"></i>
                        </form>
                    </div>
                    <div class="col-sm-4 pull-right text-right">
                        <a href="@route('admin.courses.add', [], false)" class="btn btn-info"><i class="fa fa-plus"></i>@lang('views.admin.pages.courses.index.add')</a>
                    </div>
                </div>
                @if($courses->count())
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
                        <tr>
                            <th>
                                <div class="ios-switch switch-sm">
                                    <input type="checkbox" class="js-switch">#
                                </div>
                            </th>
                            <th>@lang('validation.attributes.title')</th>
                            <th>@lang('views.admin.pages.courses.index.table.created_at')</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>
                                <div class="ios-switch switch-sm">
                                    <input type="checkbox" class="js-switch">#
                                </div>
                            </th>
                            <th>@lang('validation.attributes.title')</th>
                            <th>@lang('views.admin.pages.courses.index.table.created_at')</th>
                            <th>&nbsp;</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($courses as $course)
                            <tr delete-id="{{ $course->id }}">
                                <th scope="row">
                                    <div class="ios-switch switch-sm">
                                        <input type="checkbox" class="js-switch">
                                        {{ $course->id }}
                                    </div>
                                </th>
                                <td>{{ str_limit($course->title, 30) }}</td>
                                <td>
                                    <time datetime="{{ $course->created_at->format('Y-m-d H:i:s') }}">
                                        {{ $course->created_at->diffForHumans() }}
                                    </time>
                                </td>
                                <td>
                                    <a href="@route('admin.courses.index', ['course' => $course->id])"><i class="icon-pencil icon-lg"></i></a>
                                    <a href="#" class="m-l-sm text-danger btn-naked" data-delete><i class="icon-close icon-lg"></i></a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                @else
                    <div class="well text-center">
                        <h1><i class="icon-ban fa-3x"></i></h1>
                        <h2>@lang('views.admin.operation.no-result',['record' => trans('views.admin.records.course')])</h2>
                    </div>
                @endif
                @if($courses->count())
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
                    {!! $courses->links() !!}
                </div>
                @if($courses->count())
                    <div class="row text-center text-primary">
                        <b>
                            @lang('views.admin.pages.courses.index.table.count',[
                                'perPage' => $courses->perPage(),
                                'total'   => $courses->total()
                            ])
                        </b>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/pages/delete.js" pjax-script></script>
@endpush