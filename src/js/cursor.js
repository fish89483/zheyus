$(window).on('mousemove mousein', function (e) {
    $('.a-cursor span').css({
        'top': e.pageY + 'px',
        'left': e.pageX + 'px'
    });
});

var $cursorTrans = $('.m-carousel__item, .m-kv__stroke, .t-title, .t-txt, a, img');
var $cursorSecTrans = $('')
$cursorTrans.on('mouseenter', function () {
    $('.a-cursor').addClass('-active');
});

$cursorTrans.on('mouseleave', function () {
    $('.a-cursor').removeClass('-active');
});