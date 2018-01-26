$(function() {
    var a = ['1', '2', '3'];
    var get = [];
    var remain = [];
    $('button').on("click", function() {
        var myClass = this.className;
        var button = $("button");
        for (var i = 0; i < button.length; i++) {
            if (myClass === a[i]) {
                get = a[i];
                $("#tab-" + get).slideDown('slow');
            } else {
                remain += a[i];
            }
        }
        for (var j = 0; j < remain.length; j++) {
            $("#tab-" + remain[j]).hide();
        }
        remain = [];
    });
});