export default function () {

const fieldsetNL = document.querySelectorAll('.catalog-filter-form__fieldset');
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

}