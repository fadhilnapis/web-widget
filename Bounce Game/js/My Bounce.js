//get a reference to the canvas
var ctx = $('#canvas')[0].getContext("2d");
var sidebar = document.getElementById("canvasdetail");

ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

var cntrwdth;
var cntrhght;
var ballsize = ball.size;
var ballspeed = ball.speed;
var state = "play";
var secokdfj = 0;
var nyawa = game.life;
var x = 200;
var y = 200;
var dx = 2;
var dy = ballspeed-dx;
var WIDTH;
var HEIGHT;
var ctx;
var markah=0;
var masa=0;
var bilanganhentakkan=0;
var markahbonus="calculate...";
var masamrkditolak="calculate...";
var canvasfocus = true;

var paddlex;
var paddleh;
var paddlew;

var rightDown = false;
var leftDown = false;

var canvasMinX;
var canvasMaxX;

var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;
var BRICKSPACEW;
var BRICKSPACEH;
var SIDESPACE;

var ejsda = new Array();
var rowcolors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00"];
var paddlecolor = "#0000FF";
var ballcolor = "#FFFFFF";
var backcolor = game.background;
var daosk = brick.numOfRow * brick.numOfCol;
var jumlahmarkah = 0;
var ballimg;
var paddleimg;

function init() {

  paddleimg = new Image();
  paddleimg.src = paddle.image;
  ballimg = new Image();
  ballimg.src = ball.image;
  allowpadd=true
  allowball=true
  $(paddleimg).on('error',function(event) {
    allowpadd=false
  });
  $(ballimg).on('error',function(event) {
    allowball=false
  });

  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  intervalId = setInterval(draw, 10);
  sidebar.style.height='50px';
  sidebar.style.width=WIDTH+'px';
  cntrwdth=WIDTH/2;
  cntrhght=HEIGHT/2;
}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function init_paddle() {
  paddlex = WIDTH / 2;
  paddleh = paddle.height;
  paddlew = paddle.width;
}


//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
  if (evt.keyCode == 13){
	if(canvasfocus==true){
	x = cntrwdth;
	y = cntrhght;
	initbricks();
	secokdfj = 0;
	nyawa = 3;
	markah = 0;
    markahbonus="calculate...";
    masamrkditolak="calculate...";
	daosk = brick.numOfRow * brick.numOfCol;
	clearInterval(intervalId);
	intervalId = setInterval(draw, 10);
	return false;
	}else{
	return true;
	}
  }
  if (evt.keyCode == 32&&state=="play"){
	if(canvasfocus==true){
	if(intervalId>0){
	  clearInterval(intervalId);
	  intervalId = 0;
	}else{
	  intervalId = setInterval(draw, 10);
	}
	return false;
	}else{
	return true;
	}
  }
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function init_mouse() {
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + WIDTH;
}
function onMousClick(evt){
	if(mymouseX>WIDTH-200&&mymouseX<WIDTH&&mymouseY>HEIGHT-20&&mymouseY<HEIGHT&&state=="win"){
		window.open("https://fadhilnapis.github.io/","HJS");
	}
	if(mymouseX>0&&mymouseX<400&& mymouseY>0&& mymouseY<400){
  	canvasfocus=true;
	}else{
  	canvasfocus=false;
	}
}
function onMouseMove(evt) {
  mymouseX=evt.pageX-canvasMinX;
  mymouseY=evt.pageY-$("#canvas").offset().top;
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = evt.pageX - canvasMinX -50;
  }
  if(mymouseX>WIDTH-200&&mymouseX<WIDTH&&mymouseY>HEIGHT-20&&mymouseY<HEIGHT&&state=="win"){
	document.body.style.cursor="pointer";
  }else{
	document.body.style.cursor="auto";
  }
}

$(document).mousemove(onMouseMove);
$(document).click(onMousClick);

function initbricks() {
  SIDESPACE = brick.paddingspace;
  NROWS = brick.numOfRow;
  NCOLS = brick.numOfCol;
  BRICKWIDTH = (WIDTH/NCOLS)-SIDESPACE;
  BRICKHEIGHT = brick.height;
  PADDING = brick.padding;
  BRICKSPACEW = brick.spacecol;
  BRICKSPACEH = brick.spacerow;

  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
}
function draw() {
  clear();
  
  ctx.fillStyle = backcolor;
  rect(0,0, WIDTH,HEIGHT);
  ctx.fillStyle = ballcolor;
  if (allowball)
    ctx.drawImage(ballimg, x,y ,ballsize,ballsize);
  if (rightDown) paddlex += paddle.speed;
  else if (leftDown) paddlex -= paddle.speed;
  if (allowpadd)
    ctx.drawImage(paddleimg, paddlex, HEIGHT-paddleh, paddlew,paddleh);
  //draw bricks
  for (i=0; i < NROWS; i++) {
  if(i>=5)rowcolors[i] = rowcolors[i-5];
  ctx.fillStyle = rowcolors[i];
    for (j=0; j < NCOLS; j++) {
      if (bricks[i][j] == 1) {
        rect((j * (BRICKWIDTH + PADDING)) + PADDING+(BRICKWIDTH*BRICKSPACEW), 
             (i * (BRICKHEIGHT + PADDING)) + PADDING+(BRICKHEIGHT*BRICKSPACEH),
             BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }
  masa+=1;
  if(secokdfj<=300){
		ctx.font="bold 200px Arial";
		ctx.textAlign="center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#0000FF";
		if(secokdfj>=0&&secokdfj<=100)ctx.fillText("3", cntrwdth,cntrhght);
		if(secokdfj>=100&&secokdfj<=200)ctx.fillText("2", cntrwdth,cntrhght);
		if(secokdfj>=200&&secokdfj<=300)ctx.fillText("1", cntrwdth,cntrhght);
		secokdfj++;
	}else{
	if(daosk==0){
		markahbonus=((masa/(bilanganhentakkan+1))+(1250-(bilanganhentakkan*50))<0) ? 0: parseInt((masa/bilanganhentakkan)+(1250-(bilanganhentakkan*50)));
		masamrkditolak=(masa-ejsda[25]);
		if(jumlahmarkah+markahbonus-masamrkditolak<0){
   		ctx.font="bold 50px monospace";
		ctx.fillStyle = "#EE0000";
		ctx.textAlign="center";
		ctx.fillText("You Lost!", cntrwdth,130);
		}else{
   		ctx.font="bold 50px monospace";
		ctx.fillStyle = "#00EE00";
		ctx.textAlign="center";
		ctx.fillText("You Win!", cntrwdth,130);
		}
   		ctx.font="bold 20px monospace";
		ctx.fillStyle = "#FF7777";
		ctx.textAlign="start";ctx.fillText("Num Of Life  :", 75,160);ctx.textAlign="end";ctx.fillText(parseInt(nyawa), 320,160);
		ctx.fillStyle = "#77DDDD";
		ctx.textAlign="start";ctx.fillText("Real Score   :", 75,180);ctx.textAlign="end";ctx.fillText(parseInt(jumlahmarkah), 320,180);
		ctx.fillStyle = "#77DD77";
		ctx.textAlign="start";ctx.fillText("Bonus Score  :", 75,cntrhght);ctx.textAlign="end";ctx.fillText("+"+parseInt(markahbonus), 320,cntrhght);
		ctx.fillStyle = "#FF0000";
		ctx.textAlign="start";ctx.fillText("Time Rejected:", 75,220);ctx.textAlign="end";ctx.fillText("-"+parseInt(masamrkditolak), 320,220);
		ctx.font="bold 30px monospace";
		ctx.fillStyle = "#F000FF";
		ctx.textAlign="center";
		ctx.fillText("Total Score", cntrwdth,250);
		ctx.fillText(parseInt(jumlahmarkah+markahbonus-masamrkditolak), cntrwdth,280);
		
		ctx.font="bold 13px 'tempus sans itc'";
		ctx.fillStyle = "#00FFFF";
		ctx.textAlign="end";
		ctx.fillText("FadhilNapis.github.io", WIDTH-5,HEIGHT-10);
		ctx.fillStyle = "#FFFF00";
		ctx.fillText("by Fadzz at", WIDTH-210,HEIGHT-10);
		
		state="win";
		clearInterval(intervalId);
  }
  //have we hit a brick?
  rowheight = BRICKHEIGHT + PADDING;
  colwidth = BRICKWIDTH + PADDING;
  row = Math.floor(y/rowheight)-BRICKSPACEH;
  col = Math.floor(x/colwidth)-BRICKSPACEW;
  tttt = (NROWS * rowheight)+(rowheight*BRICKSPACEH);
  
  //if so, reverse the ball and mark the brick as broken
  if (y < tttt && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    dy = -dy;
	daosk-=1;
	markah+=200;
	if(daosk==24)ejsda[25]=masa;
	if(daosk<=24)ejsda[0]=masa;
    bricks[row][col] = 0;
  }
 
  if (x + dx +ballsize > WIDTH || x + dx < 0)
    dx = -dx;

  if (y + dy < 0)
    dy = -dy;
  else if (y + dy +ballsize > HEIGHT) {
    if (x +ballsize > paddlex && x+(ballsize/2) < paddlex + paddlew){
		bilanganhentakkan+=1;
		if(x+(ballsize/2) > paddlex && x+(ballsize/2) <= paddlex +(paddlew/5)*1){dx = (dx>0)? (ballspeed/5)*4 : -((ballspeed/5)*4);dy=ballspeed-((ballspeed/5)*4)}
		if(x+(ballsize/2) > paddlex +((paddlew/5)*1) && x+(ballsize/2) <= paddlex +(paddlew/5)*2){dx = (dx>0)? ((ballspeed/5)*2) : -((ballspeed/5)*2);dy=ballspeed-((ballspeed/5)*2)}
		if(x+(ballsize/2) > paddlex +((paddlew/5)*2) && x+(ballsize/2) <= paddlex +(paddlew/5)*3){dx = (dx>0)? (ballspeed/5) : -(ballspeed/5);dy=ballspeed-(ballspeed/5)}
		if(x+(ballsize/2) < paddlex +((paddlew/5)*4) + paddlew && x+(ballsize/2) >= paddlex +((paddlew/5)*3)){dx = (dx>0)? ((ballspeed/5)*2) : -((ballspeed/5)*2);dy=ballspeed-((ballspeed/5)*2)}
		if(x+(ballsize/2) < paddlex +((paddlew/5)*5) + paddlew && x+(ballsize/2) >= paddlex +((paddlew/5)*4)){dx = (dx>0)? ((ballspeed/5)*4) : -((ballspeed/5)*4);dy=ballspeed-((ballspeed/5)*4)}
		dy = -dy;
    }else{
		if(nyawa>=1){
			x = cntrwdth;
			y = cntrhght;
			secokdfj = 0;
			nyawa-=1;
			markah-=25;
		}else{
			ctx.font="bold 50px monospace";
			ctx.textAlign="end";
			ctx.fillStyle = "#FF0000";
			ctx.fillText("You Lost", 330,230);
			state="lost";
			masamrkditolak='infinity<0';
			markahbonus='0';
			clearInterval(intervalId);
		}
	}
  }
  x += dx;
  y += dy;
  }
  jumlahmarkah = (markah*2<0) ? 0 : parseInt((markah*2)/((200*(NROWS*NCOLS)*2)/10000));
  sidebar.innerHTML='<table style="font:normal 13px tomaha;width:100%;overflow:auto;"><tbody><tr><td>Nyawa : '+nyawa+'</td><td>Markah Sebenar : '+jumlahmarkah+'</td><td>Masa : '+parseInt((masa/100)/60)+':'+parseInt((masa/100)%60)+':'+parseInt(((masa/100)-parseInt(masa/100))*10)+'</td></tr><tr><td>Masa Ditolak : '+masamrkditolak+'</td><td>Markah Bonus : '+markahbonus+'</td></tr></tbody></table>';
}

init();
initbricks();
init_mouse();
init_paddle();