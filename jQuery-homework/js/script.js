$(document).ready(function () {

    let menuBtn = $('.main_nav li').eq(1).find('a'),
        linkBtn = $('.main_btna'),
        divBtn = $('.main_btn'),
        overlay = $('.overlay'),
        modal = $('.modal'),
        closeBtn = $('.close');

    function modalOpen(item) {
        item.on('click', function (event) {
            event.preventDefault();
            overlay.animate({opacity: 'toggle'}, 1000);
            modal.slideDown(1000);
        });
    }

    modalOpen(menuBtn);
    modalOpen(linkBtn);
    modalOpen(divBtn);

    closeBtn.on('click', function (event) {
        event.preventDefault();
        overlay.animate({opacity: 'toggle'}, 1000);
        modal.slideUp(1000);
    });


});
