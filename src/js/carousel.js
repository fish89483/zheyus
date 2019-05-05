var itemList = [
    ['title 1', 't1.jpg'],
    ['title 2', 't2.jpg'],
    ['title 3', 't3.jpg'],
    ['title 4', 't4.jpg'],
    ['title 5', 't5.jpg']
];
var $item = $('.o-carousel__item')
var $itemTop = $('.o-carousel__item.-top');
var $itemCenter = $('.o-carousel__item.-center');
var $itemBottom = $('.o-carousel__item.-bottom');
var $hideTop = $('.o-carousel__item.-hide-top');
var $hideBottom = $('.o-carousel__item.-hide-bottom');

var $itemCountTxt = $('.o-carousel__count');

var itemLen = itemList.length;
var moveDelay = 1000;
var isMove = true;
var currentIndex = 0,
    prevIndex, nextIndex, hTopIndex, hBottomIndex;


$(window).on('mousewheel', function(e) {
    var dir = (e.deltaY < 0) ? 'next' : 'prev';
    move(dir);
})

var startY, endY;
$(window).on('touchstart', function(e) {
    startY = e.touches[0].clientY;
});
$(window).on('touchmove', function(e) {
    endY = e.touches[0].clientY;
});
$(window).on('touchend', function(e) {
    var move = startY - endY;
    var dir = (move > 100 || move < -100) ? 'next' : 'prev';
});

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
        setTimeout(function() {
            $item.removeClass('-start -' + dir)
            isMove = true;
        }, moveDelay)


        $itemCountTxt.html(currentIndex + 1 + ' / ' + itemLen)

        countIndex()
        updateTitle();
        updateContent();
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

function updateTitle() {

    $hideTop.find('.o-carousel__item-title').html(itemList[hTopIndex][0])
    $hideBottom.find('.o-carousel__item-title').html(itemList[hBottomIndex][0])

    $itemCenter.find('.o-carousel__item-title').html(itemList[currentIndex][0])
    $itemTop.find('.o-carousel__item-title').html(itemList[prevIndex][0])
    $itemBottom.find('.o-carousel__item-title').html(itemList[nextIndex][0])
}

function updateContent() {
    // var prevIndex = currentIndex - 1
    // var nextIndex = currentIndex + 1

    // if (prevIndex < 0) prevIndex = itemLen - 1;
    // if (currentIndex >= itemLen - 1) nextIndex = 0;

    // var hTopIndex = prevIndex - 1;
    // var hBottomIndex = nextIndex + 1;

    // if (hTopIndex < 0) hTopIndex = itemLen - 1;
    // if (hBottomIndex >= itemLen) hBottomIndex = 0;

    $hideTop.find('img').attr('src', 'images/' + itemList[hTopIndex][1])
    $hideBottom.find('img').attr('src', 'images/' + itemList[hBottomIndex][1])

    $itemTop.find('img').attr('src', 'images/' + itemList[prevIndex][1])
    $itemCenter.find('img').attr('src', 'images/' + itemList[currentIndex][1])
    $itemBottom.find('img').attr('src', 'images/' + itemList[nextIndex][1])


}
$(function() {
    var windowHeight = $(window).outerHeight()
    $hideTop.css('margin-top', windowHeight / 2 * -1.5 + 'px')
    countIndex()
    updateTitle();
    updateContent();
});