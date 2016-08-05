@extends('layouts.admin.app')

@section('title', trans('views.admin.titles.data-center.sub.factory'))

@section('breadcrumb')
    <li><a href="@route('admin.index', ['section' => 'centers'], false)"><i class="icon-support"></i>@lang('views.admin.titles.data-center.main')</a></li>
    <li class="active">@lang('views.admin.titles.data-center.sub.factory')</li>
@endsection

@section('app.content')
    <div class="row">
        <div class="col-xs-12">
            <h2>@lang('views.admin.pages.data-center.factory.heading')</h2>
            <blockquote>
                <p>@lang('views.admin.pages.data-center.factory.tips')</p>
            </blockquote>
        </div>
        <div class="col-sm-8 col-sm-offset-2">
            <div class="panel panel-white">
                <div class="panel-body">
                    <div class="col-sm-10 col-sm-offset-1">
                        <form action="@route('admin.centers.factory')" method="POST" id="factory-form">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label class="control-label">@lang('views.admin.pages.data-center.factory.model')</label>
                                <select name="model" id="model-select" class="form-control" style="width: 100%">
                                    @foreach(['user','post','course',] as $model)
                                        <option value="{{ $model }}">@lang('views.admin.pages.data-center.factory.models.' . $model)</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="control-label">@lang('views.admin.pages.data-center.factory.quantity')</label>
                                <select name="quantity" id="quantity-select" class="form-control" style="width: 100%">
                                    @foreach([5,10,15,20,50,100,150,200] as $item)
                                        <option value="{{ $item }}">{{ $item }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary btn-rounded btn-block">@lang('views.admin.pages.data-center.factory.create')</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts.footer')
<script src="/assets/js/admin/center/factory.js" pjax-script></script>
@endpush