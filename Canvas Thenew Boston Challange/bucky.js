function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.beginPath();
	canvas.moveTo(5,150);
	canvas.lineTo(95,127);
	
	canvas.lineTo(47,47);
	canvas.lineTo(127,97);
	
	canvas.lineTo(150,5);
	canvas.lineTo(173,97);
	
	canvas.lineTo(253,47);
	canvas.lineTo(205,127);
	
	canvas.lineTo(295,150);
	canvas.lineTo(205,173);
	
	canvas.lineTo(253,253);
	canvas.lineTo(173,204);
	
	canvas.lineTo(150,295);
	canvas.lineTo(127,203);
	
	canvas.lineTo(47,253);
	canvas.lineTo(95,173);
	canvas.fill();
	canvas.closePath();
	canvas.stroke();
}
window.addEventListener("load", doFirst, false);