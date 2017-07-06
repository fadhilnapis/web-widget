function siapDulu(){
	showVideoTime='00:00';
	theMovie=document.getElementById("theMovie");
	playPause=document.getElementById("playPause");
	totalVidTime=document.getElementById('totalVidTime');
	buffererBar=document.getElementById('buffererBar');
	currentVidTime=document.getElementById("currentVidTime");
	volumeBar=document.getElementById('volumeBar');
	volumeValue=document.getElementById('volumeValue');
	valumeMuter=document.getElementById('valumeMuter');
	showCurrnetTime=document.getElementById('showCurrnetTime');
	vidTimeLength=parseFloat(totalVidTime.offsetWidth-6);
	vidVolLength=parseFloat(87-6);
	tyVolume=theMovie.volume;
	tyVolSiz=volumeValue.style.width;
	theMovie.volume = 0.5;
	videostatus=0;
	
	playPause.onclick = playOrPause;
	totalVidTime.addEventListener('click', goOnTime, false);
	volumeBar.addEventListener('mouseup', chgeValume, false);
	volumeValue.addEventListener('mouseup', chgeValume, false);
	valumeMuter.addEventListener('click', muteVidSound, false);
	theMovie.addEventListener('click', playOrPause, false);
}
function stopVid(){
		theMovie.pause();
		theMovie.currentTime;
		currentVidTime.style.width='0px';
		playPause.innerHTML='Play';
}
function playOrPause(){
	if(!theMovie.paused && !theMovie.ended){
		theMovie.pause();
		playPause.innerHTML='Play';
		window.clearInterval(updateRuntime);
		videostatus ='pause';
	}else{
		theMovie.play();
		videostatus ='play';
		playPause.innerHTML='Pause';
		updateRuntime=setInterval(runTime, 10);
	}
}
function runTime(){
	var sizeBufTime = parseFloat(theMovie.buffered.end(0) * vidTimeLength / theMovie.duration);
	buffererBar.style.width=sizeBufTime+'px';
	//buffer
	if(!theMovie.ended){
		var sizeCurTime = parseFloat(theMovie.currentTime * vidTimeLength / theMovie.duration);
		currentVidTime.style.width=sizeCurTime+'px';
	}else{
		currentVidTime.style.width='0px';
		playPause.innerHTML='Replay';
		window.clearInterval(updateRuntime);
	}
	if(theMovie.duration==/nan/){
		showCurrnetTime.innerHTML='00:00/00:00';
	}else{
		showCurrnetTime.innerHTML=formatingVidTime(theMovie.currentTime)+'/'+ formatingVidTime(theMovie.duration);
	}
	if((theMovie.buffered.end(0)-theMovie.currentTime)<=2&&(theMovie.duration-theMovie.buffered.end(0))>=2){
		theMovie.pause();
		playPause.innerHTML='Buffer...';
		videostatus +='buffering';
	}
	if((theMovie.buffered.end(0)-theMovie.currentTime)>=7&&playPause.innerHTML!='Play'){
		theMovie.play();
		playPause.innerHTML=='Pause';
	}
}
function formatingVidTime(time){
	var seconds = Math.round(time);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	seconds = Math.floor(seconds % 60);
	seconds = (seconds >= 10) ? seconds : "0" + seconds;
	showVideoTime=(hours==0) ? minutes+':'+seconds : hours+':'+minutes+':'+seconds;
	return showVideoTime;
}
function goOnTime(e){
	if(!theMovie.ended){
		if(videostatus.search('play')>=0){
			playPause.innerHTML='Pause';
			theMovie.play();
		}else{
			playPause.innerHTML='Play';
			theMovie.pause();
		}
		var mouseX=e.pageX - totalVidTime.offsetLeft;
		var newtime=mouseX*theMovie.duration/vidTimeLength;
		theMovie.currentTime=newtime;
		currentVidTime.style.width=mouseX+'px';
	}
}
function chgeValume(g){
	if(!g)g=this;
	volumeValue.style.display='none';
	var posX = g.pageX - volumeBar.offsetLeft;
	var newpos = posX * 10 / vidVolLength;
	theMovie.volume = newpos / 10;
	volumeValue.style.width=posX+'px';
}
function muteVidSound(){
	if(theMovie.volume*10>=0.01){
	//mute
		tyVolume=theMovie.volume;
		tyVolSiz=volumeValue.style.width;
		theMovie.volume=0;
		this.innerHTML="^";
		volumeValue.style.display='none';
	}else{
	//unmute
		this.innerHTML="@";
		volumeValue.style.width=tyVolSiz;
		theMovie.volume = tyVolume;
		volumeValue.style.display='block';
	}
}
/*
<table border="1">
 <tbody><tr>
  <td width="76">
  
  </td>
  <td width="151">
  <p>Chrome</p>
  </td>
  <td width="87">
  <p>Firefox</p>
  </td>
  <td width="74">
  <p>Safari</p>
  </td>
  <td width="74">
  <p>Opera</p>
  </td>
  <td width="173">
  <p>Internet Explorer</p>
  </td>
 </tr>
 <tr>
  <td width="76">
  <p>CSS</p>
  </td>
  <td width="151">
  <p align="center" style="
    color: green;
">+7<br>(recommended)</p>
  </td>
  <td width="87">
  <p align="center" style="
    color: green;
">+7</p>
  </td>
  <td width="74">
  <p align="center" style="
    color: orange;
">+5</p>
  </td>
  <td width="74">
  <p align="center" style="
    color: orange;
">+8</p>
  </td>
  <td width="173">
  <p align="center" style="
    color: red;
">+9<br>(not recommended)</p>
  </td>
 </tr>
 
 <tr>
  <td width="76">
  <p>Javascript</p>
  </td>
  <td width="151">
  <p align="center" style="
    color: green;
">+10<br>(recommended)</p>
  </td>
  <td width="87">
  <p align="center" style="
    color: green;
">+8</p>
  </td>
  <td width="74">
  <p align="center" style="
    color: orange;
">+5</p>
  </td>
  <td width="74">
  <p align="center" style="
    color: orange;
">+8</p>
  </td>
  <td width="173">
  <p align="center" style="
    color: red;
">+9<br>(not recommended)</p>
  </td>
 </tr>
 </tbody></table>
*/