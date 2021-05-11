export default function () {

	const tabsNL = document.querySelectorAll('.product-page .product-page__tabs .product-page__tab');
	const tabs = Array.prototype.slice.call(tabsNL);

	const dropDownsNL = document.querySelectorAll('.product-page .product-page__drop-down-list .product-drop-down');
	const dropDowns = Array.prototype.slice.call(dropDownsNL);

	function tabsUnactive() {
		tabs.forEach(el => el.classList.remove('active'))
	}
	function dropDownsHide() {
		dropDowns.forEach(el => el.classList.remove('open'))
	}

	tabs.forEach((tab,index) => {
		tab.addEventListener('click', function() {
			const drop = dropDowns[index]
			if( !drop.classList.contains('open') ) {
				dropDownsHide()
				tabsUnactive();
				tab.classList.add('active')
				drop.classList.add('open')
			}
		})
	})

	const headersNL = document.querySelectorAll('.product-page .product-drop-down__header');
	const headers = Array.prototype.slice.call(headersNL);

	headers.forEach((hdr,index) => {
		hdr.addEventListener('click', function() {
			const drop = dropDowns[index]
			if( !drop.classList.contains('open') ) {
				dropDownsHide()
				tabsUnactive();
				tabs[index].classList.add('active')
				drop.classList.add('open')
				html.scrollTo({
					top: hdr.offsetTop,
					behavior: 'smooth'
				})
			}
		})

	})
}