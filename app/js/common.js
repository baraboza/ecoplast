$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

$('.window-info__img-item').click(function() {
	$('.window-info__img-item').removeClass('--active');
	$('.window-info__item').removeClass('--active');
	$(this).addClass('--active');
	$('.window-info__item').eq($('.window-info__img-item').index(this)).addClass('--active');
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.scroll-top').fadeIn(200);
		$('.header').addClass('header--shadow');
	} else {
		$('.scroll-top').fadeOut(200);
		$('.header').removeClass('header--shadow');
	}
});

$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('.js-scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top - 100
	}, 1000);
});

$('.projects__objects-list').slick({
	prevArrow: '.projects__objects-prev',
	nextArrow: '.projects__objects-next',
	vertical: true,
	slidesToShow: 3,
	verticalSwiping: true,
	swipeToSlide: true
});

// $('.projects__gallery').each(function(i, el) {
// 	let parent = $(el);

// 	parent.find('.projects__gallery-list').slick({
// 		prevArrow: parent.find('.projects__gallery-prev'),
// 		nextArrow: parent.find('.projects__gallery-next'),
// 		dots: true
// 	});
// });

projectsSetObject(0);

$('.projects__objects-item-box').click(function() {
	if ($(this).hasClass('--active')) return;
	projectsSetObject($(this).data('index'));
});

$('.projects__next-object').click(function() {
	let index = +$('.projects__objects-item-box.--active').data('index');
	if (index + 1 < $('.projects__gallery').length) {
		index++;
	} else {
		index = 0;
	}
	projectsSetObject(index);
	$('.projects__objects-list').slick('slickNext');
});

});

function projectsSetObject(index) {
	$('.projects__objects-item-box').removeClass('--active');
	$('.projects__objects-item-box[data-index=' + index + ']').addClass('--active');
	$('.projects__gallery').hide();
	$('.projects__gallery-list.slick-slider').slick('unslick');
	$('.projects__object-content').hide();

	let gallery = $('.projects__gallery').eq(index);
	gallery.fadeIn();

	gallery.find('.projects__gallery-list').slick({
		prevArrow: gallery.find('.projects__gallery-prev'),
		nextArrow: gallery.find('.projects__gallery-next'),
		dots: true
	});

	$('.projects__object-content').eq(index).fadeIn();
}