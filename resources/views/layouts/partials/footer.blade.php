<footer class="Footer">
    <div class="Footer__container">
        <div class="Footer__brand">
            <a href="/">
                <img src="/assets/logo.png" alt="Logo">
                @site('siteTitle') - @site('siteMotto')
            </a>
            <div class="pull-right">
                <ul class="List--naked List--inline">
                    <li>
                        <a href="#">@lang('views.global.footer.policy')</a>
                    </li>
                    <li>
                        <a href="#">@lang('views.global.footer.terms')</a>
                    </li>
                    <li>
                        &copy; {{ date('Y') }} @site('company'). @lang('views.global.footer.copyright')
                    </li>
                </ul>
            </div>
        </div>
        <div class="Footer__icp">
            <small>@site('icp')</small>
        </div>
    </div>
</footer>
<div class="Conversations" v-if="Conversations.length">
    <div class="Conversations__popover" :class="{'has-convo-opened':hasOpenedConvo}" v-cloak>
        <div class="Convo__popover">
            <div class="Convo__wrapper">
                <div class="Convo__message" v-for="Conversation in Conversations" :class="{'Convo--open' : Conversation.open}" v-if="Conversation.open" transition="convo">
                    <header class="Convo__header">
                        <div class="Convo__header__image" :style="'background-image: url(\'' + Conversation.avatar + '\')'"></div>
                        <div class="Convo__header__main">
                            <div class="title">
                                <a :href="'/@' + Conversation.name" target="_blank" v-text="Conversation.name"></a>
                            </div>
                            <div class="controls">
                                <a href="#" class="minimize-control" @click.prevent="Conversation.open = false"><i class="fa fa-compress"></i></a>
                                <a href="#" class="close-control"><i class="fa fa-times"></i></a>
                            </div>
                        </div>
                    </header>
                    <main class="Convo__main">
                        <div class="Convo__inner">
                            <div class="SlimScroll">
                                <div class="Convo__messages">
                                    <div class="Convo--loader"></div>
                                    <div class="message-header">
                                        <div class="icebreaker">
                                            <a class="avatar img-circle" :href="'/@' + Conversation.name" target="_blank">
                                                <img :src="Conversation.avatar" :alt="Conversation.name">
                                            </a>
                                            <div class="name">
                                                <a :href="'/@' + Conversation.name" target="_blank">@{{ Conversation.name }}</a>
                                            </div>
                                            <div class="description">
                                                <p>@{{ Conversation.description }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="message-list"></div>
                                    <div class="new-indicator" :class="{'has-new-message' : Conversation.unread}">
                                        <button tabindex="-1" class="unread-button">
                                            @{{ Conversation.unread }} @lang('views.chat.unread-message')
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer class="Convo__composer">
                        <div class="message-addons-container">
                            <button class="composer-addon">
                                <i class="fa fa-plus-circle"></i>
                            </button>
                            <button class="composer-addon">
                                <i class="fa fa-picture-o"></i>
                            </button>
                        </div>
                        <div class="message-input-container">
                            <textarea placeholder="@lang('views.chat.new-message')" class="text-field" id="message-text-field" rows="1" @keyup.enter="sendMessage" v-model="message"></textarea>
                        </div>
                        <div class="send-button">
                            <button class="send" :class="{'disabled' : message == ''}" @click.prevent="sendMessage"><i class="fa fa-send-o"></i></button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
    <div class="Conversations__list SlimScroll" v-cloak>
        <div class="Conversations__container">
            <div class="Conversations__user" v-for="Conversation in Conversations" v-if="!Conversation.open" transition="convo">
                <div class="minimized">
                    <a href="#" class="convo-trigger" @click.prevent="openConvoBox($index)">
                        <div class="avatar">
                            <img :src="Conversation.avatar" :alt="Conversation.name" :title="Conversation.name" v-cloak>
                        </div>
                        <div class="badge badge-danger" v-if="Conversation.unread" v-cloak>
                            <span v-text="Conversation.unread"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>