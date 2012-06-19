(function ($) {
    $.fn.extend({
        limit:function (limit, element) {
            var interval;
            var self = $(this);

            var check_limit = function () {
                var val = self.val();
                var length = val.length;
                if (length > limit) {
                    self.val(val.substring(0, limit));
                }
                if ($(element).html() !== limit - length) {
                    $(element).html((limit - length <= 0) ? '0' : limit - length);
                }
            }

            self.focus(function () {
                interval = window.setInterval(check_limit, 100);
            });

            self.blur(function () {
                clearInterval(interval);
                check_limit();
            });

            check_limit();
        }
    });
})(jQuery);