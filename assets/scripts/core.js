$(document).ready(function (e) {
    $(".nav-item.apps, .nav-item.sec").click(function (e) {
        e.preventDefault();
        $(".announce").show('blind', { direction: "up" }, 300);
    });

    $("#subscribe button").click(function (e) {
        $('#subscribe-modal').modal('toggle');

    });
});