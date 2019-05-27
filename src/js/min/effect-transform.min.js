$(function () {
    $(window).on('mousemove mousein', function (e) {

        var str = 15;
        var alignX = e.pageX - $(this).width() / 2
        var alignY = e.pageY - $(this).height() / 2

        var StrX = str / $(this).width();
        var StrY = str / $(this).height();

        var moveX = StrX * alignY;
        var moveY = StrY * alignX;
        
        var $kv = $('#js-kv');
        if (isActive_KV) {
            $kv.find('.-front').css('transform', 'translate3d('+ moveY * str / -6 + 'px, ' + moveX * str / 6 + 'px, ' + str / 0.6 + 'vw) rotateX(' + moveX * str / -6 + 'deg) rotateY(' + moveY * str / 6 + 'deg)')

           
            $kv.find('.m-ch-separation__img.-back.-ch-c').css('transform', 'translate3d('+ moveY * str / -6 + 'px, ' + moveX * str / 6 + 'px, ' + str / 0.9  + 'vw) rotateX(' + moveX * str / -6 + 'deg) rotateY(' + moveY * str / 6 + 'deg)')
            $kv.find('.m-ch-separation__img.-back.-ch-y').css('transform', 'translate3d('+ moveY * str / -6 + 'px, ' + moveX * str / 6 + 'px, ' + str / 1.2  + 'vw) rotateX(' + moveX * str / -6 + 'deg) rotateY(' + moveY * str / 6 + 'deg)')
            $kv.find('.m-ch-separation__img.-back.-ch-m').css('transform', 'translate3d('+ moveY * str / -6 + 'px, ' + moveX * str / 6 + 'px, ' + str / 1.5  + 'vw) rotateX(' + moveX * str / -6 + 'deg) rotateY(' + moveY * str / 6 + 'deg)')


        } else {
           $kv.find('.m-ch-separation__img').removeAttr('style')

            var imgRotate = 0;
            imgRotate = (moveY * str / 3 > -10) ? -10 : (moveY * str / 3 < -50) ? -50 : moveY * str / 3
            
            
            $item_img.css('transform', 'rotateY(' + imgRotate + 'deg) rotateX(' + moveX * str / -5 + 'deg)');

        }






    });
    
    var $item_img = $('.m-carousel__item');
<<<<<<< HEAD
    $item_img.on('mousemove mousein', function (e) {
       
        
        /// $item_img.css('transform', 'rotateY(' + imgRotate + 'deg) rotateX(' + moveX * str / 3 + 'deg)');

    });
=======
    // $item_img.on('mousemove mousein', function (e) {        
    // $item_img.css('transform', 'rotateY(' + imgRotate + 'deg) rotateX(' + moveX * str / 3 + 'deg)');
    // });
>>>>>>> origin/master
    $item_img.on('mouseleave',function(e){
        // $item_img.css('transition','200ms')
        $item_img.css('transform', 'rotateY(0deg) rotateX(0deg)');
    });
});