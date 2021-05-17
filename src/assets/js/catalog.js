export default function () {

const fieldsetNL = document.querySelectorAll('.catalog-filter-form__fieldset');
if(!fieldsetNL.length) return
const fieldsetList = Array.prototype.slice.call(fieldsetNL);

fieldsetList.forEach(set => {
	const legend = set.querySelector('legend');
	legend.addEventListener('click', function() {
		set.classList.contains('active') ? set.classList.remove('active') : set.classList.add('active')
	})

	const btnMore = set.querySelector('.catalog-filter-form__fieldset-more');
	if(btnMore) {
		btnMore.addEventListener('click', function() {
			const content = set.querySelector('.catalog-filter-form__fieldset-content')
			if( content.classList.contains('open') ) {
				content.classList.remove('open');
				btnMore.innerText = 'Смотреть все';
			} else {
				content.classList.add('open');
				btnMore.innerText = 'Скрыть';
			}
		})
	}
})

	function disableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'hidden';
	}

	function enableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'scroll';
	}

	function closeEl(el) {
		el.classList.remove('open');
		enableScroll();
	}

	function openEl(el) {
		el.classList.add('open');
		disableScroll();
	}

const filter = document.getElementById('catalogFilter')
const openFilter = document.getElementById('catalogOpenFilterBtn')
const closeFilter = document.getElementById('catalogFilterClose')

openFilter.addEventListener('click', function(ev) {
	ev.preventDefault();
	openEl(filter)
})
closeFilter.addEventListener('click', function(ev) {
	ev.preventDefault();
	closeEl(filter)
})
filter.addEventListener('click', function(ev) {
	if(ev.target === this) closeEl(filter);
})




const priceSlidersNL = document.querySelectorAll('.price-slider');

const priceSliders = Array.prototype.slice.call(priceSlidersNL);

priceSliders.forEach(slider => {
	var stepsSlider = slider
	var input0 = slider.querySelector('.slider-input1');
	var input1 = slider.querySelector('.slider-input2');
	var inputs = [input0, input1];
	var min = parseInt(slider.getAttribute('data-min'))
	var max = parseInt(slider.getAttribute('data-max'))
	var start = 10*max/100
	var end = 90*max/100
	var symbol = slider.getAttribute('data-symbol')
	noUiSlider.create(stepsSlider, {
	    start: [start, end],
	    connect: [false,true,false],
	    range: {
	        'min': [min],
	        'max': max
	    },
	    format: {
	    	to: function(val) {
	    		return Math.ceil(val) + ` ${symbol}`;
	    	},
	    	from: function(val) {
	    		return val.replace(` ${symbol}`, '');
	    	},
	    }
	});
	stepsSlider.noUiSlider.on('update', function (values, handle) {
	    inputs[handle].value = values[handle];
	});
})


}