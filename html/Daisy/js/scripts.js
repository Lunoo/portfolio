$(function(){

    $('.section-2 .rectangle').on('mouseenter', function(){
        var index = $(this).parent().index() + 1;
        $(this).children().removeAttr('class')
            .addClass('icn-' + 'hover-' + index);
    })
    $('.section-2 .rectangle').on('mouseleave', function(){
        var index = $(this).parent().index() + 1;
        $(this).children().removeAttr('class')
            .addClass('icn-' + index);
    })

    $('.slider>*').attr('style', 'display:none');
    $('.slider>*:first-child').attr('style', 'display:block');
    $('.navigation .icn-arrow-right').click(function(){
        if( $('.slider .active')[0] == $('.slider>*:last-child')[0] ){
            $('.slider .active').removeClass('active').fadeOut( 500 );
            $('.slider>*:first-child').delay(500).addClass('active').fadeIn( 500 );
        } else {
            $('.slider .active').removeClass('active').fadeOut( 500 )
            .next().delay(500).addClass('active').fadeIn( 500 );
        }
    });
    $('.navigation .icn-arrow-left').click(function(){
        if( $('.slider .active')[0] == $('.slider>*:first-child')[0] ){
            $('.slider .active').removeClass('active').fadeOut( 500 );
            $('.slider>*:last-child').delay(500).addClass('active').fadeIn( 500 );
        } else {
            $('.slider .active').removeClass('active').fadeOut( 500 )
            .prev().delay(500).addClass('active').fadeIn( 500 );
        }
    });
})
