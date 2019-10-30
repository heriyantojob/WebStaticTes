(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.menu-big').slideToggle()
	})
})();