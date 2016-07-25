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
                this.request(
                    'post',
                    '/checkin',
                    {_token: this.token},
                    (data) => {
                        this.User.checkedIn = true;
                        toastr.success(data.message);
                    },
                    (er) => {

                    },
                    (ev) => {

                    }
                );
            }
        },
        request(type, url, data, success, error, complete) {
            $.ajax({
                type: type,
                url: url,
                data: data,
                success(data) {
                    success(data);
                },
                error(er) {
                    error(er);
                },
                complete(ev) {
                    complete(ev);
                }
            });
        }
    },
    data: {
        displayBackTop: false,
        searchText: '',
        User: CurrentUser,
        token: _TOKEN
    }
});

$(window).scroll(() => {
    vm.displayBackTop = $(window).scrollTop() >= 500;
});

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