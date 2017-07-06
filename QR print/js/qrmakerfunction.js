function generateQR(){
	var f = document.getElementById("resultImg");
	var F = f.getElementsByTagName("img");
	var T = document.getElementById("textQR");
	var re = document.getElementById("gfohsds");
	re.disabled=true;
	re.value='loading..';
	var dsmg = new Image();
	dsmg.src ="http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|0&chl="+encodeURIComponent(T.value);
	dsmg.onload = function(){
		for(var i=0;i<F.length;i++){
			F[i].src= "http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|0&chl="+encodeURIComponent(T.value);
		}
		re.disabled=false;
		re.value='Print';
	}
}
function printResult(){
	var f = document.getElementById("resultImg");
	var F = f.getElementsByTagName("img");
	var win = window.open();
	var jaja="";
	jaja = jaja + "<table>";
	jaja = jaja + "	<tbody>";
	var tsd=50;
	for(var ts=1;ts<=5;ts++){
	tsd=100+(50-(10*ts));
	jaja = jaja + "		<tr>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "			<td>";
	jaja = jaja + "				<img src=\""+F[0].src+"\" width=\""+tsd+"\">";
	jaja = jaja + "			</td>";
	jaja = jaja + "		</tr>";
	}
	jaja = jaja + "	</tbody>";
	jaja = jaja + "</table>";
    self.focus();
	
    win.document.open();
    win.document.write('<ht'+'ml><he'+'ad><st'+'yle type="text/css">\ntd {text-align:center;}@page {size: landscape;margin: 1.5cm;}@media print {body {filter: Gray();filter: url(\'#grayscale\');-webkit-filter: grayscale(100%);filter: grayscale(100%);}}</st'+'yle></he'+'ad><bo'+'dy>');
    win.document.write(jaja);
    win.document.write('</bo'+'dy></ht'+'ml>');
	win.focus();
    win.print();
}