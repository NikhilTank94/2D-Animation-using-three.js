var canvas = document.getElementById('canvas');
var context;
var contexti;
var images = {};
var totalResources = 20;
var numResourcesLoaded = 0;
var fps = 30;
var t = 0;
var p=0;
var z=400;
var q=500;
var a=0;
var b=500;
var m=0;
var n=500;
var x = 50;
var y = 400;
var k=600;
var l=500;
var d=600;
var x2 = 350 ;
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
var maxEyeHeight = 14;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;                    
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;
var moving ;





function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);
	
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	// Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");
	
	canvas.width = canvas.width; // clears the canvas 
	context.fillText("loading...", 40, 140);
	
	loadImage("leftArm1");
	loadImage("legs1");
	loadImage("torso1");
	loadImage("rightArm1");
	loadImage("head1");
	loadImage("hair1");		
	loadImage("leftArm-jump1");
	loadImage("legs-jump1");
	loadImage("rightArm-jump1");
	
	//images for ted
	loadImage("leftArm2");
	loadImage("legs2");
	loadImage("torso2");
	loadImage("rightArm2");
	loadImage("head2");
	loadImage("hair2");		
	loadImage("leftArm-jump2");
	loadImage("legs-jump2");
	loadImage("rightArm-jump2");
	
	//images for zombie
	loadImage("leftArm3");
	loadImage("legs3");
	loadImage("torso3");
	loadImage("rightArm3");
	loadImage("head3");
	loadImage("head6");
	loadImage("hair3");		
	loadImage("leftArm-jump3");
	loadImage("legs-jump3");
	loadImage("rightArm-jump3");
	loadImage("cloud");

	//images for 4th person
	loadImage("leftArm4");
	loadImage("legs4");
	loadImage("torso4");
	loadImage("rightArm4");
	loadImage("head4");
	loadImage("hair4");		
	loadImage("leftArm-jump4");
	loadImage("legs-jump4");
	loadImage("rightArm-jump4");
	loadImage("head5");
	loadImage("hair5");

	//images for globe
	loadImage("Globe");
	loadImage("Globe1");
	loadImage("Globe2");
	loadImage("Globe3");
	loadImage("Globe4");
	loadImage("Globe5");
	loadImage("Globe6");
	loadImage("Globe7");
	loadImage("Globe8");
	loadImage("Globe9");
	loadImage("Globe10");
	loadImage("Globe11");
	loadImage("Globe12");
	loadImage("Globe13");
	loadImage("Globe14");
	loadImage("Globe15");
	loadImage("Globe16");
	loadImage("Globe17");
	loadImage("Globe18");
	loadImage("Globe19");
	loadImage("Globe20");
	//background
	loadImage("swamp1");
	loadImage("swamp2");
	loadImage("forest");
	loadImage("park");
	loadImage("tree");
	loadImage("last");
	loadImage("last1");
	loadImage("last2");
	loadImage("last3");
	loadImage("last4");
	loadImage("last7");
	loadImage("last5");
	loadImage("last6");
}


function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
	  resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
  	
  	setInterval(time, 500);
	setInterval(Print, 5);
	setInterval(redraw, 200);
  }
}

function time() {

	t += 0.5;
	

}

function Print(){
  context.fillStyle = "white";
  context.font = "bold 20px verdana, sans-serif";
  context.fillText( 'Time=' + Math.floor(t) ,1200, 50);
}


	


function redraw() {

//scene 1

if(t<=3){
	context.drawImage(images["forest"], 0, 0, canvas.width, canvas.height);
	
	context.drawImage(images["leftArm2"], x + 40, y - 42 - breathAmt);
	context.drawImage(images["legs2"], x, y);
	context.drawImage(images["torso2"], x, y - 50);
	context.drawImage(images["head2"], x - 10, y - 125 - breathAmt);
	context.drawImage(images["hair2"], x - 61, y - 192 - breathAmt);
	context.drawImage(images["rightArm2"], x - 15, y - 42 - breathAmt);
	drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight); // Left Eye
	drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight); // Right Eye
	
	if(0<=t && t<=2){
		
		drawEllipse( x +220, y - 205 - breathAmt, 400,80);
	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";
		context.fillText("Hey there! I'm Ted.", x+130, y - 200 - breathAmt);
		
	}
	if(2<=t && t<=3){
		
		drawEllipse( x +220, y - 205 - breathAmt, 400,80);
	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";
		context.fillText("Let's go for a walk.", x+130, y - 200 - breathAmt);
	}

	}

else if(t>=3 && t<=8){
  var walkDistance = 35;
  var mov=10;
  
  canvas.width = canvas.width; // clears the canvas 
  context.drawImage(images["forest"], 0, 0, canvas.width, canvas.height); //for background
  // Draw shadow


  if (moving) {
	drawEllipse(x + 85, y + 29, 100 - breathAmt, 4);
	
  } else {
	drawEllipse(x + 85, y + 29, 160 - breathAmt, 6);
	
  }
  
//to move horiz

if(x<=800){
 	if (x%2==0){
    moving=false;
	 x+= walkDistance;
	
	}
	else {
    moving=true; 
	 x+= walkDistance;}
	}
	 
else{
	moving=false;
	}
//to move horiz..


  if (moving) {
	
	context.drawImage(images["leftArm-jump2"], x + 40, y - 42 - breathAmt);
	
  } else {
	
	context.drawImage(images["leftArm2"], x + 40, y - 42 - breathAmt);
	
  }
  
  if (moving) {
	
	context.drawImage(images["legs-jump2"], x, y- 6);
	
  } else {
	
	context.drawImage(images["legs2"], x, y);
	
  }
	
  context.drawImage(images["torso2"], x, y - 50);
  context.drawImage(images["head2"], x - 10, y - 125 - breathAmt);
  context.drawImage(images["hair2"], x - 61, y - 192 - breathAmt);
  
  if (moving) {
	
	context.drawImage(images["rightArm-jump2"], x - 35, y - 42 - breathAmt);
	
  } else {
	
	context.drawImage(images["rightArm2"], x - 15, y - 42 - breathAmt);
	
  }
	
  drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight); // Right Eye

  }
  
  else if (t>=8 && t<=10) {
  drawEllipse( x -120, y - 205 - breathAmt, 400,80);
	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";
		context.fillText("Dense forest eh?", x - 210, y - 200 - breathAmt);
		
	} else if(t>=10 && t<=13){
  var walkDistance = 45;
  var mov=10;
  
  canvas.width = canvas.width; // clears the canvas 
  context.drawImage(images["forest"], 0, 0, canvas.width, canvas.height); //for background
  // Draw shadow


  if (moving) {
	drawEllipse(x + 85, y + 29, 100 - breathAmt, 4);
	//drawEllipse(x2 + 40, y + 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(x + 85, y + 29, 160 - breathAmt, 6);
	//drawEllipse(x2 + 40, y + 29, 160 - breathAmt, 6);
  }
  
//to move horiz

if(x<=1400){
 	if (x%2==0){
    moving=false;
	 x+= walkDistance;
	// q-= mov;
	}
	else {
    moving=true; 
	 x+= walkDistance;}
	}
	 
	 
else{
	moving=false;
	}
	
	//to move horiz..


  if (moving) {
	
	context.drawImage(images["leftArm-jump2"], x + 40, y - 42 - breathAmt);
  } else {
	
	context.drawImage(images["leftArm2"], x + 40, y - 42 - breathAmt);
  }
  
  if (moving) {
	
	context.drawImage(images["legs-jump2"], x, y- 6);
  } else {
	
	context.drawImage(images["legs2"], x, y);
  }
	
  context.drawImage(images["torso2"], x, y - 50);
  context.drawImage(images["head2"], x - 10, y - 125 - breathAmt);
  context.drawImage(images["hair2"], x - 61, y - 192 - breathAmt);
  
  if (moving) {
	
	context.drawImage(images["rightArm-jump2"], x - 35, y - 42 - breathAmt);
	
  } else {
	
	context.drawImage(images["rightArm2"], x - 15, y - 42 - breathAmt);
	
  }
	
  drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight); // Right Eye
 

}	
  
  

 //scene 2
 
  if (t>=13 && t<=20){
  var walkDistance = 35;
  var mov=5;
  
  canvas.width = canvas.width; // clears the canvas 
context.drawImage(images["swamp1"], 0, 0, canvas.width, canvas.height);
  // Draw shadow
  if (moving) {                                        
	drawEllipse(p + 85, q + 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(p + 85, q + 29, 160 - breathAmt, 6);
  }
 
 if(p<=900){
 if (p%2==0){
    moving=false;
	 p+= walkDistance;
	// q-= mov;
}
else {
    moving=true; 
	 p+= walkDistance;
	 // q-= mov;
	 
}	
}
else{
		moving=false;
		
  
}

  if (moving) {
	context.drawImage(images["leftArm-jump2"], p + 40, q - 42 - breathAmt);
  } else {
	context.drawImage(images["leftArm2"], p + 40, q - 42 - breathAmt);
  }
  
  if (moving) {
	context.drawImage(images["legs-jump2"], p, q- 6);
  } else {
	context.drawImage(images["legs2"], p, q);
  }
	
  context.drawImage(images["torso2"], p, q - 50);
  context.drawImage(images["head2"], p - 10, q - 125 - breathAmt);
  context.drawImage(images["hair2"], p - 59, q - 190 - breathAmt);
  
  if (moving) {
	context.drawImage(images["rightArm-jump2"], p - 35, q - 42 - breathAmt);
  } else {
	context.drawImage(images["rightArm2"], p - 15, q - 42 - breathAmt);
  }
	
  drawEllipse(p + 47, q - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(p + 58, q - 68 - breathAmt, 8, curEyeHeight); // Right Eye
  
  if (t>=20 && t<=22) {
	drawEllipse( p -120, q - 205 - breathAmt, 400,80);
	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";
		context.fillText("What's that?!", p - 180, q - 200 - breathAmt);
		
	}	
  
 } else if(t>=22 && t<=23) {
 
	moving = false;
	
	canvas.width = canvas.width; // clears the canvas
	context.drawImage(images["swamp1"], 0, 0, canvas.width, canvas.height);
	
	if (moving) {
	context.drawImage(images["leftArm-jump2"], p + 40, q - 42 - breathAmt);
  } else {
	context.drawImage(images["leftArm2"], p + 40, q - 42 - breathAmt);
  }
  
  if (moving) {
	context.drawImage(images["legs-jump2"], p, q- 6);
  } else {
	context.drawImage(images["legs2"], p, q);
  }
	
  context.drawImage(images["torso2"], p, q - 50);
  context.drawImage(images["head2"], p - 10, q - 125 - breathAmt);
  context.drawImage(images["hair2"], p - 59, q - 190 - breathAmt);
  
  if (moving) {
	context.drawImage(images["rightArm-jump2"], p - 35, q - 42 - breathAmt);
  } else {
	context.drawImage(images["rightArm2"], p - 15, q - 42 - breathAmt);
  }
	
  drawEllipse(p + 47, q - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(p + 58, q - 68 - breathAmt, 8, curEyeHeight); // Right Eye
	
	if (moving) {                                        
	drawEllipse(p + 85, q + 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(p + 85, q + 29, 160 - breathAmt, 6);
  }  //shadow, we already know that it ain't moving.
 
	context.drawImage(images["cloud"], 670, 20);
		
 } else if(t>=23 && t<=23.5) {         //black out..
 
 
	canvas.width = canvas.width;
 
	context.fillStyle = "black";
	context.strokeRect(0, 0, canvas.width, canvas.height);
	context.fillRect(0, 0, canvas.width, canvas.height);
	
  } else if(t>=23.5 && t<= 26) {
  
	moving = false;
  
	canvas.width = canvas.width; // clears the canvas
	context.drawImage(images["swamp2"], 0, 0, canvas.width, canvas.height);
	
		if (moving) {
	context.drawImage(images["leftArm-jump3"], p + 40, q - 42 - breathAmt);
  } else {
	context.drawImage(images["leftArm3"], p + 40, q - 42 - breathAmt);
  }
  
	if (moving) {
	context.drawImage(images["legs-jump3"], p, q- 6);
  } else {
	context.drawImage(images["legs3"], p, q);
  }
	
  context.drawImage(images["torso3"], p, q - 50);
  context.drawImage(images["head3"], p - 10, q - 125 - breathAmt);
  context.drawImage(images["hair3"], p - 59, q - 190 - breathAmt);
  
  if (moving) {
	context.drawImage(images["rightArm-jump3"], p - 35, q - 42 - breathAmt);
  } else {
	context.drawImage(images["rightArm3"], p - 15, q - 42 - breathAmt);
  }
	
  drawEllipse(p + 47, q - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(p + 58, q - 68 - breathAmt, 8, curEyeHeight); // Right Eye
	
	if (moving) {                                        
	drawEllipse(p + 85, q + 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(p + 85, q + 29, 160 - breathAmt, 6);
  } 		
  
		drawEllipse( p -120, q - 205 - breathAmt, 400,80);	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";
		
		if(t>=23.5 && t<=25.5)
			context.fillText("Oww!! That hurt.", p - 200, q - 200 - breathAmt);
  
		if(t>25.5 && t<=28)
			context.fillText("Do I look a bit different?!", p - 230, q - 200 - breathAmt);
  
  }  else if(t>=28 && t<=32) {
  
	var walkDistance = 35;
	var mov=5;
  
	moving = false;
	
	canvas.width = canvas.width;	
	context.drawImage(images["swamp2"], 0, 0, canvas.width, canvas.height);
	
	if(p<=1400){
	if (p%2==0){
		moving=false;
		p+= walkDistance;
		// q-= mov;
	}
	else {
		moving=true; 
		p+= walkDistance;
		// q-= mov;
	 
	}

	}
	
	if (moving) {
	context.drawImage(images["leftArm-jump3"], p + 40, q - 42 - breathAmt);
  } else {
	context.drawImage(images["leftArm3"], p + 40, q - 42 - breathAmt);
  }
  
	if (moving) {
	context.drawImage(images["legs-jump3"], p, q- 6);
  } else {
	context.drawImage(images["legs3"], p, q);
  }
	
  context.drawImage(images["torso3"], p, q - 50);
  context.drawImage(images["head3"], p - 10, q - 125 - breathAmt);
  context.drawImage(images["hair3"], p - 59, q - 190 - breathAmt);
  
  if (moving) {
	context.drawImage(images["rightArm-jump3"], p - 35, q - 42 - breathAmt);
  } else {
	context.drawImage(images["rightArm3"], p - 15, q - 42 - breathAmt);
  }
	
  drawEllipse(p + 47, q - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(p + 58, q - 68 - breathAmt, 8, curEyeHeight); // Right Eye
	
	if (moving) {                                        
	drawEllipse(p + 85, q + 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(p + 85, q + 29, 160 - breathAmt, 6);
  } 
  
  }
  	//Scene 3
 else if (t>=32 && t<=38) {
 var walkDistance = 17;
 canvas.width = canvas.width; // clears the canvas 
 context.drawImage(images["tree"], 0, 0, canvas.width, canvas.height);
 
    context.drawImage(images["leftArm1"], k+ 40, l- 42 - breathAmt);
	context.drawImage(images["legs1"], k, l);
	context.drawImage(images["torso1"], k, l - 50);
	context.drawImage(images["head1"], k- 10, l - 125 - breathAmt);
	context.drawImage(images["hair1"], k- 37,l-137-breathAmt);
	context.drawImage(images["rightArm1"], k - 15, l-42 - breathAmt);
	drawEllipse(k+ 47, l- 68 - breathAmt, 8, curEyeHeight); // Left Eye
	drawEllipse(k+ 58, l-68 - breathAmt, 8, curEyeHeight); // Right Eye
    
  
 

  // Draw shadow
  if (moving) {
	drawEllipse(m+ 40, n+ 29, 100 - breathAmt, 4);
  } else {
	drawEllipse(m + 40, n + 29, 160 - breathAmt, 6);
  }
 
 if(m<=400){
 if (m%2==0){
    moving=false;
	 m+= walkDistance;
}
else {
    moving=true; 
	 m+= walkDistance;
	 
}	
}
else{
		moving=false;
		drawEllipse(380, 300 - breathAmt, 300,100);
		context.fillStyle = "white";
		context.font = "bold 20px verdana, sans-serif";
		
		context.fillText("'Ssup buddy?",300, 300);
		
	context.drawImage(images["leftArm4"], k+ 40, l- 42 - breathAmt);
	context.drawImage(images["legs1"], k, l);
	context.drawImage(images["torso1"], k, l - 50);
	context.drawImage(images["head4"], k- 10, l - 125 - breathAmt);
	context.drawImage(images["hair4"], k- 12, l-177-breathAmt);
	context.drawImage(images["rightArm1"], k - 15, l-42 - breathAmt);
	
	
}
if (moving) {
	context.drawImage(images["leftArm-jump3"], m + 40, n - 42 - breathAmt);
  } else {
	context.drawImage(images["leftArm3"], m+ 40, n - 42 - breathAmt);
  }
  
  if (moving) {
	context.drawImage(images["legs-jump3"], m, n- 6);
  } else {
	context.drawImage(images["legs3"], m, n);
  }
	
  context.drawImage(images["torso3"], m, n - 50);
  context.drawImage(images["head3"], m- 10, n - 125 - breathAmt);
  context.drawImage(images["hair3"], m- 37, n - 138 - breathAmt);
  
  if (moving) {
	context.drawImage(images["rightArm-jump3"], m - 35, n - 42 - breathAmt);
  } else {
	context.drawImage(images["rightArm3"], m- 15, n- 42 - breathAmt);
  }
	
  drawEllipse(m+ 47, n - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(m+ 58, n - 68 - breathAmt, 8, curEyeHeight); // Right Eye*/
}

if(t>=39 && t<=43){
	moving=true;
	var walkDistance = 45;
  	var mov=10;
	
	
  
  canvas.width = canvas.width; // clears the canvas 
  context.drawImage(images["tree"], 0, 0, canvas.width, canvas.height); //for background
  // Draw shadow
context.drawImage(images["leftArm3"], z+ 40, l- 42 - breathAmt);
	context.drawImage(images["legs3"], z, l);
	context.drawImage(images["torso3"], z, l - 50);
	context.drawImage(images["head3"], z- 10, l - 125 - breathAmt);
	context.drawImage(images["hair3"], z- 12, l-177-breathAmt);
	context.drawImage(images["rightArm3"], z - 15, l-42 - breathAmt);
	
	drawEllipse(z+ 47, l - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(z+ 58, l - 68 - breathAmt, 8, curEyeHeight); // Right Eye*/

  
//to move horiz

if(d<=1300){
 if (d%2==0){
    moving=false;
	 d+= walkDistance;
	// q-= mov;
}
else {
    moving=true; 
	 d+= walkDistance;
	 // q-= mov;
	 
}	
context.font = "bold 20px verdana, sans-serif";	
drawEllipse(d, 260 - breathAmt, 300,130);
	context.fillStyle = "white";
    context.fillText("Monster...!",d-75,250);
	context.fillText("He's after me!!",d-75,280);
	
	drawEllipse(380, 300 - breathAmt, 150,80);
	context.fillStyle = "white";
	context.font = "bold 20px verdana, sans-serif";
	context.fillText("?!",370, 310);
	

//to move horiz..


  if (moving) {
  
	context.drawImage(images["leftArm-jump1"], d + 40, l - 42 - breathAmt);

  } else {
  
	context.drawImage(images["leftArm1"], d + 40, l - 42 - breathAmt);

  }
  
  if (moving) {
	context.drawImage(images["legs-jump1"], d, l- 6);

  } else {
	context.drawImage(images["legs1"], d, l);

  }
	
  context.drawImage(images["torso1"], d, l - 50);
 context.drawImage(images["head5"], d - 10, l - 125 - breathAmt);
 context.drawImage(images["hair5"], d - 19, l - 177 - breathAmt);
 
  if (moving) {
	context.drawImage(images["rightArm-jump1"], d - 35, l - 42 - breathAmt);

  } else {
	context.drawImage(images["rightArm1"], d - 15, l - 42 - breathAmt);

  }
	
  }
}







  	//Scene 4
if ( t>=43 && t<=45){
	
  	var walkDistance = 35;
  	var mov=5;
  	
  	canvas.width = canvas.width; // clears the canvas 
	context.drawImage(images["park"], 0, 0, canvas.width, canvas.height);
  // Draw shadow
  	if (moving) {                                        
	drawEllipse(a + 85, b + 29, 100 - breathAmt, 4);
  	} 
  	else {
	drawEllipse(a + 85, b + 29, 160 - breathAmt, 6);
  	}
 
 	if(a<=300){
 		if (a%2==0){
    		moving=false;
	 		a+= walkDistance;
		// b-= mov;
		}
		else {
    		moving=true; 
	 		a+= walkDistance;
	 	}
	 // b-= mov;
	}

	

else{
		moving=false;

}

if (moving) {
	context.drawImage(images["leftArm-jump3"], a + 40, b - 42 - breathAmt);
  } 
else {
	context.drawImage(images["leftArm3"], a + 40, b - 42 - breathAmt);
  }
  
if (moving) {
	context.drawImage(images["legs-jump3"], a, b- 6);
  } 
else {
	context.drawImage(images["legs3"], a, b);
  }
	
  context.drawImage(images["torso3"], a, b - 50);
  context.drawImage(images["head6"], a - 10, b - 125 - breathAmt);
  context.drawImage(images["hair3"], a - 59, b - 190 - breathAmt);
  
if (moving) {
	context.drawImage(images["rightArm-jump3"], a - 35, b - 42 - breathAmt);
  } 
else {
	context.drawImage(images["rightArm3"], a - 15, b - 42 - breathAmt);
  }
	
  drawEllipse(a + 47, b - 68 - breathAmt, 8, curEyeHeight); // Left Eye
  drawEllipse(a + 58, b - 68 - breathAmt, 8, curEyeHeight); // Right Eye
  
  
  
 } else if(t>=45 && t<=48) {
 
  drawEllipse( a +200, b - 150 - breathAmt, 400,80);	
		context.fillStyle = "white";
		context.font = "bold 16px verdana, sans-serif";		
		context.fillText("Why me?", a + 150, b - 150 - breathAmt);
 
 }
 
 

//scene 5
if ( t>=48 && t<=49){
	canvas.width = canvas.width; // clears the canvas 
	context.drawImage(images["Globe"], 0, 0, canvas.width, canvas.height);
}
if ( t>=49 && t<=50){
	
	context.drawImage(images["Globe1"], 0, 0, canvas.width, canvas.height);
}
if ( t>=50 && t<=51){
	
	context.drawImage(images["Globe2"], 0, 0, canvas.width, canvas.height);
}
if ( t>=51 && t<=52){
	
	context.drawImage(images["Globe3"], 0, 0, canvas.width, canvas.height);
}
if ( t>=52 && t<=53){
	 
	context.drawImage(images["Globe4"], 0, 0, canvas.width, canvas.height);
}
if ( t>=53 && t<=54){
	 
	context.drawImage(images["Globe5"], 0, 0, canvas.width, canvas.height);
}
if ( t>=54 && t<=55){
	 
	context.drawImage(images["Globe6"], 0, 0, canvas.width, canvas.height);
}
if ( t>=55 && t<=56){
	
	context.drawImage(images["Globe7"], 0, 0, canvas.width, canvas.height);
}
if ( t>=56 && t<=57){
	
	context.drawImage(images["Globe8"], 0, 0, canvas.width, canvas.height);
}
if ( t>=57 && t<=58){
	
	context.drawImage(images["Globe9"], 0, 0, canvas.width, canvas.height);
}
if ( t>=58 && t<=59){
	 
	context.drawImage(images["Globe11"], 0, 0, canvas.width, canvas.height);
}
if ( t>=59 && t<=60){
	 
	context.drawImage(images["Globe12"], 0, 0, canvas.width, canvas.height);
}
if ( t>=60 && t<=61){
	 
	context.drawImage(images["Globe13"], 0, 0, canvas.width, canvas.height);
}
if ( t>=61 && t<=62){
	 
	context.drawImage(images["Globe14"], 0, 0, canvas.width, canvas.height);
}
if ( t>=62 && t<=65){
	 
	context.drawImage(images["Globe15"], 0, 0, canvas.width, canvas.height);
}
if ( t>=65 && t<=66){
	
	context.drawImage(images["Globe16"], 0, 0, canvas.width, canvas.height);
}
if ( t>=66 && t<=66.5){
	
	context.drawImage(images["Globe17"], 0, 0, canvas.width, canvas.height);
}
if ( t>=66.5 && t<=75){
	
	context.drawImage(images["Globe18"], 0, 0, canvas.width, canvas.height);
}
if ( t>=75 && t<=79){
	
	context.drawImage(images["Globe19"], 0, 0, canvas.width, canvas.height);
}
if ( t>=79 && t<=85){
	
	context.drawImage(images["Globe20"], 0, 0, canvas.width, canvas.height);
}
if ( t>=85 && t<=87){
	
	context.drawImage(images["last"], 0, 0, canvas.width, canvas.height);
}
if ( t>=87 && t<=88){
	
	context.drawImage(images["last1"], 0, 0, canvas.width, canvas.height);
}
if ( t>=88 && t<=89){
	
	context.drawImage(images["last2"], 0, 0, canvas.width, canvas.height);
}
if ( t>=89 && t<=90){
	
	context.drawImage(images["last3"], 0, 0, canvas.width, canvas.height);
}
if ( t>=90 && t<=90.5){
	
	context.drawImage(images["last4"], 0, 0, canvas.width, canvas.height);
}
if ( t>=90.5 && t<=91){
	
	context.drawImage(images["last7"], 0, 0, canvas.width, canvas.height);
}
if ( t>=91 && t<=92){
	
	context.drawImage(images["last5"], 0, 0, canvas.width, canvas.height);
}
if ( t>=92 && t<=100){
	
	context.drawImage(images["last6"], 0, 0, canvas.width, canvas.height);
}



}

function drawEllipse(centerX, centerY, width, height) {

  context.beginPath();
  
  context.moveTo(centerX, centerY - height/2);
  
  context.bezierCurveTo(
	centerX + width/2, centerY - height/2,
	centerX + width/2, centerY + height/2,
	centerX, centerY + height/2);

  context.bezierCurveTo(
	centerX - width/2, centerY + height/2,
	centerX - width/2, centerY - height/2,
	centerX, centerY - height/2);
 
  context.fillStyle = "black";
  context.fill();
  context.closePath();	
}



function updateBreath() { 
				
  if (breathDir === 1) {  // breath in
	breathAmt -= breathInc;
	if (breathAmt < -breathMax) {
	  breathDir = -1;
	}
  } else {  // breath out
	breathAmt += breathInc;
	if(breathAmt > breathMax) {
	  breathDir = 1;
	}
  }
}

function updateBlink() { 
				
  eyeOpenTime += blinkUpdateTime;
	
  if(eyeOpenTime >= timeBtwBlinks){
	blink();
  }
}

function blink() {

  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
	eyeOpenTime = 0;
	curEyeHeight = maxEyeHeight;
  } else {
	setTimeout(blink, 10);
  }
}





