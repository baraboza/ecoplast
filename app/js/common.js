$(function() {

	$('input[type=tel]').mask('+7 (999) 999-99-99');

	$('.window-info__img-item').click(function() {
		$('.window-info__img-item').removeClass('--active');
		$('.window-info__item').removeClass('--active');
		$(this).addClass('--active');
		$('.window-info__item').eq($('.window-info__img-item').index(this)).addClass('--active');
	});

});
