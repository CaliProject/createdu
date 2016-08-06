<script>
    var deleteMessages = JSON.parse("{!! addslashes(json_encode(trans('views.admin.operation.delete-messages'))) !!}");
    var deleteUrl = "@route('admin.' . $record . '.delete')",
            bulkUrl = "@route('admin.' . $record . '.bulk')";
</script>