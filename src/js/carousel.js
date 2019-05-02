var itemList = [{
        title: 'title 1',
        bgc: '#111'
    },
    {
        title: 'title 2',
        bgc: '#222'
    },
    {
        title: 'title 3',
        bgc: '#333'
    },
    {
        title: 'title 4',
        bgc: '#444'
    },
    {
        title: 'title 5',
        bgc: '#555'
    },
    // {title: 'title 6', bgc: '#666'},
    // {title: 'title 7', bgc: '#777'},
];

$(window).on('mousewheel', function(e) {
    var dir = (e.deltaY < 0) ? 'next' : 'prev';
    console.log(dir)
    $('.test').toggleClass('animate')
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
$(function() {

});