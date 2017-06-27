/* All code creted by Ryan Solorzano
 * Structured Generative Art Project
 * 10-24-16
 * CPE 123- Computational Art
 *   
 */

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	drawSky();
	drawAllHouses();
	noLoop();
}

function drawSky() {
	var beginColor = randomBlue();
	var endColor = color(random(240,255), random(240, 255), random(240, 255));
	var iterations = 800; 
	var sunStart = color(223, 109, 0);
	var sunEnd = color(235, 227, 0);

	fill(beginColor);
	noStroke();
	ellipse(width/ 2, height, width);

	noFill();
	for(var i = 0; i < iterations; i+=.5) {
		stroke(lerpColor(beginColor, endColor, i/iterations));
		ellipse(width/2, height, width + i);
	}

	noStroke();
	fill(sunStart);
	ellipse(width, 0, width/10);
	noFill();
	iterations = 100;
	for(var i = 0; i < iterations; i+=.5) {
		stroke(lerpColor(sunStart, sunEnd, i/iterations));
		ellipse(width, 0, width/10 + i);
	}


	
}

function drawRandomHouse(x, y, wide, high) {
	drawHouse(x, y, wide, high);
	

	function drawHouse(x, y, width, height) {
		var mainColor = randomColor();
		var windowColor = randomBlue();
		var roofColor = randomRed();
		var doorColor = randomColor();
		var knobColor = randomColor();
		
		//noStroke();
		strokeWeight(.3);
		stroke(0);
		fill(mainColor);
		rect(x - width/2, y - height/2, width, height);
		
		fill(roofColor);
		triangle(x - width/2, y - height/2, x + width/2, y - height/2, x, y - height);
		
		//stroke(0);
		strokeWeight(1);
		fill(windowColor);
		rect(x + width / 5, y - height / 4, width / 5, height / 4);
		line(x + 3 * width / 10, y - height /4, x + 3 * width / 10, y);
		line(x + width / 5, y - height /8, x + 2* width / 5, y- height /8);
		
		fill(doorColor);
		rect(x - width / 6, y, width / 3, height /2);
		fill(knobColor);
		ellipse(x + width / 12, y + height / 4, width/8);

		
		


	}
}

function drawAllHouses() {
	var x = 0, y = height, wide, high;
	//drawRandomHouse(width/ 2, height/2, 100, 100);
	for(var i = 0; x < width; i++) {
		wide = random(20, 35);
		high = random(25, 40);
		
		if(x + wide > width) 
			wide = width - x;

		drawRandomHouse(x + wide / 2, y - high /2, wide, high);
		x += wide;
	}
}

function randomColor() {
	return color(random(255), random(255), random(255));
}

// test next three functions later
function randomRed() {	
	return color(random(100, 235), random(50), random(50));
}

function randomGreen() {
	return color(random(50), random(100, 235), random(50));
}

function randomBlue() {
	return color(random(50), random(50), random(100, 245));
}

function randomYellow() {
	return color(random(200, 245), random(200, 245), random(50));
}

function mousePressed() {
	loop();
}

