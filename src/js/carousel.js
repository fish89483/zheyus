

var itemList = [
    ['title 1', 't1.jpg'],
    ['title 2', 't2.jpg'],
    ['title 3', 't3.jpg'],
    ['title 4', 't4.jpg'],
    ['title 5', 't5.jpg']
];
var $itemTop = $('.o-carousel__item.-top');
var $itemCenter = $('.o-carousel__item.-center');
var $itemBottom = $('.o-carousel__item.-bottom');
var $centerContent = $('.o-carousel__item.-center .o-carousel__item-content');
var $itemCountTxt = $('.o-carousel__count');
var currentIndex = 0
var itemLen = itemList.length

$(window).on('mousewheel', function (e) {
    var dir = (e.deltaY < 0) ? 'next' : 'prev';
    // console.log(dir)
    move(dir)
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
});

// function countTxtNum(num) {
//     return ('0' + num).slice(-2)
// }

function move(dir) {
    switch (dir) {
        case 'next':
            currentIndex += 1
            if (currentIndex >= itemLen) currentIndex = 0
            break;

        case 'prev':
            currentIndex -= 1
            if (currentIndex < 0) currentIndex = itemLen - 1
            break;
    };
    $itemCountTxt.html(currentIndex + 1 + ' / ' + itemLen)
    updateTitle();
    updateContent();
}

function updateTitle() {
    var prevIndex = currentIndex - 1
    var nextIndex = currentIndex + 1
    if (prevIndex < 0) prevIndex = itemLen - 1;
    if (currentIndex >= itemLen - 1) nextIndex = 0;

    $itemCenter.children('.o-carousel__item-title').html(itemList[currentIndex][0])
    $itemTop.children('.o-carousel__item-title').html(itemList[prevIndex][0])
    $itemBottom.children('.o-carousel__item-title').html(itemList[nextIndex][0])
}
function updateContent(){
    $centerContent.children('img').attr('src','images/'+itemList[currentIndex][1])
    $itemCenter.addClass('-current')
    setTimeout(function () {
        $itemCenter.removeClass('-current')
    }, 1000)
}
$(function () {
    updateTitle();
    updateContent();
});