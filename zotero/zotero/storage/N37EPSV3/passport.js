(function ($) {
    $.fn.hoverDelay = function (options) {
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function () {
                $.noop();
            },
            outEvent: function () {
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        return $(this).each(function () {
            var hoverTimer, outTimer;
            $(this).hover(function () {
                clearTimeout(outTimer);
                hoverTimer = setTimeout($.proxy(sets.hoverEvent, this), sets.hoverDuring);
            }, function () {
                clearTimeout(hoverTimer);
                outTimer = setTimeout($.proxy(sets.outEvent, this), sets.outDuring);
            });
        });
    }
})(jQuery);

$(function () {
    //hjpassport from web 
    $('#hjpassport .pass_x').hoverDelay({
        hoverEvent: function () {
            var t = $(this);
            t.find(".pass_x_t").find("b").addClass("bg2");
            t.find(".pass_x_t").addClass("hover");
            t.find(".pass_x_b").show();

        },
        outEvent: function () {
            var t = $(this);
            t.find(".pass_x_t").find("b").removeClass("bg2");
            t.find(".pass_x_t").removeClass("hover");
            t.find(".pass_x_b").hide();

        }
    });
});