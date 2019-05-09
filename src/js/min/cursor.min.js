$(window).on('mousemove mousein', function(e) {
    $('.a-cursor span').css({
        'top': e.pageY + 'px',
        'left': e.pageX + 'px'
    });
})
$('.m-kv__img,.m-kv__stroke,a,img').on('mouseenter', function() {
    $('.a-cursor span').addClass('-active')
})
$('.m-kv__img,.m-kv__stroke,a,img').on("mouseleave", function() {
    $('.a-cursor span').removeClass('-active')
})