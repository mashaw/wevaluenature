




jQuery(document).ready(function($) {

			$(window).load(function () {

				var windowTop = $(window).scrollTop();

				if ($(window).scrollTop() > 0) {
					//$('.collapsing-wrapper').addClass('shrink');
					$('body').addClass('shrink');
  				} else {
    				//$('.collapsing-wrapper').removeClass('shrink');
    				$('body').removeClass('shrink');
  				}
});
