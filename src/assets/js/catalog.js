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

}