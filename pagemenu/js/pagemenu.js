function startRimPage(dava){
var thisd="";
	if("entry" in dava.feed){
		var davafeed =dava.feed.entry;
		var t,d=0,s,g,catetext="",postitle={},postlink={},postcate={};
		for(t=0;t<davafeed.length;t++){
			s=0,g=0;
			while(davafeed[t].link[s].rel!="alternate"){
				s++;
			}
			if(davafeed[t].category){
				catetext="~";
				for(g=0;g<davafeed[t].category.length;g++){
					catetext += davafeed[t].category[g].term+", ";
				}
			}
			postitle[t] = davafeed[t].title.$t;
			postlink[t] = davafeed[t].link[s].href;
			if(postitle[t].search(/\[Maker\]/)>=0){
				sl[2].link[2].link[d]={name:postitle[t].split(/\[/)[0],link:postlink[t]}
				d++;
			}
		}
	}
	var x =sl[f];
	var ddd='';
	for(var f=0;f<sl.length;f++){
		x =sl[f];
		ddd+='<li><a '+((typeof x.link=='object')?"class='parent'":'href="'+x.link+'"')+'><span>'+x.name+'</span></a>';
		if(typeof x.link=='object'){
			x=x.link;
			ddd+='<div><ul>';
			for(var g=0;g<x.length;g++){
				ddd+='<li><a '+((typeof x[g].link=='object')?"class='parent'":'href="'+x[g].link+'"')+'><span>'+x[g].name+'</span></a>';
				if(typeof x[g].link=='object'){
					x=x[g].link;
					ddd+='<div><ul>';
					for(var h=0;h<x.length;h++){
						ddd+='<li><a '+((typeof x[h].link=='object')?"class='parent'":'href="'+x[h].link+'"')+'><span>'+x[h].name+'</span></a></li>';
					}
					ddd+='</ul></div>';
					break;
				}
				ddd+='</li>';
			}
			ddd+='</ul></div>';
		}
		ddd+='</li>';
	}
	document.getElementById('menu').innerHTML="<ul class='menu'>"+ddd+"</ul>";
	var gadsah = document.createElement("script");
	gadsah.src="js/menu.js";
	document.getElementsByTagName('head')[0].appendChild(gadsah)
}