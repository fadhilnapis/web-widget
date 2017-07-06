function siteMapHantuJS(volvo){
	if("entry" in volvo.feed){
		var nm = new Array();
		var mn = new Array();
		var ng = new Array();
		var nb = new Array();
		var kl="",kjl="";
		var k,lo;
		var b = volvo.feed.entry.length;
		for(var l=0;l<volvo.feed.entry.length;l++){
			var f=volvo.feed.entry[l];
			var t=f.link;
			var p,j;
			if(l<5){
				if(l==0){
					lo="<span style=\"color:red;font-style:italic;text-shadow:0 0 0.2em red;\"> - NEWEST!!!</span>";
				}else{
					lo="<span style=\"color:red;font-style:italic;text-shadow:0 0 0.2em red;\"> - NEW!</span>";
				}
			}else{
				lo="";
			}
			for(var g=0;g<t.length;g++){
				if(t[g].rel=="alternate"){
					p=t[g].href;
					j=t[g].title;
					j=j.charAt(0).toUpperCase()+""+j.substring(1)+lo;
				}
			}
			nm[l]=p;
			mn[l]=j;
			ng[l]=j;
		}
		mn.sort();
		for(var y=0;y<mn.length;y++){
			for(var jj=0;jj<mn.length;jj++){
				if(ng[jj]==mn[y]){
					nb[y]=nm[jj];
				}
			}
			if(mn[y-1]){
				if(mn[y].charAt(0)!=mn[y-1].charAt(0)){
					kl+="</ul><a name=\"list-"+mn[y].charAt(0)+"\"></a><br/>"+mn[y].charAt(0)+":-<ul>";
					kjl+="<a href=\"#list-"+mn[y].charAt(0)+"\">["+mn[y].charAt(0)+"]</a>";
				}
			}else{
				kl+="<a name=\"list-"+mn[y].charAt(0)+"\"></a><br/>"+mn[y].charAt(0)+":-<ul>";
				kjl+="<a href=\"#list-"+mn[y].charAt(0)+"\">["+mn[y].charAt(0)+"]</a>";
			}
			kl+="<li><a href=\""+nb[y]+"\">"+mn[y].split("<span style=\"c")[0]+"</a>"+mn[y].replace(mn[y].split("<span style=\"c")[0],"")+"</li>\n";
		}
		document.getElementById("allGet").innerHTML="<center>"+kjl+"</center>"+kl+"<center>"+kjl+"</center><div align=\"right\"><a href=\"http://hantujavascript.blogspot.com/\" target=\"_blank\"><img border=\"0\" height=\"18x\" id=\"goahaed1735\" src=\"http://4.bp.blogspot.com/-fpHObd2Scrw/T-QF0Q5SP8I/AAAAAAAAAcM/Ze-237G2C1k/s320/HantuJavascririptMininBanner.png\" width=\"65\" style=\"display: inline;opacity:0.5; filter:alpha(opacity=50)\"></a></div>";
		document.getElementById("allGet").setAttribute("onmouseover","document.getElementById('goahaed1735').style.opacity='1';document.getElementById('goahaed1735').style.filter='alpha(opacity=100)'");
		document.getElementById("allGet").setAttribute("onmouseout","document.getElementById('goahaed1735').style.opacity='0.5';document.getElementById('goahaed1735').style.filter='alpha(opacity=50)'");
	}
}