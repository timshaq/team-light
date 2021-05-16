export default function () {

const linesNL = document.querySelectorAll('.drag-to-scroll')
if(!linesNL.length) return;

const lines = Array.prototype.slice.call(linesNL);

lines.forEach(line => {


	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function(e) {
	    pos = {
	        // The current scroll 
	        left: line.scrollLeft,
	        top: line.scrollTop,
	        // Get the current mouse position
	        x: e.clientX,
	        y: e.clientY,
	    };

	    line.addEventListener('mousemove', mouseMoveHandler);
	    line.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function(e) {
	    // How far the mouse has been moved
	    const dx = e.clientX - pos.x;
	    const dy = e.clientY - pos.y;

	    // Scroll the element
	    line.scrollTop = pos.top - dy;
	    line.scrollLeft = pos.left - dx;
	};

	const mouseUpHandler = function() {
		line.removeEventListener('mousemove', mouseMoveHandler);
		line.removeEventListener('mouseup', mouseUpHandler);
	    line.style.removeProperty('user-linect');
	};

	line.addEventListener('mousedown', mouseDownHandler);

})

}