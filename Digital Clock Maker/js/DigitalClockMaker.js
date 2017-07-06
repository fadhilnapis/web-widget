/*hantujavascript.blogspot.com*/

function customizeNowGadget(){
	//var gadget input
	var vcaseColorGadget = document.getElementById("caseColorGadget").value;
	var vclockShadowGadget = document.getElementById("clockShadowGadget").value;
	var vscreenBackground = document.getElementById("screenBackground").value;
	var vtextColorGadget = document.getElementById("textColorGadget").value;
	var vtextShadowGadget = document.getElementById("textShadowGadget").value;
	var vscreenSpaceGadget = document.getElementById("screenSpaceGadget").value;
	var vclockCurveGadget = document.getElementById("clockCurveGadget").value;
	var vclockAmPmAllow = document.getElementById("clockAmPmAllow").checked;
	var itextarea = document.getElementById("allDoneGoHere");//textarea space
	
	itextarea.value = "<\!\--Digital Clock Fadz Start--\>\n<style>";
								//change casing
	itextarea.value = itextarea.value + "\n#clocktable {";
	itextarea.value = itextarea.value + "\n\tbackground:"+vcaseColorGadget+";";
	itextarea.value = itextarea.value + "\n\tborder-radius:"+vclockCurveGadget+"px;";
	itextarea.value = itextarea.value + "\n\tborder-spacing:"+vscreenSpaceGadget+"px;";
	itextarea.value = itextarea.value + "\n\t-webkit-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);";
	itextarea.value = itextarea.value + "\n\t-moz-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);";
	itextarea.value = itextarea.value + "\n\t-khtml-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);";
	itextarea.value = itextarea.value + "\n\t-o-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);";
	itextarea.value = itextarea.value + "\n\tbox-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n}";
	
								//clock td
	itextarea.value = itextarea.value + "\n#clocktable td {";
	itextarea.value = itextarea.value + "\n\tbackground:"+vscreenBackground+";";
	itextarea.value = itextarea.value + "\n\tcolor:"+vtextColorGadget+";";
	itextarea.value = itextarea.value + "\n\ttext-shadow:1px 1px 1px "+vtextShadowGadget+";\n\tborder-radius:"+vclockCurveGadget+"px;";
								//nothing
	itextarea.value = itextarea.value + "\n\t-webkit-box-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\t-moz-box-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\tbox-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\tfont-size:26px;\n\tfont-family:monospace;\n\tfont-weight:bold;\n\tborder-radius:10px;\n\tpadding:5px;\n}\n";
	itextarea.value = itextarea.value + "</style><scri"+"pt>\nfunction clockDigitalfadz(meko, tiko, miko){\ndocument.getElementById(meko).width = tiko;document.getElementById(meko).style.display = miko;\n}</scr"+"ipt><sc"+"ript src=\"js/digital%20clock%20function.js\"></scr"+"ipt>";
	itextarea.value = itextarea.value + "\n<scr"+"ipt>";
	itextarea.value = itextarea.value + "\n\tvar trueTheAMPM = "+vclockAmPmAllow+";";
	itextarea.value = itextarea.value + "\n</scr"+"ipt>";
	itextarea.value = itextarea.value + "\n<center>\n<div style=\"padding:5px;\">\n<div onmouseover=\"clockDigitalfadz('showbannercdf', '72', 'inline');\" onmouseout=\"clockDigitalfadz('showbannercdf', '0', 'inline');\" style=\"display:table-cell;\">";
	itextarea.value = itextarea.value + "\n<table id=\"clocktable\">";
	itextarea.value = itextarea.value + "\n<tbody>\n<tr>";
	itextarea.value = itextarea.value + "\n\t<td class=\"clock\"></td>\n\t<td class=\"seconds\" style=\"font-size:10px;line-height:9px;\"></td>\n</tr>";
	itextarea.value = itextarea.value + "\n</tbody>\n</table>";
	itextarea.value = itextarea.value + "\n<div align=\"right\"><a href=\"http://hantujavascript.blogspot.com/\" target=\"_blank\"><img border=\"0\" height=\"18px\" id=\"showbannercdf\" src=\"http://3.bp.blogspot.com/-uYZ-8Scpmsw/TihGZAvsOqI/AAAAAAAAAPw/iTSVZSrQt5I/s400/HantuJavscript+Logos.png\" width=\"0px\" style=\"display:inline;\"/>\n</a></div></div>\n</div>\n</center>\n<\!\--Digital Clock Fadz END--\>";
	
	itextarea.style.display = "block";
}
function goPreviewGadget(){
	var vcaseColorGadget = document.getElementById("caseColorGadget").value;
	var vclockShadowGadget = document.getElementById("clockShadowGadget").value;
	var vscreenBackground = document.getElementById("screenBackground").value;
	var vtextColorGadget = document.getElementById("textColorGadget").value;
	var vtextShadowGadget = document.getElementById("textShadowGadget").value;
	var vscreenSpaceGadget = document.getElementById("screenSpaceGadget").value;
	var vclockCurveGadget = document.getElementById("clockCurveGadget").value;
	var vclockAmPmAllow = document.getElementById("clockAmPmAllow").checked;
	var igadgetStylePort = document.getElementById("gadgetStylePort");//Style Place
	
	trueTheAMPM = vclockAmPmAllow;
	
	igadgetStylePort.innerHTML = "";//
	igadgetStylePort.innerHTML = igadgetStylePort.innerHTML + "\n<style>\n#previewGadget #clocktable {\n\tbackground:"+vcaseColorGadget+";\n\tborder-radius:"+vclockCurveGadget+"px;\n\tborder-spacing: "+vscreenSpaceGadget+"px;\n\t-webkit-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n\t-moz-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n\t-khtml-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n\t-o-box-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n\tbox-shadow:0 1px 15px "+vclockShadowGadget+", inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);\n}\n#previewGadget #clocktable td {\n\tbackground:"+vscreenBackground+";\n\tcolor:"+vtextColorGadget+";\n\ttext-shadow:1px 1px 1px "+vtextShadowGadget+";\n}\n#previewGadget #clocktable td {\n\t-webkit-box-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\t-moz-box-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\tbox-shadow:0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25);\n\tfont-size:26px;\n\tfont-family:monospace;\n\tfont-weight:bold;\n\tborder-radius:"+vclockCurveGadget+"px;\n\tpadding:5px;\n}</style>";
}
function cancelAndResetGadget(){
	document.getElementById("caseColorGadget").value = "yellow";
	document.getElementById("clockShadowGadget").value = "#ff0";
	document.getElementById("screenBackground").value = "#006";
	document.getElementById("textColorGadget").value = "lime";
	document.getElementById("textShadowGadget").value = "blue";
	document.getElementById("screenSpaceGadget").value = "5";
	document.getElementById("clockCurveGadget").value = "10";
	document.getElementById("clockAmPmAllow").checked = true;
	document.getElementById("allDoneGoHere").value = "";
	document.getElementById("allDoneGoHere").style.display = "none";
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