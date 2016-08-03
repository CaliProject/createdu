@extends('user.settings.base')

@section('title', trans('views.profile.settings.titles.edit'))

@section('pane.content')
    <div class="row">
        <div class="col-md-12">
            <div class="Well">
                <form action="{{ url()->current() }}" method="POST" class="Form ajax">
                    {!! csrf_field() !!}
                    {!! method_field('PATCH') !!}
                    <div class="form-group">
                        <label class="control-label" for="name">@lang('validation.attributes.name')</label>
                        <input type="text" class="form-control" id="name" name="name" v-model="User.name">
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="gender">@lang('validation.attributes.gender')</label>
                        <div class="row m-t-md">
                            @foreach(\Createdu\User::GENDER_TYPES as $gender)
                                <div class="radio-inline">
                                    <label>
                                        <input type="radio" name="gender" value="{{ $gender }}"{{ Auth::user()->gender == $gender ? ' checked' : '' }} v-model="User.gender">
                                        <i class="gender-{{ $gender }}"></i>&nbsp;@lang('views.global.user.gender.' . $gender)
                                    </label>
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description" class="control-label">@lang('validation.attributes.description')</label>
                        <textarea name="description" id="description" cols="20" rows="5" class="form-control" v-model="User.description"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-well btn-primary btn-round center-block">@lang('views.admin.pages.settings.update-button')</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop