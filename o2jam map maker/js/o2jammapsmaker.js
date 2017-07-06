var ksd=0;
var allowcont=true;
var setEnt;
var allmaps;
var theetitile;
var soundmp3;
function createNoteJam(e,du){
	var c,t,l;
	if(allowcont){
	if(du=="d"){
		if(ksd!=1){
			ksd=1;
			ry=0;
			rx=soundmp3.currentTime*10;
		}
	}else{
		ksd=0;
		clearInterval(setEnt);
		switch(event.keyCode){
			case 65: c=1;
			break;
			case 83: c=2;
			break;
			case 32: c=3;
			break;
			case 75: c=4;
			break;
			case 76: c=5;
			break;
			default: c="";return false
			break;
		}
		t=parseInt(rx);
		ry=soundmp3.currentTime*10;
		l=parseInt(ry)-t;
		if(l!=0){
			l=parseInt(ry)-t;
		}else{
			l=1
		}
		if(e.value!=""&&c!=""){
			e.value+="/";
		}
		e.value+=c+","+t+","+l;
	}
	if(soundmp3.ended){
		allmaps=e.value;
		theetitile=decodeURIComponent(soundmp3.src.split("/")[soundmp3.src.split("/").length-1]);
		e.value='{\t\ttitle: "'+theetitile+'"\n\t\t,song: "'+soundmp3.src+'"\n\t\t,cover: ""\n\t\t,note:{\n\t\t\t"'+allmaps+'"\n\t\t}\n}';
		allowcont=false;
	}
	}
}
setTimeout("soundmp3=new Audio(document.getElementById('sourcesound').value);",500);