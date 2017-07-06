function getMyDate(){
	var mydate = new Date();
	var dh = mydate.getHours();
	var dm = mydate.getMinutes();
	var ds = mydate.getSeconds();
	var dms = mydate.getMilliseconds();
	
	
	var ghds = document.getElementById("clocktable");
	var tbd = ghds.getElementsByTagName("td");
	
	var dht = dh;
	var dsd = dm;
	var fsd = ds;
	var ampm = "";
	var dfs = ":";
	if(trueTheAMPM == true){
		ampm = "AM";
	}
	
	if(dm<10){
		dsd = 0 +""+ dm;
	}
	
	if(ds<10){
		fsd = 0 +""+ ds;
	}
	
	if(dms>=500){
		dfs = " ";
	}
	
	if(dh > 12 && trueTheAMPM == true){
		ampm = "PM";
		dht = dh % 12;
	}
	if(dht<10){
		dht = 0 +""+ dht;
	}
	var fsdas = new Array(dht + dfs + dsd, fsd+"<br>"+ampm);
	for(var i=0;i<tbd.length;i++){
		tbd[i].innerHTML = fsdas[i];
	}
}
setInterval("getMyDate()", 100);