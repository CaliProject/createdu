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
@include('layouts.partials.conversations')