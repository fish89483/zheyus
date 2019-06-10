$(function () {
    if(isMobile) $('.a-cursor span').hide();
})
$(window).on('mousemove mousein', function (e) {
    if(!isMobile){
        $('.a-cursor span').show();
        $('.a-cursor span').css({
            'top': e.pageY + 'px',
            'left': e.pageX + 'px'
        });
    }
    
});

$(window).on('mouseleave', function () {
    $('.a-cursor span').hide();
});

var $cursorTrans = $('.m-carousel__item, .a-scrolldown, .t-title, .t-txt, a, img');
$cursorTrans.on('mouseenter', function () {
    $('.a-cursor').addClass('-active');
});

$cursorTrans.on('mouseleave', function () {
    $('.a-cursor').removeClass('-active');
});