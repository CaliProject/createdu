@extends('layouts.full')

@section('app.content')
    <section class="Hero-Banner">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div id="boxgallery" class="boxgallery" data-effect="effect-2" style="min-height: 520px;">
                        <div class="gallery-panel"><img src="/assets/images/box-slides/3.jpg" alt="Image 3"/></div>
                        <div class="gallery-panel"><img src="/assets/images/box-slides/4.jpg" alt="Image 4"/></div>
                        <div class="gallery-panel"><img src="/assets/images/box-slides/1.jpg" alt="Image 1"/></div>
                        <div class="gallery-panel"><img src="/assets/images/box-slides/2.jpg" alt="Image 2"/></div>
                    </div>
                </div>
            </div>
        </div>
        <svg class="oblique" preserveAspectRatio="none" viewBox="0 0 210 210">
            <polygon points="0,150 210,0 210,150"></polygon>
            <polygon points="0,150 0,210 210,210 210,150"></polygon>
        </svg>
    </section>
    <section class="Section1">

    </section>
@endsection

@push('scripts.footer')
<script>
    new BoxesFx(document.getElementById('boxgallery'));
</script>
@endpush