let setBreakpoint = function() {
	if (window.matchMedia('(min-width: 1480px)').matches) window.breakpoint = 4;
	else if (window.matchMedia('(min-width: 1024px)').matches) window.breakpoint = 3;
	else if (window.matchMedia('(min-width: 768px)').matches) window.breakpoint = 2;
	else if (window.matchMedia('(min-width: 576px)').matches) window.breakpoint = 1;
	else window.breakpoint = 0;
}

setBreakpoint();
$(window).on('resize', setBreakpoint);

$(function() {

	$('.header__toggle').click(function() {
		$(this).toggleClass('active');
		$('.header__mobile').slideToggle();
	});

	$('input[type=tel]').mask('+7 (999) 999-99-99');

	$('.hero__slider').slick({
		prevArrow: '.hero__slider-prev',
		nextArrow: '.hero__slider-next',
		autoplay: true,
		autoplaySpeed: 5000,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					autoplay: false
				}
			}
		]
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

	$('.footer__menu-title--mobile-toggle').click(function() {
		$(this).toggleClass('--active');
		$(this).next().slideToggle();
	});

	$('.catalog-page__menu-head').click(function() {
		if (window.breakpoint > 2) return;

		$(this).toggleClass('--active');
		$('.catalog-page__menu-list').slideToggle();
	});

	$('.card-page__slider-list').slick({
		prevArrow: '.card-page__slider-prev',
		nextArrow: '.card-page__slider-next',
		dots: true
	});

	$('.card-page__counter-minus').click(function() {
		let value = +$('.card-page__counter-input').val();

		if (value <= 1) return;

		$('.card-page__counter-input').val(value - 1);
	});

	$('.card-page__counter-plus').click(function() {
		let value = +$('.card-page__counter-input').val();
		$('.card-page__counter-input').val(value + 1);
	});

	$('.card-page__tabs-item a').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('--active')) return;
		$('.card-page__tabs-item a').removeClass('--active');
		$(this).addClass('--active');
		$('.card-page__content').hide();
		$($(this).attr('href')).fadeIn();
	});

	$('.contacts__tabs-item a').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('--active')) return;
		$('.contacts__tabs-item a').removeClass('--active');
		$(this).addClass('--active');
		$('.contacts__content').hide();
		$($(this).attr('href')).fadeIn();
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


function factorial(n) {
	if (n < 0) return 0;
	else if (n == 0) return 1;
	else return n * factorial(n - 1);
}
