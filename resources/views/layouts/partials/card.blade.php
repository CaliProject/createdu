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
                <a href="#" class="sign-out" data-href="@route('exit')" @click="signOut"><i class="fa fa-power-off"></i>&nbsp;@lang('views.global.user.sign-out')</a>
            </div>
        </div>
    </div>
</div>