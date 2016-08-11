@extends('layouts.full')

@section('app.content')
    <div class="container">
        <div class="Profile--settings">
            <aside class="sidebar">
                <div class="sidebar__wrapper">
                    <div class="user-info">
                        <div class="user-avatar">
                            <img :src="User.avatarUrl" :alt="User.name">
                            <span>@lang('views.profile.settings.change-avatar')</span>
                        </div>
                        <i class="gender-bg" :class="'gender-' + User.gender" v-if="User.gender!='secret'"></i>
                        <span class="name" v-cloak>@{{ User.name }}</span>
                        <span class="email" v-cloak>@{{ User.email }}</span>
                    </div>
                    <ul class="List--naked Tab">
                        <li{{ request_is_route('users.profile.settings') ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings')"><i
                                        class="icon-home"></i> @lang('views.profile.settings.titles.overview')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'edit']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'edit'], false)"><i
                                        class="icon-pencil"></i> @lang('views.profile.settings.titles.edit')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'password']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'password'], false)"><i
                                        class="icon-lock"></i> @lang('views.profile.settings.titles.password')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'membership']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'membership'], false)"><i
                                        class="icon-badge"></i> @lang('views.profile.settings.titles.membership')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'credits']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'credits'], false)"><i
                                        class="icon-wallet"></i> @lang('views.profile.settings.titles.credits')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'history']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'history'], false)"><i
                                        class="icon-graph"></i> @lang('views.profile.settings.titles.history')</a>
                        </li>
                        <li{{ request_is_route('users.profile.settings', ['section' => 'privacy']) ? ' class=active' : '' }}>
                            <a href="@route('users.profile.settings', ['section' => 'privacy'], false)"><i
                                        class="icon-key"></i> @lang('views.profile.settings.titles.privacy')</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="Pane">
                <div class="Pane-heading">
                    <h2>@yield('title')</h2>
                </div>

                <div class="Pane-body">
                    @yield('pane.content')
                </div>

            </div>
        </div>
        <form action="@route('users.profile.upload-avatar', [], false)" method="POST" id="avatar-uploader" class="hidden">
            <input type="file" name="avatar" id="avatar-file" class="input-file" accept="image/png,image/jpeg,image/gif"/>
        </form>
    </div>
@stop

@push('scripts.footer')
<script>
    $(function () {
        $(".user-avatar").on('click', function () {
            $("input#avatar-file").click();
        });

        $('.input-file').each(function () {
            $input = $(this);

            $input.on('change', uploadFile);

            // Firefox bug fix
            $input.on('focus', function () {
                $input.addClass('has-focus');
            }).on('blur', function () {
                $input.removeClass('has-focus');
            });
        });

        function uploadFile(e) {
            $form = $("form#avatar-uploader")[0];

            $.ajaxFileUpload({
                url: $form.action,
                dataType: 'json',
                fileElementId: 'avatar-file',
                success: function(d) {
                    vm.User.avatarUrl = d.url;
                }
            });
        }
    });
</script>
@endpush