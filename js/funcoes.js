$(function(){
    $('.botaoMenu').click(function (){
        if(!$(this).hasClass('menuAtivo')){
            $(this).addClass('menuAtivo');
            $('.subMenu').animate({'right':'0px'},1000);
        }else{
            $(this).removeClass('menuAtivo');
            $('.subMenu').animate({'right':'-100%'},1000);
        }
    });

    // $('body').on('click',function(){
    //     $('.botaoMenu').removeClass('menuAtivo');
    //     $('.subMenu').animate({'right':'-100%'},1000);
    // })
});