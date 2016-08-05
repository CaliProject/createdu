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
                const _this = this,
                    button = $(".checkin-button");

                button.addClass("checked");

                this.request({
                    url: '/checkin',
                    type: 'post',
                    callback(success) {
                        if (success)
                            _this.User.checkedIn = true;
                        else
                            button.removeClass("checked");
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
        },
        playNotificationSound() {
            document.getElementById("notification-sound").play();
        },
        playMessageSound() {
            document.getElementById("new-message-sound").play();
        },
        playToastrSound() {
            document.getElementById("toastr-sound").play();
        },
        playMessageSound(sent:true) {
            document.getElementById(`message-${sent ? 'sent' : 'received'}-sound`);
        },
        readInbox(e) {
            const inbox = e.target,
                $this = this;

            $(inbox).addClass('reading');

            this.request({
                url: '/read/notification',
                type: 'PATCH',
                data: {
                    id: $(inbox).attr('inbox-id')
                },
                callback(success) {
                    $(inbox).removeClass('reading');

                    if (success) {
                        $this.Inboxes.$remove($this.Inboxes[$(inbox).attr('inbox')]);
                        $this.User.unread--;
                    }
                }
            });
        },
        readAllInbox() {
            let ids = [],
                $this = this;

            $(".Inbox__item > a").each(function () {
                ids.push($(this).attr('inbox-id'));
                $(this).addClass('reading');
            });

            this.request({
                url: '/read/notification',
                type: 'PATCH',
                data: {
                    id: ids.join(',')
                },
                callback(success) {
                    if (success) {
                        for (let id in ids)
                            $this.Inboxes.pop();

                        $this.User.unread -= ids.length;
                    }
                }
            });
        },
        openConvoBox($index) {
            for (const i in this.Conversations) {
                if (this.Conversations[i].open) {
                    this.Conversations[i].open = false;
                }
            }

            this.Conversations[$index].open = true;

            setTimeout(() => setupSlimScrolls(), 500);

            if (this.Conversations[$index].messages != undefined) {

            } else {

            }
        },
        sendMessage() {
            const $message = this.message,
                id = parseInt($($(".Convo__message")[0]).attr('conversation-id'));

            this.message = '';

            // this.request({
            //     url: `/chat/${id}`,
            //     type: 'POST',
            //     data: {
            //         message: $message
            //     },
            //     callback(success) {
            //         if (success) {
            //
            //         }
            //     }
            // });
        }
    },
    data: {
        displayBackTop: false,
        searchText: '',
        User: CurrentUser,
        token: _TOKEN,
        Inboxes: JSON.parse($(".Inbox").attr('data-inbox') || '{}'),
        Conversations: [],
        message: ''
    },
    computed: {
        hasOpenedConvo() {
            for (const i in this.Conversations) {
                if (this.Conversations[i].open) {
                    return true;
                }
            }

            return false;
        }
    },
    ready() {
        if (this.User.id != undefined)
            this.Conversations = conversations;
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

function setupSlimScrolls() {
    $('.SlimScroll').slimscroll();
}

$(() => {
    const loadingIcon = '<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;';

    $("body").timeago();

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
                    if ($(form).attr('callback')) {
                        const callback = $(form).attr('callback');
                        callback();

                        return false;
                    }

                    if (data.status !== 'error') {
                        if (typeof(data.redirectUrl) != 'undefined') {
                            if (data.redirectUrl == 'refresh') {
                                window.location.reload();
                            } else {
                                window.location.href = data.redirectUrl;
                            }
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

    // Uniform
    var checkBox = $("input[type=radio]:not(.no-uniform)");
    if (checkBox.length > 0) {
        checkBox.each(function () {
            $(this).uniform();
        });
    }

    // Slimscroll
    $('.SlimScroll').slimscroll({
        allowPageScroll: true
    });

    // Listen for changes
    $("body").on("DOMNodeInserted", function () {
        $("time.timeago").timeago();
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

toastr.options.onShown = () => {
    vm.playToastrSound();
}