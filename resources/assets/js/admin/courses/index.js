$(() => {
    $("a[data-trash]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            const ID = $($(this).parents("tr")[0]).attr("action-id");

            Admin.showWarningAlert(trashMessages, function () {
                trashID(`${trashUrl}/${ID}`, 'PATCH');
            })
        }.bind(this));
    });

    $("a[data-revert]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            const ID = $($(this).parents("tr")[0]).attr("action-id");
            
            Admin.showWarningAlert(revertMessages, function () {
                revertID(`${revertUrl}/${ID}`, 'PATCH');
            })
        }.bind(this));
    });

    $(".bulk-trash").each(function () {
        $(this).click(function () {
            var total = getTotalBulkCount();
            if(total == 0) return false;
            
            var $ids = getTotalIDs();
            Admin.showWarningAlert(trashMessages, function () {
                trashID(bulkUrl, 'PATCH', $ids, 'trash');
            })
        }.bind(this));
    });

    $(".bulk-revert").each(function () {
        $(this).click(function () {
            var total = getTotalBulkCount();
            if (total == 0) return false;
            
            var $ids = getTotalIDs();
            Admin.showWarningAlert(revertMessages, function () {
                revertID(bulkUrl, 'PATCH', $ids, 'revert');
            })
        }.bind(this));
    });



    function trashID(url, type, ids, action) {
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
                    title: trashMessages.success,
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

    function revertID(url, type, ids, action) {
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
                    title: revertMessages.success,
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
                $ids.push($($(this).parents("tr")[0]).attr('action-id'));
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
});