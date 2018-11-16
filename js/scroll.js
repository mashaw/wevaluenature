(function ($) {
		// This jQuery function is called when the document is ready
		$(function () {
	
			// Set scroll speed
			var speed = 1000;

			$('a.jumpTo3').click(function () {
				$('html, body').animate({
					scrollTop: $('.node-3').offset().top
				}, speed, 'swing');
			});
			$('a.jumpTo4').click(function () {
				$('html, body').animate({
					scrollTop: $('.node-4').offset().top
				}, speed, 'swing');
			});
			$('a.jumpTo16').click(function () {
				$('html, body').animate({
					scrollTop: $('.node-16').offset().top
				}, speed, 'swing');
			});
			$('a.jumpTo18').click(function () {
				$('html, body').animate({
					scrollTop: $('.node-18').offset().top
				}, speed, 'swing');
			});
			
			
			$(window).scroll(function () {
			
				var windowTop = $(window).scrollTop();
				var windowTop = windowTop += 10;
  				
				if ($('.node-3').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo3active');
				}
					
				if ($('.node-4').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo4active');
				}
				
				if ($('.node-16').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo16active');
				}
					
				if ($('.node-18').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo18active');
				}			
			});
						
			$(window).resize(function () {

				var windowTop = $(window).scrollTop();
				
				if ($('.node-3').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo3active');
				}
				
				if ($('.node-4').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo4active');
				}
					
				if ($('.node-16').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo16active');
				}
				if ($('.node-18').offset().top < windowTop) {
					$('#page').removeClass();
					$('#page').addClass('jumpTo18active');
				}

			});
			
});
	})(jQuery);