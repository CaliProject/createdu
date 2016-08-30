@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.courses.sub.index'))

@section('breadcrumb')
    <li class="active"><i class="icon-book-open"></i>&nbsp;@lang('views.admin.titles.courses.sub.index')</li>
@endsection

@section('app.content')
    @include('admin.partials.delete', ['record' => 'courses'])
    <script>
        var trashMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.trash-message'))) !!}");
        var revertMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.revert-message'))) !!}")
        var trashUrl = "@route('admin.courses.trash')";
        var revertUrl = "@route('admin.courses.revert')";
    </script>
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
                        <a href="@route('admin.courses.add', [], false)" class="btn btn-info" data-pjax><i class="fa fa-plus"></i>@lang('views.admin.pages.courses.index.add.index')</a>
                    </div>
                </div>
                <div class="row">
                    @foreach(['0','1','2','3'] as $item)
                        @if($status[$item])
                            <a href="@route('admin.courses.index',['status' => $item], false)" class="btn btn-info btn-sm btn-rounded">@lang('views.admin.pages.courses.index.status.' . $item)({{ $status[$item] }})</a>
                        @endif
                    @endforeach
                </div>
                <br>
                @if($courses->count())
                    <div class="row">
                        <div class="col-xs-12">
                            <span class="text-primary">@lang('views.admin.operation.bulk-actions')</span>
                            <div class="actions" style="display: inline-block">
                                <button class="btn btn-danger btn-rounded m-l-lg bulk-delete">@lang('views.admin.operation.delete')</button>
                                @unless(request_is_route('admin.courses.index', ['status' => 3], true))
                                    <button class="btn btn-danger btn-rounded bulk-trash">@lang('views.admin.operation.trash')</button>
                                @endunless
                                @if(request_is_route('admin.courses.index', ['status' => 3], true))
                                    <button class="btn btn-primary btn-rounded bulk-revert">@lang('views.admin.operation.revert')</button>
                                @endif
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
                            <th>@lang('views.admin.pages.courses.index.table.author')</th>
                            <th>@lang('views.admin.pages.courses.index.table.category')</th>
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
                            <th>@lang('views.admin.pages.courses.index.table.author')</th>
                            <th>@lang('views.admin.pages.courses.index.table.category')</th>
                            <th>@lang('views.admin.pages.courses.index.table.created_at')</th>
                            <th>&nbsp;</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach($courses as $course)
                            <tr action-id="{{ $course->id }}">
                                <th scope="row">
                                    <div class="ios-switch switch-sm">
                                        <input type="checkbox" class="js-switch">
                                        {{ $course->id }}
                                    </div>
                                </th>
                                <td>
                                    {{ str_limit($course->title, 30) }}&nbsp;-&nbsp;<strong>@lang('views.admin.pages.courses.index.status.' . $course->status)</strong>
                                    <div class="button-group">
                                        @if($course->status !=3)
                                            <a href="@route('admin.courses.edit', ['course' => $course->id])" data-toggle="tooltip" data-placement="top" title="@lang('views.admin.operation.edit')" data-pjax><i class="icon-pencil icon-lg"></i></a>
                                            <a href="#" class="m-l-sm text-info btn-naked" data-toggle="modal" data-target="#edit-page" data-quick-edit>@lang('views.admin.operation.quick-edit')</a>
                                            <a href="#" class="m-l-sm text-info btn-naked" data-toggle="tooltip" data-placement="top" title="@lang('views.admin.operation.trash')" data-trash><i class="icon-trash icon-lg"></i></a>
                                            <a href="#" class="m-l-sm text-info btn-naked" data-toggle="tooltip" data-placement="top" title="@lang('views.admin.operation.view')"><i class="icon-eye icon-lg"></i></a>
                                        @endif
                                        @if($course->status == 3)
                                            <a href="#" class="m-l-sm text-info btn-naked" data-toggle="tooltip" data-placement="top" title="@lang('views.admin.operation.revert')" data-revert><i class="icon-action-undo icon-lg"></i></a>
                                        @endif
                                            <a href="#" class="m-l-sm text-danger btn-naked" data-toggle="tooltip" data-placement="top" title="@lang('views.admin.operation.delete')" data-delete><i class="icon-close icon-lg"></i></a>
                                    </div>
                                </td>
                                <td>{{ $course->user->name }}</td>
                                <td></td>
                                <td>
                                    <time datetime="{{ $course->created_at->format('Y-m-d H:i:s') }}">
                                        {{ $course->created_at->diffForHumans() }}
                                    </time>
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
                                @unless(request_is_route('admin.courses.index', ['status' => 3], true))
                                <button class="btn btn-danger btn-rounded bulk-trash">@lang('views.admin.operation.trash')</button>
                                @endunless
                                @if(request_is_route('admin.courses.index', ['status' => 3], true))
                                    <button class="btn btn-primary btn-rounded bulk-revert">@lang('views.admin.operation.revert')</button>
                                @endif
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
    <div id="quick-edit-modal"></div>
    {{--<div class="modal fade" id="edit-page" tabindex="-1" role="dialog" aria-labelledby="edit-page-title">--}}
        {{--<div class="modal-dialog" role="document">--}}
            {{--<div class="modal-content">--}}
                {{--<div class="modal-header">--}}
                    {{--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>--}}
                    {{--<h4 class="modal-title" id="edit-page-title">@lang('views.admin.operation.quick-edit')</h4>--}}
                {{--</div>--}}
                {{--<form action="#" class="form-horizontal" method="post">--}}
                    {{--{{ csrf_field() }}--}}
                    {{--{{ method_field('PATCH') }}--}}
                    {{--<div class="modal-body">--}}
                        {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                                {{--<label class="control-label">@lang('validation.attributes.title')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                                {{--<input type="text" class="form-control" name="title">--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                                {{--<label class="control-label">@lang('validation.attributes.category')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                                {{--<select name="category" class="form-control">--}}
                                    {{--<option value="" selected>test</option>--}}
                                {{--</select>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                                {{--<label class="control-label">@lang('validation.attributes.status')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                                {{--<select name="status" class="form-control">--}}
                                    {{--@foreach([0,1,2,3] as $status)--}}
                                        {{--<option value="$status">@lang('views.admin.pages.courses.index.status.' . $status)</option>--}}
                                    {{--@endforeach--}}
                                {{--</select>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="modal-footer">--}}
                        {{--<button class="btn btn-default" data-dismiss="modal">Close</button>--}}
                        {{--<button type="submit" class="btn btn-primary">save</button>--}}
                    {{--</div>--}}
                {{--</form>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/pages/delete.js" pjax-script></script>
<script src="/assets/js/admin/courses/index.js" pjax-script></script>
<script>
    $("a[data-quick-edit]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var ID = $($(this).parents("tr")[0]).attr("action-id");
            {{--$.ajax({--}}
                {{--url: "@route('admin.courses.api.get', ['course' => " + ID + "], false)"--}}
                {{--type: 'GET',--}}
                {{--dataType: 'json',--}}
                {{--success: function (data) {--}}
                    {{--$("#quick-edit-modal").html(--}}
                            {{--'<div class="modal fade" id="edit-page" tabindex="-1" role="dialog" aria-labelledby="edit-page-title"> ' +--}}
                            {{--'<div class="modal-dialog" role="document"> ' +--}}
                            {{--'<div class="modal-content"> ' +--}}
                            {{--'<div class="modal-header"> ' +--}}
                            {{--'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' +--}}
                            {{--'<h4 class="modal-title" id="edit-page-title">' + "@lang('views.admin.operation.quick-edit')" + '</h4>' +--}}
                            {{--'</div> ' +--}}
                            {{--'<form action="#" class="form-horizontal" method="post">' + "--}}
                            {{--{{ csrf_field() }}--}}
                            {{--{{ method_field('PATCH') }}" +--}}
                            {{--<div class="modal-body">--}}
                            {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                            {{--<label class="control-label">@lang('validation.attributes.title')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                            {{--<input type="text" class="form-control" name="title">--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                            {{--<label class="control-label">@lang('validation.attributes.category')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                            {{--<select name="category" class="form-control">--}}
                            {{--<option value="" selected>test</option>--}}
                    {{--</select>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                            {{--<div class="col-sm-2">--}}
                            {{--<label class="control-label">@lang('validation.attributes.status')</label>--}}
                            {{--</div>--}}
                            {{--<div class="col-sm-8">--}}
                            {{--<select name="status" class="form-control">--}}
                            {{--@foreach([0,1,2,3] as $status)--}}
                            {{--<option value="$status">@lang('views.admin.pages.courses.index.status.' . $status)</option>--}}
                            {{--@endforeach--}}
                            {{--</select>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--<div class="modal-footer">--}}
                            {{--<button class="btn btn-default" data-dismiss="modal">Close</button>--}}
                            {{--<button type="submit" class="btn btn-primary">save</button>--}}
                            {{--</div>--}}
                            {{--</form>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--</div>');--}}
                {{--}--}}
            {{--})--}}
            {{--$($(this).parents("tr")[0]).html(--}}
                    {{--'<div class="modal fade" id="edit-page" tabindex="-1" role="dialog" aria-labelledby="edit-page-title">' +--}}
                    {{--'<div class="modal-dialog" role="document">' +--}}
                    {{--'<div class="modal-content">' +--}}
                    {{--'<div class="modal-header">' +--}}
                    {{--'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+' ' +--}}
                    {{--'<h4 class="modal-title" id="edit-page-title">'+'@lang('views.admin.operation.quick-edit')'+'</h4>' +--}}
                    {{--'</div> ' +--}}
                    {{--'<div class="modal-body">test ' +--}}
                    {{--'</div> ' +--}}
                    {{--'<div class="modal-footer"> ' +--}}
                    {{--'<button class="btn btn-default" data-dismiss="modal">Close</button> ' +--}}
                    {{--'<button class="btn btn-primary">save</button> ' +--}}
                    {{--'</div>' +--}}
                    {{--'</div> ' +--}}
                    {{--'</div> ' +--}}
                    {{--'</div>');--}}
            $("#quick-edit-modal").html(
                    '<div class="modal fade" id="edit-page" tabindex="-1" role="dialog" aria-labelledby="edit-page-title"> ' +
                    '<div class="modal-dialog" role="document"> ' +
                    '<div class="modal-content"> ' +
                    '<div class="modal-header"> ' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' +
                    '<h4 class="modal-title" id="edit-page-title">@lang('views.admin.operation.quick-edit')</h4>' +
                    '</div> ' +
                    '<form action="#" class="form-horizontal" method="post">{{ csrf_field() }}{{ method_field('PATCH') }}' +
                    '<div class="modal-body"> ' +
                    '<div class="form-group"> ' +
                    '<div class="col-sm-2"> ' +
                    '<label class="control-label">@lang('validation.attributes.title')</label> ' +
                    '</div> ' +
                    '<div class="col-sm-8"> ' +
                    '<input type="text" class="form-control" name="title"> ' +
                    '</div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<div class="col-sm-2"> ' +
                    '<label class="control-label">@lang('validation.attributes.category')</label> ' +
                    '</div> ' +
                    '<div class="col-sm-8"> ' +
                    '<select name="category" class="form-control"> ' +
                    '<option value="" selected>test</option> ' +
                    '</select> ' +
                    '</div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<div class="col-sm-2"> ' +
                    '<label class="control-label">@lang('validation.attributes.status')</label> ' +
                    '</div> ' +
                    '<div class="col-sm-8"> ' +
                    '<select name="status" class="form-control"> ' + '@foreach([0,1,2,3] as $status)<option value="$status">@lang('views.admin.pages.courses.index.status.' . $status)</option>@endforeach' +
                    '</select> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div> ' +
                    '<div class="modal-footer"> ' +
                    '<button class="btn btn-default" data-dismiss="modal">Close</button> ' +
                    '<button type="submit" class="btn btn-primary">save</button> ' +
                    '</div> ' +
                    '</form> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div>');
            // var $edit-page = $($(this).parents("tr")[0]);
            //
            // var html = $edit-page.html();
            // var newHTML = '<div class="col-sm-12"><div class="panel panel-default"><div class="panel-body">test</div></div></div></div>';
            // $edit-page.html(newHTML);
        }.bind(this));
    });
</script>
@endpush