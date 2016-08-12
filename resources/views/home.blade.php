@extends('layouts.full')

@section('app.content')
    <section class="Hero-Banner">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div id="boxgallery" class="boxgallery" data-effect="effect-2" style="min-height: 520px;">
                        @for($i = 1; $i <= 3; $i++)
                            <div class="gallery-panel"><img src="/assets/images/box-slides/{{ $i }}.jpg" alt="Image {{ $i }}"/></div>
                        @endfor
                    </div>
                </div>
            </div>
        </div>
        <svg class="oblique" preserveAspectRatio="none" viewBox="0 0 210 210">
            <polygon points="0,150 210,0 210,150"></polygon>
            <polygon points="0,150 0,210 210,210 210,150"></polygon>
        </svg>
    </section>
    <section class="Essentials">
        <div class="container">
            <div class="Title text-center p-v-sm">
                <h2>精品课程</h2>
            </div>
            <div class="row">
                @for($i = 1; $i <= 8; $i++)
                    @if($i == 5)
                    </div>
                    <div class="row">
                    @endif
                <a class="Essentials__item" href="#" data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z">
                    <figure>
                        <img src="/assets/images/home/essentials/{{ $i }}.png" />
                        <svg viewBox="0 0 180 440" preserveAspectRatio="none"><path d="m 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z"/></svg>
                        <figcaption>
                            <h2>课程{{ $i }}</h2>
                            <p>课程的介绍课程的介绍课程的介绍, 课程的介绍课程的介绍.</p>
                            <button>查看</button>
                        </figcaption>
                    </figure>
                </a>
                @endfor
            </div>
        </div>
        <svg class="oblique" preserveAspectRatio="none" viewBox="0 0 150 150">
            <polygon points="0,0 150,0 150,150"></polygon>
        </svg>
    </section>
    <section class="Tutors">
        <div class="Title">
            <h2>名师出高徒</h2>
            <p>一句话描述... 此处放教师精选</p>
        </div>
        <div class="isolayer isolayer--tutors isolayer--shadow">
            <ul class="grid">
                @for($i = 1; $i <= 11; $i++)
                    <li class="grid__item">
                        <a class="grid__link" href="#">
                            <div class="layer"></div>
                            <div class="layer"></div>
                            <div class="layer"></div>
                            <img class="grid__img layer" src="/assets/images/home/tutors/{{ random_int(1, 10) }}.png" alt="{{ $i }}" />
                        </a>
                    </li>
                @endfor
            </ul>
        </div>
    </section>
    <section class="Join">
        <div class="container">

        </div>
    </section>
@endsection

@push('scripts.footer')
<script src="/assets/js/snap.svg-min.js"></script>
<script src="/assets/js/pages/home.js"></script>
<script>
    new BoxesFx(document.getElementById('boxgallery'));
    (function() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function init() {
            var speed = 330,
                    easing = mina.backout;

            [].slice.call(document.querySelectorAll('.Essentials__item')).forEach(function (el) {
                var s = Snap(el.querySelector('svg')), path = s.select('path'),
                        pathConfig = {
                            from: path.attr('d'),
                            to: el.getAttribute('data-path-hover')
                        };

                el.addEventListener('mouseenter', function () {
                    path.animate({'path': pathConfig.to}, speed, easing);
                });

                el.addEventListener('mouseleave', function () {
                    path.animate({'path': pathConfig.from}, speed, easing);
                });
            });
        }

        init();

        new IsoGrid(document.querySelector('.isolayer--tutors'), {
            transform : 'translateX(-3vw) translateY(50px) rotateX(45deg) rotateZ(45deg)',
            stackItemsAnimation : {
                properties : function(pos) {
                    return {
                        translateZ: (pos+1) * 30,
                        rotateZ: getRandomInt(-4, 4)
                    };
                },
                options : function(pos, itemstotal) {
                    return {
                        type: dynamics.bezier,
                        duration: 500,
                        points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                        delay: (itemstotal-pos-1)*40
                    };
                }
            }
        });
    })();
</script>
@endpush