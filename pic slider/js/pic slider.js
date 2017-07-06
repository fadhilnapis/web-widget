function starterSliderJS(najiha){
	if("entry" in najiha.feed){
		for(var l=1;l<najiha.feed.entry.length;l++){
			var g,f,t,tt,tl,c='',h,iu,iw,gh;
			var o=new Array(),p=new Array(),q=new Array(),r=new Array(),s=new Array(),u=0;
			f=najiha.feed.entry[l];
			c=f.content.$t;
			t=f.link;
			if(c.search("<img")<=200){
				iu=c.split("<img")[1].split(">")[0];
				iu=iu.replace(/'/g, "\"");
				iu=iu.split('src="')[1].split('"')[0];
				var ig = new Image();
				ig.onload = function(){
					s[l]=this.width;
				}
				ig.src = iu;
				for(var g=0;g<t.length;g++){
					if(t[g].rel=="alternate"){
						tt=t[g].title;
						tl=t[g].href;
					}
				}
				o[l]=tt;
				p[l]=tl;
				q[l]=iu;
				document.getElementById('slideContent').innerHTML+='<div style="width:300px;display:inline-block;border:2px solid black;"><a href="'+p[l]+'\">'+o[l]+'<br/><img width="300" height="200" src="'+q[l]+'"/></a></div>';
			}
		}
		document.getElementById('slideContent').style.height="300px";
		document.getElementById('slideContent').style.overflow="hiden";
	}
}