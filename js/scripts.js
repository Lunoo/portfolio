$(function(){

    $('.left-arrow').click(function(){
        child = $('.examples .active');
        child.remove;
        $('.examples ul').append(child);
        $('.examples .active').removeAttr('style').removeClass('active');
        $('.examples li:first-child').animate({opacity: "1"}, 1500).addClass('active')
        .next().animate({opacity: "1"}, 1000).addClass('active')
        .next().animate({opacity: "1"}, 500).addClass('active');
    })

    $('.right-arrow').click(function(){
        child = $('.examples .active');
        child.remove;
        $('.examples ul').prepend(child);
        $('.examples .active').removeAttr('style').removeClass('active');
        $('.examples li:last-child').animate({opacity: "1"}, 1500).addClass('active')
        .prev().animate({opacity: "1"}, 1000).addClass('active')
        .prev().animate({opacity: "1"}, 500).addClass('active');
    })

    $('footer span').fadeOut();
    $(window).scroll(function() {
        if($(this).scrollTop() > 700) {
            $('footer span').fadeIn();
        } else {
            $('footer span').fadeOut();
        }
        });
        $('footer span').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
})
