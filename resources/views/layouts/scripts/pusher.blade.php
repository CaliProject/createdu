@if(Auth::check())
<script>
    // Enable pusher logging
    Pusher.logToConsole = true;

    var pusher = new Pusher(PUSHER_KEY, {encrypted: true});

    var evChannel = pusher.subscribe('everyone'),
            pvChannel = pusher.subscribe('user-' + vm.User.id),
            pmChannel = pusher.subscribe('pm-' + vm.User.id);

{{--    @can('manage-users')--}}
//        var adminChannel = pusher.subscribe('administrator');
    {{--@endcan--}}

    evChannel.bind('{{ addslashes(\Createdu\Events\AnnouncementHasMade::class) }}', bindNotificationEvent);

    pvChannel.bind('{{ addslashes(\Createdu\Events\User\CreditHasChanged::class) }}', bindNotificationEvent);
    pvChannel.bind('{{ addslashes(\Createdu\Events\User\ExperienceHasChanged::class) }}', bindNotificationEvent);
    pvChannel.bind('{{ addslashes(\Createdu\Events\User\LeveledUp::class) }}', bindNotificationEvent);
    pvChannel.bind('{{ addslashes(\Createdu\Events\User\Auth\PasswordHasChanged::class) }}', bindNotificationEvent);

    pmChannel.bind('{{ addslashes(\Createdu\Events\User\NewMessage::class) }}', bindMessageEvent);

    function bindNotificationEvent(data) {
        // Append to the top
        vm.Inboxes.reverse();
        vm.Inboxes.push(data.notification);
        vm.Inboxes.reverse();

        vm.User.unread++;
        vm.playNotificationSound();

        if (data.credit != undefined) {
            vm.User.credit += parseInt(data.credit);
        }

        if (data.experience != undefined) {
            vm.User.experience += parseInt(data.experience);
        }
    }

    function bindMessageEvent(data) {
        vm.receivedMessage(data.message);
    }
</script>
@endif