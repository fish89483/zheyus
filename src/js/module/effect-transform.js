$(function () {

    // var $item_img = $('.m-carousel__item');

    $(window).on('mousemove mousein', function (e) {

        var str = 10;
        var alignX = e.pageX - $(this).width() / 2;
        var alignY = e.pageY - $(this).height() / 2;

        var StrX = str / $(this).width();
        var StrY = str / $(this).height();

        var moveX = StrX * alignY;
        var moveY = StrY * alignX;
        var $js_KV = $('#js-kv');

        if (!isMobile_W && !isPageview) {
            (isActive_KV) ? effectKV(): effectIMG();
        }


        function effectKV() {
            var tranX = moveY * str / -6;
            var tranY = moveX * str / 1;
            var rotaX = moveX * str / -6;
            var rotaY = moveY * str / 6;
            // rotaY = (rotaY > 10 || rotaY < 2.5) ? 0 : rotaY;

            // front
            $js_KV.find('.-front').css('transform', 'translate(' + tranX + 'px, ' + tranY + 'px) rotateX(' + rotaX + 'deg) rotateY(' + rotaY + 'deg) translateZ(' + str / 0.6 + 'vw)');

            // back
            $js_KV.find('.-ch-c').css('transform', 'translate(' + tranX + 'px, ' + tranY + 'px) rotateX(' + rotaX + 'deg) rotateY(' + rotaY + 'deg) translateZ(' + str / 0.9 + 'vw)');
            $js_KV.find('.-ch-y').css('transform', 'translate(' + tranX + 'px, ' + tranY + 'px) rotateX(' + rotaX + 'deg) rotateY(' + rotaY + 'deg) translateZ(' + str / 1.2 + 'vw)');
            $js_KV.find('.-ch-m').css('transform', 'translate(' + tranX + 'px, ' + tranY + 'px) rotateX(' + rotaX + 'deg) rotateY(' + rotaY + 'deg) translateZ(' + str / 1.5 + 'vw)');

        }

        function effectIMG() {
            var rotaX = moveX * str / -2;
            var rotaY = (moveY * str / 3 > 10) ? 10 : (moveY * str / 3 < -50) ? -50 : moveY * str / 3;
            $('.m-carousel__item').css('transform', 'rotateY(' + rotaY + 'deg) rotateX(' + rotaX + 'deg)');

        }
    });

    $('.m-carousel__item').on('mouseleave', function (e) {
        // img
        $('.m-carousel__item').css('transform', 'rotateY(0deg) rotateX(0deg)');
    });
});