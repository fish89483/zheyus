$(function() {
    $(window).on('mousemove mousein', function(e) {
        
            var str = 10;
            var alignX = e.pageX - $(this).width() / 2
            var alignY = e.pageY - $(this).height() / 2

            var StrX = str / $(this).width();
            var StrY = str / $(this).height();

            var moveX = StrX * alignY;
            var moveY = StrY * alignX;

            if(isActive_KV){
                $('#js-kv').find('.-front').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 0.6 + 'vw)')

                // $('#js-kv').find('.m-kv__layer.-back').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 10 + 'vw)')

                $('#js-kv').find('.m-ch-separation__img.-back.-ch-c').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 0.9 + 'vw)')
                $('#js-kv').find('.m-ch-separation__img.-back.-ch-y').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.2 + 'vw)')
                $('#js-kv').find('.m-ch-separation__img.-back.-ch-m').css('transform', 'translateY(' + moveX * str / 6 + 'px) translateX(' + moveY * str / -6 + 'px) rotateX(' + moveX * str / 6 * -1 + 'deg) rotateY(' + moveY * str / 6 + 'deg) translateZ(' + str / 1.5 + 'vw)')
                
            }else{
                var $item_img = $('.o-carousel__item-img img');
                var imgRotate = (moveY*str/2 > 0) ? 0 : moveY*str/2;
                $item_img.css('transform','rotateY('+imgRotate+'deg) rotateX('+moveX*str/3+'deg)');
            }

            
        
        
        
       
    });

});