@extends('user.settings.base')

@section('title', trans('views.profile.settings.titles.privacy'))

@section('pane.content')
    <div class="row">
        {{-- SMS binding --}}
        <div class="col-md-6">
            <div class="Well">
                <h4 :class="User.tel == null ? 'text-danger' : 'text-success'">
                    <i class="icon-screen-smartphone"></i>&nbsp;
                    <span>
                        @if(is_null(Auth::user()->tel))
                            @lang('views.profile.settings.privacy.bind-tel')
                        @else
                            @lang('views.profile.settings.privacy.bound-tel')
                        @endif
                    </span>
                </h4>
                <form action="@route('users.profile.tel')" class="Form verify-tel" method="POST">
                    {!! csrf_field() !!}
                    <div class="form-group">
                        @if(is_null(Auth::user()->tel))
                            <label class="control-label" for="tel">@lang('validation.attributes.tel')</label>
                            <input type="tel" class="form-control" id="tel" name="tel" v-model="User.tel" required>
                        @else
                            <p class="form-control-static">@{{ User.tel }}</p>
                            <input type="hidden" value="yes" name="unbind">
                        @endif
                    </div>
                    <div class="form-group">
                        @if(Auth::user()->tel)
                            <button type="submit" class="btn btn-danger btn-round btn-well center-block">@lang('views.profile.settings.privacy.unbind-tel')</button>
                        @else
                            <button type="submit" class="btn btn-primary btn-round btn-well center-block">@lang('views.profile.settings.privacy.send-code')</button>
                        @endif
                    </div>
                </form>
            </div>
        </div>
        {{-- Email confirmation --}}
        <div class="col-md-6">
            <div class="Well">
                <h4 :class="User.active ? 'text-success' : 'text-danger'">
                    <i class="icon-envelope-letter"></i>&nbsp;
                    <span>
                        @if(Auth::user()->active)
                            @lang('views.profile.settings.privacy.confirmed-email')
                        @else
                            @lang('views.profile.settings.privacy.confirm-email')
                        @endif
                    </span>
                </h4>
            </div>
        </div>
    </div>
    <div class="row"></div>
    {{-- Social platforms --}}
    <div class="row"></div>
    <form action="@route('users.profile.verify-tel', [], false)" class="hidden verification" method="POST">
        {!! csrf_field() !!}
        <input type="hidden" v-model="User.tel" name="tel">
        <input type="hidden" value="" name="verification">
    </form>
@stop

@push('scripts.footer')
<script>

    $(".Form.verify-tel").on('submit', function (ev) {
        ev.preventDefault();
        var form = ev.target,
            button = $(form).find("button[type=submit]")[0];

        $(form).addClass('loading');

        $.ajax({
            url: form.action,
            type: 'PATCH',
            data: $(form).serialize(),
            success: function (data) {
                if (data.status == 'success')
                    displayVerificationBox();
            },
            error: function (error) {
                if (error.status === 422) {
                    var errors = JSON.parse(error.responseText);
                    for (var er in errors) {
                        var sel = '[name=' + er + ']',
                            groupEl = $($(form).find(sel)[0]).parents('.form-group')[0];
                        // Add error class to the form-group
                        $(groupEl).addClass('has-error shaky');
                        setTimeout(() => $(groupEl).removeClass('has-error shaky'), 8000);

                        toastr.error(errors[er][0]);
                    }
                }
            },
            complete: function () {
                if (button) {
                    $(form).removeClass('loading');
                    $(form).addClass('done-loaded');
                    setTimeout(function () {
                        $(form).removeClass('done-loaded');
                    }, 300);
                }
            }
        });
    });

    function displayVerificationBox() {
        vm.popupPrompt({
            title: "<i class='icon-call-in'></i>&nbsp;@lang('views.profile.settings.privacy.tel-verify')",
            text: "@lang('views.profile.settings.privacy.input-message')",
            inputPlaceholder: "@lang('views.profile.settings.privacy.code')",
            confirmButtonText: "@lang('views.profile.settings.privacy.submit')",
            cancelButtonText: "@lang('views.alert.cancel')",
            ajax: true,
        }, function(inputValue){
            var form = $("form.verification"),
                hasError = false;

            $(form.find("input[name=verification]")[0]).attr('value', inputValue);

            $.post({
                url: $(form).attr('action'),
                data: form.serialize(),
                success: function (data) {
                    if (data.status == 'success') {
                        vm.autoCloseAlert({
                            title: "@lang('views.profile.settings.privacy.verified')",
                            @if(Auth::user()->tel)
                                text: "@lang('views.profile.settings.privacy.unbound-tel')",
                            @else
                                text: "@lang('views.profile.settings.privacy.bound-tel')" + vm.User.tel,
                            @endif
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1500);
                    } else {
                        hasError = true;
                        swal.showInputError("@lang('views.profile.settings.privacy.invalid')");
                    }
                },
                error: function (er) {
                    hasError = true;

                    if (er.status == 422)
                        swal.showInputError("@lang('views.profile.settings.privacy.invalid')");
                    else
                        swal.showInputError("@lang('views.alert.retry')");
                }
            });

            if (hasError)
                return false;
        });
    }

</script>
@endpush