@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.courses.sub.add'))

@section('breadcrumb')
    <li><a href="@route('admin.courses.index', ['status' => 'all'], false)" data-pjax><i class="icon-book-open"></i>&nbsp;@lang('views.admin.titles.courses.sub.index')</a></li>
    <li class="active"><i class="fa fa-plus"></i>&nbsp;@lang('views.admin.titles.courses.sub.add')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-sm-9">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">@lang('views.admin.titles.courses.sub.add')</h4>
                </div>
                <div class="panel-body">
                    @include('admin.courses.partials.form', ['method' => 'POST'])
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="panel-group" role="tablist" aria-multiselecttable="true">
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="course-publish-heading">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" href="#course-publish" aria-expanded="true" aria-controls="course-publish">
                                @lang('views.admin.pages.courses.index.add.publish')
                            </a>
                        </h4>
                    </div>
                    <div id="course-publish" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="course-publish-heading">
                        <div class="panel-body">

                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="course-category-heading">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" href="#course-category" aria-expanded="false" aria-controls="course-category">
                                @lang('views.admin.pages.courses.index.add.category')
                            </a>
                        </h4>
                    </div>
                    <div id="course-category" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="course-category-heading">
                        <div class="panel-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection