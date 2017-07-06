function customizeTheRadiosWidget(){
	//start
	var vradioBackgroundImage = document.getElementById("radioBackgroundImage").value;
	var vradioBackgroundColor = document.getElementById("radioBackgroundColor").value;
	var vradioWidth = document.getElementById("radioWidth").value;
	var vradioHeight = document.getElementById("radioHeight").value;
	var vrdioBorderCurve = document.getElementById("rdioBorderCurve").value;
	var vallowSinarRadio = document.getElementById("allowSinarRadio").checked;
	var vallowEraRadio = document.getElementById("allowEraRadio").checked;
	var vallowHotRadio = document.getElementById("allowHotRadio").checked;
	var vallowHitzRadio = document.getElementById("allowHitzRadio").checked;
	var vallowXRadio = document.getElementById("allowXRadio").checked;
	var vallowThrGegarRadio = document.getElementById("allowThrGegarRadio").checked;
	var vallowliteRadio = document.getElementById("allowliteRadio").checked;
	var vallowMyRadio = document.getElementById("allowMyRadio").checked;
	var vallowGangsterRadio = document.getElementById("allowGangsterRadio").checked;
	var vallowAutoPlay = document.getElementById("allowAutoPlay").checked;
	var vradioChooserMaker = document.getElementById("radioChooserMaker").selectedIndex;
	var itextarea = document.getElementById("allRadioOptioanOutput");
	
	//optional
	var allowautoplayered = "";
	var optionMakerradio = "";
	var arrayforoption = new Array("", "", "", "", "", "", "", "", "");
	
	arrayforoption[vradioChooserMaker] = " selected";
	if(vallowSinarRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[0]+">Sinar.fm</option>";
	}
	if(vallowEraRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[1]+">Era.fm</option>";
	}
	if(vallowHotRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[2]+">Hot.fm</option>";
	}
	if(vallowHitzRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[3]+">Hitz.fm</option>";
	}
	if(vallowXRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[4]+">X.fm</option>";
	}
	if(vallowThrGegarRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[5]+">ThrGegar</option>";
	}
	if(vallowliteRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[6]+">lite.fm</option>";
	}
	if(vallowMyRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[7]+">My.fm</option>";
	}
	if(vallowGangsterRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[8]+">Gangster.fm</option>";
	}
	if(vallowAutoPlay==true)allowautoplayered = "goChange(document.getElementById('radioChooser'))";
	
	//start option
	itextarea.value = "";
	itextarea.value = itextarea.value + "<scr"+"ipt>";
	itextarea.value = itextarea.value + "\nvar embedWidthFadz = "+vradioWidth+";";
	itextarea.value = itextarea.value + "\nvar embedHeightFadz = "+vradioHeight+";";
	itextarea.value = itextarea.value + "\nvar radiosinar = "+vallowSinarRadio+";";
	itextarea.value = itextarea.value + "\nvar radioera = "+vallowEraRadio+";";
	itextarea.value = itextarea.value + "\nvar radiohot = "+vallowHotRadio+";";
	itextarea.value = itextarea.value + "\nvar radiohitz = "+vallowHitzRadio+";";
	itextarea.value = itextarea.value + "\nvar radiox = "+vallowXRadio+";";
	itextarea.value = itextarea.value + "\nvar radiothrgegar = "+vallowThrGegarRadio+";";
	itextarea.value = itextarea.value + "\nvar radiolite = "+vallowliteRadio+";";
	itextarea.value = itextarea.value + "\nvar radiomy = "+vallowMyRadio+";";
	itextarea.value = itextarea.value + "\nvar radiogangster = "+vallowGangsterRadio+";";
	itextarea.value = itextarea.value + "\n</scr"+"ipt>";
	itextarea.value = itextarea.value + "\n<scr"+"ipt>\nfunction radiosChooserFadz(meko, tiko, miko){\ndocument.getElementById(meko).width = tiko;document.getElementById(meko).style.display = miko;\n}</scr"+"ipt>\n"
	itextarea.value = itextarea.value + "<scr"+"ipt src=\"js/Radio Chooser function.js\"></scr"+"ipt>\n<style>";
	itextarea.value = itextarea.value + "#chooserradioid td {";
	itextarea.value = itextarea.value + "	text-align:center;";
	itextarea.value = itextarea.value + "}";
	itextarea.value = itextarea.value + "#chooserradioid {";
	itextarea.value = itextarea.value + "background-image:url("+vradioBackgroundImage+");";
	itextarea.value = itextarea.value + "background-color:"+vradioBackgroundColor+";box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;-moz-box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;-webkit-box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;";
	itextarea.value = itextarea.value + "border-radius: "+vrdioBorderCurve+"px;}</style>";
	itextarea.value = itextarea.value + "<center>";
	itextarea.value = itextarea.value + "<div onmouseover=\"radiosChooserFadz('showbannerrcf', '72', 'inline');\" onmouseout=\"radiosChooserFadz('showbannerrcf', '0', 'inline');\" style=\"display:table-cell;\">";
	itextarea.value = itextarea.value + "<table id=\"chooserradioid\"><tbody><tr><td><select id=\"radioChooser\">";
	//start selected
	itextarea.value = itextarea.value + ""+optionMakerradio;
	
	itextarea.value = itextarea.value + "<select><input type=\"button\" onclick=\"goChange(document.getElementById('radioChooser'))\" value=\"Go\"><a href=\"http://hantujavascript.com/\" style=\"font-size:10px;color:#555;text-decoration:none;\" target=\"_blank\">[?]</a></td>";
	itextarea.value = itextarea.value + "</tr><tr>";
	itextarea.value = itextarea.value + "<td><div id=\"radioPlace\"><img id=\"startPictureRadios\" src=\"http://cdn1.iconfinder.com/data/icons/REALVISTA/multimedia/png/128/radio.png\" onclick=\"goChange(document.getElementById('radioChooser'))\"/></div></td></tr></tbody></table><scr"+"ipt>treeStartChange();"+allowautoplayered+"</scr"+"ipt><div align=\"right\" style=\"padding-right:16px;\"><a href=\"http://hantujavascript.com/#shoutbox\" title=\"Need help click here\"><img border=\"0\" height=\"18px\" id=\"showbannerrcf\" src=\"http://3.bp.blogspot.com/-uYZ-8Scpmsw/TihGZAvsOqI/AAAAAAAAAPw/iTSVZSrQt5I/s400/HantuJavscr"+"ipt+Logos.png\" width=\"0px\" style=\"display:inline;\"/></a></div></div></center>";
	
	itextarea.style.display = "block";
}
function previewTheRadioGadget(){
	var vradioBackgroundImage = document.getElementById("radioBackgroundImage").value;
	var vradioBackgroundColor = document.getElementById("radioBackgroundColor").value;
	var vradioWidth = document.getElementById("radioWidth").value;
	var vradioHeight = document.getElementById("radioHeight").value;
	var vrdioBorderCurve = document.getElementById("rdioBorderCurve").value;
	var vallowSinarRadio = document.getElementById("allowSinarRadio").checked;
	var vallowEraRadio = document.getElementById("allowEraRadio").checked;
	var vallowHotRadio = document.getElementById("allowHotRadio").checked;
	var vallowHitzRadio = document.getElementById("allowHitzRadio").checked;
	var vallowXRadio = document.getElementById("allowXRadio").checked;
	var vallowThrGegarRadio = document.getElementById("allowThrGegarRadio").checked;
	var vallowliteRadio = document.getElementById("allowliteRadio").checked;
	var vallowMyRadio = document.getElementById("allowMyRadio").checked;
	var vallowGangsterRadio = document.getElementById("allowGangsterRadio").checked;
	var vallowAutoPlay = document.getElementById("allowAutoPlay").checked;
	var vradioChooserMaker = document.getElementById("radioChooserMaker").selectedIndex;
	var ihtmlpreview = document.getElementById("previewThisRadioGadget");
	var istylepreview = document.getElementById("previewStyleRadioGadget");
	
	//optional
	var allowautoplayered = "";
	var optionMakerradio = "";
	var arrayforoption = new Array("", "", "", "", "", "", "", "", "");
	
	arrayforoption[vradioChooserMaker] = " selected";
	if(vallowSinarRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[0]+">Sinar.fm</option>";
		radiosinar = true;
	}
	if(vallowEraRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[1]+">Era.fm</option>";
		radioera = true;
	}
	if(vallowHotRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[2]+">Hot.fm</option>";
		radiohot = true;
	}
	if(vallowHitzRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[3]+">Hitz.fm</option>";
		radiohitz = true;
	}
	if(vallowXRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[4]+">X.fm</option>";
		radiox = true;
	}
	if(vallowThrGegarRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[5]+">ThrGegar</option>";
		radiothrgegar = true;
	}
	if(vallowliteRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[6]+">lite.fm</option>";
		radiolite = true;
	}
	if(vallowMyRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[7]+">My.fm</option>";
		radiomy = true;
	}
	if(vallowGangsterRadio==true){
		optionMakerradio = optionMakerradio + "<option"+arrayforoption[8]+">Gangster.fm</option>";
		radiogangster = true;
	}
	if(vallowAutoPlay==true)allowautoplayered = "goChange(document.getElementById('radioChooser'))";
	istylepreview.innerHTML = "<style>#chooserradioid td {text-align:center;}#chooserradioid {background-image:url("+vradioBackgroundImage+");background-color:"+vradioBackgroundColor+";	box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;	-moz-box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;	-webkit-box-shadow: rgba(255, 255, 255, 0.292969) 0px 1px inset, rgba(255, 255, 255, 0.199219) 0px 10px inset, rgba(255, 255, 255, 0.246094) 0px 10px 20px inset, rgba(0, 0, 0, 0.292969) 0px -15px 30px inset;	border-radius: "+vrdioBorderCurve+"px;}</style>";
	ihtmlpreview.innerHTML = "<center><table id=\"chooserradioid\"><tbody><tr><td><select id=\"radioChooser\">"+optionMakerradio+"<select><input type=\"button\" onclick=\"goChange(document.getElementById('radioChooser'))\" value=\"Go\"></td></tr><tr><td><div id=\"radioPlace\"><img id=\"startPictureRadios\" src=\"http://cdn1.iconfinder.com/data/icons/REALVISTA/multimedia/png/128/radio.png\" onclick=\"goChange(document.getElementById('radioChooser'))\" style=\"background:transparent;\" /></div></td></tr></tbody></table></center>";
	
	embedWidthFadz = parseFloat(vradioWidth);
	embedHeightFadz = parseFloat(vradioHeight);
	treeStartChange();
	if(vallowAutoPlay==true){
	goChange(document.getElementById('radioChooser'));
	}
	
}
function optionChangeSelectedRadio(){
	var vallowSinarRadio = document.getElementById("allowSinarRadio").checked;
	var vallowEraRadio = document.getElementById("allowEraRadio").checked;
	var vallowHotRadio = document.getElementById("allowHotRadio").checked;
	var vallowHitzRadio = document.getElementById("allowHitzRadio").checked;
	var vallowXRadio = document.getElementById("allowXRadio").checked;
	var vallowThrGegarRadio = document.getElementById("allowThrGegarRadio").checked;
	var vallowliteRadio = document.getElementById("allowliteRadio").checked;
	var vallowMyRadio = document.getElementById("allowMyRadio").checked;
	var vallowGangsterRadio = document.getElementById("allowGangsterRadio").checked;
	var vradioChooserMaker = document.getElementById("radioChooserMaker");
	var optionMakerradio = "";
	if(vallowSinarRadio==true){
		optionMakerradio = optionMakerradio + "<option>Sinar.fm</option>";
	}
	if(vallowEraRadio==true){
		optionMakerradio = optionMakerradio + "<option>Era.fm</option>";
	}
	if(vallowHotRadio==true){
		optionMakerradio = optionMakerradio + "<option>Hot.fm</option>";
	}
	if(vallowHitzRadio==true){
		optionMakerradio = optionMakerradio + "<option>Hitz.fm</option>";
	}
	if(vallowXRadio==true){
		optionMakerradio = optionMakerradio + "<option>X.fm</option>";
	}
	if(vallowThrGegarRadio==true){
		optionMakerradio = optionMakerradio + "<option>ThrGegar</option>";
	}
	if(vallowliteRadio==true){
		optionMakerradio = optionMakerradio + "<option>lite.fm</option>";
	}
	if(vallowMyRadio==true){
		optionMakerradio = optionMakerradio + "<option>My.fm</option>";
	}
	if(vallowGangsterRadio==true){
		optionMakerradio = optionMakerradio + "<option>Gangster.fm</option>";
	}
	vradioChooserMaker.innerHTML = optionMakerradio;
}
function resetMyRadioOptionNow(){
	var itextarea = document.getElementById("allRadioOptioanOutput");
	document.getElementById("radioBackgroundImage").value = "http://24.media.tumblr.com/tumblr_l51zs1BHaJ1qcs5eyo1_500.png";
	document.getElementById("radioBackgroundColor").value = "#A52A2A";
	document.getElementById("radioWidth").value = 200;
	document.getElementById("radioHeight").value = 100;
	document.getElementById("rdioBorderCurve").value = 20;
	document.getElementById("allowSinarRadio").checked = true;
	document.getElementById("allowEraRadio").checked = true;
	document.getElementById("allowHotRadio").checked = true;
	document.getElementById("allowHitzRadio").checked = true;
	document.getElementById("allowXRadio").checked = true;
	document.getElementById("allowThrGegarRadio").checked = true;
	document.getElementById("allowliteRadio").checked = true;
	document.getElementById("allowMyRadio").checked = true;
	document.getElementById("allowGangsterRadio").checked = true;
	document.getElementById("allowAutoPlay").checked = false;
	document.getElementById("radioChooserMaker").selectedIndex = 0;
	itextarea.style.display = "none";
}
function codeHexOnly(evt) {
		evt = (evt) ? evt : window.event
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode >= 71 && charCode <= 90) {
			status = "code hex only..."
			return false
		}
		status = ""
		return true
}
function numberOnly(evt) {
		evt = (evt) ? evt : window.event
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (evt.shiftKey && charCode >= 48 && charCode <= 57 || charCode > 32 && charCode < 48 || charCode > 57 && charCode < 91 || charCode > 105) {
			status = "number only only..."
			return false
		}
		status = ""
		return true
}
function noSpaceHere(evt) {
		evt = (evt) ? evt : window.event
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode == 32){
			status = "no space..."
			return false
		}
		status = ""
		return true
}