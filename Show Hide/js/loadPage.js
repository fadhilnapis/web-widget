loberzse=50;
ooae=.8;
countbleh3=10;
function openGate(){
	function GtElFr(x){
		return document.getElementById(x);
	}
	loberzse-=5;
	ooae-=.05;
	countbleh3-=1;
	if(GtElFr('loadingface1') && GtElFr('loadingface2')){
		if(loberzse<=0){
			loberzse=0;
			ooae=0;
			window.clearInterval(fe);
			GtElFr('loadingface1').style.display="none";
			GtElFr('loadingface2').style.display="none";
			GtElFr('oncover').style.display="none";
			GtElFr('welcome').play();
		}
		GtElFr('loadingface1').style.width = loberzse+'%';
		GtElFr('loadingface2').style.width = loberzse+'%';
		GtElFr('loadingface1').style.opacity = ooae;
		GtElFr('loadingface2').style.opacity = ooae;
		GtElFr('oncover').style.opacity = ooae;
	}
}
function stardDiv(){
document.getElementById('loadingcenter').innerHTML="<div id='loadingface1' style='position: absolute;top: 0px;border-left:1px solid "+vloding.line+";right: 0px;width: 50%;height: 100%;z-index: 11;cursor: default;background: "+vloding.background+";opacity: 0.8;display:table-cell;text-align:center;vertical-align:middle;font-size:20px;color:#000;'><div style='z-index: 13;position: fixed;width:200px;height:100px;top: 50%;left:50%;margin-top: -50px;  margin-left: -100px;'></div></div>\n<div id='loadingface2' style='position: absolute;top: 0px;border-right:1px solid "+vloding.line+";left: 0px;width: 50%;height: 100%;z-index: 11;cursor: default;background: "+vloding.background+";opacity: 0.8;display:table-cell;text-align:center;vertical-align:middle;font-size:20px;color:#000;'></div>\n<div id='oncover' style='z-index: 12;text-align:center;position: fixed;width:200px;height:100px;top: 50%;left:50%;margin-top: -50px;  margin-left: -100px;'><img src='"+vloding.imgURL+"' width='100'/><br/>"+vloding.text+"</div>";
}