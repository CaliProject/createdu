(function () {
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('Input.Input__field')).forEach(function (InputEl) {
        // In case the Input is already filled..
        if (InputEl.value.trim() !== '') {
            classie.add(InputEl.parentNode, 'Input--filled');
        }

        // Events:
        InputEl.addEventListener('focus', onInputFocus);
        InputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'Input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'Input--filled');
        }
    }

    $(".Input__eye").on('click', (ev) => {
        let b = ev.target;

        classie.toggle(b, 'visible');
        changePasswordVisibility();
    });

    function changePasswordVisibility() {
        let field = document.querySelector("input#password");

        field.type = field.type == 'password' ? 'text' : 'password';
    }

    let isSubmitting = false;

    $(".Auth__form").on('submit', (ev) => {
        ev.preventDefault();

        if (isSubmitting)
            return false;

        isSubmitting = true;

        const button = ev.target.querySelector(".Auth__submit");

        classie.add(button, 'loading');

        $.post({
            url: '',
            data: $(ev.target).serialize(),
            success(data) {
                if (data.status != 'error') {
                    classie.add(button, 'success');
                    setTimeout(() => window.location.href = data.redirect, 700);
                } else {
                    classie.add(button, 'error');
                    swal({
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1000,
                        title: data.message
                    });
                    setTimeout(() => classie.remove(button, 'error'), 2500);
                }
            },
            error(er) {
                classie.add(button, 'error');
                setTimeout(() => classie.remove(button, 'error'), 2500);
            },
            complete() {
                classie.remove(button, 'loading');
                isSubmitting = false;
            }
        });
    });
})();