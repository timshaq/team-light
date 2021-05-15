export default function () {

onmouseover

const tabNL = document.querySelectorAll('.catalog-modal__category');
const tabList = Array.prototype.slice.call(tabNL);

function tabsDeleteActiveClass() {
	tabList.forEach(tab => tab.classList.remove('active'))
}
tabList.forEach(tab => {
	tab.onmouseover = function() {
		if(!tab.classList.contains('active')) {
			tabsDeleteActiveClass();
			tab.classList.add('active')
		}
	}
})

}