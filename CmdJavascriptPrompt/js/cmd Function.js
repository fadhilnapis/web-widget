
window.onload = function(){
	promptInput = document.getElementById('promptInput');
	answerElmnt = document.getElementById('answerElmnt');
	embedOnline = document.getElementById('embedOnline');
	embedElement = document.getElementById('embedElement');
	promptElement = document.getElementById('promptElement')
	comandFill = "";
	promptInput.addEventListener('keydown', runCMD, false);
	document.body.addEventListener('keydown', goComand, false);
	treeevar='';
	dora='';
	revotext='';
	omhgasd='';
};
function goComand(evt){
	evt = event;
	if(evt.keyCode==82){
		if(comandFill==""){
			comandFill+="r";
		}else{
			comandFill="";
		}
	}
	if(evt.keyCode==85){
		if(comandFill=="r"){
			comandFill+="u";
		}else{
			comandFill="";
		}
	}
	if(evt.keyCode==78){
		if(comandFill=="ru"){
			comandFill+="n";
		}else{
			comandFill="";
		}
	}
	if(evt.keyCode==13){
		if(comandFill=="run"){
			promptElement.style.display='block';
			promptInput.focus();
		}else{
			comandFill="";
		}
	}
	if(evt.keyCode==27){
		if(promptElement.style.display=='block'){
			promptElement.style.display='none';
		}
	}
}
function runCMD(evt){
	evt = event;
	if(evt.keyCode==13){
		enterCmd(this.value);
	}
}
function enterCmd(v){
	var cmfd={
	f:[{
		ft:"taik kau la",
		ff:function(){
			alert(";p...taik kau tu busuk");
		}
	},{
		ft:"dfs",
		ff:function(){
			omhgasd='fgd me pleas....';
		}
	},{
		ft:"name awak ape",
		ff:function(){
			omhgasd='fadz';
		}
	},{
		ft:"i hate you",
		ff:function(){
			omhgasd='who care?';
		}
	},{
		ft:"you",
		ff:function(){
			omhgasd='what';
		}
	},{
		ft:"will you marry me",
		ff:function(){
			omhgasd='no...i dont know you';
		}
	},{
		ft:"what is your fb",
		ff:function(){
			omhgasd='<a href="http://www.facebook.com/justHackerOnly">here we go</a>';
		}
	}]
	}
	var time = new Date();
	var hours = time.getHours();
	var hour = hours %12;
	var today = time.getDay();
	var dayray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var timermsg = (hours>=12)? "PM": "AM";
	var minutes = time.getMinutes();
	omhgasd = "I dont understand...";
	min = (minutes<10)?0+""+minutes : minutes;
	if(v.search(/say\(/)>=0)alert(v.split(/say\(/)[1].split(/\)/)[0]);
	if(v.search(/open\(/)>=0){
		if(v.split(/open\(/)[1].split(/\)/)[0]=='About You'||v.split(/open\(/)[1].split(/\)/)[0]=='About HJS'||v.split(/open\(/)[1].split(/\)/)[0]=='about you'||v.split(/open\(/)[1].split(/\)/)[0]=='about hjs'){
			window.open('http://hantujavascript.blogspot.com/p/about-me-and-my-blog.html');
		}
	}
	if(v.search(/javascript\:/)>=0){
		window.location.href= "javascript:"+v.split(/javascript\:/)[1];
		omhgasd = "<span style=\"color:green;\">javascript runed:..</span>";
	}
	
	for(var sfd=0;sfd<cmfd.f.length;sfd++){
		if(v.search(cmfd.f[sfd].ft)==0){
			window.setTimeout(cmfd.f[sfd].ff, 0);
		}
	}
	if(v.search(/do you like /gi)>=0){
		if(v.split(/do you like /)[1].split(/\?/)[0].search(/tomato/gi)>=0){
			omhgasd = "sometimes i like tomato...";
		}
		if(v.split(/do you like /)[1].split(/\?/)[0].search(/javascript/gi)>=0){
			omhgasd = "i am always LOVE javascript!!!!forever and after...";
		}
		if(v.split(/do you like /)[1].split(/\?/)[0].search(/your mother/gi)>=0){
			omhgasd = "i love my mother...";
		}
		if(v.split(/do you like /)[1].split(/\?/)[0].search(/my mother/gi)>=0){
			omhgasd = "i dont know your mother...can you introduce your mother??";
		}
	}
	if(v.search(/do you love /gi)>=0){
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/Najiha/gi)>=0){
			omhgasd = "I love her...but she dont like me...";
		}
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/javascript/gi)>=0){
			omhgasd = "i am always LOVE javascript!!!!forever and after...";
		}
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/your mother/gi)>=0){
			omhgasd = "i love my mother...";
		}
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/me/gi)==0){
			omhgasd = "i love you as my friend...";
		}
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/mother/gi)==0){
			omhgasd = "who's mother...?";
		}
		if(v.split(/do you love /)[1].split(/\?/)[0].search(/my mother/gi)>=0){
			omhgasd = "i dont know your mother...and i dont love your mother";
		}
	}
	if(v.search(/Hai!/gi)==0){
			omhgasd = "Hai!!!!";
	}
	if(v.search(/Hi!/gi)==0){
			omhgasd = "Hi!!!!";
	}
	if(v.search(/who's your /gi)>=0){
		if(v.split(/who's your /)[1].split(/\?/)[0].search(/love/gi)>=0){
			omhgasd = "my love is......Kharul Najiha(dont tell anyone..shhh...thats will be our secret!!)";
		}
		if(v.split(/who's your /)[1].split(/\?/)[0].search(/idol/gi)>=0){
			omhgasd = "Brendan Eich and John Resig...";
		}
		if(v.split(/who's your /)[1].split(/\?/)[0].search(/best friend/gi)>=0){
			omhgasd = "my best friend is...aizzat, syakir and rapi...;p";
		}
	}
	if(v.search(/who is your /gi)>=0){
		if(v.split(/who is your /)[1].split(/\?/)[0].search(/love/gi)>=0){
			omhgasd = "my love is......Kharul Najiha(dont tell anyone..shhh...thats will be our secret!!)";
		}
		if(v.split(/who is your /)[1].split(/\?/)[0].search(/idol/gi)>=0){
			omhgasd = "Brendan Eich and John Resig...";
		}
		if(v.split(/who is your /)[1].split(/\?/)[0].search(/best friend/gi)>=0){
			omhgasd = "my best friend is...aizzat, syakir and rapi...;p";
		}
	}
	if(v.search(/what is your /gi)>=0){
		if(v.split(/what is your /)[1].split(/\?/)[0].search(/pet name/gi)>=0){
			omhgasd = "my kitty name is bubble and putri...and my kitten name is putat...";
		}
		if(v.split(/what is your /)[1].split(/\?/)[0].search(/favorite food/gi)>=0){
			omhgasd = "my fav food is crab soup and swedish meatball...";
		}
		if(v.split(/what is your /)[1].split(/\?/)[0].search(/favorite drink/gi)>=0){
			omhgasd = "my fav drink is milo ice and bubble tea...";
		}
	}
	if(v.search(/who is the cuties person/gi)>=0){
			omhgasd = "the cuties person is YOU!!!";
	}
	if(v.search(/how are you today/gi)==0){
			if(dayray[today]=="Sunday"||dayray[today]=="Saturday"){
				omhgasd ="Cuti!!!yeay";
			}else{
				omhgasd ="Im fine..thank you..";
			}
	}
	if(v.search(/did you love me/gi)>=0){
			omhgasd = "love you as my friend!!!";
	}
	if(v.search(/what is your facebook account/gi)>=0){
			omhgasd = "you can go to this link...<a href='http://www.facebook.com/justHackerOnly' target='_blank'>http://www.facebook.com/justHackerOnly</a>!!!";
	}
	if(v.search(/what is your facebook password/gi)>=0){
			omhgasd = "you can go to this link to get my password...<a href='#' onclick=\"window.open\(' http://www.google.com.my/'\)\">[link]</a>!!!";
	}
	if(v.search(/lol/gi)==0){
			omhgasd = "LOL too!!!";
	}
	if(v.search(/sucker/gi)==0){
			omhgasd = "sucker too!!!";
	}
	if(v.search(/bodoh/gi)==0){
			omhgasd = "kau la tu...";
	}
	if(v.search(/advertise me/gi)==0){
			window.open('http://hantujavascript.blogspot.com/p/advertisement.html');
	}
	if(v.search(/http:\/\/www.youtube.com\/watch\?v=/gi)>=0){
			embedOnline.innerHTML +="<iframe width=\"250\" height=\"199\" src=\"http://www.youtube.com/embed/"+ v.split(/http:\/\/www.youtube.com\/watch\?v=/gi)[1] +"\?rel=0\" frameborder=\"0\" allowfullscreen></iframe>";
			embedElement.style.display="block";
	}
	if(v.search(/metric\(\)/gi)==0){
		treeevar = window.setInterval("runMetric()", 10);
		promptElement.style.background = "black";
	}
	if(v.search(/stop\(\)/gi)==0){
		if(treeevar){
			clearInterval(treeevar);
		}
		if(dora){
			clearInterval(dora);
		}
		answerElmnt.innerHTML = "<i>please ask me something...</i><br>";
		promptElement.style.background = "white";
		omhgasd = "<span style=\"color:red;\">stoped:..</span>";
	}
	if(v.search(/randomText\(/gi)==0){
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var torse = 5;
		if(v.split(/randomText\(/)[1].split(/\)/)[0]==''){
			torse = 5;
		}else{
			torse = Math.floor(v.split(/randomText\(/)[1].split(/\)/)[0]);
		}
		var string_length = torse;
		var randomstring = '';
		for(var i=0;i<string_length;i++){
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		omhgasd =  ""+randomstring;
	}
	
	if(v.search(/background\=/gi)>=0){
			promptElement.style.background = v.split(/background\=/)[1].split(/\;/)[0];
	}
	if(v.search(/color\=/gi)>=0){
			promptElement.style.color = v.split(/color\=/)[1].split(/\;/)[0];
	}
	if(v.search(/glow/gi)>=0){
			promptElement.style.boxShadow = "0px 0px 30px #0f0";
	}
	if(v.search(/revolution\(/gi)>=0){
			if(v.split(/revolution\(/)[1].split(/\)/)[0]=='tornado'){
				window.location.href="javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.getElementsByTagName('img'); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+ 'px'; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+' px'}R++}dora=window.setInterval('A()',5); void(0);";
				revotext="tornado";
			}
			omhgasd = "<span style=\"color:green;\">revolution runed : "+revotext+"</span>";
	}
	if(v.search(/clear()/gi)==0){
		answerElmnt.innerHTML = "<i>please ask me something...</i><br>";
		omhgasd =  "";
	}
	if(v.length==0){
		omhgasd='ask me pleas....';
	}
	window.setTimeout(function(){
		answerElmnt.innerHTML += omhgasd;
		answerElmnt.innerHTML +=  "<div style='float:right;font-family:monospace;'>"+ hour +":"+ min + timermsg +"</div><br>";
		answerElmnt.scrollTop = answerElmnt.scrollHeight;
	},1);
}
function runMetric(){
var gfds = "<div style='text-align:center;color:green;background:black;font-family: monospace;font-size:16px;'>";
	answerElmnt.innerHTML = gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.innerHTML +=  gfds+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+""+(Math.floor(Math.random()*100000000000000000))+"</div>";
	answerElmnt.scrollTop = answerElmnt.scrollHeight;
}