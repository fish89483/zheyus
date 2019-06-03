$(window).on('mousemove mousein', function (e) {
    $('.a-cursor span').show();
    $('.a-cursor span').css({
        'top': e.pageY + 'px',
        'left': e.pageX + 'px'
    });
});

$(window).on('mouseleave', function () {
    $('.a-cursor span').hide();
});

var $cursorTrans = $('.m-carousel__item, .m-kv__stroke,.m-kv__layer, .a-scrolldown, .t-title, .t-txt, a, img');
$cursorTrans.on('mouseenter', function () {
    $('.a-cursor').addClass('-active');
});

$cursorTrans.on('mouseleave', function () {
    $('.a-cursor').removeClass('-active');
});