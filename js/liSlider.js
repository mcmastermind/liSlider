(function($) {

    $.fn.extend({
        
        liSlider: function(options) {
        
            var defaults = {
                offset: 0,
                show: 2
            }
            
            return this.each(function(){
                var offset = options.offset;
                var show = options.show;
                var id = $(this).attr('id');
                
                $('#' + id + ' ul li').each(function(){
                    $(this).css({
                        position: 'absolute',
                        left: $(this).index() * offset
                    });
                });
                
                $('#' + id).prev('.prevnext').find('a:eq(0)').click(function(){liSliderPrev($('#' + id).prev('.prevnext').find('a:eq(0)'), offset);});
                $('#' + id).prev('.prevnext').find('a:eq(1)').click(function(){liSliderNext($('#' + id).prev('.prevnext').find('a:eq(1)'), offset, show);});
                
            });
             return this;
             
             function liSliderNext(e,o,t) {
                var position = $(e).parent().next().find('li').position();
                if(position.left < ((o * (t + 1)) - ($(e).parent().next().find('li').length * o)) ) {
                    return false;
                } else {
                    $(e).parent().next().find('li').filter(':not(:animated)').animate({
                        left: '-=' + o
                    });
                    $(e).prev('a').removeClass('disabled');
                    if(position.left <= ((o * (t + 1)) - ($(e).parent().next().find('li').length * o))) {
                        $(e).addClass('disabled');
                    }
                }
            }

            function liSliderPrev(e,o) {
                var position = $(e).parent().next().find('li').position();
                if(position.left == 0) {
                    return false;
                } else {
                    $(e).parent().next().find('li').filter(':not(:animated)').animate({
                        left: '+=' + o
                    });
                    $(e).next('a').removeClass('disabled');
                    if(position.left == -o) {
                        $(e).addClass('disabled');
                    }
                }
            }            
        }
    });
})(jQuery);