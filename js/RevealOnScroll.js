function revealOnScroll() {
	var $window = $(window);
	var win_height_padded = $window.height() * 1.1;
	var scrolled = $window.scrollTop();

	// Showed...
	$(".revealOnScroll:not(.animated)").each(function () {
		var $this = $(this), offsetTop = $this.offset().top;

		if (scrolled + win_height_padded > offsetTop) {
			console.log("go animation");
			if ($this.data('timeout')) {
				window.setTimeout(function () {
					$this.addClass('animated ' + $this.data('animation'));
				}, parseInt($this.data('timeout'), 10));
			} else {
				$this.addClass('animated ' + $this.data('animation'));
			}
		}
	});
	// Hidden...
	$(".revealOnScroll.animated").each(function (index) {
		var $this = $(this), offsetTop = $this.offset().top;
		if (scrolled + win_height_padded < offsetTop) {
			$(this).removeClass('animated')
			$(this).removeClass($this.data('animation'));
		}
	});
}

//});
$(document).ready(function () {
	$(window).on('scroll', revealOnScroll);
	revealOnScroll();
}); 
			