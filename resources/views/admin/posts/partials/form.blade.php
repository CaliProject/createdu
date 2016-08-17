<form action="{{ empty($post) ? route('admin.posts.add') : route('admin.posts.index', ['post' => $post->id], false) }}" method="POST" class="form-horizontal no-ajax">
    {{ csrf_field() }}
    {{ method_field($method) }}
    <div class="form-group">
        <div class="col-sm-2 text-right">
            <label for="title" class="control-label">@lang('validation.attributes.title')</label>
        </div>
        <div class="col-sm-10">
            <input type="text" name="title" id="title" class="form-control" value="{{ $post->title or old('title') }}">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-2 text-right">
            <label for="sticky" class="control-label">@lang('validation.attributes.sticky')</label>
        </div>
        <div class="col-sm-2 text-left">
            <div class="ios-switch switch-md">
                <input type="checkbox" name="sticky" id="sticky" class="js-switch" {{ empty($post) ? '' : $post->sticky ? ' checked' : '' }}>
            </div>
        </div>
        <div class="col-sm-2 text-right">
            <label for="essential" class="control-label">@lang('validation.attributes.essential')</label>
        </div>
        <div class="col-sm-2 test-left">
            <div class="ios-switch switch-md">
                <input type="checkbox" name="essential" id="essential" class="js-switch" {{ empty($post) ? '' : $post->essential ? ' checked' : '' }}>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-2 text-right">
            <label for="body" class="control-label">@lang('validation.attributes.body')</label>
        </div>
        <div class="col-sm-10">
            <textarea name="body" id="body" class="summernote">{{ $post->body or old('body') }}</textarea>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-1">
            @if(empty($post))
                <div class="col-sm-6"><button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.operation.publish')</button></div>
                <div class="col-sm-6"><a href="{{ redirect()->back() }}" class="btn btn-danger btn-block btn-rounded">@lang('views.admin.operation.return')</a></div>
            @else
                <button type="submit" class="btn btn-primary btn-block btn-rounded">@lang('views.admin.operation.update')</button>
            @endif
        </div>
    </div>
</form>

@push('scripts.footer')
<script src="assets/js/admin/pages/summernote.js" pjax-script></script>
@endpush