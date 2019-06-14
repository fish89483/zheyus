$(function () {
    if (isMobile) $('.a-cursor span').hide();
})

// move
$(window).on('mousemove mousein', function (e) {
    if (!isMobile) {
        $('.a-cursor span').show();
        $('.a-cursor span').css({
            'top': e.pageY + 'px',
            'left': e.pageX + 'px'
        });
    }

});

// overflow screen
$(window).on('mouseleave', function () {
    $('.a-cursor span').hide();
});

// click
$(window).on('mousedown', function () {
    $('.a-cursor').addClass('-active');
});

$(window).on('mouseup', function () {
    $('.a-cursor').removeClass('-active');
});

// hover
var $cursorTrans = $('.m-carousel__item, .a-scrolldown,.a-burger,.t-kv-title, .t-title, .t-txt, a, img, .c-hover');
$cursorTrans.on('mouseenter', function () {
    $('.a-cursor').addClass('-hover');
});

$cursorTrans.on('mouseleave', function () {
    $('.a-cursor').removeClass('-hover');
});