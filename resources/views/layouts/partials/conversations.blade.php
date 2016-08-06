<div class="Conversations" v-if="Conversations.length">
    <div class="Conversations__popover" :class="{'has-convo-opened':hasOpenedConvo}" v-cloak>
        <div class="Convo__popover">
            <div class="Convo__wrapper">
                <div class="Convo__message" v-for="Conversation in Conversations" :class="{'Convo--open' : Conversation.open}" v-if="Conversation.open" transition="convo" :conversation-id="Conversation.id">
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
                                    <div class="message-list">
                                        <div class="message-bubble-container">
                                            <div class="message-timestamp">
                                                <time class="time">18:33</time>
                                            </div>
                                            <div class="message-container">
                                                <a :href="'/@' + Conversation.name" class="avatar" target="_blank">
                                                    <img :src="Conversation.avatar" :alt="Conversation.name">
                                                </a>
                                                <div class="message-bubble">
                                                    <div class="message">随便试试。。</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message-bubble-container collapsed">
                                            <div class="message-container">
                                                <a :href="'/@' + Conversation.name" class="avatar" target="_blank">
                                                    <img :src="Conversation.avatar" :alt="Conversation.name">
                                                </a>
                                                <div class="message-bubble">
                                                    <div class="message">你在干嘛?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message-bubble-container self">
                                            <div class="message-container">
                                                <a :href="'/@' + User.name" class="avatar" target="_blank">
                                                    <img :src="User.avatarUrl" :alt="User.name">
                                                </a>
                                                <div class="message-bubble">
                                                    <div class="message">你猜。。很明显啊</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message-bubble-container collapsed self">
                                            <div class="message-container">
                                                <a :href="'/@' + User.name" class="avatar" target="_blank">
                                                    <img :src="User.avatarUrl" :alt="User.name">
                                                </a>
                                                <div class="message-bubble has-image">
                                                    <div class="message">
                                                        <a href="#" class="lightbox-trigger" @click.prevent>
                                                            <div class="image-thumbnail">
                                                                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/f4b06def0e4c32d09d74cd7c8384f0c9_259_194.jpg" alt="">
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                            <textarea placeholder="@lang('views.chat.new-message')" class="text-field" id="message-text-field" rows="1" @keyup.enter.prevent="sendMessage" v-model="message"></textarea>
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