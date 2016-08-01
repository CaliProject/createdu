<div class="Inbox" data-inbox="{{ Auth::user()->inboxNotifications() }}">
    <div class="Inbox__title text-center">
        <p v-if="User.unread">@{{ User.unread }}@lang('views.nav.inbox.unread')</p>
        <p v-else>@lang('views.nav.inbox.empty')</p>
    </div>
    <div class="Inbox__inner SlimScroll">
        <div class="Inbox__empty zoom" v-if="!User.unread" v-cloak>
            <img src="/assets/images/empty-box.png" alt="Empty inbox">
        </div>
        <ul class="Inbox__list List--naked" v-else>
            <li class="Inbox__item" transition="expand" v-for="Inbox in Inboxes">
                <a href="#" @click.prevent="readInbox" :inbox-id="Inbox.id" :inbox="$index">
                    <div class="badge badge-success" :class="'inbox-type-' + Inbox.type"></div>
                    <time class="timeago" :datetime="Inbox.time"></time>
                    <p class="details">@{{ Inbox.content }}</p>
                </a>
            </li>
        </ul>
    </div>
    <div class="Inbox__footer">
        {{-- TODO: Add href link --}}
        <a href="#">@lang('views.nav.inbox.see-all')</a>
        <a href="#" class="clear-all" @click.prevent="readAllInbox" v-if="Inboxes.length"><i class="fa fa-trash-o"></i></a>
    </div>
</div>