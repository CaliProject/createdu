$(() => {
    
    $("a[data-essencify]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            const essencifyID = $($(this).parents("tr")[0]).attr('action-id');
            
            Admin.showWarningAlert(essencifyMessages, function () {
                stickOrEssencifyID(`${essencifyUrl}/${essencifyID}`,'PATCH',essencifyMessages);
            })
        }.bind(this));
    });

    $("a[data-stick]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            const stickID = $($(this).parents("tr")[0]).attr('action-id');
    
            Admin.showWarningAlert(stickMessages, function () {
                stickOrEssencifyID(`${stickUrl}/${stickID}`,'PATCH',stickMessages);
            })
        }.bind(this));
    });

    function stickOrEssencifyID(url,type,Messages){
        $.ajax({
            url: url,
            type: type,
            data: {_token: $("meta[name=_token]").attr('content')},
            dataType: 'json',
            success() {
                swal({
                    title: Messages.success,
                    timer: 1350,
                    type: 'success',
                    showConfirmButton: false
                });
                setTimeout(() => $.pjax.reload(pjaxContainer), 1000);  
            },
            error(err) {
                toastr.error(err.responseText);
            }
        });
    }
});