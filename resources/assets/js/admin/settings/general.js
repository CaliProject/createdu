$(function () {
    $('#keywords-select').select2({
        tags: true,
        maximumSelectionLength: 15
    });
    $('#ignores-select').select2({
        tags: true
    });
});