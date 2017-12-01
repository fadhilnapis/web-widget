var nameFBaccounts = new Array();
var imgsFBaccounts = new Array();
var commntBill = 1;
var theAuthorVall = 'undefined';
var theFbPost = '';
var theFbPostLike = '';
function openFBURLtool(){
	var aa = document.getElementById("urlPortChange"), bb = document.getElementById("vfbthumb");
	aa.style.display="block";
	bb.focus();
	bb.select();
}
function setFBURLtool(){
	var aa = document.getElementById("urlPortChange"), bb = document.getElementById("vfbthumb"), cc = document.getElementById("fbimage");
	fbimage.setAttribute("src", bb.value);
	aa.style.display = "none";
}
function doFBKeyDown(e){
	if(!e) e = event;
	if(e.target.id=="vfbposts"){
		if(e.shiftKey&&e.keyCode==50){
			document.getElementById("startTagFbAcc").style.display="block";
			document.getElementById("inTagFbAcc").focus();
		}
	}
	if(e.target.id=="inTagFbAcc"){
		if(e.keyCode==13){
			doTagYes();
		}
	}
}
function createAccountArray(username, userimg, lengths){
		var g =true;
		for(var ds=0;ds<lengths;ds++){
			if(username==nameFBaccounts[ds]){
				g=false;
				break;
			}else{
				g=true;
			}
		}
		if(g){
			nameFBaccounts[nameFBaccounts.length]=username;
			imgsFBaccounts[imgsFBaccounts.length]=userimg;
		}
}
function seditFBPost(o){
	if(o.value=="Edit"){
		o.value="Save";
		document.getElementById("showPostEdit").style.display="block";
		document.getElementById("postFBEdit").innerHTML=theFbPost;
		document.getElementById("postFBEdit").focus();
	}else{
		o.value="Edit";
		theFbPost=document.getElementById("postFBEdit").innerHTML;
		document.getElementById("showPostEdit").style.display="none";
	}
}
function createFBSAVE(userid, username, userimg, acctype, status){
	var h=true;
	for(var fas=0;fas<nameFBaccounts.length;fas++){
		if(nameFBaccounts[fas]!=username){
			h=true;
		}else{
			h=false;
			break;
		}
	}
	createAccountArray(username, userimg, nameFBaccounts.length);
	if(h==true){
		if(acctype=='Author'){
			theFbPostLike = document.getElementById("vfblikes").value;
			theFbPost = document.getElementById("vfbposts").innerHTML;
			document.getElementById("FBaccountsDisplay").innerHTML+="<table name='user-"+userid+"' style='width:290px;text-align:left;border:solid 1px #faa;display: inline-block;'><tbody><tr><td rowspan='3' style='width:70px'><img src='"+userimg+"' style='width:90px;height:90px'></td><td><input onblur=\"document.getElementsByName('user-"+userid+"')[0].getElementsByTagName('img')[0].src=this.value\" type='text' style='border:none;font-size: 11px;' onclick='this.select()' value='"+userimg+"' size='16'></input></td></tr><tr><td><span style=\"color:#3B5998;font-weight: bold;font-size: 13px;font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;\" contenteditable='true' onblur='nameFBaccounts["+userid+"]=this.innerHTML;'>"+username+"</span></td></tr><tr><td><input type='button' value='Edit' onclick='seditFBPost(this)'></input><input type='text' size='5' onblur='theFbPostLike=this.value' value="+theFbPostLike+"></input><div id='showPostEdit' style='border: 1px solid #888;position:absolute;background:#fff;padding: 2px;display:none;'><span id='postFBEdit' contenteditable='true' style='width:115px;color: #333;font-size: 13px;border: none;'>"+theFbPost+"</span></div></td></tr></tbody></table><br>";
			theAuthorVall = parseInt(userid);
			document.getElementById('fbaccount').setAttribute('class', 'Commentor');
			document.getElementsByName('fbaccounttrow')[0].getElementsByTagName('td')[0].setAttribute("rowspan", "2");
			document.getElementsByName('fbaccounttrow')[1].style.display='none';
			document.getElementsByName('fbaccounttrow')[2].style.display='none';
		}else if(acctype=='Commentor'){
			document.getElementById("FBaccountsDisplay").innerHTML+="<table name='user-"+userid+"' style='width:300px;text-align:left;border:solid 1px #aaa;display: inline-block;'><tbody><tr><td rowspan='3' style='width:70px'><img src='"+userimg+"' style='width:90px;height:90px'></td><td><input onblur=\"document.getElementsByName('user-"+userid+"')[0].getElementsByTagName('img')[0].src=this.value;imgsFBaccounts["+userid+"]=this.value\" type='text' style='border:none;font-size: 11px;' onclick='this.select()' value='"+userimg+"' size='16'></input></td></tr><tr><td><span style=\"color:#3B5998;font-weight: bold;font-size: 13px;font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;\" contenteditable='true' onblur='nameFBaccounts["+userid+"]=this.innerHTML;'>"+username+"</span></td></tr></tbody></table><br>";
		}
		if(status!='tag'){
		document.getElementById("fbimage").src='img/facebook-profile-picture.jpg';
		document.getElementById("vfbthumb").value='img/facebook-profile-picture.jpg';
		}
		if(nameFBaccounts.length>1&&theAuthorVall!='undefined'){
			document.getElementById('startOptionCustomize').style.display='block';
		}
	}
}
document.onkeyup = doFBKeyDown;
function doTagYes(x){
			var dd = document.getElementById("inTagFbAcc");
			var ss = nameFBaccounts.length;
			var ddv = parseInt(dd.value.length);
			var ttd = dd.value;
			if(dd.value.length>0){
				var gaga =document.getElementById("vfbposts").innerText.search("\@");
				if(dd.value.search(" ")<0)ttd = dd.value.substring(0, ddv/2)+" "+dd.value.substring(ddv/2, dd.value.length);
				document.getElementById("vfbposts").innerHTML=document.getElementById("vfbposts").innerHTML.replace("\@", "<span style='background:#D8DFEA'>"+ttd+"</span>&nbsp;");
				document.getElementById("vfbposts").designMode='on';
			}
			if(x!='making'){
				createFBSAVE(ss, ttd, 'img/facebook-profile-picture.jpg', 'Commentor', 'tag');
			}
			if(document.getElementById("vfbposts").innerText.createTextRange) {
				var range = document.getElementById("vfbposts").createTextRange();
				range.move('character', gaga+ddv);
				range.select();
			}else {
				if(document.getElementById("vfbposts").innerText.selectionStart) {
					document.getElementById("vfbposts").focus();
					document.getElementById("vfbposts").selectionStart(gaga+ddv,gaga+ddv);
				}else{
					document.getElementById("vfbposts").focus();
				}
			}
			document.getElementById("inTagFbAcc").value="";
			document.getElementById("startTagFbAcc").style.display="none";
}
function saveAllAccount(){
	var textall1='';
	var textall2='';
	document.getElementById("idstartcomment").style.display='none';
	document.getElementById("FbCharacterAct").style.display='block';
	document.getElementById("idfbthumb").src=imgsFBaccounts[theAuthorVall];
	document.getElementById("idfbusername").innerText=nameFBaccounts[theAuthorVall];
	document.getElementById("idfbposts").innerHTML=theFbPost.replace(/<span style="background:#D8DFEA">/gi,'<a style="color:#3B5998">').replace(/<\/span>/gi, '</a>');
	document.getElementById("idFBpostTime").setAttribute('value', new Date());
	for(var f=0;f<nameFBaccounts.length;f++){
		textall2+='<div style="border:solid 1px #aaa;padding: 3px;display: inline-block;margin:5px" id="selectUser-'+f+'"><img src="'+imgsFBaccounts[f]+'" width="50" height="50" style="float: left;margin-left:3px"><input name="fbvalueing" type="text" value="'+nameFBaccounts[f]+'" style="display:none"/><div style="width:200px"><span name="fbvalueing" contenteditable="true" spellcheck="false" style="width:123px;color:#999" onfocus="if(this.innerText==\'Write Your Comment\'){this.innerHTML=\' \';this.style.color=\'#000\';this.focus();}" onblur="if(this.innerText.length<1){this.innerHTML=\'Write Your Comment\';this.style.color=\'#999\';}">Write Your Comment</span><br/><input name="fbvalueing" type="text" style="color:#3B5998;font-size:11px;text-align:right" value="1" size="3"><span style="color:#3B5998;font-size:11px">likes<span><input type="button" class="selectUser-'+f+'" value="Create" onclick="createFBComment(this.getAttribute(\'class\'))"></div></div><br/>';
	}
	textall1='<ul id="idfbgocomment">';
	if(theFbPostLike.length>0&&parseInt(theFbPostLike)>0){
		textall1+='<i style="margin-top: -5px;background-color: #f1f2f6;background-size: auto;transform: rotate(45deg);display: block;height: 10px;position: absolute;margin-left: 17px; width: 10px; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"></i><li style="border-left: 2px solid #A8B2CE;margin-top:5px"><i style="background-image: url(img/like.png);background-repeat: no-repeat;background-size: contain;display: block;height: 13px;width: 16px;float: left;margin-right: 5px;margin-top: 1px;padding:1px 0px;"></i><div style="margin-top:2px"><a>'+theFbPostLike+' people</a> like this.</div></li>';
	}
	textall1+='</ul>';
	var startCountTime= setInterval('updateTimeAgo()', 1000);
	document.getElementById("idfbcomment").innerHTML=textall1;
	document.getElementById("startCommentingID").innerHTML=textall2;
}
function createFBComment(x){
	var za=parseInt(x.split('-')[1])*3;
	var textall3='';
	var a=document.getElementsByName("fbvalueing")[0+za];
	var b=document.getElementsByName("fbvalueing")[1+za];
	var c=document.getElementsByName("fbvalueing")[2+za];
	var d=document.getElementById(x);
	textall3+='<li id="commentnumber'+commntBill+'"><div style="float:left;margin-right: 8px;"><img src="'+d.getElementsByTagName("img")[0].src+'" width="32" height="32"/></div><div><a class="cfbnames">'+a.value+'</a> <span class="dltComment" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)" style="position:relative;float:right;">X</span><span contenteditable="true" spellcheck="false" class="cfbcomments">'+b.innerHTML+'</span><div class="cfbcfootor"><span name="dateUpdateringNyePun">1 minutes</span> ago &#183; <a><span '+((c.value!=''&&parseInt(c.value)>0)?'':'style="cursor:pointer"')+' onclick="if(this.parentNode.innerText==\'Like\'){this.style.cursor=\'auto\';this.parentNode.innerHTML+=\' &#183; <i style=\\\'background-image: url(img/like.png);background-repeat: no-repeat;background-size:contain;display: inline-block;height: 9px;margin-right: 3px;width: 10px;\\\'></i><span spellcheck=\\\'false\\\' contenteditable=\\\'true\\\'>1</span>\'}">Like';
	if(c.value!=''&&parseInt(c.value)>0){
		textall3+=' &#183; <i style="background-image: url(img/like.png);background-repeat: no-repeat;background-size:contain;display: inline-block;height: 9px;margin-right: 3px;width: 10px;"></i><span contenteditable="true" spellcheck="false">'+c.value+'</span>';
	}
	textall3+='</a></div></div></li>';
	
	document.getElementById('idfbgocomment').innerHTML+=textall3;
	b.innerHTML='Write Your Comment';
	b.style.color='#999';
	c.value=1;
	commntBill++;
}
function updateTimeAgo(){
	for(var t=0;t<document.getElementsByName("dateUpdateringNyePun").length;t++){
		var elementTime = document.getElementsByName("dateUpdateringNyePun").length;
		var exactTimeMinused = elementTime-t;
		var allTimeminusd = (parseInt(exactTimeMinused *5)<60)? parseInt(exactTimeMinused *5)+' minutes': ((parseInt(exactTimeMinused /12)<2)? 'about an':parseInt(exactTimeMinused /12))+' hours';
		document.getElementsByName("dateUpdateringNyePun")[t].innerHTML =allTimeminusd;
	}
}