<div class="page-footer">
    <div class="col-xs-5">
        <p class="no-s">{{ date('Y') }} &copy; @{{ Site.title }}.</p>
        <b class="powered">Powered by Project Noah</b>
    </div>
    <div class="col-xs-7 text-right" style="line-height: 41px;">
        <small id="noah-version">
            @lang('views.admin.footer.current-version'): {{ Site::getCurrentVersion() }}
            @if(Site::isBeta())
                <span class="beta badge badge-danger">Beta</span>
            @endif
        </small>
    </div>
</div>