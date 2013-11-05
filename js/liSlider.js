/********************************************************************************************************
 *
 * NAME: liSlider
 * VERSION: 1.1 
 * LAST UPDATE: 2013.05.11
 *
 * Change Log:
 *      1.1:  Adjusted to target visible list items only
 *          - Dynamically creates next and previous buttons
 *          - Added custom next and previous text
 *          - Added custom next and previous classes 
 *          - Fixed next and previous functions to enable/disable navigation correctly
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Author Information:
 *      Name: Richard McMaster
 *      Email: richard.mcmaster@live.com
 *      Location: Houston, Texas, United States
 *      Website: http://www.mcmastermind.com
 *
 * Plugin Website: https://github.com/mcmastermind/liSlider
 *
 * Description:
 *      liSlider is a jQuery plugin to rotate through list items.
 *
 * Documentation:
 *      Default options:
 *          offset: 0,    // Integer: width of each element including padding and margins
 *          show: 2,    // Integer: How many items to show at a time
 *          next: 'Next',    // String: Text for Next button
 *          prev: 'Previous',   // String: Text for Previous button
 *          nextclass: 'nxt',  // String: Class for Next button
 *          prevclass: 'pv'  // String: Class for Previous button
 *
 ********************************************************************************************************/

(function($) {

    $.fn.extend({
        
        liSlider: function(options) {
        
            var defaults = {
                offset: 0,
                show: 2,
                next: 'Next',
                prev: 'Previous',
                nextclass: 'nxt',
                prevclass: 'pv'
            }
                        
            var offset =  !options.offset ? defaults.offset : options.offset;
            var show = !options.show ? defaults.show : options.show;
            var next = !options.next ? defaults.next : options.next;
            var prev = !options.prev ? defaults.prev : options.prev;
            var nextclass = !options.nextclass ? defaults.nextclass : options.nextclass;
            var prevclass = !options.prevclass ? defaults.prevclass : options.prevclass;

            return this.each(function(){
                var id = $(this).attr('id');
                var index = 0;
                $('#' + id + ' ul li:visible').each(function(){
                    
                    $(this).css({
                        position: 'absolute',
                        left: index * offset
                    });
                    index++;
                });
                
                $('#' + id).prev('.prevnext').html('<a href="javascript:void(0);" class="' + prevclass + ' disabled">&laquo; ' + prev + '</a> &nbsp;|&nbsp; <a href="javascript:void(0);" class="' + nextclass + '">' + next + ' &raquo;</a>');
                
                $('#' + id).prev('.prevnext').find('a:eq(0)').click(function(){liSliderPrev($('#' + id).prev('.prevnext').find('a:eq(0)'), offset);});
                $('#' + id).prev('.prevnext').find('a:eq(1)').click(function(){liSliderNext($('#' + id).prev('.prevnext').find('a:eq(1)'), offset, show);});
                
                if( $('#' + id + ' ul li:visible').length <= show ) {
                    $('#' + id).prev('.prevnext').hide();
                } else {
                    $('#' + id).prev('.prevnext').show();
                }
                
            });

            return this;
             
            function liSliderNext(e,o,t) {
                // get 1st li position
                var position = $(e).parent().next().find('li').position();
                // get total width
                var l = $(e).parent().next().find('li').length;
                
                if( position.left <= -( ( l * o) - (o * t) ) ) {
                    $(e).addClass('disabled');
                    return false;
                } else if ( position.left - o <= -( ( l * o) - (o * t) ) ) {
                    $(e).parent().next().find('li:visible').filter(':not(:animated)').animate({
                        left: '-=' + o * t
                    });
                    $(e).addClass('disabled');
                    $(e).prev('a').removeClass('disabled');
                    return false;
                } else {
                    $(e).parent().next().find('li:visible').filter(':not(:animated)').animate({
                        left: '-=' + o * t
                    });
                    $(e).prev('a').removeClass('disabled');
                    if( position.left <= -( ( l - t ) * o ) ) {
                        $(e).addClass('disabled');
                    }

                }
            }

            function liSliderPrev(e,o) {
                var position = $(e).parent().next().find('li:visible').position();
                if(position.left == 0) {
                    $(e).addClass('disabled');
                    return false;
                } else {
                    $(e).parent().next().find('li:visible').filter(':not(:animated)').animate({
                        left: '+=' + o * show
                    });
                    $(e).next('a').removeClass('disabled');
                    if(position.left == -o * show) {
                        $(e).addClass('disabled');
                    }
                }
            }            
        }
    });
})(jQuery);