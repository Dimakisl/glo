$(document).ready(function(){
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function(){
        $('.overlay').stop().animate({
            opacity: 'toggle',   
        }, 1000);
        $('.modal').stop().slideDown();
    });

    $('.close').on('click', function(){
        $('.modal').stop().slideUp();
        $('.overlay').stop().animate({
            opacity: 'toggle',   
        }, 1000);

    });

    $(document).click(function(){
        $('.modal').stop().slideUp();
        $('.overlay').hide();
    })
    $('.container').click(function (e){
        e.stopPropagation();
    })
});