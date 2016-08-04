(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
    var $input, $label, $form;
    var $image = $('.avatar-crop img');

    $('.input-file').each(function () {
        $input = $(this), $label = $input.next('label');

        $label.on('click', function () {
            $($input).click();
        });

        $input.on('change', uploadFile);

        // Firefox bug fix
        $input.on('focus', function () {
            $input.addClass('has-focus');
        }).on('blur', function () {
            $input.removeClass('has-focus');
        });
    });

    function uploadFile(e) {
        var fileName = e.target.value.split('\\').pop();

        if (fileName) $label.find('span').html(fileName);

        $form = $form ? $form : $($input).parents("form")[0];
        $($form).addClass('loading');
        $($($label).find("figure")[0]).toggleClass('icon-cloud-upload fa fa-spin fa-spinner');

        $.ajaxFileUpload({
            url: $form.action,
            dataType: 'json',
            fileElementId: 'avatar-file',
            success: function success(d) {
                Admin.User.avatarUrl = d.url;
                $.pjax.reload('#' + $($form).attr('id'));
            },
            complete: function complete() {
                $($form).removeClass('loading');
                $($($label).find("figure")[0]).toggleClass('icon-cloud-upload fa fa-spin fa-spinner');
            }
        });
    }
});

},{}]},{},[1]);
