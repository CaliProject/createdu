<form action="{{ empty($course) ? route('admin.courses.add') : route('admin.courses.index', ['course' => $course->id]) }}" method="POST" class="form-horizontal">
    {{ csrf_field() }}
    {{ method_field($method) }}
    <div class="form-group">
        <div class="col-sm-2">
            <label for="title" class="control-label" required>@lang('validation.attributes.title')</label>
        </div>
        <div class="col-sm-10">
            <input type="text" name="title" id="title" class="form-control" value="{{ $course->title or old('title') }}">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-2">
            <label for="description" class="control-label" required>@lang('validation.attributes.description')</label>
        </div>
        <div class="col-sm-10">
            <textarea name="description" id="description" class="summernote">{{ $course->description or old('description') }}</textarea>
        </div>
    </div>
    @if(empty($course))
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
    @endif
    <div class="col-sm-12">
        <button type="submit" class="btn btn-block btn-primary btn-rounded">
            @if(empty($course))
                @lang('views.admin.operation.publish')
            @else
                @lang('views.admin.operation.update')
            @endif
        </button>
    </div>
</form>

@push('scripts.footer')
<script src="assets/js/admin/pages/summernote.js" pjax-script></script>
@endpush