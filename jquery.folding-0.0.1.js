
/**
 * Folding for Jquery
 * @author Benjamin Delespierre <benjamin.delespierre@gmail.com>
 * @version 0.0.1
 * @package jQuery
 * @license GNU Lesser General Public License
 */
 
(function ($) {
    
    $.fn.folding = function () {
        
        var o = arguments[0] || {},
            p = {
                titleClass: 'title',
                foldedClass: 'folded',
                callback: function () {},
                duration: 200,
                easing: "linear"
            };
            
        $.extend(p,o);
            
        return this.each(function (i,n) {
            $(n).bind('fold unfold', function (event) {
                if ((event.type == 'fold' && !$(this).is('.'+p.foldedClass)) || (event.type == 'unfold' && $(this).is('.'+p.foldedClass)))
                    $('.'+p.titleClass+':first',n).trigger('click.folding');
            });
            
            $('.'+p.titleClass+':first',n).css('cursor', 'pointer').bind('click.folding', function () {
                $(n).toggleClass(p.foldedClass);
                $(this).siblings().toggle(p.duration,p.easing,p.callback);
            });
            if ($(n).is('.'+p.foldedClass))
                $('.'+p.titleClass+':first',n).siblings().hide();
        });
    };
    
})(jQuery);