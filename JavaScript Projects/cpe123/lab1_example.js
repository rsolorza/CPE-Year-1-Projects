// Color of Banana: 255, 232, 0
// TODO: for MVP: Done!
// TODO: for extra (in order of importance (sorta)):  monkey swing on tree(almost there), tree moves with monkey (Not worth?)
var grassX = [];
var grassHeight = [];

var cloud1;
var cloud1Speed;

var cloud2;
var cloud2Speed;

var cloud3;
var cloud3Speed;

var theta;
var clockwise = true;;

function setup() {
	createCanvas(400, 400);

	cloud1 = 200;
	cloud1Speed = Math.random() * 1.5 + .01;

	cloud2 = 300;
	cloud2Speed = Math.random() * 1.5 + .01;
	
	cloud3 = 100;
	cloud3Speed = Math.random() * 1.5 + .01;

	clockwise = true;
	theta = Math.PI / 12;

	// for the grass
	for(var i = 0; i < 363; i++) {
		grassHeight.push((Math.random() * (30 - 24) ) + 24);
		var dx = Math.random() * 1.2;
		if(.5 >= Math.random()) grassX.push(dx);
		else grassX.push(-dx);
	}

}

function draw() {
	background(38,170,255);
	
	var faceX = ((width / 2) * 5/3);
	var faceY = 100;

	// sun
	noStroke();
	fill(253, 184, 19);
	ellipse(20,20, 100);

	// clouds
	fill(234,235,220);
	drawCloud(cloud1, 30, 40, 20);
	drawCloud(cloud2, 40, 30, 10);
	drawCloud(cloud3, 40, 50, 30);

	// Tree
	// trunk
	fill(83,53,10);
	rect(363, 30, 37, 370);
	
	// branch
	noFill();
	stroke(83,53,10);
	strokeWeight(25);
	push();
		translate(90,140);
		rotate(-PI / 24);
		arc(0,0,700, 100, 9 * PI / 6, 2 * PI);
	pop();
	
	// main foliage 
	fill(1,166,17);
	noStroke();
	ellipse(390, 20, 150);
	ellipse(320, -10, 90);
	ellipse(430, 70, 110);
	
	// branch foliage
	ellipse(80, 70, 35);
	ellipse(60, 90, 35);
	ellipse(80, 110, 35);
	ellipse(80, 85, 35);


	// grass
	stroke(1,166,17);
	strokeWeight(2);
	for(var i = 0; i < grassX.length; i+= 4) 
		line(i, height, i + grassX[i], height - grassHeight[i]);

	// The whole monkey
	push();
	translate(80, 5);
	rotate(theta);

		// Left Arm
		push();
			noFill();
			translate(160 , 67);
			rotate(PI / 2);
			stroke(138, 106, 42);
			strokeWeight(20);
			arc(0, 0, 100, 160, 0, 7 * PI / 12);
		pop();

		// Right Arm
		stroke(138,106,42);
		strokeWeight(20);
		noFill();
		arc(175 , 200, 220, 220, -PI /2, 0);

		// Banana (why are bananas so hard to draw? :(  )
		push();
			translate(312 , 185);
			rotate(- PI / 3);
			fill(76,43,9);
			strokeWeight(0);
			rect(0, 0, 10,5);
			fill(255, 232, 0);
			rect(0,0,5,5);
		pop();

		// Long Stem
		stroke(255, 232, 0);
		strokeWeight(15);
		curve(325 , 120, 310 , 192, 264 , 206, 240 , 135);
		fill(76,43,9);

		// Bottom stem
		push();
			translate(260 , 198);
			rotate(PI / 5.5);
			strokeWeight(0);
			rect(0,0, 3,10);
		pop();
		noStroke();
		triangle(260 , 198, 262 , 200, 264 , 198);

		// tail 
		stroke(138,106,42);
		noFill();
		arc(230 , 80, 100, 250, PI / 5, PI / 2);
		push();
			translate(315 , 120);
			rotate(PI / 16);
			arc(0, 0, 75, 75, PI, 2 * PI);
			arc(17,0, 40, 40, 0, PI);
		pop();
	
		// Left Leg
		strokeWeight(20);
		arc(190 , 250, 50, 100, 4 * PI / 6, 3 * PI / 2);

		// Right Leg
		arc(210 , 250, 50, 100, -PI / 2, PI / 3);

		// Left Foot
		noStroke();
		push();
			translate(243 , 287);
			rotate(PI / 24);
			fill(138,106,42);
			ellipse(0, 0, 50, 20);
		pop();

		// Right Foot
		push();
			translate(157 , 287);
			rotate(-PI / 24);
			fill(138,106,42);
			ellipse(0, 0, 50, 20);
		pop();


		// Body 
		fill(233,196,127);
		stroke(138,106,42);
		strokeWeight(12);
		beginShape();
			// Note... Order of vertices: 1. middle of face, 2. left edge of face, 3. bottom left, 4. bottom middle,
	    	//                            5. bottom right, 6. right edge of face, 7. middle of face
			curveVertex(200 , 70);
			curveVertex(173 , 96);
			curveVertex(150 , 200);
			curveVertex(width / 2 , 220);
			curveVertex(250 , 200);
			curveVertex(227 , 96);
			curveVertex(200 , 70);
		endShape(); 

		// Right Ear
		push();
			translate(245 , 60);
			rotate(PI / 6);
			noStroke();
			fill(138,106,42);
			ellipse(0, 0, 30, 40);
			fill(233, 196, 127);
			ellipse(0, 0, 20, 30);
		pop();

		// Left Ear
		push();
			translate(155 , 60);
			rotate(-PI / 6);
			noStroke();
			fill(138,106,42);
			ellipse(0, 0, 30, 40);
			fill(233,196,127);
			ellipse (0, 0, 20, 30);
		pop();

		//Head
		push();
			// Note: This is just for scaling the head; I messed up and made the head with a canvas that was too big,
			//       and rather than start from scratch, I scaled the head to the right size

			// Draw Face
			scale(.6);
			fill(138, 106, 42);
			noStroke();
			ellipse(faceX, faceY, 150, 165);
			fill(233,196,127);
			arc(faceX + 35, faceY, 70, 43, PI, 2 * PI);
			arc(faceX - 35, faceY, 70, 43, PI, 2 * PI);
			arc(faceX, faceY, 140, 155, 0, PI);

			// Eyes
			fill(66, 31, 1);
			ellipse(faceX + 35, faceY + 10, 30);
			ellipse(faceX - 35, faceY + 10, 30);
			fill(255,255,255);
			ellipse (faceX + 40, faceY + 5, 7);
			ellipse (faceX - 30, faceY + 5, 7);

			// Nose
			fill(66, 31, 1);
			ellipse (faceX, faceY + 32, 26, 13);

			// Smile :)
			stroke(66,31,1);
			fill(233,196,127);
			strokeWeight(6);
			arc(faceX, faceY + 45, 59, 42 , PI/24, 23* PI / 24);

		pop();

	pop();


	// Move the clouds
	cloud1 += cloud1Speed;
	if (cloud1 > 400) cloud1 = -40;
	cloud2 += cloud2Speed;
	if (cloud2 > 400) cloud2 = -20;
	cloud3 += cloud3Speed;
	if (cloud3 > 400) cloud3 = -60;

	// Rotate the monkey
	if(theta <= .4 && clockwise == true) 
		theta += .005;
	else if (theta >= .15 && clockwise == false) 
		theta -= .005;
	if (theta > .4)
		clockwise = false;
	if (theta < .15)
		clockwise = true;
}

function drawCloud(x, y, width, height) {
	ellipse(x, y, width, height);
	ellipse(x + 20, y + 3, width, height / 2);
	ellipse(x - 20, y + 3, width, height / 2);
}
