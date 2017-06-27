/* All code creted by Ryan Solorzano
 * Generative Art Project
 * 10-24-16
 * CPE 123- Computational Art
 * 
 * TODO: Cluster the shapes less, fade shapes into eachother  
 */

function setup() {
	createCanvas(400, 400);
}

function draw() {
	//background(0);
	background(randomSolidColor());	
	drawAllShapes(15);
	noLoop();
}

// bottomRange should be >= 3
// random aspects: rotation, number of sides
// normal aspects: regular polygon always, always inside circle of radius r
function shapeFromCircle(x, y, sides, radius, shapeColor) {
	var deltaThetaToNextPoint =(2 * PI) / sides;
	var theta = random(deltaThetaToNextPoint);
	var point = pointFromCircle(x, y, radius, theta);
	fill(shapeColor);
	beginShape();
		for(var i = 0; i < sides; i++) {
			point = pointFromCircle(x, y, radius, theta + (i * deltaThetaToNextPoint));
			vertex(point[0], point[1]);
		}
	endShape(CLOSE);	

}

function pointFromCircle(x, y, radius, theta) {
	return[x + radius * Math.cos(theta),
		   y + radius * Math.sin(theta)];
}

function drawRandomShape(x, y, radius, bottomRange, topRange) {
	var sides = Math.round(random(bottomRange, topRange));
	var depth = 7;
	stroke(255);
	for(var i = 0; i < depth; i++) {	
		shapeFromCircle(x, y, sides, radius, randomColor());
		radius -= (radius/2);
		noStroke();
	}

	function fadeColor() {

	}
}

function drawAllShapes(max) {
	var radius;
	var x;
	var y;
	var remainder = max % 4;

	// upper left corner
	for(var i = 0; i < (max- remainder)/4; i++) {
		radius = random(10, 90);
		x = random(radius, width/2);
		y = random(radius, height/2);
		drawRandomShape(x, y, radius, 3, 6);
	}

	// upper right corner
	for(var i = 0; i < (max- remainder)/4; i++) {
		radius = random(10, 90);
		x = random(width/2, width - radius);
		y = random(radius, height/2);
		drawRandomShape(x, y, radius, 3, 6);
	}

	// bottom right corner
	for(var i = 0; i < (max- remainder)/4; i++) {
		radius = random(10, 90);
		x = random(width/2, width - radius);
		y = random(height / 2 + radius, height - radius);
		drawRandomShape(x, y, radius, 3, 6);
	}

	//bottom left corner
	for(var i = 0; i < ((max- remainder)/4 + remainder); i++) {
		radius = random(10, 90);
		x = random(radius, width/2);
		y = random(height/2, height - radius);
		drawRandomShape(x, y, radius, 3, 6);
	}

}

function randomColor() {
	return color(random(255), random(255), random(255), random(100, 255));
}

function randomSolidColor () {
	return color(random(255), random(255), random(255));
}


function mousePressed() {
	loop();
}

