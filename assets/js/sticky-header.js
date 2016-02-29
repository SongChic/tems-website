$.fn.sticktHeader = function (option) {
    var $target = $(this),
        targetOffset = $target.offset().top,
        $empty = $target.prev(),
        $parent = $(this).closest(".wrapper"),
        state = false;

    $(window).on("scroll", function(event) {
        if ($(this).scrollTop() > targetOffset) {
            if ($parent.find(".empty").length == 0) {
                $target.before("<div class='empty'>")
            }
            $target.addClass("sticky");
        } else {
            $target.removeClass("sticky");
            $parent.find(".empty").remove();
        }
    });
};