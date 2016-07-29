@extends("layouts.admin.app")

@section("title", trans('views.admin.titles.users.sub.profile'))

@section('breadcrumb')
    <li><a href="@route('admin.index',['section' => 'users'],false)" data-pjax><i class="icon-user"></i>@lang('views.admin.titles.users.sub.index')</a></li>
    <li class="active"><i class="icon-pencil"></i>@lang('views.admin.titles.users.sub.profile')</li>
@stop

@section('app.content')
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        @lang('views.admin.pages.users.profile.basics.heading')
                    </h4>
                </div>
                <div class="panel-body">
                    <form action="{{ empty($user) ? route('admin.users.profile.save', [], false) : route('admin.users.edit.update', ['user' => $user->id], false) }}" method="POST" class="form-horizontal">
                        {{ csrf_field() }}
                        {{ method_field('PATCH') }}
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.name')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="name" class="form-control" v-model="User.name" required>
                                @else
                                    <input type="text" name="name" class="form-control" value="{{ $user->name }}" required>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.credit')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="credit" class="form-control" v-model="User.credit" required>
                                @else
                                    <input type="text" name="credit" class="form-control" value="{{ $user->credit }}" required>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.experience')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="experience" class="form-control" v-model="User.experience" required>
                                @else
                                    <input type="text" name="experience" class="form-control" value="{{ $user->experience }}">
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.email')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="email" class="form-control" v-model="User.email" required>
                                @else
                                    <input type="text" name="email" class="form-control" value="{{ $user->email }}" required>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.pages.settings.update-button')</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        @lang('views.admin.pages.users.profile.password.heading')
                    </h4>
                </div>
                <div class="panel-body">
                    <form action="{{ empty($user) ? route('admin.users.profile.update-password', [], false) : route('admin.users.edit.password', ['user' => $user->id], false) }}" method="POST" class="form-horizontal">
                        {{ csrf_field() }}
                        {{ method_field('PATCH') }}
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.password_old')</label>
                            <div class="col-md-10">
                                <input type="password" name="password_old" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.password')</label>
                            <div class="col-md-10">
                                <input type="password" name="password" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.password_confirmation')</label>
                            <div class="col-md-10">
                                <input type="password" name="password_confirmation" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.pages.settings.update-button')</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop