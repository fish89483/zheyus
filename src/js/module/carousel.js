var itemList = [
    ['', '', ''],
    ['盛事公主號', 't2.jpg'],
    ['太陽公主號', 't3.jpg'],
    ['傳奇號', 't4.jpg']
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

var currIndex = 0,
    prevIndex, nextIndex, hTopIndex, hBtmIndex;



$(window).on('mousewheel', function (e) {
    var dir = (e.deltaY < 0) ? 1 : 0;
    moveItem(dir);
})

var startY, endY;
$(window).on('touchstart', function (e) {
    startY = e.touches[0].clientY;
});
$(window).on('touchmove', function (e) {
    endY = e.touches[0].clientY;
});
$(window).on('touchend', function () {
    var t = startY - endY;
    if (t > 100 || t < -100) {
        var dir = (t > 0) ? 1 : 0;
        moveItem(dir);
    }
    
});

$(window).on('keydown', function (e) {
    var code = e.which;
    var dir = (code == 40) ? 1 : (code == 38) ? 0 : -1;
    if (dir >= 0) moveItem(dir);
});

$('.a-scrolldown').on('click', function () {
    moveItem(1);
});

// function countTxtNum(num) {
//     return ('0' + num).slice(-2)
// }
$(function () {

    setOffset();
    countIndex();
    updateTxt();
    updateContent();
    setKvActive();

    setTimeout(function () {
        $item.addClass('-animate');
    }, time_MOVE);

});



function moveItem(dir) {

    if (isMove) {
        isMove = false;

        switch (dir) {
            case 1:
                currIndex += 1;
                if (currIndex >= itemLen) currIndex = 0;
                break;
            case 0:
                currIndex -= 1;
                if (currIndex < 0) currIndex = itemLen - 1;
                break;
        };

        dir = (dir == 1) ? 'next' : 'prev';

        $item.addClass('-stop -' + dir);
        $item.offset();
        $item.removeClass('-stop');
        $item.addClass('-start');
        $item.removeClass('-animate');

        setTimeout(function () {
            $item.removeClass('-start -' + dir);
            $item.addClass('-animate');
            isMove = true;
            setKvActive();
            updateContent();

        }, time_MOVE);

        countIndex();
        updateTxt();
        setTxtCtAnimate();
        $itemCountTxt.html(currIndex + 1 + ' / ' + itemLen);

    };
}

function countIndex() {

    prevIndex = currIndex - 1;
    nextIndex = currIndex + 1;

    if (prevIndex < 0) prevIndex = itemLen - 1;
    if (currIndex >= itemLen - 1) nextIndex = 0;

    hTopIndex = prevIndex - 1;
    hBtmIndex = nextIndex + 1;

    if (hTopIndex < 0) hTopIndex = itemLen - 1;
    if (hBtmIndex >= itemLen) hBtmIndex = 0;
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

    $hideTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hTopIndex][1] + ')');
    $hideBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hBtmIndex][1] + ')');
    $itemTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[prevIndex][1] + ')');
    $itemCtr.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[currIndex][1] + ')');
    $itemBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[nextIndex][1] + ')');

};

function setTxtCtAnimate() {

    var $txtCtActive = $('.m-carousel__txt-content.-txt-content-' + (currIndex + 1));
    var $txtCtActiveH = $txtCtActive.outerHeight();

    if (currIndex != 0) {

        $txtCtActive.addClass('-active').siblings().removeClass('-active');
        $txtCtActive.css({
            'height': '0px',
            'position': 'relative'
        }).siblings().removeAttr('style');

        setTimeout(function () {
            $txtCtActive.css('height', $txtCtActiveH + 'px');
        }, time_MOVE);

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