export default function () {

const burgerBtn = document.getElementById('headerMenuBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const menuBox = document.getElementById('menuBox');

const catalogOpenBtn = document.getElementById('catalogOpenBtn');
const catalogContent = document.getElementById('catalogContent');
	
function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
}

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
}

function closeEl(el) {
	el.classList.remove('mob-active');
	enableScroll();
}

function openEl(el) {
	el.classList.add('mob-active');
	disableScroll();
}

burgerBtn.addEventListener('click', function() {
	openEl(menuBox)
})

menuCloseBtn.addEventListener('click', function() {
	closeEl(menuBox)
})

menuBox.addEventListener('click', function(ev) {
	if(ev.target === this) closeEl(menuBox);
})

catalogOpenBtn.addEventListener('click', function(ev) {
	if(window.innerWidth > 1199) return;
	ev.preventDefault();
	if(catalogOpenBtn.classList.contains('back')) {
		catalogOpenBtn.classList.remove('back')
		catalogContent.classList.remove('mob-active')
	} else {
		catalogOpenBtn.classList.add('back')
		catalogContent.classList.add('mob-active')
	}
})

const categoryNL = document.querySelectorAll('.catalog-modal__category')
const catsList = Array.prototype.slice.call(categoryNL);

catsList.forEach(cat => {
	cat.addEventListener('click', function(ev) {
		if(window.innerWidth > 1199) return;
		ev.preventDefault();
		if(cat.classList.contains('mob-open')) {
			cat.classList.remove('mob-open')
		} else {
			cat.classList.add('mob-open')
		}
	})
})


const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const mobSearchToggle = document.getElementById('mobSearchToggle');
const mobSearch = document.getElementById('mobSearch');

searchInput.onfocus = function() {
	searchResults.classList.add('active')
}
searchInput.onblur = function() {
	searchResults.classList.remove('active')
}
mobSearchToggle.addEventListener('click', function() {
	if(mobSearch.classList.contains('active-mob')) {
		mobSearch.classList.remove('active-mob')
	} else {
		mobSearch.classList.add('active-mob')
	}
})
}