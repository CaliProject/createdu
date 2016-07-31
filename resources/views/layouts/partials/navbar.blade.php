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
                    <a href="#" class="user-notification" data-toggle="dropdown" role="button" aria-expanded="false">
                        <i class="fa fa-bell"></i>
                        <span class="badge badge-success pull-right unread-{{ Auth::user()->unread }}" :class="'unread-'+User.unread" v-show="User.unread">@{{ User.unread }}</span>
                    </a>
                    @include('layouts.partials.inbox')
                </li>
                <li>
                    <a href="#" class="user-info" data-toggle="dropdown" role="button" aria-expanded="false">
                        <img :src="User.avatarUrl" :alt="User.name" class="avatar">
                    </a>
                    @include('layouts.partials.card')
                </li>
            @endif
        </ul>
    </div>
</nav>