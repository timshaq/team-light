export default function () {
	const sliderEl = document.querySelector('.recommends__mob-slider.swiper-container');
	if(!sliderEl) return
	const breakpointMob = window.matchMedia('(min-width:1200px)')

	let recommendMobSlider;

	const enableRecommendMobSlider = function() {

		recommendMobSlider = new Swiper(sliderEl, {
			breakpoints: {
				320: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
			},

		})
		

	}

	const breakpointChecker = function() {
		if(breakpointMob.matches === true) {
			if(recommendMobSlider !== undefined) recommendMobSlider.destroy(true,true);
			return;
		} else if (breakpointMob.matches === false) {
			return enableRecommendMobSlider();
		}
	}
	breakpointMob.addListener(breakpointChecker);
	breakpointChecker();

}