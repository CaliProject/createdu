<div class="Inbox" data-inbox="{{ Auth::user()->inboxNotifications() }}">
    <div class="Inbox__title">
        <p>@{{ User.unread }}@lang('views.nav.inbox.unread')</p>
    </div>
    <div class="Inbox__inner SlimScroll">
        <ul class="Inbox__list List--naked" v-for="Inbox in Inboxes">
            <li class="Inbox__item">
                {{-- TODO: Add href link --}}
                <a href="#">
                    <div class="badge badge-success" :class="'inbox-type-' + Inbox.type"></div>
                    <time class="time">@{{ Inbox.time }}</time>
                    <p class="details">@{{ Inbox.content }}</p>
                </a>
            </li>
        </ul>
    </div>
    <div class="Inbox__footer">
        <a href="#">@lang('views.nav.inbox.see-all')</a>
    </div>
</div>