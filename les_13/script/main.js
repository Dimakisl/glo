$(document).ready(function(){
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function(){
        $('.overlay').animate({
            opacity: 'toggle',   
        }, 1000);
        $('.modal').slideDown();
    });

    $('.close').on('click', function(){
        $('.modal').slideUp();
        $('.overlay').animate({
            opacity: 'toggle',   
        }, 1000);

    });

    $(document).click(function(){
        $('.modal').slideUp();
        $('.overlay').animate({
            opacity: 'toggle',   
        }, 1000);
    })
    $('.container').click(function (e){
        e.stopPropagation();
    })
});