function addOneMoreUrl(){
	urlElement = document.getElementById("urlElement");
	dsazx = urlElement.getElementsByTagName('select');
	if(urlElement.getElementsByTagName('input').length+1<=dsazx[0].options.length){
		lopsda = urlElement.getElementsByTagName('input').length;
		sdafgs = document.getElementById('videoption-'+(lopsda-1));
		var doska = document.createElement("div");
		var afds = document.createTextNode(lopsda+1);
		var dsal = document.createElement("input");
		var dasff = document.createElement("button");
		var fasxz = document.createElement("select");
		for(i=0;i<sdafgs.options.length;i++){
			if(sdafgs.selectedIndex!=i){
				var opt = document.createElement("option");
				opt.appendChild(document.createTextNode(sdafgs.options[i].value));
				fasxz.appendChild(opt);
			}
		}
		fasxz.id = 'videoption-'+(lopsda);
		dsal.type = "text";
		dsal.value = "http://";
		dsal.id = "urlfield-"+(lopsda);
		dsal.size = "14";
		dasff.appendChild(document.createTextNode("x"))
		dasff.setAttribute("onclick", "cancelThisVideoUrl("+lopsda+")");
		doska.style.background="transparent";
		doska.style.border="1px solid transparent";
		doska.style.borderRadius="5px";
		doska.id = (lopsda)+"-theurl";
		doska.appendChild(afds);
		doska.appendChild(dsal);
		doska.appendChild(fasxz);
		doska.appendChild(dasff);
		urlElement.appendChild(doska);
		if(lopsda>1){
			document.getElementById((lopsda-1)+"-theurl").getElementsByTagName("button")[0].parentNode.removeChild(document.getElementById((lopsda-1)+"-theurl").getElementsByTagName("button")[0]);
		}
		urlElement.getElementsByTagName('div')[lopsda-1].style.background="cyan";
		urlElement.getElementsByTagName('div')[lopsda-1].style.border="1px solid teal";
		urlElement.getElementsByTagName('div')[lopsda-1].style.borderRadius="5px";
		document.getElementById('videoption-'+(lopsda-1)).disabled = true;
		document.getElementById('urlfield-'+(lopsda-1)).disabled = true;
	}
}
function cancelThisVideoUrl(n){
	document.getElementById(n+"-theurl").parentNode.removeChild(document.getElementById(n+"-theurl"));
	if(n>1){
		var dasff = document.createElement("button");
		dasff.appendChild(document.createTextNode("x"))
		dasff.setAttribute("onclick", "cancelThisVideoUrl("+(n-1)+")");
		document.getElementById((n-1)+"-theurl").appendChild(dasff);
	}
	urlElement.getElementsByTagName('div')[n-1].style.background="transparent";
	urlElement.getElementsByTagName('div')[n-1].style.border="1px solid transparent";
	urlElement.getElementsByTagName('div')[n-1].style.borderRadius="5px";
	document.getElementById('videoption-'+(n-1)).disabled = false;
	document.getElementById('urlfield-'+(n-1)).disabled = false;
}
function resultingCode(){
	var urlElement = document.getElementById("urlElement");
	var playersizeh = document.getElementById("videosizeh");
	var playersizew = document.getElementById("videosizew");
	var videoloop = document.getElementById("videoloop");
	var videoautoplay = document.getElementById("videoautoplay");
	var videocontroller = document.getElementById("videocontroller");
	var videoerror = document.getElementById("videoerror");
	var optionsdasfd = '';
	if(videoloop.checked==true){
		optionsdasfd += videoloop.value;
	}
	if(videoautoplay.checked==true){
		optionsdasfd += ' '+videoautoplay.value;
	}
	if(videocontroller.checked==true){
		optionsdasfd += ' '+videocontroller.value;
	}
	var urlvideo,urlvideooption;
	document.getElementById('ResultCode').innerHTML='&lt;video ';
	document.getElementById('ResultCode').innerHTML+=optionsdasfd;
	if(videothumbnail.disabled==false){
		document.getElementById('ResultCode').innerHTML+=' poster="';
		document.getElementById('ResultCode').innerHTML+=videothumbnail.value+'"';
	}
	document.getElementById('ResultCode').innerHTML+=' height="';
	document.getElementById('ResultCode').innerHTML+=playersizeh.value;
	document.getElementById('ResultCode').innerHTML+='" width="';
	document.getElementById('ResultCode').innerHTML+=playersizew.value;
	document.getElementById('ResultCode').innerHTML+='"&gt;';
	for(l=0;l<urlElement.getElementsByTagName('div').length;l++){
		urlvideo = document.getElementById('urlfield-'+l);
		urlvideooption = document.getElementById('videoption-'+l);
		if(urlvideo.value!='http://'){
			document.getElementById('ResultCode').innerHTML+='<br/>&nbsp;&lt;source src="'+urlvideo.value;
			document.getElementById('ResultCode').innerHTML+='" type="';
			document.getElementById('ResultCode').innerHTML+=urlvideooption[urlvideooption.selectedIndex].value+'"/&gt;';
			document.getElementById('gopreview').disabled=false;
			document.getElementById('goseethecode').disabled= false;
		}else{
			document.getElementById('ResultCode').innerHTML+='<br/>&nbsp;&lt;source src="<span style="color:#f00">'+urlvideo.value;
			document.getElementById('ResultCode').innerHTML+='</span>" type="';
			document.getElementById('ResultCode').innerHTML+=urlvideooption[urlvideooption.selectedIndex].value+'"/&gt;';
			document.getElementById('gopreview').disabled=true;
			document.getElementById('goseethecode').disabled= true;
			document.getElementById('ResultCode').style.display='none';
		}
	}
	document.getElementById('ResultCode').innerHTML+='<br/>&nbsp;&lt;div&gt;<br/>&nbsp;&nbsp;';
	document.getElementById('ResultCode').innerHTML+=videoerror.value;
	document.getElementById('ResultCode').innerHTML+='<br/>&nbsp;&lt;/div&gt;<br/>&lt;/video&gt;';
}
function previewPlayer(){
	document.getElementById('playerPreview').innerHTML = document.getElementById('ResultCode').innerText;
}