var cs = document.getElementById("canvas");
var ctx = cs.getContext("2d");
var countdelay=new Array();
var startgame=false, doneSa=true, autoplay=false, domisst=true, alwcount=0, ctxWidth, ctxHeight, va=0, goToPage=0, ellss=0, tapenum=0, domiss=0, marksss=0, markstats="start", lastgrade="nul", misss=0, miss=0, comb=0, setInt, setOnt, x=0, sg=0;
countdelay[0]=6;
countdelay[1]=10;
countdelay[2]=20;
countdelay[3]=0;
var asa=new Array(5);
var vasa=new Array(5);
var btn=new Array(5);
var img=new Array(15);
var statusnum=[0,0,0,0,0];
var n=new Array(), nc=new Array(), nt=new Array(), nl=new Array(), nx=new Array(), nh=new Array(), tapecover=new Array(tape.length), upkey=false,right=false,downkey=false,enterkey=false;
var gameSpeed=game.note.speed;
var sideWidth=game.sidebar.size;
var noteWidth=game.note.size;
var soundmp3=new Array();
for(var sader=0;sader<tape.length;sader++){
	soundmp3[sader]=new Audio(tape[sader].song);
}
var noteNum=game.note.num;
ctxWidth=sideWidth*2+noteWidth*noteNum;
ctxHeight=cs.height;
cs.setAttribute("width", ctxWidth);
for(var ik=0;ik<img.length;ik++){
	img[ik]=new Image();
}
for(var jq=0;jq<tapecover.length;jq++){
	tapecover[jq]=new Image()
}
function clear() {
  ctx.clearRect(0, 0, cs.width, cs.height);
}
function okeydowns(e){
	switch(event.keyCode){
		case 65: btn[0]=true;
		break;
		case 83: btn[1]=true;
		break;
		case 32: btn[2]=true;
		break;
		case 75: btn[3]=true;
		break;
		case 76: btn[4]=true;
		break;
		case 37: leftkey=true;
		break;
		case 38: upkey=true;
		break;
		case 39: right=true;
		break;
		case 40: downkey=true;
		break;
		case 13: enterkey=true;
		break;
	}
}
function okeyups(e){
	switch(event.keyCode){
		case 65: btn[0]=false;
		break;
		case 83: btn[1]=false;
		break;
		case 32: btn[2]=false;
		break;
		case 75: btn[3]=false;
		break;
		case 76: btn[4]=false;
		break;
		case 37: leftkey=false;
		break;
		case 38: upkey=false;
		break;
		case 39: right=false;
		break;
		case 40: downkey=false;
		break;
		case 13: enterkey=false;
		break;
	}
	for(var skas=0;skas<btn.length;skas++){
		if(btn[skas]){
			
		}else{
			asa[skas]=0;
			vasa[skas]=0;
		}
	}
	countdelay[3]=0;
}
document.onkeydown=okeydowns;
document.onkeyup=okeyups;
function doall(){
	clear();
	//make a note
	ctx.drawImage(tapecover[tapenum], sideWidth, 0, noteWidth*noteNum, 400);
	ctx.drawImage(img[5], sideWidth, 0, noteWidth*noteNum, 400);
	ctx.drawImage(img[7], 0, 0, sideWidth-10 , 400);
	ctx.drawImage(img[7], 10+sideWidth+noteWidth*noteNum, 0, sideWidth , 400);
	ctx.drawImage(img[8], sideWidth-10, 0, 10 , 400);
	ctx.drawImage(img[8], sideWidth+noteWidth*noteNum, 0, 10 , 400);
	for(var i=0;i<theMaps.split("/").length;i++){
		n[i]=theMaps.split("/")[i];
		nc[i]=n[i].split(",")[0];
		nx[i]=n[i].split(",")[1];
		nh[i]=n[i].split(",")[2];
	}
	for(var p=0;p<n.length;p++){
		ctx.drawImage(img[nc[p]-1], sideWidth+(nc[p]-1)*noteWidth+1, x-(nx[p]*40*gameSpeed), noteWidth-1 ,nh[p]*40*gameSpeed);
	}
	ctx.drawImage(img[6], 0, 400, ctxWidth, 17);
	ctx.fillStyle="#000000";
	ctx.fillRect(0,417, ctxWidth, 100);
	ctx.fillStyle="#FFFFFF";
	for(var ksl=0;ksl<noteNum;ksl++){
		ctx.fillRect(sideWidth+ksl*noteWidth, 0, 1, 400);
	}
	if(autoplay==true){
		for(var hp=0;hp<n.length;hp++){
			if(x+30-nx[hp]*40*gameSpeed>=400-nh[hp]*40&&x+30-nx[hp]*40*gameSpeed<=400){
				ctx.drawImage(img[nc[hp]-1+10], sideWidth+noteWidth*(nc[hp]-1)-20, 400-noteWidth/2-20, noteWidth+40 ,noteWidth+40);
			}
		}
	}
	for(var w=0;w<5;w++){
		if(btn[w]){
			for(var hp=0;hp<n.length;hp++){
				if(x-nx[hp]*40*gameSpeed>=(400-60-nh[hp]*40)&&x-nx[hp]*40*gameSpeed<=400){
					if(nc[hp]-1==w&&asa[w]==0){
						doneSa=false;
						if(vasa[w]==0){
							va =(400-nh[hp]*40)-(x-nx[hp]*40*gameSpeed);
							if(va<=60&&va>=40)
								markstats=game.hitStats[0];
							if(va<=40&&va>=20)
								markstats=game.hitStats[1];
							if(va<=20&&va>=5)
								markstats=game.hitStats[2];
							if(va<=5&&va>=-20)
								markstats=game.hitStats[3];
							if(va<=-20)
								markstats=game.hitStats[4];
							vasa[w]=1;
						}
						if(parseInt(sg)%80==0){
							marksss=marksss+1;
							comb=comb+1;
							miss=miss>=0 ? miss-.8 : 0;
							if(markstats==game.hitStats[0]){
								marksss=marksss+0;
								statusnum[0]=statusnum[0]+1;
							}
							if(markstats==game.hitStats[1]){
								marksss=marksss+1;
								statusnum[1]=statusnum[1]+1;
							}
							if(markstats==game.hitStats[2]){
								marksss=marksss+2;
								statusnum[2]=statusnum[2]+1;
							}
							if(markstats==game.hitStats[3]){
								marksss=marksss+3;
								statusnum[3]=statusnum[3]+1;
							}
							if(markstats==game.hitStats[4]){
								marksss=marksss-.5;
								statusnum[4]=statusnum[4]+1;
							}
						}
						ctx.drawImage(img[w+9], sideWidth+noteWidth*w, 400-noteWidth/2, noteWidth ,noteWidth);
						domiss=0;
					}
				}
			}
			if(doneSa){
				asa[w]=-1;
			}
			ctx.drawImage(img[w], sideWidth+noteWidth*w, 400, noteWidth ,17);
			
		}else{
			doneSa=true;
			domiss=0;
		}
	}
	if(comb!=0){
		if(markstats==game.hitStats[0])
			ctx.fillStyle=game.hitStatsColor[0];
		if(markstats==game.hitStats[1])
			ctx.fillStyle=game.hitStatsColor[1];
		if(markstats==game.hitStats[2])
			ctx.fillStyle=game.hitStatsColor[2];
		if(markstats==game.hitStats[3])
			ctx.fillStyle=game.hitStatsColor[3];
		if(markstats==game.hitStats[4])
			ctx.fillStyle=game.hitStatsColor[4];
		ctx.font=(40+(comb%3)*2)+"px Arial";
		ctx.textAlign = 'center';
		ctx.fillText(comb,ctxWidth/2,100);
		ctx.font=(30+(comb%3)*2)+"px Arial";
		ctx.fillText(markstats,ctxWidth/2,100+40);
	}
	for(var hp=0;hp<n.length;hp++){
		if(x-nx[hp]*40*gameSpeed>=400-nh[hp]*40&&x-nx[hp]*40*gameSpeed<=400){
			if(parseInt(sg)%80==0&&domiss==0){
				domisst=false;
				miss=miss+1;
				if(misss==miss-1&&misss!=0){
					comb=0;
				}
				misss=miss;
				domiss=1;
			}
		}
	}
	if(soundmp3[tapenum].ended){
		goToPage=4;
		setOnt=setInterval(doloading,10);
		clearInterval(setInt);
	}
	if(sg>=3000){
		if(sg==3000){soundmp3[tapenum].play();}
		x=soundmp3[tapenum].currentTime*10*40*gameSpeed+370;
		sg=sg+40;
	}else{
		ctx.font="40px Arial";
		ctx.textAlign = 'center';
		ctx.fillText(parseInt(sg/1000)+1,ctxWidth/2,100);
		sg=sg+40;
		if(sg>=1900&&sg<3000)x=x+14;
	}
}
function doloading(){
	clear();
	if(goToPage==0){
		for(var qw=0;qw<img.length;qw++){
			img[qw].onload=function(){
				ellss=ellss+1;
			}
			for(var da=0;da<tapecover.length;da++){
				tapecover[da].onload=function(){
					ellss=ellss+1;
				}
			}
		}
		if(ellss/(img.length+tapecover.length)*100==100){goToPage=1}
		img[0].src=game.note.btn[0];
		img[1].src=game.note.btn[1];
		img[2].src=game.note.btn[2];
		img[3].src=game.note.btn[1];
		img[4].src=game.note.btn[0];
		img[5].src=game.background;
		img[6].src=game.divider[0];
		img[7].src=game.sidebar.background;
		img[8].src=game.divider[1];
		img[9].src=game.note.hit[0];
		img[10].src=game.note.hit[1];
		img[11].src=game.note.hit[2];
		img[12].src=game.note.hit[1];
		img[13].src=game.note.hit[0];
		img[14].src=game.ungamebackground;
		for(var qe=0;qe<tapecover.length;qe++){
			tapecover[qe].src=tape[qe].cover;
		}
		var loadingwidth=300;
		var loadingheight=30;
		ctx.fillStyle="#000000";
		ctx.strokeStyle="#00ff00";
		ctx.lineWidth = 1;
		ctx.fillRect(0, 0, ctxWidth, ctxHeight);
		ctx.fillStyle="#ff0000";
		ctx.strokeStyle="#00ff00";
		ctx.lineWidth = 1;
		ctx.fillRect(ctxWidth/2-loadingwidth/2, ctxHeight/2-loadingheight/2, ellss/(img.length+tapecover.length)*loadingwidth, loadingheight);
		ctx.strokeRect(ctxWidth/2-loadingwidth/2, ctxHeight/2-loadingheight/2, loadingwidth, loadingheight);
		ctx.font="18px Arial";
		ctx.textAlign = 'center';
		ctx.fillStyle="#ffffff";
		ctx.fillText("Loading...",ctxWidth/2,ctxHeight/2-23);
		ctx.font="18px Arial";
		ctx.textAlign = 'center';
		ctx.fillStyle="#0000ff";
		ctx.fillText(parseInt(ellss/(img.length+tapecover.length)*100)+"%",ctxWidth/2,ctxHeight/2+7);
	}else if(goToPage==1){
		var wstart1=120;
		var hstart1=25;
		ctx.drawImage(img[14], 0, 0, ctxWidth, ctxHeight);
		
		if(enterkey&&alwcount!=1){
			alwcount=1;
		}
		if(alwcount==1){
			ctx.fillStyle="#000000";
			ctx.strokeStyle="#ff0000";
			ctx.fillRect((6-countdelay[0])*ctxWidth/12+(ctxWidth/2-wstart1/2), ctxHeight/2-hstart1/2, wstart1, hstart1);
			ctx.strokeRect((6-countdelay[0])*ctxWidth/12+(ctxWidth/2-wstart1/2), ctxHeight/2-hstart1/2, wstart1, hstart1);
			ctx.font="18px arial"
			ctx.textAlign = 'center';
			ctx.fillStyle="#FF5555";
			ctx.fillText("START", (6-countdelay[0])*ctxWidth/12+(ctxWidth/2),	ctxHeight/2+7);
			countdelay[0]=countdelay[0]-0.5;
			if(countdelay[0]+5==0){
				alwcount=0;
				goToPage=2;
				countdelay[0]=6;
			}
		}else{
			ctx.fillStyle="#000000";
			ctx.strokeStyle="#ff0000";
			ctx.fillRect(ctxWidth/2-wstart1/2, ctxHeight/2-hstart1/2, wstart1, hstart1);
			ctx.strokeRect(ctxWidth/2-wstart1/2, ctxHeight/2-hstart1/2, wstart1, hstart1);
			
			ctx.font="18px arial"
			ctx.textAlign = 'center';
			ctx.fillStyle="#FF5555";
			ctx.fillText("START", ctxWidth/2,	ctxHeight/2+7);
		}
		
	}else if(goToPage==2){
		var wstart1=(noteWidth-20)*noteNum;
		var hstart1=24;
		var iwstart1=100;
		var ihstart1=100;
		var wpadding1=20;
		var hpadding1=2;
		var starter1=50;
		var wstarter1=90;
		var fostat1=18;
		var lastpos=130;
		var sda=new Array();
		ctx.drawImage(img[14], 0, 0, ctxWidth, ctxHeight);
		
		ctx.fillStyle="#000000";
		ctx.strokeStyle="#00ffff";
		ctx.lineWidth = 1;
		ctx.fillRect(wstarter1+ctxWidth/2-wstart1/2-(wpadding1/2), starter1-(wpadding1/2), wstart1+(lastpos-wstarter1)+wpadding1, (hstart1+hpadding1)*15+wpadding1*2);
		ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2-(wpadding1/2), starter1-(wpadding1/2), wstart1+(lastpos-wstarter1)+wpadding1, (hstart1+hpadding1)*15+wpadding1*2);
		ctx.fillRect(wstarter1/2-(wpadding1/2)+4, starter1-(wpadding1/2), (wstarter1*2)+wpadding1-10, 250);
		ctx.strokeRect(wstarter1/2-(wpadding1/2)+4, starter1-(wpadding1/2), (wstarter1*2)+wpadding1-10, 250);
		ctx.lineWidth = 1;
		ctx.drawImage(tapecover[tapenum], wstarter1, starter1, iwstart1, ihstart1);
		ctx.strokeStyle="#ffffff";
		ctx.strokeRect(wstarter1, starter1, iwstart1, ihstart1);
		ctx.font="15px arial"
		ctx.fillStyle="#ff5555";
		ctx.textAlign = 'left';
		ctx.fillText(tape[tapenum].title, wstarter1/2+4, starter1+wstarter1+hpadding1+(fostat1*2));
		ctx.font=fostat1-3+"px arial"
		ctx.fillStyle="#666666";
		ctx.fillText("Note Number:"+tape[tapenum].note.split("/").length, wstarter1/2+4,	starter1+wstarter1+hpadding1+(fostat1*4));
		audLength=parseInt(soundmp3[tapenum].duration/60)+":"+((parseInt(soundmp3[tapenum].duration)-(60*parseInt(soundmp3[tapenum].duration/60)))<10?0+""+(parseInt(soundmp3[tapenum].duration)-(60*parseInt(soundmp3[tapenum].duration/60))):(parseInt(soundmp3[tapenum].duration)-(60*parseInt(soundmp3[tapenum].duration/60))));
		ctx.fillText("Duration:"+audLength, wstarter1/2+4,	starter1+wstarter1+hpadding1+(fostat1*6));
		
		ctx.fillStyle="#0000ff";
		ctx.strokeStyle="#00ff00";
		ctx.lineWidth = 1;
		ctx.fillRect(wstarter1+ctxWidth/2-wstart1/2, starter1-3, wstart1+(lastpos-wstarter1), hstart1);
		ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2, starter1-3, wstart1+(lastpos-wstarter1), hstart1);
		ctx.font=fostat1+"px arial"
		ctx.fillStyle="#ffffff";
		ctx.textAlign = 'left';
		ctx.fillText("Title", wstarter1+ctxWidth/2-wstart1/2+wpadding1,	starter1-3+(fostat1));
		ctx.font=fostat1+"px arial"
		ctx.fillStyle="#ffffff";
		ctx.textAlign = 'right';
		ctx.fillText("Note", wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-20,	starter1-3+(fostat1));
		ctx.fillText("Duration", wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-60-20,	starter1-3+(fostat1));
		if(enterkey&&alwcount!=1){
			alwcount=1;
		}
		if(alwcount==1){
			for(var gk=0;gk<tape.length;gk++){
				if(gk==tapenum){
					var audLength="loading...";
					ctx.fillStyle="#000000";
					ctx.strokeStyle="#ff0000";
					ctx.lineWidth = 1;
					ctx.fillRect(wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
					ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
					
					ctx.font=fostat1+"px arial"
					ctx.fillStyle="#ff5555";
					ctx.textAlign = 'left';
					ctx.fillText(tape[gk].title, wstarter1+ctxWidth/2-wstart1/2+wpadding1,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
					
					ctx.font=fostat1-3+"px arial"
					ctx.fillStyle="#666666";
					ctx.textAlign = 'right';
					ctx.fillText(tape[gk].note.split("/").length, wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
					audLength=parseInt(soundmp3[gk].duration/60)+":"+((parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60)))<10?0+""+(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))):(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))));
					ctx.fillText(audLength, wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-60-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
					
				}else{
					var sdasdas="loading...";
					ctx.fillStyle="#000000";
					ctx.strokeStyle="#ff0000";
					ctx.lineWidth = 1;
					ctx.fillRect(((6-countdelay[0])*ctxWidth/12)+wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
					ctx.strokeRect(((6-countdelay[0])*ctxWidth/12)+wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
					
					ctx.font=fostat1+"px arial"
					ctx.fillStyle="#ff5555";
					ctx.textAlign = 'left';
					ctx.fillText(tape[gk].title, (6-countdelay[0])*ctxWidth/2-wstart1/2+wstarter1+wpadding1,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
					
					ctx.font=fostat1-3+"px arial"
					ctx.fillStyle="#666666";
					ctx.textAlign = 'right';
					ctx.fillText(tape[gk].note.split("/").length, (6-countdelay[0])*(ctxWidth/2-wstart1/2)+wstarter1+wstart1+(lastpos-wstarter1)-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
					audLength=parseInt(soundmp3[gk].duration/60)+":"+((parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60)))<10?0+""+(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))):(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))));
					ctx.fillText(audLength, (6-countdelay[0])*(ctxWidth/2-wstart1/2)+wstarter1+wstart1+(lastpos-wstarter1)-60-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
				}
			}
			ctx.strokeStyle="#00ff00";
			ctx.lineWidth = 2;
			ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2, starter1+(hstart1*(tapenum+1)+hpadding1*(tapenum+1)), wstart1+(lastpos-wstarter1), hstart1);
			countdelay[0]=countdelay[0]-0.5;
			if(countdelay[0]+5==0){
				alwcount=0;
				goToPage=3;
				countdelay[0]=6;
				startgame=true;
			}
		}else{
			for(var gk=0;gk<tape.length;gk++){
				var audLength="loading...";
				ctx.fillStyle="#000000";
				ctx.strokeStyle="#ff0000";
				ctx.lineWidth = 1;
				ctx.fillRect(wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
				ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2, starter1+((hstart1*(gk+1))+(hpadding1*(gk+1))), wstart1+(lastpos-wstarter1), hstart1);
				
				ctx.font=fostat1+"px arial"
				ctx.fillStyle="#ff5555";
				ctx.textAlign = 'left';
				ctx.fillText(tape[gk].title, wstarter1+ctxWidth/2-wstart1/2+wpadding1,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
				
				ctx.font=fostat1-3+"px arial"
				ctx.fillStyle="#666666";
				ctx.textAlign = 'right';
				ctx.fillText(tape[gk].note.split("/").length, wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
				audLength=parseInt(soundmp3[gk].duration/60)+":"+((parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60)))<10?0+""+(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))):(parseInt(soundmp3[gk].duration)-(60*parseInt(soundmp3[gk].duration/60))));
				ctx.fillText(audLength, wstarter1+(ctxWidth/2-wstart1/2)+wstart1+(lastpos-wstarter1)-60-20,	starter1+((hstart1*(gk+1))+(hpadding1*(gk+1)))+(fostat1));
				
			}
			//-------------------------------------------------------------------di SINI
			if(countdelay[3]>=9){
				countdelay[3]=0;
			}
			if(downkey&&tapenum+1>=0&&tapenum+1<tape.length){if(countdelay[3]==0){tapenum=tapenum+1;}countdelay[3]=countdelay[3]+1;}
			if(upkey&&tapenum-1>=0&&tapenum-1<tape.length){if(countdelay[3]==0){tapenum=tapenum-1;}countdelay[3]=countdelay[3]+1;}
			ctx.strokeStyle="#00ff00";
			ctx.lineWidth = 2;
			ctx.strokeRect(wstarter1+ctxWidth/2-wstart1/2, starter1+(hstart1*(tapenum+1)+hpadding1*(tapenum+1)), wstart1+(lastpos-wstarter1), hstart1);
		}
	}else if(goToPage==3&&startgame){
		theMaps=tape[tapenum].note;
		clearInterval(setOnt);
		setInt=setInterval(doall,10);
	}else if(goToPage==4){
		if(countdelay[1]!=0){
			ctx.drawImage(tapecover[tapenum], sideWidth, 0, noteWidth*noteNum, 400);
			ctx.drawImage(img[5], sideWidth, 0, noteWidth*noteNum, 400);
			ctx.drawImage(img[7], 0, 0, sideWidth-10 , 400);
			ctx.drawImage(img[7], 10+sideWidth+noteWidth*noteNum, 0, sideWidth , 400);
			ctx.drawImage(img[8], sideWidth-10, 0, 10 , 400);
			ctx.drawImage(img[8], sideWidth+noteWidth*noteNum, 0, 10 , 400);
			ctx.drawImage(img[6], 0, 400, ctxWidth, 17);
			ctx.fillStyle="#000000";
			ctx.fillRect(0,417, ctxWidth, 100);
			ctx.fillStyle="#FFFFFF";
			for(var ksl=0;ksl<noteNum;ksl++){
				ctx.fillRect(sideWidth+ksl*noteWidth, 0, 1, 400);
			}
			countdelay[1]=countdelay[1]-.5;
		}
		ctx.drawImage(img[14], (ctxWidth-(10-countdelay[1])*(ctxWidth/10)), 0, ctxWidth, ctxHeight);
		if(countdelay[2]!=0){
			countdelay[2]=countdelay[2]-.5;
		}else{
			var themarkscent=(marksss-miss*3)/(marksss+1)*100;
			ctx.font="50px arial"
			ctx.textAlign = 'center';
			if(themarkscent==100){
				lastgrade="S";
				ctx.fillStyle="#FFe811";
			}else if(themarkscent>=97.5&&themarkscent<100){
				lastgrade="A++";
				ctx.fillStyle="#FFD700";
			}else if(themarkscent>=95&&themarkscent<97.5){
				lastgrade="A+";
				ctx.fillStyle="#FFD700";
			}else if(themarkscent>=90&&themarkscent<95){
				lastgrade="A";
				ctx.fillStyle="#FFD700";
			}else if(themarkscent>=85&&themarkscent<90){
				lastgrade="B+";
				ctx.fillStyle="#FFD700";
			}else if(themarkscent>=80&&themarkscent<85){
				lastgrade="B";
				ctx.fillStyle="#ffff00";
			}else if(themarkscent>=75&&themarkscent<80){
				lastgrade="B-";
				ctx.fillStyle="#ffff00";
			}else if(themarkscent>=50&&themarkscent<75){
				lastgrade="C";
				ctx.fillStyle="#00ff00";
			}else if(themarkscent>=30&&themarkscent<50){
				lastgrade="D";
				ctx.fillStyle="#FFA500";
			}else if(themarkscent>=15&&themarkscent<30){
				lastgrade="E";
				ctx.fillStyle="#ff3333";
			}else if(themarkscent>0&&themarkscent<15){
				lastgrade="E-";
				ctx.fillStyle="#ff3333";
			}else if(themarkscent<=0){
				lastgrade="F-";
				ctx.fillStyle="#ff0000;";
			}
			if(lastgrade!="nul"){
				ctx.fillText(lastgrade, ctxWidth/2,	ctxHeight/4+7);
				ctx.font="25px arial"
				for(var gaban=0;gaban<statusnum.length;gaban++){
					ctx.textAlign = 'left';
					ctx.fillStyle=game.hitStatsColor[gaban];
					ctx.fillText(game.hitStats[gaban], ctxWidth/2-180,	(ctxHeight/4)+25*(gaban+1)+10);
					ctx.textAlign = 'center';
					ctx.fillText(" : ", ctxWidth/2,	(ctxHeight/4)+25*(gaban+1)+10);
					ctx.textAlign = 'left';
					ctx.fillText(statusnum[gaban], ctxWidth/2+30,	(ctxHeight/4)+25*(gaban+1)+10);
				}
				ctx.fillStyle="#FFA500";
				ctx.textAlign = 'left';
				ctx.fillText("Miss", ctxWidth/2-180,	(ctxHeight/4)+25*(statusnum.length+1)+10);
				ctx.textAlign = 'center';
				ctx.fillText(" : ", ctxWidth/2,	(ctxHeight/4)+25*(statusnum.length+1)+10);
				ctx.textAlign = 'left';
				ctx.fillText(parseInt(miss), ctxWidth/2+30,	(ctxHeight/4)+25*(statusnum.length+1)+10);
				
				
				ctx.font="40px arial"
				ctx.fillStyle="#0000ff";
				ctx.textAlign = 'left';
				ctx.fillText("Score", ctxWidth/2-120,	(ctxHeight/4)+25*(statusnum.length+1)+40);
				ctx.textAlign = 'center';
				ctx.fillText(" : ", ctxWidth/2,	(ctxHeight/4)+25*(statusnum.length+1)+40);
				ctx.textAlign = 'left';
				ctx.fillText(marksss, ctxWidth/2+20,	(ctxHeight/4)+25*(statusnum.length+1)+40);
			}
		}
	}else{
		
	}
}
setOnt=setInterval(doloading,10);