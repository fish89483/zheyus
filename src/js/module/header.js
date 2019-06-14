// header
$('.a-burger').on('click', function () {

    if (!isPageview) {

        // toggle menu (pages-view closed)
        if (!$(this).hasClass('-active')) {

            $('.o-header__menu').addClass('-active');
            $('.a-burger').addClass('-active');

        } else {
            menuClose();
        };

    } else {

        // close pages-view
        isPageview = false;
        $('.wrapper').removeClass('-pages-view');
        $('.m-pages__item').removeClass('-active');
        menuClose();

    };

});

$('.o-header__menu-mask').on('click', function () {
    menuClose();
});

$('.a-cta').on('click', function () {
    var num = parseInt($(this).attr('id').split('-')[1]); // #cta-2
    $('#pages-' + num).addClass('-active'); // #pages-2
    $('.a-burger').addClass('-active');
    $('.wrapper').addClass('-pages-view');
    isPageview = true;

});

$('.o-header__menu li').on('click', function () {
    var num = parseInt($(this).attr('id').split('-')[1]) - 1; // #menu-2
    menuClose();
    dispatchIndex(num);
});

function menuClose() {
    $('.o-header__menu').removeClass('-active');
    $('.a-burger').removeClass('-active');
};