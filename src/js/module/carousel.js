var itemList = [
    ['', '', ''],
    ['Cinema In Time', 'MoiveApp_thumb.jpg'],
    ['大場感GYM', 'GymApp_thumb.jpg'],
    ['Front - End', 'f2e_thumb.gif'],
    ['Contact me', 't4.jpg']
];

var $item = $('.o-carousel__item');
var $itemTop = $('.o-carousel__item.-top');
var $itemCtr = $('.o-carousel__item.-center');
var $itemBtm = $('.o-carousel__item.-bottom');
var $hideTop = $('.o-carousel__item.-hide-top');
var $hideBtm = $('.o-carousel__item.-hide-bottom');
var $itemCountTxt = $('.o-carousel__count');

var l_ItemLen = 5; //hideTop, hideBtm, top, center, bottom
var itemLen = itemList.length;
var time_MOVE = 500;
var isMove = true;
var canWheel = true;
var currIndex = 0,
    prevIndex, nextIndex, hTopIndex, hBtmIndex;

// var handleMouseWheel = function(e) {
//     console.log(e.originalEvent.wheelDelta )
//     var dir = (e.deltaY < 0) ? 'next' : 'prev';
//     moveItem(dir);
//     console.log('fuckuuuuuo')
// }

// var scroll_val = 0
// var scroll_val_temp = null
// var disable_scroll = false

// $('.o-carousel').on('mousewheel', function(evt) {
//     scroll_val_temp = scroll_val
//     scroll_val = evt.deltaY
//     disable_scroll = true

//     if (!disable_scroll) {
//         // change page
//     }

//     if (scroll_val === scroll_val_temp) {
//         disable_scroll = false
//     }
// })

var isbind = true
var mouseWheelEnd = debounce(function (e) {
    // var dir = (e.deltaY < 0) ? 'next' : 'prev';
    // moveItem(dir);
    // console.log('fucku')

    //---- if no start -> on start
    if(!isbind){
        $('.o-carousel').on('mousewheel.start', mouseWheelStart);
    }else{
        $('.o-carousel').off('mousewheel.start', mouseWheelStart);
    }
    
    canWheel = true;
}, 50);
var mouseWheelStart = function (e) {
    // console.log($('.o-carousel'))
    // console.log('trigger')
    if (canWheel) {
        canWheel = false;
        isbind = false;
        $('.o-carousel').off('mousewheel.start', mouseWheelStart);
        var dir = (e.deltaY < 0) ? 'next' : 'prev';
        moveItem(dir);

    }
}



$('.o-carousel').on('mousewheel.start', mouseWheelStart);
$('.o-carousel').on('mousewheel.end', mouseWheelEnd);

var startY, endY;
$('.o-carousel').on('touchstart', function (e) {
    startY = e.touches[0].clientY;
});
$('.o-carousel').on('touchmove', function (e) {
    endY = e.touches[0].clientY;
});
$('.o-carousel').on('touchend', function () {
    var t = startY - endY;
    if (t > 100 || t < -100) {
        var dir = (t > 0) ? 'next' : 'prev'
        moveItem(dir);
    }

});

$(window).on('keydown', function (e) {
    var k = e.which;
    var dir = (k == 40) ? 'next' : (k == 38) ? 'prev' : '';
    if (dir != '') moveItem(dir);
});

$('.a-scrolldown').on('click', function () {
    moveItem('next');
});

// function countTxtNum(num) {
//     return ('0' + num).slice(-2)
// }

$(function () {

    setOffset();
    setOtherIndex();
    updateTxt();
    updateContent();
    setKvActive();
    setCountTxt();

    setTimeout(function () {
        $item.addClass('-animate');
    }, time_MOVE);
    
});

$(window).resize(function() {
    setOffset();
  });

function dispatchIndex(num) {
    var dir = setIndex(num, true);
    moveItem(dir, true);
};

function moveItem(dir, isDispatch) {
    // console.log('fuckk');
    if (isMove && !isPageview) {
        isMove = false;

        setIndex(dir, isDispatch);

        $item.addClass('-stop -' + dir);
        $item.offset();
        $item.removeClass('-stop');
        $item.addClass('-start');
        $item.removeClass('-animate');

        setOtherIndex();
        updateTxt();
        setTxtCtAnimate();
        setCountTxt();

        setTimeout(function () {
            $item.removeClass('-start -' + dir);
            $item.addClass('-animate');
            isMove = true;
            setKvActive();
            updateContent();

        }, time_MOVE);

    };
};

function setIndex(e, isDispatch) {
    if (typeof (e) === 'string' && isDispatch) {
        return false;
    } else {

        if (isDispatch) {
            var dir = (currIndex < e) ? 'next' : 'prev';
            currIndex = e;
            return dir;
        };

        if (typeof (e) === 'string' && isDispatch === undefined) {
            switch (e) {
                case 'next':
                    currIndex += 1;
                    if (currIndex >= itemLen) currIndex = 0;
                    break;
                case 'prev':
                    currIndex -= 1;
                    if (currIndex < 0) currIndex = itemLen - 1;
                    break;
            };
        };

    };
};

function setOtherIndex() {

    prevIndex = currIndex - 1;
    nextIndex = currIndex + 1;

    if (prevIndex < 0) prevIndex = itemLen - 1;
    if (currIndex >= itemLen - 1) nextIndex = 0;

    hTopIndex = prevIndex - 1;
    hBtmIndex = nextIndex + 1;

    if (hTopIndex < 0) hTopIndex = itemLen - 1;
    if (hBtmIndex >= itemLen) hBtmIndex = 0;
    // console.log(hTopIndex + '/' + prevIndex + '/' + currIndex + '/' + nextIndex + '/' + hBtmIndex);
}

function setCountTxt(){
    if(currIndex != 0){
        $itemCountTxt.html((currIndex + 1) - 1  + ' / ' + (itemLen - 1));
    }else{
        $itemCountTxt.html('')
    }
}

function updateTxt() {

    $hideTop.find('.m-carousel__title h2').html(itemList[hTopIndex][0]);
    $hideBtm.find('.m-carousel__title h2').html(itemList[hBtmIndex][0]);
    $itemCtr.find('.m-carousel__title h2').html(itemList[currIndex][0]);
    $itemTop.find('.m-carousel__title h2').html(itemList[prevIndex][0]);
    $itemBtm.find('.m-carousel__title h2').html(itemList[nextIndex][0]);

    // $hideTop.find('.m-carousel__txt').html(itemList[hTopIndex][2]);
    // $hideBtm.find('.m-carousel__txt').html(itemList[hBtmIndex][2]);
    // $itemCtr.find('.m-carousel__txt').html(itemList[currIndex][2]);
    // $itemTop.find('.m-carousel__txt').html(itemList[prevIndex][2]);
    // $itemBtm.find('.m-carousel__txt').html(itemList[nextIndex][2]);
};

function updateContent() {

    if (!isMobile_W) {
        $itemCtr.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[currIndex][1] + ')');
    } else {
        $itemCtr.find('.m-carousel__item').removeAttr('style').css('background-image', 'url(images/' + itemList[currIndex][1] + ')');
    };

    // $hideTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hTopIndex][1] + ')');
    // $hideBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hBtmIndex][1] + ')');
    // $itemTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[prevIndex][1] + ')');
    // $itemBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[nextIndex][1] + ')');
};

function setTxtCtAnimate() {

    var $txtCtActive = $('.m-carousel__txt-content.-txt-content-' + (currIndex + 1));
    // var $txtCtActiveH = $txtCtActive.outerHeight();

    if (currIndex != 0) {

        $txtCtActive.addClass('-active').siblings().removeClass('-active');
        // if(!isMobile_W){
        //     $txtCtActive.css({
        //         'height': '0px',
        //         'position': 'relative'
        //     }).siblings().removeAttr('style');

        //     setTimeout(function () {
        //         $txtCtActive.css('height', $txtCtActiveH + 'px');
        //     }, time_MOVE);
        // }else{
        $txtCtActive.css('position', 'relative').siblings().removeAttr('style');
        // }


    } else {
        $('.m-carousel__txt-content').removeClass('-active').removeAttr('style');
    };
};

function setKvActive() {
    if (currIndex == 0) {
        $itemCtr.find('.m-carousel__item').hide();
        $item.addClass('-kv-active');
        isActive_KV = true;
    } else {
        $itemCtr.find('.m-carousel__item').show();
        $item.removeClass('-kv-active');
        isActive_KV = false;
    };
};

function setOffset() {
    var itemHeightPercent = 0.5; // 50%
    $hideTop.css('margin-top', (wHeight * itemHeightPercent * l_ItemLen - wHeight) / 2 * -1 + 'px');
};