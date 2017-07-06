function makeCustomizeNow(){
	//Start
	var defaultText, defaultTextBold, defaultTextItalic, buttonText, buttonTextType, fieldSize, fieldBackground, fieldRadius, fieldBorderColor, fieldBorderSize, AllOutput;
	
	defaultText = document.getElementById("defaultText").value;
	buttonText = document.getElementById("buttonText").value;
	fieldSize = document.getElementById("fieldSize").value;
	fieldBackground = document.getElementById("fieldBackground").value;
	fieldRadius = document.getElementById("fieldRadius").value;
	fieldBorderColor = document.getElementById("fieldBorderColor").value;
	fieldBorderSize = document.getElementById("fieldBorderSize").value;
	searchBoxHeight = document.getElementById("searchBoxHeight").value;
	defaultTextBold = document.getElementById("defaultTextBold").checked;
	defaultTextItalic = document.getElementById("defaultTextItalic").checked;
	buttonTextType = document.getElementById("buttonTextType").checked;
	formtext = document.getElementById("AllOutput");
	fieldboxstyle="";
	thebuttontype="";
	if(buttonTextType==true){
		thebuttontype="type=\"Submit\" value=\""+ buttonText +"\" style=\"margin:0px;height:"+ (parseFloat(searchBoxHeight)+2) +"px;\"";
	}else{
		if(buttonText.search("http")==0||buttonText.search("data:")==0){
			thebuttontype="type=\"image\" src=\""+ buttonText +"\" style=\"margin:0px;height:"+ (parseFloat(searchBoxHeight)+1) +"px;vertical-align:top;\"";
		}else{
			alert("alert!!.no http or data found at button Image")
			return false;
		}
	}
	if(defaultTextBold==true){
		fieldboxstyle +="font-weight:bold;";
	}else{
		fieldboxstyle +="";
	}
	if(defaultTextItalic==true){
		fieldboxstyle +="font-style:italic;";
	}else{
		fieldboxstyle +="";
	}
	fieldboxstyle+="height:"+ searchBoxHeight +"px;";
	fieldboxstyle+="background:"+ fieldBackground +";";
	fieldboxstyle+="border:"+ fieldBorderSize +"px inset #"+ fieldBorderColor +";";
	fieldboxstyle+="border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-o-border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-moz-border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-webkit-border-radius:"+ fieldRadius +"px;";
	formtext.value = "";
	formtext.value = formtext.value +"<div id=\"search\">\n";
	formtext.value = formtext.value +"<form action=\"/search\" id=\"searchform\" method=\"get\">\n";
	formtext.value = formtext.value +"<input id=\"searchfield\" name=\"q\" onblur=\"if (this.value == '') {this.value = '"+ defaultText +"';}\" onfocus=\"if (this.value == '"+ defaultText +"') {this.value = '';}\" type=\"text\" value=\""+ defaultText +"\" size=\""+ fieldSize +"\" style=\"color:#888;padding:0px 5px;"+ fieldboxstyle +"\"></input>\n";
	formtext.value = formtext.value +"<input "+ thebuttontype +" onclick=\"if(document.getElementById('searchfield').value=='"+ defaultText +"'||document.getElementById('searchfield').value==''){return false;}\"></input>\n";
	formtext.value = formtext.value +"</form>\n";
	formtext.value = formtext.value +"</div>";
	formtext.style.display="block";
	document.getElementById("widgetbutton").disabled=false;
	document.getElementById("widgetcontent").value = formtext.value;
	document.getElementById("widgettitle").value = defaultText;
	previewTheResult();
}
function previewTheResult(){
	var defaultText, defaultTextBold, defaultTextItalic, buttonText, buttonTextType, fieldSize, fieldBackground, fieldRadius, fieldBorderColor, fieldBorderSize, AllOutput;
	
	defaultText = document.getElementById("defaultText").value;
	buttonText = document.getElementById("buttonText").value;
	fieldSize = document.getElementById("fieldSize").value;
	fieldBackground = document.getElementById("fieldBackground").value;
	fieldRadius = document.getElementById("fieldRadius").value;
	fieldBorderColor = document.getElementById("fieldBorderColor").value;
	fieldBorderSize = document.getElementById("fieldBorderSize").value;
	searchBoxHeight = document.getElementById("searchBoxHeight").value;
	defaultTextBold = document.getElementById("defaultTextBold").checked;
	defaultTextItalic = document.getElementById("defaultTextItalic").checked;
	buttonTextType = document.getElementById("buttonTextType").checked;
	formtext = document.getElementById("thepreviewdiv");
	fieldboxstyle="";
	thebuttontype="";
	if(buttonTextType==true){
		thebuttontype="type=\"Submit\" value=\""+ buttonText +"\" style=\"margin:0px;height:"+ (parseFloat(searchBoxHeight)+2) +"px;\"";
	}else{
		if(buttonText.search("http")==0||buttonText.search("data:")==0){
			thebuttontype="type=\"image\" src=\""+ buttonText +"\" style=\"margin:0px;height:"+ (parseFloat(searchBoxHeight)+1) +"px;vertical-align:top;\"";
		}else{
			alert("alert!!.no http or data found at button Image")
			return false;
		}
	}
	if(defaultTextBold==true){
		fieldboxstyle +="font-weight:bold;";
	}else{
		fieldboxstyle +="font-weight:normal;";
	}
	if(defaultTextItalic==true){
		fieldboxstyle +="font-style:italic;";
	}else{
		fieldboxstyle +="font-style:normal;";
	}
	fieldboxstyle+="height:"+ searchBoxHeight +"px;";
	fieldboxstyle+="background:"+ fieldBackground +";";
	fieldboxstyle+="border:"+ fieldBorderSize +"px inset #"+ fieldBorderColor +";";
	fieldboxstyle+="border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-o-border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-moz-border-radius:"+ fieldRadius +"px;";
	fieldboxstyle+="-webkit-border-radius:"+ fieldRadius +"px;";
	formtext.innerHTML = "";
	formtext.innerHTML = formtext.innerHTML +"<div id=\"search\">\n<input id=\"s\" name=\"q\" onblur=\"if (this.value == '') {this.value = '"+ defaultText +"';}\" onfocus=\"if (this.value == '"+ defaultText +"') {this.value = '';}\" type=\"text\" value=\""+ defaultText +"\" size=\""+ fieldSize +"\" style=\"color:#888;padding:0px 5px;"+ fieldboxstyle +"\"></input>\n<input "+ thebuttontype +"></input><br>\n</div><br>";
}