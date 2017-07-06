var hourlength=60/100;
var minutelength=75/100;
var secondlength=95/100;
var gclocksize, gclockcenter, gclockradius,gl;
function creatNumClock(c,h,s,g,l){
	var clock = document.getElementById(c);
	var clocksize = clock.getAttribute("size");
	var clockcenter = clocksize /2;
	var clockradius = (clocksize - (5/100*clocksize)) /2;
	function pxs(x){
		return x/200*clocksize
	};
	//hour number
	for(var hn=1;hn<=12;hn++){
		var hourNum = document.createElement("span");
		var numText = document.createTextNode(hn);
		hourNum.appendChild(numText);
		hourNum.id = "clocknum"+hn;
		hourNum.style.fontSize=h-1;
		hourNum.style.width=h;
		hourNum.style.height=h;
		hourNum.style.textAlign="center";
		hourNum.className = "clocknumber";
		hourNum.style.top = clockcenter-h/2 + Math.sin(-1.57 + Math.PI * 5*hn/30)*(clockradius-s);
		hourNum.style.left = clockcenter-h/2 + Math.cos(-1.57 + Math.PI * 5*hn/30)*(clockradius-s);
		clock.appendChild(hourNum);
	}
	//second dots
	for(var sd=1;sd<=60;sd++){
		var dots = document.createElement("span");
		dots.id="thedot"+sd;
		dots.className="clockdots";
		for(var sbd=1;sbd<=12;sbd++){
			if(sd==5*sbd){
				dots.style.width=g+2;
				dots.style.height=g+2;
				dots.style.top = clockcenter-parseInt((g+2)/2) + Math.sin(-1.57 + Math.PI * sd/30)*(clockradius);
				dots.style.left = clockcenter-parseInt((g+2)/2) + Math.cos(-1.57 + Math.PI * sd/30)*(clockradius);
				break;
			}else{
				dots.style.width=g;
				dots.style.height=g;
				dots.style.top = clockcenter-parseInt(g/2) + Math.sin(-1.5 + Math.PI * sd/30)*(clockradius);
				dots.style.left = clockcenter-parseInt(g/2) + Math.cos(-1.57 + Math.PI * sd/30)*(clockradius);
			}
		}
		clock.appendChild(dots);
	}
	//hours needle
	for(var hrnl=1;hrnl<=clockhourdots;hrnl++){
		var hourdots = document.createElement("span");
		hourdots.id="hourdots"+hrnl;
		hourdots.className="jarumH";
		hourdots.style.width=l;
		hourdots.style.height=l;
		hourdots.style.top=clockcenter-parseInt(l/2) + Math.sin(11)*((hourlength*clockradius)-(hourlength*clockradius)/(clockhourdots+1)*hrnl);
		hourdots.style.left=clockcenter-parseInt(l/2) + Math.cos(11)*((hourlength*clockradius)-(hourlength*clockradius)/(clockhourdots+1)*hrnl);
		clock.appendChild(hourdots);
	}
	//minutes needle
	for(var mnnl=1;mnnl<=clockminutedots;mnnl++){
		var minutedots = document.createElement("span");
		minutedots.id="minutedots"+mnnl;
		minutedots.className="jarumM";
		minutedots.style.width=l;
		minutedots.style.height=l;
		minutedots.style.top=clockcenter-parseInt(l/2) + Math.sin(11)*((minutelength*clockradius)-(minutelength*clockradius)/(clockminutedots+1)*mnnl);
		minutedots.style.left=clockcenter-parseInt(l/2) + Math.cos(11)*((minutelength*clockradius)-(minutelength*clockradius)/(clockminutedots+1)*mnnl);
		clock.appendChild(minutedots);
	}
	//seconds needle
	for(var scnl=1;scnl<=clockseconddots;scnl++){
		var seconddots = document.createElement("span");
		seconddots.id="seconddots"+scnl;
		seconddots.className="jarumS";
		seconddots.style.width=l;
		seconddots.style.height=l;
		seconddots.style.top=clockcenter-parseInt(l/2) + Math.sin(11)*((secondlength*clockradius)-(secondlength*clockradius)/(clockseconddots+1)*scnl);
		seconddots.style.left=clockcenter-parseInt(l/2) + Math.cos(11)*((secondlength*clockradius)-(secondlength*clockradius)/(clockseconddots+1)*scnl);
		clock.appendChild(seconddots);
	}
	var midClock = document.createElement("span");
	midClock.className="middleDots";
	midClock.style.width=l+1;
	midClock.style.height=l+1;
	midClock.style.top = clockcenter-parseInt((l+1)/2);
	midClock.style.left = clockcenter-parseInt((l+1)/2);
	clock.appendChild(midClock);
	gclocksize=clocksize;
	gclockcenter=clockcenter;
	gclockradius=clockradius;
	gl=l;
	startRoll = setInterval("intervalClock()", 10);
}
function intervalClock(){
	var times=new Date();
	var hs=times.getHours();
	var gs=times.getMinutes();
	var ds=times.getSeconds();
	var fs=times.getMilliseconds();
	hou=-1.57 + Math.PI * hs/6 + Math.PI*parseInt(times.getMinutes())/360;
	min=-1.57 + Math.PI * gs/30;
	sec=-1.57 + Math.PI * ds/30;
	for(var hrnl=1;hrnl<=clockhourdots;hrnl++){
		var hourdots = document.getElementById("hourdots"+hrnl);
		hourdots.style.top=gclockcenter-parseInt(gl/2) + Math.sin(hou)*((hourlength*gclockradius)-(hourlength*gclockradius)/(clockhourdots+1)*hrnl);
		hourdots.style.left=gclockcenter-parseInt(gl/2) + Math.cos(hou)*((hourlength*gclockradius)-(hourlength*gclockradius)/(clockhourdots+1)*hrnl);
	}
	for(var mnnl=1;mnnl<=clockminutedots;mnnl++){
		var minutedots = document.getElementById("minutedots"+mnnl);
		minutedots.style.top=gclockcenter-parseInt(gl/2) + Math.sin(min)*((minutelength*gclockradius)-(minutelength*gclockradius)/(clockminutedots+1)*mnnl);
		minutedots.style.left=gclockcenter-parseInt(gl/2) + Math.cos(min)*((minutelength*gclockradius)-(minutelength*gclockradius)/(clockminutedots+1)*mnnl);
	}
	for(var scnl=1;scnl<=clockseconddots;scnl++){
		var seconddots = document.getElementById("seconddots"+scnl);
		seconddots.style.top=gclockcenter-parseInt(gl/2) + Math.sin(sec)*((secondlength*gclockradius)-(secondlength*gclockradius)/(clockseconddots+1)*scnl);
		seconddots.style.left=gclockcenter-parseInt(gl/2) + Math.cos(sec)*((secondlength*gclockradius)-(secondlength*gclockradius)/(clockseconddots+1)*scnl);
	}
}