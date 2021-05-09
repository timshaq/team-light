export default function () {

	const calcInputsBoxNL = document.querySelectorAll('.input-calc')
	const calcInputsBoxList = Array.prototype.slice.call(calcInputsBoxNL);

	calcInputsBoxList.forEach(box => {
		const btnDown = box.querySelector('button.minus')
		const btnUp = box.querySelector('button.plus')
		const input = box.querySelector('input')
		btnDown.addEventListener('click', () => input.stepDown());
		btnUp.addEventListener('click', () => input.stepUp());
	})


}