//session 1

// window.onload = draw; // Execute draw function when DOM is ready
// function draw() {
// 	// Assign our canvas element to a variable
// 	var canvas = document.getElementById("canvas1");
// 	// Create the HTML5 context object to enable draw methods
// 	var ctx = canvas.getContext("2d");
// 	//fillStylr (r, g, b, alpha);
// 	ctx.fillStyle = "rgba(0,200,0,1)";
// 	//fillRect (X,Y, width, height);
// 	ctx.fillRect (36, 10, 22, 22);
// 	ctx.fillStyle = "rgba(0,200,200,1)";
// 	ctx.fillRect (36, 50, 22, 22);
// }

////end of session 1

//session 2

// window.onload = draw; // Execute draw function when DOM is ready
// function draw() {
// 	// Assign our canvas element to a variable
// 	var canvas = document.getElementById("canvas1");
// 	// Create the HTML5 context object to enable draw methods
// 	var ctx = canvas.getContext("2d");
// 	//Draw Filled Shape 1 (center triangle of logo)
// 	ctx.beginPath();
// 	ctx.moveTo(100,50);
// 	ctx.lineTo(130, 100);
// 	ctx.lineTo(70,100);
// 	ctx.fill();
// 	//Draw Filled Shape 2 (left flap of logo)
// 	ctx.beginPath();
// 	ctx.moveTo(72,60);
// 	ctx.lineTo(85, 72);
// 	ctx.lineTo(71,94);
// 	ctx.lineTo(50,70);
// 	ctx.lineTo(65,40);
// 	ctx.fill();



// }

//end of session 2

//session 3

// window.onload = draw; // Execute draw function when DOM is ready
// function draw() {
// 	// Assign our canvas element to a variable
// 	var canvas = document.getElementById("canvas1");
// 	// Create the HTML5 context object to enable draw methods
// if(canvas.getContext){
// 	var ctx = canvas.getContext("2d");
// 	//Draw Filled Shape 1 (center triangle of logo)
// 	ctx.fillStyle = "rgba(24,124,200,1)";
// 	ctx.fillRect(36, 10, 40, 40);
// 	}

// }

//end of session 3

//session4

// window.onload = draw;
// function draw() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	ctx.beginPath(); // Resets the current default path
// 	ctx.moveTo(50, 50); // Creates a new subpath with the given point
// 	ctx.lineTo(250, 50);
// 	ctx.lineTo(250, 150);
// 	ctx.lineTo(50, 150);
// 	ctx.closePath();
// 	ctx.fill();
// 	ctx.stroke(); // Strokes the current default path
// 	alert(ctx.isPointInPath(25, 25)); //Determines if a specified point is in a path
// }

//part2

// window.onload = draw;
// function draw() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	// ctx.arc(150, 150, 150, 0, Math.PI*2, true);  //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// 	ctx.moveTo(50, 50);
// 	ctx.lineTo(300, 50);
// 	ctx.bezierCurveTo(280, 200, 300, 10, 390, 100); //ctx.beziercurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
// 	//ctx.quadraticCurveTo(400, 100, 390, 100);
// 	//ctx.arcTo(390, 50, 390, 100, 100); //ctx.arcTo(x1, y1, x2, y2, radius);
// 	ctx.lineTo(390, 200);
// 	ctx.stroke();
// 	// ctx.rect(50, 50, 100, 100);
// 	// ctx.clip();
// 	// ctx.rect(0, 0, 100, 100);

// }

//end of session4


//session5 drawing images and videos with js

// window.onload = draw;
// var my_pic = new Image();
// my_pic.src = "meat.jpg";
// function draw() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	//drawImage(image, x, y, w, h);
// 	//ctx.drawImage(my_pic, 20, 20, 100, 100);
// 	ctx.drawImage(my_pic, 0, 0, 200, 200, 20, 20, 200, my_pic.width); //this is the clip code
// 	alert(my_pic.width);
// }

//end of session 5


//session 6 drawing text

// window.onload = draw;
// function draw(){
// var ctx = document.getElementById('canvas1').getContext('2d');
// // filltext (text, x, y, maxWidth )
// // strokeText(text, x, y, maxWidth )
// ctx.fillStyle = '#FC0';
// ctx.font = "italic 200 56px Arial, sans-serif";
// ctx.fillText("Text On Canvas", 50, 50);
// ctx.textAlign = 'start'; // start, end, left, right, center
// ctx.textBaseline = 'hanging'; //top, middle, bottom, hanging, alphabetic, ideographic,
// //ctx.lineWidth = 3;
// ctx.strokeText("Text On Canvas", 50, 50);
// }


//end of session 6


//session 7 shadows

// window.onload = draw;
// function draw(){
// var ctx = document.getElementById('canvas1').getContext('2d');
// //shadowColor = color || hex || rgba()
// //shadowOffsetX = positive or negative number
// //shadowOffsetY = positive or negative number
// // shadowBlur = positive number
// ctx.fillStyle = '#FC0';
// ctx.fillRect(50, 50, 300, 300);
// ctx.shadowColor = 'rgba(0,0,0,1)';
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;
// ctx.shadowBlur = 3;
// ctx.fillRect(500, 50, 300, 300);



// }

//end of session 7

//session 8

// window.onload = draw;
// function draw(){
// var ctx = document.getElementById('canvas1').getContext('2d');
// ctx.fillStyle = '#FC0';
// ctx.fillRect(50, 50, 100, 100);
// ctx.fillRect(170, 50, 100, 100);
// ctx.setTransform(1,0,.5,1,0,-20);
// //ctx.transform(1,0,0,1,30,-20)//transform (xScale, ySkew, yScale, xTrans, yTrans)
// //ctx.translate(-20, -50);
// //ctx.scale(.5, .5); //ctx.scale(x, y); //default scale is 1, 1
// //ctx.fillRect(200, 50, 100, 100);
// //ctx.fillRect(350, 50, 100, 100);

// }

//end of session 8

//session 9 pixel manipulation

// window.onload = draw;
// var pic = new Image();

// function draw(){
// var ctx = document.getElementById('canvas1').getContext('2d');
// ctx.fillStyle = "magenta";
// ctx.fillRect(20, 20, 100, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(40, 40, 100, 100);

// var src = ctx.getImageData(20, 20, 50, 50); //var src = ctx.getImageData(x, y, w, h);
// var copy = ctx.createImageData(src.width, src.height);
// for(var i = 0; i < copy.data.length; i++){
// 	copy.data[i] = src.data[i];

// 	}
// 	copy.data.set(src.data);
// 	ctx.putImageData(copy, 250, 20);
// //ctx.putImageData(src, 250, 20);

// }

//session 10 dynamic centering


// window.onload = draw;
// function draw(){
// var ctx = document.getElementById('canvas1').getContext('2d');

// 	ctx.fillStyle = "magenta";
// 	var rectW = 100;
// 	var rectH = 100;
// 	var rectX = (ctx.canvas.width * .5) - (rectW * .5);
// 	var rectY = (ctx.canvas.height * .5) - (rectH * .5);
// 	ctx.fillRect(rectX, rectY, rectW, rectH);


// }

//end of session 10

//session 11

//animation and app initalization

// function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d')
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;
// 	var y = 0;
// 	var x = 0;
// 	function animate(){
// 		ctx.save();
// 		ctx.clearRect(0, 0, cW, cH);


// 		ctx.rotate(-.3);
// 		ctx.fillStyle = "magenta";
// 		ctx.fillRect(0, y, 50, 50);
// 		y++;

// 		ctx.rotate(.8);
// 		ctx.fillStyle = "blue";
// 		ctx.fillRect(x, 0, 50, 50);
// 		x++;


// 		// Draw here


// 		ctx.restore();

// 	}
// 	var animateInterval = setInterval(animate, 30);
// 	ctx.canvas.addEventListener('click', function(event) {
// 		clearInterval(animateInterval);

// 	});

// }
// window.addEventListener('load', function(event){
// 	initCanvas();




// });

//end of session 11

//session 12 object oriented assets javascript OOP tutorial



// function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;
// 	var y = 0, x = 0;

// 	function rectObj(){
// 		this.x = 0, this.y = 0, this.w = 0;
// 		this.render = function(ctx, rx, ry, rw, rh, clr) {
// 			ctx.fillStyle = clr;
// 			ctx.fillRect(rx, ry, rw, rh);
// 		}
// 	}
// 	//Establish Assets outside of the animate function 
// 	//to avoid re-creating them each time the function runs
// 	var rect1 = new rectObj();
// 	var rect2 = new rectObj();
// 	rect1.w= 50;
// 	rect2.w = 50;
// 	rect2.y= 100;
// 	function animate() {
// 		ctx.clearRect(0, 0, cW, cH);
// 		//Draw here
// 		rect1.render(ctx, rect1.x, rect1.y, rect1.w, 50, "magenta");
// 		rect2.render(ctx, rect2.x, rect2.y, rect2.w, 50, "blue");
// 		rect1.x++;
// 		rect2.x++;
// 	}
// 	var animateInterval = setInterval(animate, 30);

// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });

//end of session 12


//session 13 mouse coordinates

// function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	ctx.canvas.addEventListener('mousemove', function(event) {
// 		var mouseX = event.clientX - ctx.canvas.offsetLeft;
// 		var mouseY = event.clientY - ctx.canvas.offsetTop;;
// 		var status = document.getElementById('status');
// 		status.innerHTML = mouseX+" | "+mouseY;

// 		});
// 	ctx.canvas.addEventListener('click', function(event) {
// 		var mouseX = event.clientX - ctx.canvas.offsetLeft;
// 		var mouseY = event.clientY - ctx.canvas.offsetTop;;
// 		var status = document.getElementById('status');
// 		//alert(mouseX+" | "+mouseY);
// 		ctx.fillStyle = "orange";
// 		ctx.fillRect(mouseX-15, mouseY-15, 30, 30);

// 		});
// 	}

// 	window.addEventListener('load', function(event) {
// 	initCanvas();
// });

	//end of session 13


	//session 14 animated background layers
// 	var bg = new Image();
// 	bg.src = "stars.jpg";
// 	function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;

// 	function Background() {
// 		this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
// 		this.render = function() {
// 			ctx.drawImage(bg, this.x--, 0);
// 			if(this.x <= -499){
// 				this.x = 0;
// 			}
// 		}
// 	}
// 	var background = new Background();
// 	function animate() {
// 		ctx.save();
// 		ctx.clearRect(0, 0, cW, cH);
// 		//Start drawing here
// 		background.render();
// 		ctx.fillStyle = "orange";
// 		ctx.fillRect(100,100,50,50);

// 		//End Drawing
// 		ctx.restore();

// 	}
// 	var animateInterval = setInterval(animate, 30);

// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });

//end of session14

//********************************* beginning animation code

// 	function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;

// 	function animate() {
// 		ctx.save();
// 		ctx.clearRect(0, 0, cW, cH);
// 		//Start drawing here

// 		//End Drawing
// 		ctx.restore();

// 	}
// 	var animateInterval = setInterval(animate, 30);

// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });

//*******************************end of animation code


//session15 keyboard movement

// 	var bg = new Image();
// 	var dist = 3;
// 	bg.src = "stars.jpg";
// 	function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;

// 	function Background() {
// 		this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
// 		this.render = function() {
// 			ctx.drawImage(bg, this.x--, 0);
// 			if(this.x <= -499){
// 				this.x = 0;
// 			}
// 		}
// 	}
// 	function Player() {
// 		this.x = 0, this.y = 0, this.w = 50, this.h = 50;
// 		this.render = function() {
// 			ctx.fillStyle = "orange";
// 			ctx.fillRect(this.x, this.y, this.w, this.h);
// 		}
// 	}
// 	var background = new Background();
// 	var player = new Player();
// 	player.x = 100;
// 	player.y= 225;

// 	function animate() {
// 		ctx.save();
// 		ctx.clearRect(0, 0, cW, cH);
// 		//Start drawing here
// 		background.render();
// 		player.render();
// 		//End Drawing
// 		ctx.restore();

// 	}
// 	var animateInterval = setInterval(animate, 30);

// 	document.addEventListener('keydown', function(event) {
// 		var key_press = String.fromCharCode(event.keyCode);
// 		//alert(event.keycode+" | "+key_press);
// 		if(key_press =="W"){
// 			player.y-=dist;
// 		} else if(key_press =="S"){
// 			player.y+=dist;
// 		}	else if(key_press =="A"){
// 			player.x-=dist;
// 		}	else if(key_press =="D"){
// 			player.x+=dist;
// 		}
// 	});

// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });

//end of session 15


//session 16 JSON object arrays and loops

// function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var buildings = [ {"id":"house","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
// 					  {"id":"grocery","x":200,"y":100,"w":50,"h":50,"bg":"green"} ,
// 					  {"id":"post_office","x":300,"y":100,"w":50,"h":50,"bg":"orange"}

// 		];

// 		for(var i = 0; i < buildings.length; i++){
// 			var b = buildings[i];
// 			ctx.fillStyle = b.bg;
// 			ctx.fillRect(b.x,b.y,b.w,b.h);
// 		}
// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });

//end of session 16

//session 17 hit detection mouse touch over object

// function initCanvas() {
// 	var ctx = document.getElementById('canvas1').getContext('2d');

// 	ctx.canvas.addEventListener('mousedown', function(event) {
// 		var mX = event.clientX - ctx.canvas.offsetLeft;
// 		var mY = event.clientY - ctx.canvas.offsetTop;

// 		for(var i = 0; i < buildings.length; i++){
// 			var b = buildings[i];
// 			if(mx >= b.x && mX < b.x+b.w && mY >= b.y && mY < b.y+b.h){
// 				document.getElementById('status').innerHTML = "You Touched "+b.id;
// 			}
// 		}
// 	});



// 	var buildings = [ {"id":"house","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
// 					  {"id":"grocery","x":200,"y":100,"w":50,"h":50,"bg":"green"} ,
// 					  {"id":"post_office","x":300,"y":100,"w":50,"h":50,"bg":"orange"}

// 		];

// 		for(var i = 0; i < buildings.length; i++){
// 			var b = buildings[i];
// 			ctx.fillStyle = b.bg;
// 			ctx.fillRect(b.x,b.y,b.w,b.h);
// 		}
// }
// window.addEventListener('load', function(event) {
// 	initCanvas();
// });


//end of session 17


//Collision Detection Hit Game Enemies JS session 18

// function initCanvas(){
// 	var ctx = document.getElementById('canvas1').getContext('2d');
// 	var cW = ctx.canvas.width, cH = ctx.canvas.height;
// 	var enemies = [ {"id":"enemy1","x":100,"y":-20,"w":40,"h":20},
// 					{"id":"enemy2","x":225,"y":-20,"w":40,"h":20},
// 					{"id":"enemy3","x":350,"y":-20,"w":40,"h":20},
// 					{"id":"enemy4","x":100,"y":-20,"w":40,"h":20},
// 					{"id":"enemy5","x":225,"y":-20,"w":40,"h":20},
// 					{"id":"enemy6","x":350,"y":-20,"w":40,"h":20}
// 	];
// 	function renderEnemies(){
// 		for(var i = 0; i < enemies.length; i++){
// 			ctx.fillStyle = "blue";
// 			ctx.fillRect(enemies[i].x, enemies[i].y+=.5, enemies[i].w, enemies[i].h);
// 		}
// 	}

// 	function Launcher() {
// 		this.y = 280, this.x = cW*.5-25, this.y = 50, this.h = 50, this.dir, this.bg="orange", this.missiles = [];
// 		this.render = function() {
// 			if(this.dir == 'left'){
// 				this.x-=5;
// 	} else if(this.dir == 'right') {
// 		this.x+=5;
// 	}
// 	ctx.fillStyle = this.bg;
// 	ctx.fillRect(this.x, this.y, this.w, this.h);
// 	for(var i=0; i < this.missiles.length; i++){
// 		var m = this.missiles[i];
// 		ctx.fillStyle= m.bg;
// 		ctx.fillRect(m.x, m.y-=5, m.w, m.h);
// 		this.hitDetect(this.missiles[i],i);
// 		if(m.y <= 0) {
// 			this.missiles.splice(i,1);
// 		}
// 	}
// 	if(enemies.length == 0) {
// 		clearInterval(animateInterval);
// 		ctx.fillStyle = '#FC0';
// 		ctx.font = 'italic bold 36px Arial, sans-serif';
// 		ctx.fillText('Level Complete', cW*.5-130, 50, 300);
// 	}
// }
// this.hitDetect = function(m,mi){
// 	for(var i = 0; i < enemies.length; i++){
// 		var e = enemies[i];
// 		if(m.x+m.w >= e.w && m.x <= e.x+e.w && m.y >= e.y && m.y <= e.y+e.h){
// 			this.missiles.splice(this.missiles[mi],1);
// 			enemies.splice(i,1);
// 			document.getElementById('status').innerHTML = "You destroyed " + e.id;
// 				}
// 			}
// 			}
// 			}
// 		}


// 	var launcher = new Launcher();

// 	function animate(){
// 		//ctx.save();
// 		ctx.clearRect(0, 0, cW, cH);
// 		launcher.render();
// 		renderEnemies();
// 		//ctx.restore();
// 	}
// 	var animateInterval = setInterval(animate, 30);


// window.addEventListener('load',function(event){
// 	initCanvas();
// });


// define the canvas as a variable. define the canvas context as 2d
var canvas = document.getElementById('canvas1'),
    c = canvas.getContext('2d');

// Set Canvas full screen

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var blobArray = [];
var squareArray = [];

// setInterval(draw, 30);

function clearScreen() {
	//if you want to create an animation you need to clear the screen before the square is redrawn
	c.clearRect(0, 0, canvas.width, canvas.height);
}

function createBlob() {
	var blob = { 
		x : canvas.width/2, 
		y : canvas.height/2,
		xSpeed : random(-10, 10),
		ySpeed: random(-10, 10),
		size: 50,
		colR : random(0,255),
		colG : random(0,255),
		colB : random(0,255),
		colA : random(0,1)
	};
	blobArray.push(blob);
};

function updateBlob() {
		//this code now runs on every blob in the array

	for(var i = 0; i<blobArray.length; i++){
		//here's how you access elements in an object
		blob = blobArray[i];

		// set blobs color
		c.fillStyle = rgba(blob.colR,blob.colG,blob.colB,blob.colA);
		
		// render blob
		c.fillCircle(blob.x, blob.y, blob.size);

		// updates blob's x and y position
		blob.x = blob.x + blob.xSpeed;
		blob.y = blob.y + blob.ySpeed;

		// reduce blob's size
		blob.size = blob.size * 0.96;

		// if blob's Alpha is greater than 0 reduce blob's alpha 
		if (blob.colA > 0) {
			blob.colA = blob.colA * 0.98;
		}

	}
}

function displayDebugInfo() {
	c.font = '60pt arial';
	c.fillText(blobArray.length, 200, 200);
}

function draw() {

	framerate = 60;

	clearScreen();

	createBlob();

	updateBlob();

	displayDebugInfo();

}



