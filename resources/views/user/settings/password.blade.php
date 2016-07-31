@extends('user.settings.base')

@section('title', trans('views.profile.settings.titles.password'))

@section('pane.content')
    <div class="row">
        <div class="col-md-6">
            <div class="Well">
                <h4 class="text-danger"><i class="icon-lock-open"></i>&nbsp;@lang('views.profile.settings.password.via-old-password')</h4>
                <form action="@route('users.profile.settings', ['section' => 'password'])" method="POST"
                      class="Form ajax">
                    {{ csrf_field() }}
                    {{ method_field('PATCH') }}
                    @if(Auth::user()->password)
                        <div class="form-group">
                            <label class="control-label"
                                   for="password_old">@lang('validation.attributes.password_old')</label>
                            <input type="password" class="form-control" id="password_old" name="password_old" required>
                        </div>
                    @else
                        <input type="hidden" name="social" value="yes">
                    @endif
                    <div class="form-group">
                        <label class="control-label" for="password">@lang('views.auth.reset.new_password')</label>
                        <input type="password" class="form-control" id="password" name="password"
                               autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <label class="control-label"
                               for="password_confirmation">@lang('validation.attributes.password_confirmation')</label>
                        <input type="password" class="form-control" id="password_confirmation"
                               name="password_confirmation" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-danger btn-well btn-round btn-block">@lang('views.profile.settings.password.submit')</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-6">
            <div class="Well">
                @if(Auth::user()->tel)
                    <h4 class="text-danger"><i class="icon-screen-smartphone"></i>&nbsp;通过手机验证更改</h4>
                    <form action="@route('users.profile.sms-password')" class="Form">

                    </form>
                @else
                    <h4 class="text-danger"><i class="fa fa-phone"></i>&nbsp;请先绑定手机</h4>
                    <a href="@route('users.profile.settings', ['section' => 'privacy'])"
                       class="btn btn-round btn-primary btn-well center-block">前往绑定</a>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="Well">
                <h4 class="text-primary"><i class="icon-envelope"></i>&nbsp;通过邮箱验证</h4>
                <form action="" class="Form"></form>
            </div>
        </div>
    </div>
@stop