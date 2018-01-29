$(function() {
    var a = ['1', '2', '3'];
    var get = [];
    var remain = [];
    $('button').on("click", function() {
        $('.1').removeAttr("id");
        var myClass = this.className;
        var button = $("button");
        for (var i = 0; i < button.length; i++) {
            if (myClass === a[i]) {
                get = a[i];
                $("#tab-" + get).css('opacity', 0).slideDown('slow').animate({ opacity: 1 }, { queue: false, duration: 'slow' });
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

$(function() {
    var progress = $('.progress');
    var pah = $('.pah');

    for (var j = 0; j <= progress.length; j++) {
        var pro = $(progress[j]).data('pro');

        $(progress[j]).animate({ width: pro + "%" }, 1000);

        $(pah[j]).each(function() {
            $(this).prop('Counter', 0).animate({ Counter: pro }, {
                duration: 1000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});