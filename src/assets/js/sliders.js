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

}