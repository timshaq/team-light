export default function () {

const inputsNL = document.querySelectorAll('.sms-code input');

if(!inputsNL.length) return;

const inputsList = Array.prototype.slice.call(inputsNL);

inputsList.forEach((input,index) => {
  input.addEventListener('keyup', function(ev) {
    if(ev.which === 69) return input.value = '';
    let value = input.value;
    let len = value.length;
    if(ev.which === 8 && inputsList[index - 1]) {
    	return inputsList[index - 1].focus();
    }
    if (len === 1) {
         input.value = value.substr(0, 1);
         if(inputsList[index + 1]) inputsList[index + 1].focus();
      } else if(inputsList[index + 1] && ev.which != 8) {
      	input.value = value.substr(0, 1);
      	inputsList[index + 1].focus();
      	inputsList[index + 1].value = value.substr(1, 1);
      } else if (len > 1 && !inputsList[index + 1]) {
      	input.value = value.substr(0, 1);
      }
  })
})

}