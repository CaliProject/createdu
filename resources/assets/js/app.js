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
        }
    },
    data: {
        displayBackTop: false,
        searchText: ''
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

// toastr.options = {
//     "closeButton": false,
//     "debug": false,
//     "newestOnTop": true,
//     "progressBar": true,
//     "positionClass": "toast-bottom-right",
//     "preventDuplicates": false,
//     "onclick": null,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "5000",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// }