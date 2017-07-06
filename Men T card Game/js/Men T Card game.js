var ctx = $('#MenTgame')[0].getContext("2d");
var sidebar = document.getElementById("canvasdetail");

var level = 0;
var message = "Welcome!";
var names = "The Coosen";
var playerselect = 4;
var cardlv = new Array(2,"A","K","Q","J",10,9,8,7,6,5,4,3);
var cardsp = new Array("S","H","C","D");
var cardhigh = new Array();
var rowcolor = new Array(1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f");
var rowcolors = "";
var WIDTH;
var HEIGHT;
var playerhand = new Array("","","","");
for(n=0;n<52;n++){
	for(lc=0;lc<4;lc++){
		for(lg=0;lg<13;lg++){
			cardhigh[lg+(13*lc)]=cardlv[lg]+cardsp[lc];
		}
	}
}
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

var rightDown = false;
var leftDown = false;
var upDown = false;
var downDown = false;
var Xpose = 200;
var Ypose = 350;
var Xball;
var Yball;
var vsdfa;
var dsa;
var Yball;
var allposballY;
var allspeedball;
function init(){
	Yball = 0;
	allposballY = new Array();
	allposballX = new Array();
	vsdfa = new Array();
	allspeedball = new Array();
	WIDTH = $("#MenTgame").width();
	HEIGHT = $("#MenTgame").height();
	intervalId = setInterval(draw, 10);
	cntrwdth=WIDTH/2;
	cntrhght=HEIGHT/2;
	Xball = Math.random()*WIDTH;
	dsa = Math.random();
	vsdfa[0] = -10000;
	vsdfa[1] = -10000;
	vsdfa[2] = -10000;
	vsdfa[3] = -10000;
	vsdfa[4] = -10000;
	allspeedball[0] = Math.random()*8;
	allspeedball[1] = Math.random()*8;
	allspeedball[2] = Math.random()*8;
	allspeedball[3] = Math.random()*8;
	allspeedball[4] = Math.random()*8;
	allspeedball[5] = Math.random()*8;
	for(var i=0;i<500;i++){
		allposballY[i] = Math.random()*10000;
		allposballX[i] = Math.random()*WIDTH;
	}
}
function onKeyDown(evt){
	if(evt.keyCode == 37) leftDown = true;
	else if(evt.keyCode == 38) upDown = true;
	else if(evt.keyCode == 39) rightDown = true;
	else if(evt.keyCode == 40) downDown = true;
}
function onKeyUp(evt){
	if(evt.keyCode == 37) leftDown = false;
	else if(evt.keyCode == 38) upDown = false;
	else if(evt.keyCode == 39) rightDown = false;
	else if(evt.keyCode == 40) downDown = false;
}
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
function draw(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	ctx.fillRect(Xpose, Ypose, 20,30);
	if(rightDown==true && Xpose <= WIDTH-20) Xpose++;
	else if(leftDown==true && Xpose >= 0) Xpose--;
	if(upDown==true && Ypose >= HEIGHT - 70) Ypose--;
	else if(downDown==true && Ypose <= HEIGHT - 40) Ypose++;
	for(var i=0;i<500;i++){
		circle(allposballX[i],vsdfa[Math.random()*4]+allspeedball[i],10);
	}
	vsdfa[0]+=allposballY[0];
	vsdfa[1]+=allposballY[1];
	vsdfa[2]+=allposballY[2];
	vsdfa[3]+=allposballY[3];
	vsdfa[4]+=allposballY[4];
}
init();