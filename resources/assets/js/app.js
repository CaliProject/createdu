const Vue = require('vue');

const vm = new Vue({
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
            if (!this.User.checkedIn) {
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
        signOut(e) {
            this.warningAlert(signOutMessages, function () {
                window.location.href = $(e.target).attr('data-href');
            });
        },
        warningAlert: (messages, callback) => {
            swal({
                title: messages.title,
                text: messages.text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: messages.confirm,
                cancelButtonText: messages.cancel,
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            }, function (isConfirm) {
                if (isConfirm)
                    callback();
            });
        },
        autoCloseAlert(param) {
            swal({
                title: param.title,
                text: param.text,
                type: param.type || "success",
                showConfirmButton: false,
                timer: param.timer || 1500
            });
        },
        popupPrompt(param, callback) {
            swal({
                title: param.title,
                text: param.text,
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "pop",
                inputPlaceholder: param.inputPlaceholder,
                showLoaderOnConfirm: param.ajax,
                confirmButtonText: param.confirmButtonText,
                cancelButtonText: param.cancelButtonText,
                html: true
            }, function (inputValue) {
                if (inputValue === false) return false;

                if (inputValue === "") {
                    swal.showInputError(param.inputEmptyText);
                    return false;
                }

                callback(inputValue);
            });
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
        User: CurrentUser,
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

    content.attr('style', `min-height:${height}px !important`);
};

stageAndContentHeight();

window.vm = vm;
window.onresize = stageAndContentHeight;

$(() => {
    const loadingIcon = '<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;';

    $("form.ajax").each(function () {
        const form = this;
        $(this).on('submit', function (e) {
            e.preventDefault();

            $(form).addClass('loading');

            let button = $(form).find("button[type=submit]")[0];

            if (button) {
                var originText = button.innerHTML;
                $(button).html(`${loadingIcon}&nbsp;${originText}`);
            }

            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                timeout: 0,
                error(error) {
                    if (error.status === 422) {
                        let errors = JSON.parse(error.responseText);
                        for (let er in errors) {
                            const sel = `[name=${er}]`,
                                groupEl = $($(form).find(sel)[0]).parents('.form-group')[0];
                            // Add error class to the form-group
                            $(groupEl).addClass('has-error shaky');
                            setTimeout(() => $(groupEl).removeClass('has-error shaky'), 8000);

                            toastr.error(errors[er][0]);
                        }
                    }
                },
                success(data) {
                    if (data.status !== 'error') {
                        if (typeof(data.redirectUrl) != 'undefined') {
                            window.location.href = data.redirectUrl;
                        } else if (typeof(data.newWindowUrl) != 'undefined') {
                            window.open(data.newWindowUrl, "_blank");
                        } else if (typeof(data.reload) != 'undefined') {
                            toastr.success(data.message);
                            $.pjax.reload(pjaxContainer);
                        } else {
                            toastr.success(data.message);
                        }
                    } else {
                        toastr.error(data.message);
                    }
                },
                complete() {
                    if (button) {
                        $(button).html(originText);
                        $(form).removeClass('loading');
                        $(form).addClass('done-loaded');
                        setTimeout(function () {
                            $(form).removeClass('done-loaded');
                        }, 300);
                    }
                }
            });
        });
    });

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