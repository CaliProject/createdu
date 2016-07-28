@extends('layouts.full')

@section('app.content')

    <div class="Profile--settings">
        <aside class="sidebar">
            <div class="sidebar__wrapper">
                <div class="user-info">
                    <img :src="User.avatarUrl" :alt="User.name">
                    <span class="name">@{{ User.name }}</span>
                    <span class="email">@{{ User.email }}</span>
                </div>
                <ul class="List--naked Tab">
                    <li{{ request_is_route('users.profile.settings') ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings')"><i class="icon-home"></i> @lang('views.profile.settings.titles.overview')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'edit']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'edit'], false)"><i class="icon-pencil"></i> @lang('views.profile.settings.titles.edit')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'password']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'password'], false)"><i class="icon-lock"></i> @lang('views.profile.settings.titles.password')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'membership']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'membership'], false)"><i class="icon-badge"></i> @lang('views.profile.settings.titles.membership')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'credits']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'credits'], false)"><i class="icon-wallet"></i> @lang('views.profile.settings.titles.credits')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'history']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'history'], false)"><i class="icon-graph"></i> @lang('views.profile.settings.titles.history')</a>
                    </li>
                    <li{{ request_is_route('users.profile.settings', ['section' => 'privacy']) ? ' class=active' : '' }}>
                        <a href="@route('users.profile.settings', ['section' => 'privacy'], false)"><i class="icon-key"></i> @lang('views.profile.settings.titles.privacy')</a>
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

@stop