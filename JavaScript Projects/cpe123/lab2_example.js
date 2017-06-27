/* All code created by Ryan Solorzano
 * Modeled after Blex Bolex's "Storm" 
 * CPE 123 (Computational Art)
 * 10/5/16
 *
 * Note: All animal translations are from the top left, as if it were encased in a box
 * Apologies in advance for all the custom shapes... this drawing has weird things to draw
 *
 * TODO: Put points on end of lightning, fix wings on bird
 */
 
var blueAnimalX = 140;
var blueAnimalY = 430;
var blueAnimalScale = .6;

var birdX = 261;
var birdY = 256;
var birdScale = 2;

var redAnimalX = 235;
var redAnimalY = 20;
var redAnimalScale = .5;

var greenAnimalX = 100;
var greenAnimalY = 130;
var greenAnimalScale = .45;

function setup() {
	createCanvas(400, 516);
}

function draw() {
	background(41, 91, 91);

	// Debugging
	if(mouseIsPressed) {
		console.log((mouseX) + "\n" + (mouseY));
	}
	// Far Left Blue lightning Bolt
	noFill();
	strokeCap(SQUARE);

	stroke(96,175,208);
	strokeWeight(6);
	beginShape();
		vertex (0,182);
		vertex (20,170);
		vertex (24, 217);
		vertex (44, 206);
		vertex (39, 267);
		vertex (55, 255);
		vertex (37, 304);
	endShape();

	// 3rd yellow lightning
	stroke(247, 213, 58);
	strokeWeight(7);
	beginShape();
		vertex(57, 0);
		vertex(72, 36);
		vertex(102, 15);
		vertex(101, 68);
		vertex(125, 42);
		vertex(129, 91);
		vertex(155, 68);
		vertex(162, 168);
	endShape();

	// Long yellow lightning
	stroke(244, 181, 60);
	strokeWeight(8);
	beginShape();
		vertex(179, 0);
		vertex(186, 44);
		vertex(217, 27);
		vertex(192, 109);
		vertex(227, 97);
		vertex(213, 158);
		vertex(247, 146);
		vertex(212, 225);
		vertex(225, 227);
		vertex(208, 259);
		vertex(272, 242);
		vertex(248, 290);
		vertex(290, 281);
		vertex(281, 347);
	endShape();

	// Horozontal (ish) lightning
	strokeWeight(6);
	stroke(255, 177, 39);
	beginShape();
		vertex(238, 248);
		vertex(241, 178);
		vertex(262, 186);
		vertex(278, 148);
		vertex(304, 169);
		vertex(308, 126);
		vertex(338, 144);
		vertex(345, 107);
		vertex(370, 126);
	endShape();

	drawRedAnimal(redAnimalX, redAnimalY, redAnimalScale);

	drawGreenAnimal(greenAnimalX, greenAnimalY, greenAnimalScale);

	// White lightning with orange background
	stroke(254, 253, 254);
	strokeWeight(3)
	beginShape();
		vertex(109,8);
		vertex(127, -27);
		vertex(136, 30);
		vertex(166, 9);
		vertex(170, 52);
		vertex(198, 29);
		vertex(213, 71);
		vertex(233, 60);
		vertex(239, 131);
	endShape();

	// 2nd lightning, orange
	stroke(236, 119, 64);
	strokeWeight(7);
	beginShape();
		vertex(31, 0);
		vertex(41, 21);
		vertex(15, 14);
		vertex(44, 78);
		vertex(61, 59);
		vertex(77, 101);
		vertex(101, 92);
		vertex(92, 129);
		vertex(122, 121);
		vertex(99, 164);
		vertex(121, 181);
		vertex(78, 210);
		vertex(97, 230);
		vertex(66, 268);
	endShape();

	// Far Right baby blue lightning
	strokeWeight(8);
	stroke(140, 181, 208);
	beginShape();
		vertex(310, 0);
		vertex(301, 27);
		vertex(325, 27);
		vertex(304, 76);
		vertex(329, 79);
		vertex(309, 110);
		vertex(329, 110);
		vertex(311, 201);
		vertex(362, 181);
		vertex(346, 259);
		vertex(371, 248);
		vertex(357, 295);
	endShape();
	
	drawBlueAnimal(blueAnimalX, blueAnimalY, blueAnimalScale);

	drawBird(birdX, birdY, birdScale);

	drawText();
}


function drawBlueAnimal(x, y, size) {
	push();
	translate(x - 43, y - 299);
	scale(size);
		noStroke();
		fill(128, 173, 195);
		rect(43, 299, 161, 79);
		/* RECT CORNERES 
			TOP LEFT: 43, 299
			TOP RIGHT: 204, 299
			BOTTOM RIGHT: 204, 378
			BOTTOM LEFT: 43, 378
		*/
		fill(41, 91, 91);
		beginShape();
			vertex(43, 299);
			curveVertex(38, 306);
			curveVertex(43, 302);
			curveVertex(49, 301);
			curveVertex(62, 306);
			curveVertex(73, 298);
		endShape(CLOSE);

		beginShape();
			vertex(103, 299);
			vertex(145, 303);
			vertex(162, 304);
			vertex(188, 310);
			vertex(206, 303);
			vertex(204, 299);
		endShape(CLOSE);

		beginShape();
			vertex(204, 299);
			vertex(201, 304);
			curveVertex(196, 314);
			curveVertex(197, 318);
			curveVertex(199, 330);
			curveVertex(204, 335);
			curveVertex(206, 336);
		endShape(CLOSE);

		beginShape();
			vertex(204,335);
			vertex(199, 341);
			vertex(187, 331);	
			// start curve
			vertex(190, 344);
			vertex(185, 337);
			vertex(175, 326);
			vertex(165, 329);
			// end curve
			vertex(164, 351);
			vertex(184, 369);
			vertex(184, 374);
			vertex(182, 379);
			vertex(204, 378);
		endShape(CLOSE);
	
		beginShape();
			vertex(176, 378);
			vertex(175, 369);
			vertex(153, 358);
			vertex(149, 330);
			vertex(123, 339);
			vertex(112, 348);
			vertex(113, 359);
			vertex(103, 355);
			vertex(112, 331);
			vertex(122, 325);
			// Start curve
			vertex(95, 320);
			vertex(82, 334);
			vertex(65, 334);
			// End curve
			vertex(72, 344);
			vertex(57, 332);
			vertex(66, 326);
			// Start of possible curve
			vertex(74, 318);
			// If I decide to do curve, next point is gone		
			vertex(60, 320);
			vertex(48, 308);
			// End of possible curve
			vertex(47, 319);
			vertex(43, 321);
			vertex(43, 378);
		endShape(CLOSE);
	
		// Wings
		fill(128, 173, 195);
		beginShape();
			vertex(145, 304);
			vertex(122, 257);
			vertex(130, 247);
			vertex(140, 238);
			vertex(154, 235);
			vertex(171, 237);
			vertex(164, 305);
		endShape();

		fill(41, 91, 91);
		noStroke();
		beginShape();
			curveVertex(111, 246);
			curveVertex(121, 256);
			curveVertex(133, 258);
			curveVertex(129, 246);
			curveVertex(123, 234);
		endShape();
		beginShape();
			curveVertex(126, 243);
			curveVertex(129, 246);
			curveVertex(140, 252);
			curveVertex(141, 237);
			curveVertex(139, 230);		
		endShape();
		beginShape();
			curveVertex(137, 231);
			curveVertex(139, 237);
			curveVertex(149, 249);
			curveVertex(155, 234);
			curveVertex(156, 228);		
		endShape();
		beginShape();
			curveVertex(153, 230);
			curveVertex(155, 234);
			curveVertex(162, 252);
			curveVertex(171, 237);
			curveVertex(176, 230);		
		endShape();	

		// Tail
		noFill();
		stroke(128, 173, 195);
		strokeWeight(3);
		beginShape();
			curveVertex(81, 306);
			curveVertex(75, 300);
			curveVertex(71, 290);
			curveVertex(82, 285);
			curveVertex(78, 274);
			curveVertex(88, 267);
			curveVertex(88, 261);
			curveVertex(88, 241);
		endShape();

		stroke(61, 76, 71);
		strokeWeight(2);
		point(189, 323);
	pop();
}

function drawBird(x, y, size) {
	push();
	translate(x, y);
	scale(size);
			noStroke();
			fill(177, 91, 48);
			// tail
			beginShape();
				vertex(26, 32);
				vertex(26, 26);
				vertex(9, 9);
				vertex(15, 10);
				vertex(16, 5);
				vertex(30, 25);
				vertex(32, 26);
			endShape(CLOSE);

			// Wings/ head
			triangle(3, 51.5, 56, 5, 52, 56);
			triangle(48, 13, 45, 12.5, 44.5, 16);
			triangle(42.5, 18.5, 39, 17, 38.5, 21.5);

			fill(41, 91, 91);
			beginShape();
				vertex(7.5, 46.5);
				vertex(11, 47);
				vertex(10, 44.5);
				vertex(13.5, 41.5);
				vertex(17, 42);
				vertex(18, 38);
				vertex(21, 35.5);
				vertex(23, 37.5);
				vertex(24, 32.5);
				vertex(27.5, 33.5);
				vertex(12, 15);
			endShape();

			beginShape();
				curveVertex(0, 102);
				curveVertex(3, 51.5);
				curveVertex(18, 56.5);
				curveVertex(32.5, 47);
				curveVertex(39, 45);
				curveVertex(43, 52.5);
				curveVertex(52, 56);
				curveVertex(59, 57);
				curveVertex(51, 70);
			endShape(CLOSE);

			beginShape();
				curveVertex(56, 3);
				curveVertex(56, 5);
				curveVertex(58.5, 20.5);
				curveVertex(46, 35.5);
				curveVertex(46.5, 42);
				curveVertex(52, 44.5);
				curveVertex(52, 56);
				curveVertex(50, 67);
				curveVertex(68.5, 15.5);
			endShape(CLOSE);

			fill(253, 224, 51);
			triangle(52.5, 51.5, 52, 56, 47, 55);

			// Envelope
			fill(241, 250, 251);
			beginShape();
				vertex(40.5, 61);
				vertex(58, 50.5);
				vertex(67, 59.5);
				vertex(50, 67.8);
			endShape(CLOSE);

			stroke(190, 184, 180);
			strokeWeight(.5);
			line(58.5, 53, 59, 58);
			line(59, 58, 65, 59.5);
			line(44, 61, 52.5, 61.5);
			line(50, 65.5, 50, 61.5);
			
			fill(230, 87, 28);
			noStroke();
			ellipse(55.5, 59.5, 5.5);

			stroke(230, 87, 28);
			strokeWeight(1.4);
			strokeCap(ROUND);	
			line(55, 59.2, 59, 62);
	pop();
}

function drawText() {
	noStroke();
	fill(255,255,255);
	rect(0,400,400,116);
	fill(71, 121, 145);
	textSize(72);
	textFont("French Script MT");
	text("the storm,", 102, 474);
}

function drawRedAnimal(x, y, size) {
	push();
		translate(x, y);
		scale(size);
		noStroke();
		fill(240, 94, 94);

		// Top-ish leg(?)
		beginShape();
			curveVertex(35,2);
			curveVertex(31,3);
			curveVertex(40, 20);
			curveVertex(7, 26);
			curveVertex(26, 52);
			curveVertex(39, 38);
			curveVertex(30, 33);
			curveVertex(51, 24);
			curveVertex(40, 8);
			curveVertex(43, 5);
			curveVertex(40,1);
		endShape(CLOSE);

		// Bottom left leg thing and body
		beginShape();
			curveVertex(39, 38);
			curveVertex(26, 52);
			curveVertex(22, 71);
			curveVertex(3, 61);
			curveVertex(4, 73);
			curveVertex(1, 80);
			curveVertex(11, 83);
			vertex(10, 72);
			curveVertex(32, 90);
			curveVertex(42, 65);
			vertex(64, 90);
			curveVertex(79, 72);
			curveVertex(48, 44);
			curveVertex(39, 37);
		endShape(CLOSE);

		// Other two legs and torso ish area
		beginShape();
			curveVertex(73, 86);
			curveVertex(64, 90);
			curveVertex(58, 92);
			curveVertex(66, 109);
			curveVertex(57, 111);
			curveVertex(52, 108);
			curveVertex(53, 116);
			curveVertex(74, 109);
			curveVertex(68, 100);
			curveVertex(80, 100);
			curveVertex(79, 113);
			curveVertex(93, 125);
			curveVertex(88, 134);
			curveVertex(96, 134);
			curveVertex(99, 124);
			curveVertex(89, 112);
			curveVertex(91, 107);
			curveVertex(102, 106);
			curveVertex(107, 98);
			curveVertex(102, 86);
			curveVertex(77, 70);
		endShape(CLOSE);

		// Head
		beginShape();
			curveVertex(99, 102);
			curveVertex(102, 106);
			curveVertex(119, 117);
			curveVertex(123, 135);
			curveVertex(127, 111);
			curveVertex(128, 102);
			curveVertex(113, 87);
			curveVertex(111, 101);
			curveVertex(107, 98);
			curveVertex(103, 96);
		endShape(CLOSE);

		// Wings
		beginShape();
			curveVertex(91, 86);
			curveVertex(94, 80);
			curveVertex(111, 85);
			curveVertex(115, 29);
			curveVertex(85, 52);
			curveVertex(93, 70);
			curveVertex(87, 83);
		endShape(CLOSE);

		fill(41, 91, 91);
		beginShape();
			curveVertex(116, 21);
			curveVertex(115, 29);
			curveVertex(110, 42);
			curveVertex(101, 35);
			curveVertex(94, 23);
		endShape(CLOSE);

		beginShape();
			curveVertex(100, 31);
			curveVertex(101, 35);
			curveVertex(101, 46);
			curveVertex(93, 46);
			curveVertex(88, 45);
		endShape(CLOSE);

		beginShape();
			curveVertex(93, 37);
			curveVertex(93, 46);
			curveVertex(93, 54);
			curveVertex(85, 52);
			curveVertex(79, 50);
		endShape(CLOSE);

		// Tail
		noFill();
		stroke(240, 94, 94);
		strokeWeight(3);
		beginShape();
			curveVertex(41, 46);
			curveVertex(43, 43);
			curveVertex(63, 26);
			curveVertex(71, 28);
			curveVertex(81, 23);
			curveVertex(89, 27);
			curveVertex(89, 27);
		endShape();

		// eye
		stroke(136, 76, 76);
		strokeWeight(3);
		point(119, 107);

	pop();
}

function drawGreenAnimal(x, y, size) {
	push();
	translate(x, y);
	scale(size);
		noStroke();
		fill(86, 135, 69);

		// arm and body thing
		beginShape();
			curveVertex(221, 57);
			curveVertex(213, 71);
			curveVertex(218, 77);
			curveVertex(193, 122);
			curveVertex(141, 110);
			curveVertex(62, 96);
			curveVertex(53, 110);
			curveVertex(81, 116);
			curveVertex(137, 139);
			curveVertex(156, 132);
			curveVertex(179, 137);
			curveVertex(214, 127);
			curveVertex(226, 81);
			curveVertex(233, 76);
			curveVertex(238, 68);
			curveVertex(229, 60);
		endShape(CLOSE);

		// Back legs 
		beginShape();
			vertex(50, 106);
			vertex(53, 144);
			vertex(16, 111);
			vertex(6, 138);
			vertex(16, 146);
			vertex(20, 126);
			vertex(64, 160);
			vertex(66, 123);
			vertex(94, 146);
			vertex(77, 189);
			vertex(110, 183);
			vertex(113, 174);
			vertex(87, 182);
			vertex(111, 142);
			vertex(72, 110);
		endShape(CLOSE);

		// Head
		beginShape();
			vertex(193, 136);
			vertex(205, 141);
			vertex(194, 142);
			vertex(183, 157);
			vertex(178, 156);
			vertex(179, 144);
			vertex(174, 155);
			vertex(173, 149);
			vertex(169, 136);
		endShape();

		// Wings
		beginShape();
			vertex(157, 119);
			vertex(146, 101);
			vertex(116, 72);
			vertex(84, 61);
			vertex(67, 51);
			vertex(61, 60);
			vertex(61, 70);
			vertex(81, 71);
			vertex(120, 83);
			vertex(132, 115);
		endShape(CLOSE);

		beginShape();
			curveVertex(138, 105);
			curveVertex(146, 101);
			curveVertex(173, 73);
			curveVertex(126, 0);
			curveVertex(97, 42);
			curveVertex(116, 61);
			curveVertex(116, 72);
			curveVertex(120, 83);
			curveVertex(134, 91);
		endShape(CLOSE);

		fill(41, 91, 91);
		beginShape();
			curveVertex(124, -5.2);
			curveVertex(124,-5.2);
			curveVertex(136, 34);
			curveVertex(105, 11);
			curveVertex(98, 6);
		endShape();

		beginShape();
			curveVertex(108, 15);
			curveVertex(108, 15);
			curveVertex(118, 42);
			curveVertex(97, 42);
			curveVertex(97, 42);
		endShape();

		// eye
		stroke(58, 98, 36);
		strokeWeight(2);
		point(184, 143);

	pop();
}
