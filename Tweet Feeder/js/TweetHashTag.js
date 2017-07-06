var playalert=true;
function doCallTweet(a){
	var texts="";
	var istartfeed = document.getElementById("allchats");
	var twit=a.results;
	var st=twit.length;
	if(st>0){
		if(tlgt==twit[twit.length-1].created_at||tlgt=='null'){
			
		}else{
			if(playalert){
				document.getElementById("callbacksound").play();
				document.getElementById("callbacksound").volume=0.3;
			}
		}
		tlgt=twit[twit.length-1].created_at;
		if(twit.length-5>0){
			st=5;
		}
		for(var c=0;c<st;c++){
			var uthmb = twit[c].profile_image_url;
			var fname = twit[c].from_user_name;
			var uname = twit[c].from_user;
			var cdate = twit[c].created_at;
			var ttext = twit[c].text+" ";
			var rpybtns = (WidTwt.creply==true)?"<span class='rplybtn' onclick=\"open2Tweet('"+WidTwt.hashtag+" @"+uname+"')\">Reply</span>":"<span class='rplybtn'></span>";
			var gsd = "";
			var sa= new Date(cdate);
			cdate=cdate.replace(/\w{3}, (\d{2}) (\w{3}) \d{4} \d{2}\x3a(\d{2})\x3a\d{2}\s\W\d{0,}/g,"On $2 $1 at "+sa.getHours()+":$3");
			ttext=ttext.replace(/(\x23)([-A-Z0-9_]*[-A-Z0-9_])([\s\/:;?.~!$%^&'"*])/gi, "<a target='_blank' href='https://twitter.com/search?q=%23$2&src=hash'>$1$2</a>$3").replace(/(@)([-A-Z0-9_]*[-A-Z0-9_])([\s\/:;?.~!$%'^&"*])/gi, '<a target="_blank" href="https://twitter.com/$2">$1$2</a>$3').replace(/(http|ftp|file):\/\/([-A-Z0-9_]*[-A-Z0-9_]).([-A-Z0-9_\/:;?.~!$%^&]*[-A-Z0-9_\/:;?.~!$%^&*])/gi, '<a target="_blank" href="$1://$2.$3">$1://$2.$3</a>');
			texts=texts+"<div class='newtweet'><div class='tweetcontent'>";
			texts=texts+"<a class='userlink' target='_blank' href='https://twitter.com/"+uname+"'>";
			texts=texts+"<img class='userthumb' src='"+uthmb+"'/>";
			texts=texts+"<span class='fullname'>@"+uname+"</span>";
			texts=texts+"</a><br>";
			texts=texts+"<span class='tweettext'>"+ttext+"</span><br>";
			texts=texts+rpybtns;
			texts=texts+"<span class='chatdate'>"+cdate+"</span>";
			texts=texts+"</div></div>";
		}
		refrsh=a.refresh_url;
	}else{
	texts=WidTwt.nopost;
	}
	istartfeed.innerHTML=texts;
}
function reCallTweet(){
	var scrarea=document.getElementById("tweetfed");
	var screate=document.createElement("script");
	var scsound=document.getElementById("soundmuter");
	if(WidTwt.csound==false){
		scsound.style.display="none";
		playalert=false;
	}
	screate.src="http://search.twitter.com/search.json?q="+encodeURIComponent(WidTwt.hashtag)+"&rpp="+WidTwt.rsltpp+"&include_rts=true&count=4&callback=doCallTweet";
	scrarea.innerHTML="";
	scrarea.appendChild(screate);
}
function soundmute(x){
	if(x.style.background=='url(http://png-5.findicons.com/files/icons/770/token_dark/16/sound.png)'){
		x.style.background='url(http://png-5.findicons.com/files/icons/770/token_dark/16/mute.png)';
		playalert=false;
	}
	else if(x.style.background=='url(http://png-5.findicons.com/files/icons/770/token_dark/16/mute.png)'){
		x.style.background='url(http://png-5.findicons.com/files/icons/770/token_dark/16/sound.png)';
		playalert=true;
	}
	else{
		x.style.background='url(http://png-5.findicons.com/files/icons/770/token_dark/16/sound.png)';
		playalert=true;
	}
}
function open2Tweet(s){
	window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(s)+"%20&tw_p=tweetbutton","",'width=400,height=300,top=86,left=211,location=1,status=1');
}
function startThsWidget(){
	textcss=textcss+"#startfeed {\n	border: 1px solid #ccc;\n	border-radius: 14px;\n	display: inline-block;\n	text-align: left;\n	font-size: 16px;\n	font-weight: normal;\n}\n.newtweet{\n	position: relative;\n	padding: 6px 6px;\n	font-family: Arial,sans-serif;\n	font-size: 11px;\n	line-height: 15px;\n	cursor:pointer;\n	-webkit-transition-duration: 0.2s;\n	-moz-transition-duration: 0.2s;\n	transition-duration: 0.2s;\n}\n.newtweet:hover{\n	background-color: rgba(0,0,0,0.05);\n}\n.allchatsect {\n	overflow: auto;\n}\n.tweetcontent{\n	margin-left: 43px;\n}\n.userlink{\n	text-decoration: none;\n	-webkit-transition-duration: 0.2s;\n	-moz-transition-duration: 0.2s;\n	transition-duration: 0.2s;\n}\n.userthumb{\n	position: absolute;\n	-webkit-border-radius: 5px;\n	-moz-border-radius: 5px;\n	border-radius: 5px;\n	border:none;\n	padding:0px;\n	margin:0px;\n}\n.userlink:hover .fullname{\n	text-decoration: none;\n}\n.fullname{\n	font-weight: bold;\n}\n.tweettext{\n	color:#000;\n	white-space: pre-wrap;\n	word-wrap: break-word;\n	cursor:default;\n}\n.tweettext a{\n	text-decoration: none;\n	-webkit-transition-duration: 0.2s;\n	-moz-transition-duration: 0.2s;\n	transition-duration: 0.2s;\n}\n.tweettext a:hover{\n	text-decoration: underline;\n}\n.chatdate{\n	float:both;\n	text-align:right;\n	display: inline-block;\n	width: 75%;\n}\n.rplybtn{\n	font-size: 9px;\n	text-align: left;\n	display: inline-block;\n	width: 25%;\n}\n.rplybtn:hover {\n	text-decoration: underline;\n}\n.shoutbtn {\n    padding: 5px 0px 0px 0px;\n	cursor:pointer;\n    height: 30px;\n    margin: 0px -1px;\n    text-align: center;\n    border-radius: 14px 14px 0px 0px;\n    -moz-border-radius: 14px 14px 0px 0px;\n    -webkit-border-radius: 14px 14px 0px 0px;\n	-webkit-transition-duration: 0.2s;\n	-moz-transition-duration: 0.2s;\n	transition-duration: 0.2s;\n}\n#soundmuter{\n	height:16px;\n	width:14px;\n	cursor:pointer;\n}\n.soundmuter{\n	margin: 0px -1px;\n	padding: 1px 7px;\n}";
	textcss=textcss+"\n.tweetcontent{\nmargin-left: 43px;\n}\n.userthumb{top:7px;\nleft: 6px;\nwidth:35px;\nheight:35px;\n}\n#startfeed{\nwidth:"+WidTwt.WidWidth+"px;background: "+WidTwt.widback+";\n}\n.shoutbtn{\ncolor: "+WidTwt.btntxtc+";";
	if(WidTwt.shdtrue==true){
		textcss=textcss+"\ntext-shadow: 1px 2px 3px #FFF;\nbox-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 10px rgba(255, 255, 255, 0.35), inset 0px -9px 20px rgba(0, 0, 0, 0.35);\n}\n.shoutbtn:hover {\ntext-shadow: 1px 2px 4px #FFF;\nbox-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 12px rgba(255, 255, 255, 0.35), inset 0px -11px 22px rgba(0, 0, 0, 0.35);\n}\n.shoutbtn:active {\ntext-shadow: 1px 1px 2px #FFF;  \nbox-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);  \n-moz-box-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);  \n-webkit-box-shadow: inset 0px 8px rgba(255, 255, 255, 0.35), inset 0px -10px 18px rgba(0, 0, 0, 0.35);\n}.soundmuter{box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);-moz-box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);-webkit-box-shadow: inset 0px 5px 13px rgba(0, 0, 0, 0.36);}";
	}else{
		textcss=textcss+"\n}";
	}
	textcss=textcss+"\n#SupportFadz{display: none;\n  -webkit-transition-duration: 0.2s;\n	-moz-transition-duration: 0.2s;\n	transition-duration: 0.2s;\n}\n#startfeed:hover #SupportFadz{display: block;}#startfeed {\npadding-bottom: "+WidTwt.btomtag+";\nborder: 1px solid "+WidTwt.widbrdr+";\n}\n.tweettext{\ncolor:"+WidTwt.deftext+";}\n.allchatsect{\nmax-height:"+WidTwt.WidHeigh+"px;\nbackground: "+WidTwt.sectbck+";\n}\n.soundmuter{\n    color: "+WidTwt.btntxtc+";\n}\n.tweettext a{\n	color: "+WidTwt.twtalnk+";\n}\n.fullname{\n	color: "+WidTwt.ncknmcl+";\n}\n.userlink:hover .fullname{\n	color: "+WidTwt.twtalnk+";\n}\n.chatdate{\n	color: "+WidTwt.unusecl+";\n}\n.rplybtn{\n	color: "+WidTwt.unusecl+";\n}\n.newtweet{\n	border-bottom: 1px solid "+WidTwt.twtbrdr+";\n}\n.newtweet:hover .rplybtn{\n	color: "+WidTwt.twtalnk+";\n}";
	strttext=strttext+"<div id=\"startfeed\"><div class='shoutbtn' onclick=\"open2Tweet(WidTwt.hashtag)\">"+WidTwt.txtbtn+"</div><div class=\"soundmuter\" "+((WidTwt.csound==false)?"style=\"display:none;\"":"")+"><div id=\"soundmuter\" style=\"background:url(http://png-5.findicons.com/files/icons/770/token_dark/16/sound.png);cursor:pointer;\" onclick=\"soundmute(this);\"></div></div><div class='allchatsect' id=\"allchats\"><center>"+WidTwt.whlodng+"</center></div>";
	strttext=strttext+"<span id=\"SupportFadz\" style=\"width:"+WidTwt.WidWidth+"px;margin:1px -12px;position: absolute;font-size: 10px;text-align: right;\"><span style=\"color: #333;\">Powered By </span><a href=\"http:\/\/hantujavascript.blogspot.com/\" style=\"text-decoration:none;color: #555;aa\" target=\"_blank\"><b>HantuJavascript</b></a>.</span>";
	strttext=strttext+"</div><audio id=\"callbacksound\"><source src=\"js/pop2.wav\" type=\"audio/wav\"></source><source src=\"js/pop2.mp3\" type=\"audio/mpeg\"></source></audio><style id=\"styleWidTwit\"></style><span id=\"tweetfed\"></span>";
	document.getElementById("AllWidget").innerHTML=strttext;
	document.getElementById("styleWidTwit").innerHTML = textcss;
	refes=setInterval("reCallTweet()",6000);
}