<div class="page-title">
    <h3>@yield('title')</h3>
    <div class="page-breadcrumb">
        <ol class="breadcrumb">
            <li><a href="@route('admin.index', [], false)" data-pjax>@lang('views.admin.main-title')</a></li>
            @yield('breadcrumb')
        </ol>
    </div>
</div>