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
                <li><a href="@route('sign-in')">登录</a></li>
                <li><a href="@route('sign-up')">注册</a></li>
            @else
                <li class="dropdown">
                    <a href="#" class="user-info" data-toggle="dropdown" role="button" aria-expanded="false">
                        <img src="{{ Auth::user()->avatarUrl }}" alt="{{ Auth::user()->name }}的头像" class="avatar">
                    </a>
                    <div class="Card Card--profile">

                    </div>
                </li>
            @endif
        </ul>
    </div>
</nav>