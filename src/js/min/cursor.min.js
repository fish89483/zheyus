$(window).on('mousemove mousein', function(e) {
    $('.a-cursor').css({
        'top': e.pageY + 'px',
        'left': e.pageX + 'px'
    });
})
$('.m-kv__img,.m-kv__stroke,a').on('mouseenter', function() {
    $('.a-cursor').addClass('-active')
})
$('.m-kv__img,.m-kv__stroke,a').on("mouseleave", function() {
    $('.a-cursor').removeClass('-active')
})