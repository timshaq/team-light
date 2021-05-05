export default function () {

	const ordersItemsNL = document.querySelectorAll('.cab-orders .cab-orders-item');
	if(!ordersItemsNL) return;
	const ordersItemsList = Array.prototype.slice.call(ordersItemsNL);

	ordersItemsList.forEach(item => {
		item.addEventListener('click', function() {
			return (item.classList.contains('active')) ? item.classList.remove('active') : item.classList.add('active');
		})
	})

}