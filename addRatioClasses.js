(function($) {

    $.fn.addRatioClasses = function(options) {
        options = $.extend({
            addRatioClassToBody: true,
            elList: []
        }, options);

        var classOptions = options,
            h = $(window).height(),
            w = $(window).width();

        if (classOptions.elList.length !== 0) {
            $.each(classOptions.elList, function(i, v) {
                $(v).addClass('h' + $(v).height() + ' ' + 'w' + $(v).width())
            });
        }

        if (classOptions.addRatioClassToBody) {
            if (w / h == 16 / 9) {
                $('body').addClass('ratio_16_9');
            } else if (w / h == 4 / 3) {
                $('body').addClass('ratio_4_3');
            } else {
                $('body').addClass('noRatio');
            }
        }

    }
}(jQuery));
