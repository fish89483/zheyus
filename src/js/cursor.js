$(window).on('mousemove mousein', function (e) {
    $('.a-cursor span').css({
        'top': e.pageY + 'px',
        'left': e.pageX + 'px'
    });
});

var $cursorTrans = $('.m-kv__img, .m-kv__stroke, .m-carousel__txt-item, a, img');
$cursorTrans.on('mouseenter', function () {
    $('.a-cursor span').addClass('-active');
});

$cursorTrans.on("mouseleave", function () {
    $('.a-cursor span').removeClass('-active');
});