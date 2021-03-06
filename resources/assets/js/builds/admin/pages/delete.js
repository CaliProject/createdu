(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    var allSwitches = $("th input[type=checkbox]");

    $("thead input[type=checkbox], tfoot input[type=checkbox]").each(function () {
        $(this).on('change', function () {
            toggleGlobally(this.checked);
        }.bind(this));
    });

    $("a[data-delete]").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            var ID = $($(this).parents("tr")[0]).attr('action-id');

            Admin.showWarningAlert(deleteMessages, function () {
                deleteID(deleteUrl + "/" + ID, 'DELETE');
            });
        }.bind(this));
    });

    $(".bulk-delete").each(function () {
        $(this).on('click', function () {
            var total = getTotalBulkCount();
            if (total == 0) return false;

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
            } : { _token: $("meta[name=_token]").attr('content') },
            dataType: 'json',
            success: function success() {
                swal({
                    title: deleteMessages.success,
                    timer: 1350,
                    type: 'success',
                    showConfirmButton: false
                });
                setTimeout(function () {
                    return $.pjax.reload(pjaxContainer);
                }, 1000);
            },
            error: function error(err) {
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

    function toggleGlobally($on) {
        $(allSwitches).each(function () {
            if (this.checked != $on) {
                $(this).click();
            }
        });
    }
});

},{}]},{},[1]);
