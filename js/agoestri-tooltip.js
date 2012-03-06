// JavaScript Document
(function($){
	$.fn.agoestri_tooltip = function(options){
		var s = {
				};
		s = $.extend(options, s);
		$('body').prepend("<div id='containerTooltip'><div class='tooltipInner1'><div class='tooltipInner'></div></div></div>");
		return $('body').find('[title]').each(function(){
			var $this = $(this);
			var judul 	= $(this).attr('title');	 
			$(this).removeAttr('title');
			$(this).attr('agoestooltip',judul);
			$this.addClass('targetTooltip');
			$this.hover(function(e){
				$(this).css('z-index', 1000);
				$('#containerTooltip').removeClass('lepasPakaian');
				$('#containerTooltip').addClass('pasangPakaian');
				var offset 	= $(this).offset();
				var height 	= $(this).outerHeight()+5;
				var width 	= $(this).outerWidth();
				var left 	= e.pageX;
				$('#containerTooltip').css({
					'left'		: left
					, 'top' 	: (offset.top+height)+'px'
					});
				$('#containerTooltip').fadeIn('fast');
				$('div.tooltipInner').html($(this).attr('agoestooltip'));
			}, function(){
				$(this).css('z-index', 'auto');
				$('#containerTooltip').fadeOut();
			});
		});
	};
})(jQuery);