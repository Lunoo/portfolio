$(function(){
    var switcher = false;
    $('.navigation .wrapper').click(function(){
        if( !switcher ){
            $('.navigation ul').attr('style', 'display:block');
            switcher = true;    
        } else {
            $('.navigation ul').removeAttr('style');
            switcher = false;
        }   
    });
    $( '[id*="range"]' ).each(function(i){
        var $this = $('[id="range-'+i+'"]'),
            $max = $this.parent().find('.max'),
            $min = $this.parent().find('.min'),
            minCost = $this.parent().find('.min').val(),
            maxCost = $max.val();
        $this.slider({
            min: 0,
            max: maxCost,
            range: true,
            values: [ 0, maxCost ],
            stop: function(event, ui) {
                jQuery($min).val(jQuery($(this)).slider("values",0));
                jQuery($max).val(jQuery($(this)).slider("values",1));
            },
            slide: function(event, ui){
                jQuery($min).val(jQuery($(this)).slider("values",0));
                jQuery($max).val(jQuery($(this)).slider("values",1));
            }
        });  
    });
    jQuery("input.min").change(function(){
        var $this = $(this),
            $parent = $this.parent(),
            $range = $this.parent().find('[id*="range"]'),
            value1=$parent.find('.min').val(),
            value2=$parent.find('.max').val();

         if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery($range).val(value1);
        }
        jQuery($range).slider("values",0,value1);  
    });
    jQuery("input.max").change(function(){
        var $this = $(this);
        var $parent = $this.parent();
        var $range = $this.parent().find('[id*="range"]');
        var value1=$parent.find('.min').val();
        var value2=$parent.find('.max').val();
        var maxVal=$parent.find('.max').attr('value');
            
        if (value2 > maxVal) { value2 = maxVal; jQuery($this).val(maxVal)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery($range).val(value2);
        }
        jQuery($range).slider("values",1,value2);
    });
    $('input.num').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
    
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
    });
    var switcher2 = false;
    $('.filter h2').click(function(){
        if( !switcher2 ){
            $('.filter').attr('style', 'height: auto');
            switcher2 = true;    
        } else {
            $('.filter').removeAttr('style');
            switcher2 = false;
        } 
    });
    $('.up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
})
