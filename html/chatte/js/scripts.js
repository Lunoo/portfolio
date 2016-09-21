$(function(){
    // lacguage switcher

   (function(){
        $(function() {
            return $('.language').on('click', function() {
                    if ($(this).hasClass('ru')) {
                    return $(this).removeClass('ru').addClass('ua');
                } else {
                    return $(this).addClass('ru').removeClass('ua');
                }
            });
        });    
    }).call(this);
   // categories switcher
   var switcher = true;
   $('.categories>span').click(function(){
        if (switcher){
            $('.categories').addClass('active').css('height', '50px');
            switcher = false;
        } else {
            $('.categories').removeAttr('style').removeClass('active');
            switcher = true;
        }
   })

    // main slider

   var root = '.slider',
        interval = 300000,
        pagination = '.pagination';
    sliderActivate(root, interval, pagination);

    $('.overlay .like').click(function(){
        $(this).css('background', 'url("img/icons/like-active.png") no-repeat');
    });

    // carusel

    $(".arrow-right").on('click', function(){ 
        var carusel = $(this).parents('.collection');
        right_carusel(carusel);
        return false;
    });
    $(".arrow-left").on('click', function(){ 
        var carusel = $(this).parents('.collection');
        left_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
       var block_width = $(carusel).find('.sticker').outerWidth();
       $(carusel).find(".sticker").eq(-1).clone().prependTo($(carusel).find(".sticker-container")); 
       $(carusel).find(".sticker-container").css({"left":"-"+block_width+"px"});
       $(carusel).find(".sticker").eq(-1).remove();    
       $(carusel).find(".sticker-container").animate({left: "0px"}, 500); 
       
    }
    function right_carusel(carusel){
       var block_width = $(carusel).find('.sticker').outerWidth() + 20;
       $(carusel).find(".sticker-container").animate({left: "-"+ block_width +"px"}, 500, function(){
          $(carusel).find(".sticker").eq(0).clone().appendTo($(carusel).find(".sticker-container")); 
          $(carusel).find(".sticker").eq(0).remove(); 
          $(carusel).find(".sticker-container").css({"left":"0px"}); 
       }); 
    }

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
    $('.number .arrow-up').click(function(e){
      e.preventDefault();
      val = +$(this).parents('.number').find('input').val() + 1;
      $(this).parents('.number').find('input').val(val);
    });
    $('.number .arrow-down').click(function(e){
      e.preventDefault();
      $this = $(this);
      val = +$this.parents('.number').find('input').val() - 1;
      if( val < 0 ){ val = 0 };
      $this.parents('.number').find('input').val(val);
    });

    // search input

    var switcher2 = false;
    $('.search input').click(function(){
        if( !switcher2 & $(window).width() <= '1260'){
            $('.search').addClass('active');
            switcher2 = true;    
        } else {
            $('.search').removeClass('active');
            switcher2 = false;
        }   
    });

    // colors

    var new_colors = {
        "белый": "#ffffff" ,
        "золотисто-жёлтый": "#fcaa00" ,
        "ярко-жёлтый": "#e7a600" ,
        "жёлтый": "#fec601" ,
        "светло-жёлтый": "#f2cb01" ,
        "серно-жёлтый": "#f1e10f" ,
        "бургунд": "#750211" ,
        "темно-красный": "#910714" ,
        "красный": "#b0000b" ,
        "светло-красный": "#c70d00" ,
        "оранжево-красный": "#d23000" ,
        "оранжевый": "#dd4400" ,
        "светло-оранжевый": "#eb6600" ,
        "пастельно-оранжевый": "#f96a01" ,
        "пурпурный": "#402872" ,
        "фиолетовый": "#5d2b68" ,
        "лавандовый": "#785fa1" ,
        "сиреневый": "#ba94bd" ,
        "малиновый": "#c3286a" ,
        "светло-розовый": "#ef87b8" ,
        "глубоководный синий": "#131c39" ,
        "стальной синий": "#0f113a" ,
        "тёмно-синий": "#1d2f5f" ,
        "кобальтовый синий": "#0d1f6b" ,
        "королевский синий": "#182b78" ,
        "ярко-синий": "#1b2faa" ,
        "синий": "#003a79" ,
        "дорожный синий": "#00418d" ,
        "генциановый синий": "#004583" ,
        "генциановый": "#004f9e" ,
        "лазурный": "#015eac" ,
        "небесно-голубой": "#0074ba" ,
        "голубой": "#0088c2" ,
        "светло голубой": "#43a1d4" ,
        "бирюзово-синий": "#008280" ,
        "бирюзовый": "#009b97" ,
        "цвет мяты": "#5eceb6" ,
        "темно-зелёный": "#003c23" ,
        "лесной зелёный": "#005236" ,
        "зелёный": "#00794c" ,
        "травянисто зелёный": "#017840" ,
        "светло-зелёный": "#00893b" ,
        "желто-зелёный": "#229b10" ,
        "липово-зелёный": "#6aa72e" ,
        "черный": "#060606" ,
        "темно-серый": "#4b4d4c" ,
        "серый": "#747d7c" ,
        "серый телеком": "#808588" ,
        "средне-серый": "#8a8f8b" ,
        "светло-серый": "#bfc3c4" ,
        "коричневый": "#442f1e" ,
        "ореховый": "#af591e" ,
        "светло-коричневый": "#a8875a" ,
        "бежевый": "#cdc09e" ,
        "кремовый": "#e7d293"
    };
    for(var prop in new_colors){
        $('select.color').append('<option value="c-'+new_colors[prop].substr(1)+'">'+prop+'</option>');
        $('.tabs-color').append('<span style="background:'+new_colors[prop]+'"></span>')
    }

    var switcher3 = true;
    $('.rotate span').click(function(){
        if(switcher3){
            $(this).parents('.item').find('svg').css('transform','scaleX(-1)');
            switcher3 = false;
        } else {
            $(this).parents('.item').find('svg').css('transform','scaleX(1)');
            switcher3 = true;
        }
        
    });

    $('.tabs-color span').click(function(){
        $this = $(this);
        var rgb = $(this).css('background-color').match(/\d+/g);
        var hex = '#'+ String('0' + Number(rgb[0]).toString(16)).slice(-2) 
                    + String('0' + Number(rgb[1]).toString(16)).slice(-2) 
                    + String('0' + Number(rgb[2]).toString(16)).slice(-2);
        var text = $('.color.dropdown').find('li.c-'+hex.slice(1)).text();
        $('.color.dropdown .selected').removeAttr('class')
        .addClass('selected c-'+hex.slice(1)).text(text);
        // $svg = $("#kiwi");
        // $(".kiwi", $svg).attr('style', "fill:"+hex);
        var object = document.getElementById("svg");
        var svgDocument = object.contentDocument;
        var svgElement = svgDocument.getElementsByTagName("path");
        console.log(svgElement);
        Array.prototype.forEach.call(svgElement, function(item){
            item.setAttribute("fill", hex);
        });
    });
    // popup
    PopUpHide();
    function PopUpShow(){
        $("#pal").show();
    }
    function PopUpHide(){
        $("#pal").hide();
    }
    $('.layout-colors span').click(PopUpShow);
    $('#pal .close').click(PopUpHide);


    // console.log($('object').contents().find('path'));
    $(window).load(function () {
        //alert("Document loaded, including graphics and embedded documents (like SVG)");
        var a = document.getElementById("svg");
        var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
        var delta = svgDoc.getElementById("kiw"); //get the inner element by id
        delta.addEventListener("mousedown",function(){alert('hello world!')},false);
    });
})
