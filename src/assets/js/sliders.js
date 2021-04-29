export default function () {


	const breakpointMob = window.matchMedia('(min-width:767px)')

	let bestestSlider;

	const enableBestestSlider = function() {

		bestestSlider = new Swiper('#bestestSlider', {
			pagination: {
				el: '#bestestSliderPagination',
				type: 'bullets',
				clickable: false,
			},
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,

		})

	}

	const breakpointChecker = function() {
		if(breakpointMob.matches === true) {
			if(bestestSlider !== undefined) bestestSlider.destroy(true,true);
			return;
		} else if (breakpointMob.matches === false) {
			return enableBestestSlider();
		}
	}
	breakpointMob.addListener(breakpointChecker);
	breakpointChecker();




	const reviewsSlider = new Swiper('#reviewsSlider', {
			navigation: {
				nextEl: '#reviewsSliderNextBtn',
				prevEl: '#reviewsSliderPrevBtn',
			},
			pagination: {
				el: '#reviewsSliderPagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},

		})




	const chanceSlider = new Swiper('#chanceSlider', {
			pagination: {
				el: '#chanceSliderPagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					width: 768,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: true,
					loop: true,
					width: 1170,
				},
			},

		})

}