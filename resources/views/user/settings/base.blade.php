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
                    <li class="active">
                        <a href="#"><i class="icon-home"></i> 帐号总览</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-pencil"></i> 编辑资料</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-lock"></i> 更改密码</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-badge"></i> 我的会员</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-wallet"></i> 我的积分</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-graph"></i> 学习记录</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-key"></i> 隐私信息</a>
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