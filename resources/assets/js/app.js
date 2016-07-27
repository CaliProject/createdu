const Vue = require('vue');

let vm = new Vue({
    el: '#app',
    methods: {
        backToTop() {
            $('body').animate({scrollTop: 0}, 500);
        },
        search(e) {
            window.location.href = e.target.action;
        },
        uploadAvatar() {
            $("#avatar-uploader").click();
        },
        checkIn() {
            if (! this.User.checkedIn) {
                const _this = this;

                this.request({
                    url: '/checkin',
                    type: 'post',
                    callback(success) {
                        if (success)
                            _this.User.checkedIn = true;
                    }
                });
            }
        },
        request(param) {
            if (param.data == undefined) {
                param.data = {_token: this.token};
            } else {
                param.data._token = this.token;
            }

            $.ajax({
                type: param.type,
                url: param.url,
                data: param.data,
                success(data) {
                    if (data.status != undefined) {
                        if (data.message != undefined)
                            toastr[data.status](data.message);

                        param.callback((data.status != 'error'), data);
                    }
                },
                error(er) {
                    toastr.error(er.responseText);
                    param.callback(false);
                },
                complete(ev) {
                    if (param.complete != undefined) {
                        param.complete(ev);
                    }
                }
            });
        }
    },
    data: {
        displayBackTop: false,
        searchText: '',
        User: CurrentUser == undefined ? undefined : CurrentUser,
        token: _TOKEN
    }
});

$(window).scroll(() => {
    vm.displayBackTop = $(window).scrollTop() >= 500;
});

const stageAndContentHeight = function () {
    let content = $('.Stage'),
        body = $('body'),
        nav = $(".Nav"),
        height,
        footerHeight = $('.Footer').outerHeight();

    height = $(window).height() - nav.height() - footerHeight;

    content.attr('style', 'min-height:' + height + 'px !important');
};

stageAndContentHeight();

window.onresize = stageAndContentHeight;

$(() => {
    $("#avatar-uploader").on('change', (ev) => {
        const input = ev.target;
        $($(input).parents("form")[0]).submit();
    });
});

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}