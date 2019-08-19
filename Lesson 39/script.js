$(document).ready(function(){
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });
    $('.list-item:eq(2)').on('click', function(){
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(3)').on('click', function(){
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});
