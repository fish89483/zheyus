$(function() {
    // var $area = $('#js-kv')
    var $area = $(window)
    $area.on('mousemove mousein', function(e) {
        if(isActive_KV){
            var str = 10;
            var alignX = e.pageX - $(this).width() / 2
            var alignY = e.pageY - $(this).height() / 2

            var StrX = str / $(this).width();
            var StrY = str / $(this).height();

            var moveX = StrX * alignY;
            var moveY = StrY * alignX;



          
            $('#js-kv').find('.-front').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 0.8 + 'vw)')

            // $('#js-kv').find('.m-kv__layer.-back').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 10 + 'vw)')

            $('#js-kv').find('.m-ch-separation__img.-back.-ch-c').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.3 + 'vw)')
            $('#js-kv').find('.m-ch-separation__img.-back.-ch-y').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.8 + 'vw)')
            $('#js-kv').find('.m-ch-separation__img.-back.-ch-m').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 2.3 + 'vw)')


        }


    });




});