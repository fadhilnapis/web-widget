var q=true;
var f=0;
var theMessage="";
function whatNow(now){
	if(q){
		f=now;
		q=false;
	}
	var t=new Array();
	var b,h,w=0,v=0;
	for(var i=0;i<document.getElementsByTagName("tr").length;i++){
		t[i]=document.getElementsByTagName("tr")[i].getElementsByTagName("td").length;
	}

	for(var i=0;i<t.length;i++){
		
		for(var y=0;y<t[i];y++){
			h=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[y];
			b=h.textContent || h.innerText;
			if(b.search("PM")>=0){
				w=12;
			}
			if(parseInt(b)+w==now){
				v=i;
			}
		}
	}
	for(var i=0;i<t.length;i++){
		var gh=document.getElementsByTagName("tr");
		for(var m=0;m<t[i];m++){
			gh[i].getElementsByTagName("td")[m].className=" notNow";
		}
		if(i==v){
			var qe=0;
			while(t[i+qe]==1){
				qe-=1;
			}
			for(var m=0;m<t[i+qe];m++){
				var gh=document.getElementsByTagName("tr")[i+qe];
				xe=qe;
				theMessage=gh.getElementsByTagName("td")[t[i+qe]-1].textContent || gh.getElementsByTagName("td")[t[i+qe]-1].innerText;
				theMessage=theMessage.replace(/\n\s+/g,"").toLowerCase();
				theMessage=theMessage.replace(/\//g," or ");
				console.log(theMessage);
				
			}
		}
		if(now!=f&&i==t.length-1){
			document.getElementById("alarm").play();
			document.getElementById("stopbut").disabled=false;
			q=true;
			alert("Time to \""+theMessage+"\"");
		}
	}
	for(var i=0;i<t.length;i++){
		if(i==v){
			f=now;
			var qe=0;
			while(t[i+qe]==1){
				qe-=1;
			}
			for(var m=0;m<t[i+qe];m++){
			var gh=document.getElementsByTagName("tr")[i+qe];
				var ty=gh.getElementsByTagName("td")[m].textContent || gh.getElementsByTagName("td")[m].innerText;
				if(ty.search("AM")<=0&&ty.search("PM")<=0){
					gh.getElementsByTagName("td")[m].className=" onNOw";
					xe=qe;
					while(xe<0){
						document.getElementsByTagName("tr")[v+xe+1].getElementsByTagName("td")[0].className=" onNOw";
						xe+=1;
					}
				}
			}
		}
	}
}
function alarmStop(el){
	document.getElementById("alarm").currentTime=0;
	document.getElementById("alarm").pause();
	el.disabled=true;
}
var poi=window.setInterval("whatNow(new Date().getHours())",1000);