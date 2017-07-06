var vw=200;
var vh=300;
var vp='20px';
var fistsd ="";
function toggleAdvance(a){
	var g = document.getElementById('mainsc');
	var f = document.getElementById('secnsc');
	if(a.getAttribute("status")=="s"){
		f.style.display="table";
		a.style.display="none";
	}else{
		f.style.display="none";
		fistsd.style.display="table-cell";
	}
	fistsd=a;
}
function generateCode(){
	
	var vfollowtype = document.getElementById("followtype");
	var vfollowtext = document.getElementById("followtext");
	var vnoposttext = document.getElementById("noposttext");
	var vshoutbuton = document.getElementById("shoutbuton");
	var vrsultperpg = document.getElementById("rsultperpg");
	var vloadingtext = document.getElementById("loadingtext");
	var vchtsound = document.getElementById("chtsound");
	var vreplybtn = document.getElementById("replybtn");
	var valowshadow = document.getElementById("alowshadow");
	var textas="";
	textas=textas+"<d"+"iv id=\"AllWidget\" style=\"display: inline-block;\"></di"+"v>\n<sc"+"ript src=\""+tagjs+"\"></scr"+"ipt>\n<scr"+"ipt>";
	textas=textas+"\nvar refes=\"\";\nvar refrsh=\"\";\nvar tlgt=\"null\";\nvar textcss = \"\";\nvar strttext = \"\";";
	textas=textas+"\nvar WidTwt={";
	textas=textas+"\n	//Basic";
	textas=textas+"\n	hashtag : \""+vfollowtype.options[vfollowtype.selectedIndex].text+vfollowtext.value+"\",";
	textas=textas+"\n	nopost : \""+vnoposttext.value+"\",";
	textas=textas+"\n	txtbtn : \""+vshoutbuton.value+"\",";
	textas=textas+"\n	rsltpp : "+vrsultperpg.value+",";
	textas=textas+"\n	csound : "+vchtsound.checked+",";
	textas=textas+"\n	creply : "+vreplybtn.checked+",";
	textas=textas+"\n	//size";
	textas=textas+"\n	WidWidth : "+vw+",";
	textas=textas+"\n	WidHeigh : "+vh+",";
	textas=textas+"\n	btomtag : \""+vp+"\",";
	textas=textas+"\n	//BACKGROUND";
	textas=textas+"\n	widback : \"#"+$('.cchoser:eq(0)').attr("value")+"\",";
	textas=textas+"\n	sectbck : \"#"+$('.cchoser:eq(1)').attr("value")+"\",";
	textas=textas+"\n	//BORDER";
	textas=textas+"\n	widbrdr : \"#"+$('.cchoser:eq(2)').attr("value")+"\",";
	textas=textas+"\n	twtbrdr : \"#"+$('.cchoser:eq(3)').attr("value")+"\",";
	textas=textas+"\n	//TEXT";
	textas=textas+"\n	deftext : \"#"+$('.cchoser:eq(4)').attr("value")+"\",//default";
	textas=textas+"\n	unusecl : \"#"+$('.cchoser:eq(5)').attr("value")+"\",//secondary";
	textas=textas+"\n	twtalnk : \"#"+$('.cchoser:eq(6)').attr("value")+"\",//link";
	textas=textas+"\n	btntxtc : \"#"+$('.cchoser:eq(7)').attr("value")+"\",//button";
	textas=textas+"\n	ncknmcl : \"#"+$('.cchoser:eq(8)').attr("value")+"\",//nickname";
	textas=textas+"\n	//OTHER";
	textas=textas+"\n	whlodng : \""+vloadingtext.value.replace(/"/g,"\\\"")+"\",";
	textas=textas+"\n	shdtrue : "+valowshadow.checked+",";
	textas=textas+"\n}";
	textas=textas+"\nsetTimeout(\"startThsWidget()\",1000);";
	textas=textas+"\n</scr"+"ipt>";
	document.getElementById("gepan").value=textas;
	document.getElementById("codeSpace").style.display="table-cell";
	document.getElementById("gepan").focus();
	document.getElementById("gepan").select();
}
function changeItWid(){
			  var vstyleWidTwit = document.getElementById("styleWidTwits");
			  var vfollowtype = document.getElementById("followtype");
			  var vfollowtext = document.getElementById("followtext");
			  var vshoutbuton = document.getElementById("shoutbuton");
			  var vidallchats = document.getElementById("vidallchats");
			  var vrsultperpg = document.getElementById("rsultperpg");
			  var vloadingtext = document.getElementById("loadingtext");
			  var vchtsound = document.getElementById("chtsound");
			  var vreplybtn = document.getElementById("replybtn");
			  var valowshadow = document.getElementById("alowshadow");
			  var sdi = $('.cchoser');
			  var tsds = "";
			  var sdadsf = "";
			  vidallchats.innerHTML="<cen"+"ter>"+vloadingtext.value+"</cen"+"ter>";
			  if(vchtsound.checked==false){
				$(".vidsoundmuter").css("display","none");
			  }else{
				$(".vidsoundmuter").css("display","block");
			  }
			  setTimeout(function(){
				  $(".vidshoutbtn").html(vshoutbuton.value);
				  for(var f=0;f<sdi.length;f++){
					tsds=tsds+$('.cchoser:eq('+f+')').attr("changesd")+"{\n"+($('.cchoser:eq('+f+')').attr("cassa"))+":";
					tsds=tsds+(($('.cchoser:eq('+f+')').attr("cassa").search("border")<0)?("#"+$('.cchoser:eq('+f+')').attr("value"))+";\n}\n":"1px solid "+("#"+$('.cchoser:eq('+f+')').attr("value"))+";\n}\n");
				  }
				  for(var t=0;t<vrsultperpg.value;t++){
					sdadsf=sdadsf+'<div class="vidnewtweet"><div class="vidtweetcontent"><a class="viduserlink" target="_blank" href="https://twitter.com/HantuJS"><img class="viduserthumb" src="http://a0.twimg.com/profile_images/2591139968/Hantu-Javascript_1__normal.png"><span class="vidfullname">@HantuJS</span></a><br><span class="vidtweettext"><a target="_blank" href="https://twitter.com/search?q=%'+vfollowtype.options[vfollowtype.selectedIndex].value+vfollowtext.value+'&amp;'+((vfollowtype.selectedIndex==0)?'src=hash':'')+'">'+vfollowtype.options[vfollowtype.selectedIndex].text+vfollowtext.value+'</a> This Tag Was Created..</span><br><span class="vidrplybtn">'+((vreplybtn.checked)?'Reply':'')+'</span><span class="vidchatdate">On Apr 20 at 1:06</span></div></div>';
				  }
				  if(valowshadow.checked){
					tsds=tsds+"\n.vidshoutbtn{\ntext-shadow: 1px 2px 3px #FFF;\nbox-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);\n}\n.vidshoutbtn:hover{\ntext-shadow: 1px 2px 4px #FFF;\nbox-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);\n}\n.vidshoutbtn:active{\ntext-shadow: 1px 1px 2px #FFF;  \nbox-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);\n}\n.vidsoundmuter{\n	box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);\n	-moz-box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);\n	-webkit-box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);\n}";
				  }
				  vstyleWidTwit.innerHTML=tsds;
				  vidallchats.innerHTML=sdadsf;
			  },200);
}
$(function(){
	$("#widwidth").slider({
		value: 16.3934426,
		slide: function(event, ui) {
			document.getElementById("vidstartfeed").style.width=150+(ui.value/100*305)+"px"; 
			document.getElementById("vidnumwidth").value = 150+(ui.value/100*305);
			vw=150+(ui.value/100*305);
		}
	});
});
$(function(){
	$("#widHeight").slider({
		value: 75,
		slide: function(event, ui) {
			document.getElementById("vidallchats").style.maxHeight=150+(ui.value/100*200)+"px"; 
			document.getElementById("vidnumheight").value = 150+(ui.value/100*200);
			vh=150+(ui.value/100*200);
		}
	});
});
$(function(){
	$("#bottomHeight").slider({
		value: 14.2857143,
		slide: function(event, ui) {
			document.getElementById("vidstartfeed").style.paddingBottom=15+(ui.value/100*35)+"px"; 
			document.getElementById("vidnumbtmhight").value = 15+(ui.value/100*35);
			vp=15+(ui.value/100*35)+'px';
		}
	});
});
function setSliderPoseNyepun(e,x,m,v,z){
	document.getElementById(x).getElementsByClassName('ui-slider-handle')[0].style.left=(e.value-m)/(v-m)*100+"%";
	switch(z){
	case "width":document.getElementById('vidstartfeed').style.width=e.value;
	break;
	case "height":document.getElementById("vidallchats").style.height=e.value; 
	break;
	case "padding":document.getElementById("vidstartfeed").style.paddingBottom=e.value;
	break;
	}//done here
}