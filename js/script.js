const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var tileSheet = new Image();
tileSheet.addEventListener('load', eventSheetLoaded , false);

tileSheet.src = "img/tanks_sheet.png";
var mapIndexOffset = -1;
var mapRows = 10;
var mapCols = 10;
var tileMap = [
	[32,31,31,31,31,31,1,1,31,32]
	, [1,1,1,1,26,1,1,1,1,32]
	, [32,1,26,1,26,1,26,1,1,32]
	, [32,26,1,1,1,1,1,26,1,32]
	, [32,1,1,26,26,26,1,26,1,32]
	, [32,1,1,1,1,1,1,26,1,32]
	, [32,1,1,1,1,1,1,26,1,32]
	, [1,1,26,1,26,1,26,1,1,1]
	, [32,1,1,1,1,1,1,1,1,32]
	, [32,31,31,31,1,31,31,31,31,32]
	];

var animationFrames = [1,2,3,4,5,6,7,8];
var frameIndex = 0;
var rotation = 90;

var x = 50;
var y = 50;

var dx = 1;
var dy = 0;	 


function eventSheetLoaded() {
 startUp()
}

function drawScreen1() {
	x = x+dx;
	y = y+dy;
	
	
	
 //draw a background so we can see the Canvas edges
 for (var rowCtr=0;rowCtr<mapRows;rowCtr++) {
		for (var colCtr=0;colCtr<mapCols;colCtr++){
			
			 var tileId = tileMap[rowCtr][colCtr]+mapIndexOffset;
			 var sourceX = Math.floor(tileId % 8) *32;
			 var sourceY = Math.floor(tileId / 8) *32;
			 ctx.drawImage(tileSheet, sourceX,
			 sourceY,32,32,colCtr*32,rowCtr*32,32,32);
			}
	}
 
if (x<148 && y==50)
{
 ctx.save();
 ctx.setTransform(1,0,0,1,0,0)
 var angleInRadians = rotation * Math.PI / 180;
 ctx.translate(x+16, y+16);
 ctx.rotate(angleInRadians);
 
 var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
 var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
 

 ctx.drawImage(tileSheet, sourceX, sourceY,32,32,-35,35,32,32);
 
 ctx.restore();
}
else if(x>148 && y<110)
{
	dx = 0;
	dy = 1;
	rotation = 180;
	ctx.save();
 ctx.setTransform(1,0,0,1,0,0)
 var angleInRadians = rotation * Math.PI / 180;
 ctx.translate(x+16, y+16);
 ctx.rotate(angleInRadians);
 
 var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
 var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
 

 ctx.drawImage(tileSheet, sourceX, sourceY,32,32,37,-5,32,32);
  ctx.restore();
}
else if(x<248 && y==110)
{
	dx = 1;
	dy = 0;
	rotation = 90;
	ctx.save();
 ctx.setTransform(1,0,0,1,0,0)
 var angleInRadians = rotation * Math.PI / 180;
 ctx.translate(x+16, y+16);
 ctx.rotate(angleInRadians);
 
 var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
 var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
 

 ctx.drawImage(tileSheet, sourceX, sourceY,32,32,-30,38,32,32);
  ctx.restore();
}
else if(x>248 && y<210)
{
	dx = 0;
	dy = 1;
	rotation = 180;
	ctx.save();
 ctx.setTransform(1,0,0,1,0,0)
 var angleInRadians = rotation * Math.PI / 180;
 ctx.translate(x+16, y+16);
 ctx.rotate(angleInRadians);
 
 var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
 var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
 

 ctx.drawImage(tileSheet, sourceX, sourceY,32,32,40,-2,32,32);
  ctx.restore();
}

frameIndex++;
 if(frameIndex ==animationFrames.length) {
	frameIndex=0;
 }
}


function startUp(){
 gameLoop();
}
function gameLoop() {
 window.setTimeout(gameLoop, 50);
 drawScreen1();
 console.log('x = '+ x);
 console.log('y = '+ y);
}
