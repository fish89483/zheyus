var itemList = [
    ['', '', ''],
    ['聖示宮祖號', 't2.jpg', '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    ['title 3', 't3.jpg', '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    ['title 4', 't4.jpg', '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.'],
    ['title 5', 't5.jpg', '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam minus quae odio? Voluptates corrupti dolorum recusandae, non facilis molestiae ipsa, laborum expedita praesentium tempore soluta quam iste neque nam.']
];
var $item = $('.o-carousel__item');
var $itemTop = $('.o-carousel__item.-top');
var $itemCenter = $('.o-carousel__item.-center');
var $itemBottom = $('.o-carousel__item.-bottom');
var $hideTop = $('.o-carousel__item.-hide-top');
var $hideBottom = $('.o-carousel__item.-hide-bottom');

var $itemCountTxt = $('.o-carousel__count');

var itemLen = itemList.length;
var time_MOVE = 500;
var isMove = true;
var isActive_KV = true;
var currentIndex = 0,
    prevIndex, nextIndex, hTopIndex, hBottomIndex;


$(window).on('mousewheel', function (e) {
    var dir = (e.deltaY < 0) ? 'next' : 'prev';
    move(dir);
})

var startY, endY;
$(window).on('touchstart', function (e) {
    startY = e.touches[0].clientY;
});
$(window).on('touchmove', function (e) {
    endY = e.touches[0].clientY;
});
$(window).on('touchend', function (e) {
    var move = startY - endY;
    var dir = (move > 100 || move < -100) ? 'next' : 'prev';
    move(dir);
});
$(window).on('keydown', function (e) {
    var code = e.which;
    var dir = (code == 40) ? 'next' : (code == 38) ? 'prev' : '';
    if(dir != '') move(dir);
    
    
})
// function countTxtNum(num) {
//     return ('0' + num).slice(-2)
// }

function move(dir) {

    if (isMove) {
        isMove = false;
        switch (dir) {
            case 'next':
                currentIndex += 1;
                if (currentIndex >= itemLen) currentIndex = 0;
                break;
            case 'prev':
                currentIndex -= 1;
                if (currentIndex < 0) currentIndex = itemLen - 1;
                break;
        };

        $item.addClass('-stop -' + dir)
        $item.offset()
        $item.removeClass('-stop')
        $item.addClass('-start')

        $item.removeClass('-animate')
        setTimeout(function () {
            $item.removeClass('-start -' + dir)
            $item.addClass('-animate')
            isMove = true;
        }, time_MOVE)


        $itemCountTxt.html(currentIndex + 1 + ' / ' + itemLen)

        countIndex()
        updateTxt();

        setTimeout(function () {
            setCarouselActive()
            updateContent();
        }, time_MOVE)
    };
}

function countIndex() {

    prevIndex = currentIndex - 1
    nextIndex = currentIndex + 1

    if (prevIndex < 0) prevIndex = itemLen - 1;
    if (currentIndex >= itemLen - 1) nextIndex = 0;

    hTopIndex = prevIndex - 1;
    hBottomIndex = nextIndex + 1;

    if (hTopIndex < 0) hTopIndex = itemLen - 1;
    if (hBottomIndex >= itemLen) hBottomIndex = 0;
}

function updateTxt() {

    $hideTop.find('.m-carousel__title').html(itemList[hTopIndex][0])
    $hideBottom.find('.m-carousel__title').html(itemList[hBottomIndex][0])
    $itemCenter.find('.m-carousel__title').html(itemList[currentIndex][0])
    $itemTop.find('.m-carousel__title').html(itemList[prevIndex][0])
    $itemBottom.find('.m-carousel__title').html(itemList[nextIndex][0])

    $hideTop.find('.m-carousel__txt').html(itemList[hTopIndex][2])
    $hideBottom.find('.m-carousel__txt').html(itemList[hBottomIndex][2])
    $itemCenter.find('.m-carousel__txt').html(itemList[currentIndex][2])
    $itemTop.find('.m-carousel__txt').html(itemList[prevIndex][2])
    $itemBottom.find('.m-carousel__txt').html(itemList[nextIndex][2])


}

function updateContent() {

    // $hideTop.find('img').attr('src', 'images/' + itemList[hTopIndex][1])
    // $hideBottom.find('img').attr('src', 'images/' + itemList[hBottomIndex][1])

    // $itemTop.find('img').attr('src', 'images/' + itemList[prevIndex][1])
    // $itemCenter.find('img').attr('src', 'images/' + itemList[currentIndex][1])
    // $itemBottom.find('img').attr('src', 'images/' + itemList[nextIndex][1])

    $hideTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hTopIndex][1] + ')')
    $hideBottom.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[hBottomIndex][1] + ')')

    $itemTop.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[prevIndex][1] + ')')
    $itemCenter.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[currentIndex][1] + ')')
    $itemBottom.find('.m-carousel__item').css('background-image', 'url(images/' + itemList[nextIndex][1] + ')')

}

function setCarouselActive() {
    if (currentIndex == 0) {
        $('#js-kv').addClass('-active');
        $itemCenter.find('.m-carousel__item').hide();
        isActive_KV = true;
    } else {
        $itemCenter.find('.m-carousel__item').show();
        $('#js-kv').removeClass('-active');
        isActive_KV = false;
    }
};

$(function () {

    setCarouselOffset()

    countIndex()
    updateTxt();
    updateContent();
    setCarouselActive();
    setTimeout(function () {
        $item.addClass('-animate')
    }, time_MOVE)
});

$(window).resize(function () {
    setCarouselOffset()
});

function setCarouselOffset() {
    var windowHeight = $('.o-carousel').outerHeight();
    var itemHeightPercent = 0.5;
    $hideTop.css('margin-top', (windowHeight * itemHeightPercent * itemLen - windowHeight) / 2 * -1 + 'px');
};