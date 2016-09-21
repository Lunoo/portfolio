$(function(){
    $('#search', '.header-bottom').focus(function(){
        $('.header-bottom .placeholder').css('font-size', '0');
    }).blur(function(){
        if(!$(this).val()){
            $('.header-bottom .placeholder').css('font-size', '1em');
        }
    })
    $('.placeholder', '.header-bottom').click(function(){
        $('#search').focus();
    })
    $('.sidebar h3').click(function(){
        if($(this).hasClass('closed')){
            $(this).removeClass('closed')
        } else {
            $(this).addClass('closed')
        }
    })

    // number input

    $('.number input').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
    
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
    })
    $('.number input').change(function(){
        $(this).val($(this).val()+'шт');
    })
    var oldValue;
    $('.number input').focus(function(){
        oldValue = $(this).val();
        $(this).val('');
    }).blur(function(){
        if(!$(this).val()){
            $(this).val(oldValue);
        }
    })
    $('.number .plus').click(function(e){
      e.preventDefault();
      val = parseFloat($(this).parents('.number').find('input').val()) + 1;
      $(this).parents('.number').find('input').val(val + 'шт');
    });
    $('.number .minus').click(function(e){
      e.preventDefault();
      $this = $(this);
      val = parseFloat($this.parents('.number').find('input').val()) - 1;
      if( val < 1 ){ val = 1 };
      $this.parents('.number').find('input').val(val + 'шт');
    });

    // up
    $('span.up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    // personal-nav
    $('.per-nav span').click(function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active')
        }
    })
})
