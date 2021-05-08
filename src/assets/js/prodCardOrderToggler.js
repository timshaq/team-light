export default function () {

	const productCardNL = document.querySelectorAll('.product-card');
	const productCardList = Array.prototype.slice.call(productCardNL);

	function showOrderBox(fake,box) {
		fake.classList.add('hidden');
		box.classList.add('active');

	}
	function hideOrderBox(fake,box) {
		fake.classList.remove('hidden');
		box.classList.remove('active');
	}
	function counter(box) {
		const input = box.querySelector('input');
		const down = box.querySelector('.num-input-down');
		const up = box.querySelector('.num-input-up');
		down.addEventListener('click', () => input.stepDown()); 
		up.addEventListener('click', () => input.stepUp());
	}
	productCardList.forEach(prod => {
		const fakeBtn = prod.querySelector('.fake-order-button');
		const orderBox = prod.querySelector('.product-card__order-box');
		counter(orderBox)
		const orderBtn = orderBox.querySelector('.product-card__order');
		fakeBtn.addEventListener('click', () => {
			console.log('fake click')
			showOrderBox(fakeBtn, orderBox)
		});
		orderBtn.addEventListener('click', () => {
			console.log('order click')
			hideOrderBox(fakeBtn, orderBox);
			// clearTimeout(hideTimer);
		})
		prod.onmouseleave = () => {
			console.log('prod out')
			let hideTimer = setTimeout(() => hideOrderBox(fakeBtn, orderBox), 3000);
		}
	})
}