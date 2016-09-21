function sliderActivate(root, interval, pagination){
    var I = 0;
    $(root).children().first().addClass('active').attr('style', 'opacity:1');
    function slider(){
        if($(root + ' .active').is(':last-child')){
            $(root + ' .active').attr('style', 'opacity:0').removeClass('active');
            $(root).children().first().addClass('active').animate({opacity: 1}, 500);
            $(pagination + ' .active').removeClass('active');
            $(pagination).children().first().addClass('active');
        } else {
            $(root + ' .active').attr('style', 'opacity:0').removeClass('active')
            .next().addClass('active').animate({opacity: 1}, 500);
            $(pagination + ' .active').removeClass('active').next().addClass('active');
        }
    }
    I = setInterval(slider, interval);
    $(root).children().each(function(){
        $(pagination).append('<span></span>');
        $(pagination).children().first().addClass('active');
    });
    $(pagination).children().bind('click', function(){
        clearInterval(I);

        $this = $(this);
        var index = $this.index();
        $(pagination + ' .active').removeClass('active');
        $this.addClass('active');
        $(root + ' .active').attr('style', 'opacity:0').removeClass('active');
        $(root).children().eq(index).addClass('active').animate({opacity: 1}, 500);

        I = setInterval(slider, interval);

    });
};


