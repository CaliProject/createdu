@extends("layouts.admin.app")

@section("title", trans('views.admin.titles.users.sub.profile'))

@section('breadcrumb')
    <li><a href="@route('admin.index',['section' => 'users'],false)" data-pjax><i
                    class="icon-user"></i>@lang('views.admin.titles.users.sub.index')</a></li>
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
                    <form action="{{ empty($user) ? route('admin.users.profile.save', [], false) : route('admin.users.edit.update', ['user' => $user->id], false) }}"
                          method="POST" class="form-horizontal">
                        {{ csrf_field() }}
                        {{ method_field('PATCH') }}
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.name')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="name" class="form-control" v-model="User.name" required>
                                @else
                                    <input type="text" name="name" class="form-control" value="{{ $user->name }}"
                                           required>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.credit')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="credit" class="form-control" v-model="User.credit"
                                           required>
                                @else
                                    <input type="text" name="credit" class="form-control" value="{{ $user->credit }}"
                                           required>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.experience')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="experience" class="form-control" v-model="User.experience"
                                           required>
                                @else
                                    <input type="text" name="experience" class="form-control"
                                           value="{{ $user->experience }}">
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">@lang('validation.attributes.email')</label>
                            <div class="col-md-10">
                                @if(empty($user))
                                    <input type="text" name="email" class="form-control" v-model="User.email" required>
                                @else
                                    <input type="text" name="email" class="form-control" value="{{ $user->email }}"
                                           required>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit"
                                    class="btn btn-primary btn-block btn-rounded">@lang('views.admin.pages.settings.update-button')</button>
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
                    <form action="{{ empty($user) ? route('admin.users.profile.update-password', [], false) : route('admin.users.edit.password', ['user' => $user->id], false) }}"
                          method="POST" class="form-horizontal">
                        {{ csrf_field() }}
                        {{ method_field('PATCH') }}
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
                            <button type="submit"
                                    class="btn btn-primary btn-block btn-rounded">@lang('views.admin.pages.settings.update-button')</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @if(empty($user))
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-white">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            @lang('views.admin.pages.users.profile.avatar.heading')
                        </h4>
                    </div>
                    <div class="panel-body">
                        <div class="col-sm-12">
                            <div class="avatar-crop col-xs-6 col-xs-offset-3">
                                <img :src="User.avatarUrl" :alt="User.name" class="img-circle"
                                     style="width: 100%; height: 100%">
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="m-t-lg">
                                <form action="@route('admin.users.profile.upload-avatar', [], false)" method="POST"
                                      id="avatar-uploader">
                                    <input type="file" name="avatar" id="avatar-file" class="input-file input-uploader"
                                           accept="image/png,image/gif,image/jpeg">
                                    <label for="avatar">
                                        <figure class="icon-cloud-upload"></figure>
                                        <span>@lang('views.admin.pages.settings.display.upload-logo.upload')&hellip;</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-white">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            @lang('views.admin.pages.users.profile.social.heading')
                        </h4>
                    </div>
                    <div class="panel-body">
                        <div class="col-xs-12">
                            @foreach(explode(',', Site::supportedOAuths()) as $service)
                                <form action="@route('admin.users.profile.oauth', ['service' => $service, 'admin' => true])"
                                      id="{{ $service }}-oauth" method="POST" class="p-v-md">
                                    {!! csrf_field() !!}
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <b class="{{ $service }}-colored" style="text-transform: capitalize"><i
                                                    class="fa fa-{{ $service }}"></i>&nbsp;{{ $service == 'qq' ? 'QQ' : $service }}
                                        </b>
                                    </div>
                                    <div class="col-md-4 col-sm-5 col-xs-6 text-right">
                                        @if(Auth::user()->boundOAuth($service))
                                            <button type="submit"
                                                    class="btn btn-danger btn-block btn-rounded">@lang('views.admin.pages.users.profile.social.unbind')</button>
                                        @else
                                            <button type="submit"
                                                    class="btn btn-success btn-block btn-rounded">@lang('views.admin.pages.users.profile.social.bind')</button>
                                        @endif
                                    </div>
                                </form>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
@stop

@push('scripts.footer')
<script src="/assets/js/admin/users/profile.js" pjax-script></script>
@endpush