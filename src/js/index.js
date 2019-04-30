$(function () {
    $(window).on('scroll', function () {
        scrollFixed(); 


        var advance = 50; // 提前
        var currentTop = $(window).scrollTop() + advance;

        $('section.article-item').each(function (index) {
            var itemTop = $(this).offset().top;
            var itemBottom = itemTop + $(this).height();

            if (currentTop >= itemTop && currentTop <= itemBottom) {

                var currentClass = $(this).attr('class').split(' ')[1];
                var navItem = $('.nav-item.' + currentClass);

                navItem.addClass('-active').siblings().removeClass('-active');
            };
        });


    });
    $('.nav-item').on('click', function () {
        var currentClass = $(this).attr('class').split(' ')[1];

        scrollTo(currentClass);

    });



    function scrollFixed() {
        var $item = $('#js-nav');

        ($item.offset().top - $(window).scrollTop() <= 0) ? $item.addClass('-fixed'): $item.removeClass('-fixed');

        var wrapBottom = $('.article-wrap').outerHeight() + $('.article-wrap').offset().top;
        (wrapBottom - $(window).scrollTop() <= $('#js-nav > ul').outerHeight()) ? $item.addClass('-fixed-bottom'): $item.removeClass('-fixed-bottom');

    };

    function scrollTo(currentClass) {
        $('html,body').animate({
            scrollTop: $('.article-item.' + currentClass).offset().top
        }, 400);

    };

});