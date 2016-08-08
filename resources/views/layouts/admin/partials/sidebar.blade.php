<div class="page-sidebar sidebar">
    <div class="page-sidebar-inner slimscroll">
        <div class="sidebar-header">
            <div class="sidebar-profile">
                <a href="javascript:void(0);" id="profile-menu-link">
                    <div class="sidebar-profile-image">
                        <img :src="User.avatarUrl" class="img-circle img-responsive" :alt="User.name">
                    </div>
                    <div class="sidebar-profile-details">
                        <span>@{{ User.name }}<br><small>@{{ User.email }}</small></span>
                    </div>
                </a>
            </div>
        </div>
        <ul class="menu accordion-menu">
            <li class="{{ request_is_route('admin.index') ? 'active' : '' }}">
                <a href="@route('admin.index', [], false)" class="waves-effect waves-button" data-pjax>
                    <span class="menu-icon icon-speedometer"></span>
                    <p>@lang('views.admin.titles.dashboard')</p>
                </a>
            </li>
            <li class="droplink{{ request_is_route('admin.index', ['section' => 'users'],true) ? ' active' : '' }}">
                <a href="#" class="waves-effect waves-button">
                    <span class="menu-icon icon-user"></span><p>@lang('views.admin.titles.users.main')</p><span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li><a href="@route('admin.index', ['section' => 'users'], false)" data-pjax>@lang('views.admin.titles.users.sub.index')</a></li>
                    <li><a href="@route('admin.users.profile.index', [], false)" data-pjax>@lang('views.admin.titles.users.sub.profile')</a></li>
                    <li><a href="@route('admin.users.invitations', [], false)" data-pjax>@lang('views.admin.titles.users.sub.invitations')</a></li>
                </ul>
            </li>
            {{--<li class="droplink">--}}
                {{--<a href="#" class="waves-effect waves-button">--}}
                    {{--<span class="menu-icon icon-picture"></span><p>@lang('views.admin.titles.media.main')</p><span class="arrow"></span>--}}
                    {{--<ul class="sub-menu">--}}
                        {{--<li><a href="#">Sub</a></li>--}}
                    {{--</ul>--}}
                {{--</a>--}}
            {{--</li>--}}
            <li class="droplink{{ request_is_route('admin.index', ['section' => 'courses'], true) ? ' active' : ''}}">
                <a href="#" class="waves-effect waves-button">
                    <span class="menu-icon icon-book-open"></span><p>@lang('views.admin.titles.courses.main')</p><span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li><a href="@route('admin.index', ['section' => 'courses'], false)" data-pjax>@lang('views.admin.titles.courses.sub.index')</a></li>
                    <li><a href="@route('admin.courses.add')" data-pjax>@lang('views.admin.titles.courses.sub.add')</a></li>
                </ul>
            </li>
            <li class="droplink{{ request_is_route('admin.index', ['section' => 'posts'], true) ? ' active' : ''}}">
                <a href="#" class="waves-effect waves-button">
                    <span class="menu-icon icon-note"></span><p>@lang('views.admin.titles.posts.main')</p><span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li><a href="@route('admin.index', ['section' => 'posts'], false)" data-pjax>@lang('views.admin.titles.posts.sub.index')</a></li>
                    <li><a href="@route('admin.posts.add')" data-pjax>@lang('views.admin.titles.posts.sub.add')</a></li>
                </ul>
            </li>
            <li class="droplink{{ request_is_route('admin.index', ['section' => 'centers' ], true) ? ' active' : '' }}">
                <a href="#" class="waves-effect waves-button">
                    <span class="menu-icon icon-support"></span><p>@lang('views.admin.titles.data-center.main')</p><span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li><a href="@route('admin.index', ['section' => 'centers'], false)" data-pjax>@lang('views.admin.titles.data-center.sub.index')</a></li>
                    <li><a href="@route('admin.centers.factory', [], false)" data-pjax>@lang('views.admin.titles.data-center.sub.factory')</a></li>
                </ul>
            </li>
            <li class="droplink">
                <a href="#" class="waves-effect waves-button">
                    <span class="menu-icon icon-equalizer"></span><p>@lang('views.admin.titles.settings.main')</p><span class="arrow"></span>
                </a>
                {{--<ul class="sub-menu">--}}
                    {{--<li><a href="@route('admin.settings.general')" data-pjax>@lang('views.admin.titles.settings.sub.general')</a></li>--}}
                    {{--<li class="droplink">--}}
                        {{--<a href="#" class="waves-effect waves-button">--}}
                            {{--<p>@lang('views.admin.titles.settings.sub.advanced.main')</p>--}}
                            {{--<span class="arrow"></span>--}}
                        {{--</a>--}}
                        {{--<ul class="sub-menu">--}}
                            {{--<li><a href="@route('admin.settings.advanced.index', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.advanced.develop')</a></li>--}}
                            {{--<li><a href="@route('admin.settings.advanced.database', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.advanced.database')</a></li>--}}
                            {{--<li><a href="@route('admin.settings.advanced.cache', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.advanced.cache')</a></li>--}}
                            {{--<li><a href="@route('admin.settings.advanced.sub-domains', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.advanced.sub-domains')</a></li>--}}
                        {{--</ul>--}}
                    {{--</li>--}}
                    {{--<li><a href="@route('admin.settings.display.index', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.display')</a></li>--}}
                    {{--<li><a href="@route('admin.settings.services', [], false)" data-pjax>@lang('views.admin.titles.settings.sub.services')</a></li>--}}
                    {{--<li>--}}
                        {{--<a href="@route('admin.settings.upgrade', [], false)" data-pjax>--}}
                            {{--<i class="icon-present"></i>&nbsp;@lang('views.admin.titles.settings.sub.upgrade')--}}
                        {{--</a>--}}
                    {{--</li>--}}
                {{--</ul>--}}
            </li>
            @stack('sidebar-menu')
        </ul>
    </div><!-- Page Sidebar Inner -->
</div><!-- Page Sidebar -->