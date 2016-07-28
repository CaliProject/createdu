<nav class="navbar navbar-fixed-top Nav">
    <div class="navbar-header">

        <!-- Collapsed Hamburger -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <!-- Branding Image -->
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="{{ url('assets/logo.png') }}" alt="Logo">
        </a>
    </div>

    @include('layouts.partials.menu')

    <div class="collapse navbar-collapse" id="app-navbar-collapse">
        <!-- Left Side Of Navbar -->
        <ul class="nav navbar-nav">
            <li{{ request()->is('/') ? ' class=on' : '' }}><a href="/">主页</a></li>
            <li{{ request()->is('markets*') ? ' class=on' : '' }}><a href="{{ url('markets') }}">商城</a></li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="nav navbar-nav navbar-right">
            <li>
                <div class="search-bar">
                    <form :action="'/search/'+searchText" role="search" novalidate @submit.prevent="search">
                        <input type="text" v-model="searchText" placeholder="搜索...">
                        <i class="fa fa-search"></i>
                    </form>
                </div>
            </li>
            <!-- Authentication Links -->
            @if (Auth::guest())
                <li><a href="@route('sign-in')">@lang('views.auth.login.header_title')</a></li>
                <li><a href="@route('sign-up')">@lang('views.auth.register.header_title')</a></li>
            @else
                <li>
                    <a href="#" class="user-info" data-toggle="dropdown" role="button" aria-expanded="false">
                        <img :src="User.avatarUrl" :alt="User.name" class="avatar">
                    </a>
                    <div class="Card Card--profile">
                        <div class="Card__wrapper">
                            <div class="Card__header">
                                <div class="Card__avatar">
                                    <img :src="User.avatarUrl" :alt="User.name">
                                </div>
                                <div class="Card__info">
                                    <a class="user-name" href="{{ Auth::user()->profileLink() }}">@{{ User.name }}</a>
                                    <a class="user-credit" href="#" title="@lang('views.global.user.credit')"><i class="icon-wallet"></i>&nbsp;@{{ User.credit }}</a>
                                    <a class="user-exp" href="#" title="@lang('views.global.user.exp')"><i class="icon-graph"></i>&nbsp;@{{ User.experience }}</a>
                                </div>
                                <div class="Card__checkin">
                                    <button class="checkin-button" :class="{'checked': User.checkedIn}" @click="checkIn">
                                        <i class="fa fa-calendar-check-o" v-if="User.checkedIn"></i>
                                        <span v-else>@lang('views.global.user.check_in')</span>
                                    </button>
                                </div>
                            </div>
                            <div class="Card__body">
                                {{-- TODO: Add history or stars or something... --}}
                            </div>
                            <div class="Card__footer">
                                <a href="@route('users.profile.settings')">@lang('views.global.user.settings')&nbsp;<i class="fa fa-cogs"></i></a>
                                @can('view-dashboard')
                                    <a href="@route('admin.index')" class="dashboard" target="_blank" style="margin-left: 5px">后台管理 <i class="fa fa-user-secret"></i></a>
                                @endcan
                                <div class="pull-right">
                                    <a href="#" class="sign-out"><i class="fa fa-power-off"></i>&nbsp;@lang('views.global.user.sign-out')</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            @endif
        </ul>
    </div>
</nav>