/**
 * Created by Administrator on 2016/8/6.
 */
$(() => {
    let allSwitches = $("th input[type=checkbox]");

$("thead input[type=checkbox], tfoot input[type=checkbox]").each(function () {
    $(this).on('change', function () {
        toggleGlobally(this.checked);
    }.bind(this));
});

$("a[data-delete]").each(function () {
    $(this).click(function (e) {
        e.preventDefault();
        const ID = $($(this).parents("tr")[0]).attr('delete-id');

        Admin.showWarningAlert(deleteMessages, function () {
            deleteID(`${deleteUrl}/${ID}`, 'DELETE');
        });
    }.bind(this));
});

$(".bulk-delete").each(function () {
    $(this).on('click', function () {
        var total = getTotalBulkCount();
        if (total == 0)
            return false;

        var $ids = getTotalIDs();

        Admin.showWarningAlert(deleteMessages, function () {
            deleteID(bulkUrl, 'PATCH', $ids, 'delete');
        });
    }.bind(this));
});

function deleteID(url, type, ids, action) {
    $.ajax({
        url: url,
        type: type,
        data: ids ? {
            _token: $("meta[name=_token]").attr('content'),
            IDs: ids,
            action: action
        } : {_token: $("meta[name=_token]").attr('content')},
        dataType: 'json',
        success() {
            swal({
                title: deleteMessages.success,
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

function getTotalIDs() {
    var $ids = new Array();

    $("tbody input[type=checkbox]").each(function () {
        if (this.checked) {
            $ids.push($($(this).parents("tr")[0]).attr('delete-id'));
        }
    });

    return $ids.join(',');
}

function getTotalBulkCount() {
    var count = 0;
    $("tbody input[type=checkbox]").each(function () {
        if (this.checked) {
            count++;
        }
    });

    return count;
}

function toggleGlobally($on) {
    $(allSwitches).each(function () {
        if (this.checked != $on) {
            $(this).click();
        }
    });
}
});