var UpDwn=0,oppa=1,intvl,loadUp=50;
function OTGate(){
	GtElmnt("load1").style.top=UpDwn+"px";
	GtElmnt("load2").style.bottom=UpDwn+"px";
	GtElmnt("load1").style.opacity =oppa;
	GtElmnt("load2").style.opacity =oppa;
	if(GtElmnt('load3')){
		GtElmnt("load3").style.top=loadUp+"%";
		GtElmnt("load3").style.opacity =oppa;
	}
	if(UpDwn>-440||oppa>=.1){
		UpDwn -= 44;
		oppa -= .1;
		loadUp -=8;
	}else{
		GtElmnt("loadingcenter").style.display="none";
		GtElmnt("welcome").play();
		clearInterval(intvl);
	}
}
function GtElmnt(x){
	return document.getElementById(x);
}
function writeDivLoad(){
	GtElmnt("loadingcenter").innerHTML='<img id="load1" src="'+diwload.imgURLU+'" style="position:fixed;top:0px;left:0px;width:100%;height:62.8571429%;z-index:11;"><img id="load2" src="'+diwload.imgURLD+'" style="position:fixed;bottom:0px;left:0px;width:100%;height:62.8571429%;opacity:1;z-index:10;"><div id="load3" style="width:100%;position:fixed;top:50%;left: 0px;z-index: 11;text-align:center;"></div>';
    setTimeout('GtElmnt("load3").innerHTML+=\'<input type="button" id="forceload" onclick="starOpen()" value="'+diwload.text+'">\'', diwload.waitsec*1000);
}
function starOpen(){
	intvl = setInterval("OTGate()", 50);
}