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
    <div class="Conversations__popover has-convo-opened">
        <div class="Convo__popover">
            <div class="Convo__wrapper">
                <div class="Convo--open Convo__message">
                    <header class="Convo__header">
                        <div class="Convo__header__image" style="background-image: url('http://q.qlogo.cn/qqapp/101333825/CA0B5307F3C3AFE708FB04A1F3D036C4/100')"></div>
                        <div class="Convo__header__main">
                            <div class="title">
                                <a href="#" target="_blank">Cali Castle</a>
                            </div>
                            <div class="controls">

                            </div>
                        </div>
                    </header>
                    <main class="Convo__main"></main>
                    <footer class="Convo__composer"></footer>
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