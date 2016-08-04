$(function () {
    var $input, $label, $form;
    var $image = $('.avatar-crop img');

    $('.input-file').each(function () {
        $input = $(this),
            $label = $input.next('label');

        $label.on('click', function () {
            $($input).click();
        });

        $input.on('change', uploadFile);

        // Firefox bug fix
        $input
            .on('focus', function () {
                $input.addClass('has-focus');
            })
            .on('blur', function () {
                $input.removeClass('has-focus');
            });
    });

    function uploadFile(e) {
        const fileName = e.target.value.split('\\').pop();

        if (fileName)
            $label.find('span').html(fileName);

        $form = $form ? $form : $($input).parents("form")[0];
        $($form).addClass('loading');
        $($($label).find("figure")[0]).toggleClass('icon-cloud-upload fa fa-spin fa-spinner');

        $.ajaxFileUpload({
            url: $form.action,
            dataType: 'json',
            fileElementId: 'avatar-file',
            success: (d) => {
                Admin.User.avatarUrl = d.url;
                $.pjax.reload(`#${$($form).attr('id')}`);
            },
            complete: () => {
                $($form).removeClass('loading');
                $($($label).find("figure")[0]).toggleClass('icon-cloud-upload fa fa-spin fa-spinner');
            }
        });
    }
});