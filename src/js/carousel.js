var itemList = [
    ['', '', ''],
    ['聖示宮祖號', 't2.jpg', '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    ['聖示祖宮號', 't3.jpg', '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    ['字好粗哦', 't4.jpg', '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    // ['title 5', 't5.jpg', '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.']
];

var $item = $('.o-carousel__item');
var $itemTop = $('.o-carousel__item.-top');
var $itemCtr = $('.o-carousel__item.-center');
var $itemBtm = $('.o-carousel__item.-bottom');
var $hideTop = $('.o-carousel__item.-hide-top');
var $hideBtm = $('.o-carousel__item.-hide-bottom');
var $itemCountTxt = $('.o-carousel__count');

var itemNum = 5; //hideTop, hideBtm, top, center, bottom
var itemLen = itemList.length;
var time_MOVE = 500;
var isMove = true;
var isActive_KV = true;
var currIndex = 0,
    prevIndex, nextIndex, hTopIndex, hBtmIndex;


$(window).on('mousewheel', function (e) {
    var dir = (e.deltaY < 0) ? 'next' : 'prev';
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
    var dir = (t > 100 || t < -100) ? 'next' : 'prev';
    moveItem(dir);
});

$(window).on('keydown', function (e) {
    var code = e.which;
    var dir = (code == 40) ? 'next' : (code == 38) ? 'prev' : '';
    if (dir != '') moveItem(dir);
});

// function countTxtNum(num) {
//     return ('0' + num).slice(-2)
// }

function moveItem(dir) {

    if (isMove) {
        isMove = false;

        switch (dir) {
            case 'next':
                currIndex += 1;
                if (currIndex >= itemLen) currIndex = 0;
                break;
            case 'prev':
                currIndex -= 1;
                if (currIndex < 0) currIndex = itemLen - 1;
                break;
        };

        $item.addClass('-stop -' + dir);
        $item.offset();
        $item.removeClass('-stop');
        $item.addClass('-start');

        $item.removeClass('-animate');

        setTimeout(function () {
            $item.removeClass('-start -' + dir);
            $item.addClass('-animate');
            isMove = true;
        }, time_MOVE);


        $itemCountTxt.html(currIndex + 1 + ' / ' + itemLen);

        countIndex();
        updateTxt();

        setTimeout(function () {
            setKvActive();
            updateContent();
        }, time_MOVE);

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

    $hideTop.find('.m-carousel__title').html(itemList[hTopIndex][0]);
    $hideBtm.find('.m-carousel__title').html(itemList[hBtmIndex][0]);
    $itemCtr.find('.m-carousel__title').html(itemList[currIndex][0]);
    $itemTop.find('.m-carousel__title').html(itemList[prevIndex][0]);
    $itemBtm.find('.m-carousel__title').html(itemList[nextIndex][0]);

    $hideTop.find('.m-carousel__txt').html(itemList[hTopIndex][2]);
    $hideBtm.find('.m-carousel__txt').html(itemList[hBtmIndex][2]);
    $itemCtr.find('.m-carousel__txt').html(itemList[currIndex][2]);
    $itemTop.find('.m-carousel__txt').html(itemList[prevIndex][2]);
    $itemBtm.find('.m-carousel__txt').html(itemList[nextIndex][2]);

};

function updateContent() {

    $hideTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hTopIndex][1] + ')');
    $hideBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hBtmIndex][1] + ')');
    $itemTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[prevIndex][1] + ')');
    $itemCtr.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[currIndex][1] + ')');
    $itemBtm.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[nextIndex][1] + ')');

};

function setKvActive() {
    if (currIndex == 0) {
        $item.addClass('-kv-active');
        $itemCtr.find('.m-carousel__item').hide();
        isActive_KV = true;
    } else {
        $itemCtr.find('.m-carousel__item').show();
        $item.removeClass('-kv-active');
        isActive_KV = false;
    };
};

$(function () {

    setCarouselOffset();

    countIndex();
    updateTxt();
    updateContent();
    setKvActive();
    setTimeout(function () {
        $item.addClass('-animate');
    }, time_MOVE);

});

$(window).resize(function () {
    setCarouselOffset();
});

function setCarouselOffset() {
    var windowHeight = $('.o-carousel').outerHeight();
    var itemHeightPercent = 0.5; // 50%
    $hideTop.css('margin-top', (windowHeight * itemHeightPercent * itemNum - windowHeight) / 2 * -1 + 'px');
};