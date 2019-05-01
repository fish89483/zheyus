$(function() {
    var $area = $('#js-kv')
    $area.on('mousemove mousein', function(e) {
        var str = 10;
        var alignX = e.pageX - $(this).width() / 2
        var alignY = e.pageY - $(this).height() / 2

        var StrX = str / $(this).width();
        var StrY = str / $(this).height();

        var moveX = StrX * alignY;
        var moveY = StrY * alignX;




        $(this).find('.m-kv__layer.-front').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 0.8 + 'vw)')

        // $(this).find('.m-kv__layer.-back').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 10 + 'vw)')

        $(this).find('.m-kv__layer.-back.-c').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.3 + 'vw)')
        $(this).find('.m-kv__layer.-back.-y').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.8 + 'vw)')
        $(this).find('.m-kv__layer.-back.-m').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 2.3 + 'vw)')





    });




});