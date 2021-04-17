$(document).ready(function(){
	$('.swiper__wrapper').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img class="swiper__icon" src="../icons/slider/arrow-prev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img class="swiper__icon" src="../icons/slider/arrow-next.svg"></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});