// All code below is created by Ryan Solorzano
// CPE 123 (Computational Art)
// Modeled after Sallvador Dali's "the persistance of memory"
// 10/14/16
// I know its not perfect, but I'll go crazy if I work on this any more


// FOR MVP: DONE
// TODO: Finish cliffs, finish adding shadows to cliffs, finish box thing which tree sits on, finish tree thing, finish clocks,
//      finish blue thing in back, red thing on the box thing

var enableClock1 = false;
var enableClock2 = false;
var enableClock3 = false;



function setup() {
  createCanvas(750, 563);
}

function draw() {
  // Debug
  if (mouseIsPressed) {
    console.log("X: " + mouseX + " Y: " + mouseY)
  }
	background(0);
  drawPaining();
  if(enableClock1) 
    drawClock1();

  if(enableClock2) 
    drawClock2();
  
  if(enableClock3) 
    drawClock3();
  
  noLoop();
}

// things need to finish: drawGround()
function drawPaining() {
  drawGround();
  drawSky();
  drawCliffs();
  drawCliffShadows();
  drawBox();
  drawBlueThing();
  drawTree();
  drawCliffReflection();
  

  function drawSky() {
    noStroke();

    fill(55, 141, 190);
    rect(0, 0, width, 61);

    fill(45, 109, 145);
    triangle(0, 0, 0, 22, 87, 0);

    fill(148, 191, 198);
    beginShape();
       curveVertex(width, 32);
       curveVertex(width, 32);
       curveVertex(733, 27)
       curveVertex(668, 26);
       curveVertex(636, 25);
       curveVertex(510, 31);
       curveVertex(442, 27);
       curveVertex(337, 34);
       curveVertex(214, 29);
       curveVertex(81, 56);
       curveVertex(267, 56);
       curveVertex(367, 51);
       curveVertex(513, 57);
       curveVertex(623, 56);
       curveVertex(674, 66);
       curveVertex(701, 69);
       curveVertex(750, 61);
       curveVertex(750, 61);
    endShape();

    fill(224, 233, 228);
    beginShape();
      curveVertex(0, 86);
      curveVertex(0, 86);
      curveVertex(93, 78);
      curveVertex(119, 72);
      curveVertex(235, 72);
      curveVertex(349, 64);
      curveVertex(556, 68);
      curveVertex(674,  66);
      curveVertex(623, 56);
      curveVertex(513, 57);
      curveVertex(367, 51);
      curveVertex(267, 56);
      curveVertex(81, 56);
      curveVertex(0, 61);
      curveVertex(0, 61);
    endShape();

    // very light blue?
    fill(209, 230, 235);
    beginShape();
      vertex(0, 131);
      vertex(78, 129);
      vertex(106, 126);
      vertex(177, 127);
      vertex(126, 148);
      vertex(80, 150);
      vertex(0, 151);
    endShape();

    // white ish color
    fill(237, 239, 238);
    beginShape();
      vertex(177, 127);
      vertex(309, 123);     
      vertex(592, 122.5);
      vertex(689, 167);
      vertex(469, 169);
      vertex(145, 163);
      vertex(119, 149);
    endShape(CLOSE);

    // beigey color (lol sorry cant spell)
    fill(224, 217, 188);
    beginShape();
      curveVertex(0, 85);
      curveVertex(0, 85);
      curveVertex(93, 77);
      curveVertex(119, 71);
      curveVertex(235, 71);
      curveVertex(349, 63);
      curveVertex(556, 67);
      curveVertex(674, 65);
      curveVertex(701, 68);
      curveVertex(width, 61);
      curveVertex(width, 130);
      curveVertex(492, 123);
      curveVertex(309, 126);
      // ?? 192, 116
      curveVertex(200, 146);
      curveVertex(160, 129);
      curveVertex(78, 130);
      curveVertex(0, 132);
      curveVertex(0, 132);
    endShape();

    // Baby blueish color
    fill(124, 181, 208);
    beginShape();
      curveVertex(468, 170);
      curveVertex(468, 170);
      curveVertex(413, 160);
      curveVertex(365, 164);
      curveVertex(299, 164);
      curveVertex(331, 169);
      curveVertex(379, 169);
      curveVertex(424, 171);
      curveVertex(445, 169);
    endShape(CLOSE);
  }

  // fix later, if time
  function drawCliffs() {
    fill(210, 123, 35);
    noStroke();
    beginShape();
      vertex(685, 94);
      vertex(673.5, 94.5);
      vertex(667.5, 95.5);
      vertex(665.5, 97);
      vertex(662.5, 95);
      vertex(646, 99);
      vertex(636.5, 98.5);
      vertex(633, 102);
      vertex(632, 109.5);
      vertex(628, 114);
      vertex(627, 120);
      vertex(620.5, 128.5);
      vertex(621.5, 134);
      vertex(612, 143);
      vertex(611, 150);
      vertex(676, 152);
    endShape(CLOSE);
    
    fill(225, 171, 54);
    beginShape();
      vertex(633, 102);
      vertex(628.5, 101.5); 
      vertex(627, 99.5);
      vertex(616, 112.5);
      vertex(616.5, 112.5);
      vertex(610.5, 114);
      vertex(611, 115.5);
      vertex(607, 116.5);
      vertex(606.5, 123.5);
      vertex(601.5, 128.5);
      vertex(599.5, 137);
      vertex(597.5, 137);
      vertex(592, 132);
      vertex(589.5, 138.5);
      vertex(585, 137);
      vertex(574, 142.5);
      vertex(574, 146.5);
      vertex(611, 150);
      vertex(612, 143);
      vertex(621.5, 134);
      vertex(620.5, 128.5);
      vertex(627, 120);
      vertex(628, 114);
    endShape(CLOSE);
    
    fill(220, 142, 43);
    stroke(72, 48, 2);
    strokeWeight(1);
    beginShape();
      curveVertex(width, 80.5);
      curveVertex(width, 80.5);
      curveVertex(742.5, 82);
      curveVertex(722, 79);
      curveVertex(716.5, 82);
      curveVertex(711, 80.5);
      curveVertex(695, 84.5);
      curveVertex(688, 85.5);
      curveVertex(687, 92);
      curveVertex(682.5, 97);
      curveVertex(681.5, 102);
      curveVertex(685.5, 107);
      curveVertex(680, 115);
      curveVertex(663.5, 158.5);
      curveVertex(width, 155.5);
      curveVertex(width, 155.5);
    endShape(CLOSE);
    noStroke();
    
    // far right 
    stroke(56, 10, 0);
    fill(204, 127, 37);
    beginShape();
      vertex(width, 95);
      vertex(747.5, 91);
      vertex(745, 91.5);
      vertex(743.5, 93.5);
      vertex(741, 92.5);
      vertex(738.5, 94.5);
      vertex(734.5, 101);
      vertex(732, 98.5);
      vertex(729.5, 98.5);
      vertex(728.5, 94);
      vertex(726.5, 100);
      vertex(724, 102);
      vertex(722, 102);
      vertex(721, 110);
      vertex(714, 119.5);
      vertex(710, 129.5);
      vertex(708, 138);
      vertex(width, 134.5);
    endShape(CLOSE);

    // rocks
    noStroke();
    fill(166, 174, 148);
    beginShape();
      vertex(width, 132.5);
      vertex(745.5, 132);
      vertex(742, 133.5);
      vertex(732.5, 124);
      vertex(732.5, 147);
      vertex(730, 150.5);
      vertex(width, 152);
    endShape(CLOSE);

    fill(201, 211, 201);
    beginShape();
      vertex(731, 146);
      vertex(731, 130.5);
      vertex(728.5, 130.5);
      vertex(728.5, 133.5);
      vertex(725.5, 137.5);
      vertex(726, 142.5);
      vertex(724, 145.5);
      vertex(723.5, 149.5);
      vertex(731, 150);
    endShape(CLOSE);

    fill(168, 185, 183);
    beginShape();
      vertex(723, 150.5);
      vertex(723, 145);
      vertex(725, 142);
      vertex(725.5, 129.5);
      vertex(722, 129.5);
      vertex(716.5, 134);
      vertex(718, 136.5);
      vertex(709.5, 150.5);
    endShape(CLOSE);
  }

  // Fix later, if time
  function drawCliffShadows() {
    noStroke();
    fill(56, 10, 0);
    beginShape();
      vertex(width, 95);
      vertex(747, 98.5);
      vertex(747, 107);
      vertex(746, 112);
      vertex(741.5, 124.5);
      vertex(743, 112);
      vertex(745.5, 106.5);
      vertex(745, 97.5);
      vertex(748, 93.5);
      vertex(747, 91);
      vertex(width, 91);
    endShape();

    beginShape();
      vertex(738.5, 95);
      vertex(737.5, 104);
      vertex(735.5, 111.5);
      vertex(733, 123.5);
      vertex(732.5, 120.5);
      vertex(733, 111.5);
      vertex(734.5, 101);
      vertex(732, 98);
    endShape(CLOSE);

    triangle(718, 132.5, 717.5, 126, 716, 134);

    fill(101, 81, 30);
    beginShape();
      curveVertex(716, 82.5);
      curveVertex(716, 82.5);
      curveVertex(711, 80.5);
      curveVertex(701, 83);
      curveVertex(688, 85.5);
      curveVertex(691, 88.5);
      curveVertex(696, 89);
      curveVertex(696, 89);
    endShape();

    fill(48, 21, 11);
    beginShape();
      vertex(696, 89);
      vertex(695, 93.5);
      vertex(689.5, 97.5);
      vertex(689.5, 102.5);
      vertex(694, 106);
      vertex(702.5, 107.5);
      vertex(695, 107.5);
      vertex(687.5, 108);
      vertex(684, 107);
      vertex(680, 102);
      vertex(681, 96.5);
      vertex(688, 85.5);
    endShape();

    beginShape();
      vertex(687.5, 108);
      vertex(682, 113.5);
      vertex(677, 143);
      vertex(672, 152);
      vertex(655.5, 151.5);
      vertex(663, 137);
      vertex(678.5, 114);
      vertex(682, 104);
    endShape();
    
    fill(235, 224, 213);
    stroke(89, 70, 27);
    beginShape();
      vertex(638, 111);
      vertex(638.5, 102);
      vertex(636.5, 98.5);
      vertex(633, 102.5);
      vertex(631.5, 109.5);
      vertex(628, 113.5);
      vertex(627, 120);
      vertex(620, 129.5);
    endShape();

    strokeCap(SQUARE);
    line(644, 99.5, 646, 104.5);
    line(646, 104.5, 645.5, 111.5);

    line(653.5, 107, 649.5, 113);
    line(649.5, 113, 650, 119.5);

    line(667, 97, 666, 110);

    fill(42, 31, 17);
    noStroke();
    beginShape();
      vertex(732.5, 147);
      vertex(732.5, 124);
      vertex(725.5, 130);
      vertex(724.5, 137);
      vertex(725, 141.5);
      vertex(722.5, 145.5);
      vertex(723, 150);
      vertex(724, 145.5);
      vertex(726, 142.5);
      vertex(726, 137.5);
      vertex(728.5, 134);
      vertex(728.5, 131);
      vertex(731, 130.5);
      vertex(731, 136.5);
      vertex(729.5, 139);
      vertex(729.5, 141.5);
      vertex(731, 143.5);
      vertex(731, 149);
    endShape();

    beginShape();
      vertex(715, 131.5);
      vertex(718, 136.5);
      vertex(709, 151.5);
      vertex(705.5, 148.5);
      vertex(711, 137.5);
    endShape();
    
  }

  function drawBox() {
    noStroke();
    fill(173, 66, 32);
    quad(0, 262, 241, 263, 76, height, 0, height);
    quad(241, 263, 244, 452, 205, height, 76, height);
    
    fill(15, 5, 4);
    beginShape();
    endShape();
  }

  // Finish later
  function drawBlueThing() {
    noStroke();
    fill(60, 128, 177);
    quad(152, 190, 197, 150, 0, 150, 0, 191);
    fill(123, 70, 52);
    quad(152, 190, 184, 161, 185  , 172, 153, 198);
    fill(175, 96, 27);
    quad(184, 161, 185, 172,  198, 159, 197, 150);
  }

  // If possible, fix later
  function drawGround() {
    var initialColor = color(79, 44, 25);
    var targetColor = color(0,0,0);
    var finish = 80;
    noStroke();

    //Initial thing
    fill(initialColor);
    beginShape();
      curveVertex(464, 184);
      curveVertex(464, 184);
      curveVertex(593, 207);
      curveVertex(471, 230);
      curveVertex(471, 230);
    endShape();

    noFill();
    strokeWeight(1);
    for(var i = 0; i < finish; i++) {
      stroke(lerpColor(initialColor, targetColor, i/finish));
      beginShape();
        curveVertex(464, 184 - i/2);
        curveVertex(464, 184 - i/2);
        curveVertex(593 + i/2, 207);
        curveVertex(471, 230 + i/2);
        curveVertex(471, 230 + i/2);
      endShape();
    }

    targetColor = color(106, 70, 38);
    stroke(initialColor);
    for(var i =0; i <= 15; i += .5) {
      stroke(lerpColor(targetColor, initialColor, i/ 7));
      //line(464 - i, 184, 471 - i, 230);
      line(459 + i, 160 + i, 459 + i, 257 - i);
    }

    targetColor = initialColor;
    initialColor = color(106, 70, 38);
    fill(initialColor);
    noStroke();
    beginShape();
      curveVertex(459, 160);
      curveVertex(459, 160);
      curveVertex(285, 196);
      curveVertex(459, 257);
      curveVertex(459, 257);
    endShape();
    
    noStroke();
    fill(81, 39, 22);
    beginShape();
      vertex(93, 204);
      vertex(77, 298);
      vertex(204, 228);
      vertex(274, 200);
      vertex(211, 175);
      vertex(166, 179);
      vertex(152, 198)
    endShape();

    fill(150, 95, 41);
    beginShape();
      vertex(93, 204);
      vertex(79, 268);
      vertex(126, 234);
      vertex(122, 207);
      vertex(152, 206);
      vertex(152, 198);
    endShape(CLOSE);

    fill(227, 159, 61);
    triangle(185, 172,  198, 159, 329, 167);

  }

  // finish later lol
  function drawTree() {
    noStroke();
    fill(193, 173, 100);
    beginShape();
      curveVertex(89, 285);
      curveVertex(89, 285);
      curveVertex(86, 278);
      curveVertex(95, 251);
      curveVertex(96, 212);
      curveVertex(103, 195);
      curveVertex(105, 166);
      curveVertex(195, 121);
      curveVertex(309, 114);
      curveVertex(325, 115);
      curveVertex(344, 110);
      curveVertex(358, 114);
      curveVertex(358, 108);
      curveVertex(329, 106);
      curveVertex(217, 113);
      curveVertex(192, 113);
      curveVertex(164, 129);
      curveVertex(106, 147); 
      curveVertex(79, 162);
      curveVertex(67, 236);
      curveVertex(44, 283);
    endShape(CLOSE);

    beginShape();
      curveVertex(79, 162);
      curveVertex(79, 162);
      curveVertex(80.5, 111.5);
      curveVertex(75, 88);
      curveVertex(78.5, 45);
      curveVertex(83, 41);
      curveVertex(86.5, 40);
      curveVertex(101.5, 48.5);
      curveVertex(98.5, 62.5);
      curveVertex(104, 109.5);
      curveVertex(106, 147);
      curveVertex(106, 147);
    endShape();

    fill(127, 179, 193);
    


  }

  function drawCliffReflection() {
      fill(217, 117, 35);
      stroke(0);
      strokeWeight(.2);
      beginShape();
        vertex(574, 146.5);
        vertex(611, 150);
        vertex(667, 152);
        vertex(704, 146);
        vertex(722, 150);
        vertex(730, 149);
        vertex(width, 150);
        vertex(width, 165);
        vertex(596, 173);
        vertex(474, 170);
        vertex(602, 165);
      endShape(CLOSE);
  }


}

// things need to finish: dial
function drawClock1() {
  noStroke();
  // back of clock
  stroke(194, 203, 198);
  fill(45, 37, 34);
  beginShape();
    curveVertex(229.5, 112.5);
    curveVertex(226, 116);
    curveVertex(219, 153.5);
    curveVertex(231, 187.5);
    curveVertex(246.5, 194);
    curveVertex(259, 158);
    curveVertex(256.5, 111.5);
    curveVertex(256.5, 111.5);
  endShape();

  noStroke();
  fill(78, 142, 190);
  // clock face
  beginShape();
    curveVertex(292, 107);
    curveVertex(292, 107);
    curveVertex(301, 129.5);
    curveVertex(299, 161);
    curveVertex(287, 194.5);
    curveVertex(288, 193.5);
    curveVertex(284, 224);
    curveVertex(275.5, 211);
    curveVertex(263, 191.5);
    curveVertex(261, 144);
    curveVertex(251, 111.5);
    curveVertex(251, 111.5);
  endShape();

  // left edge
  fill(228, 241, 247);
  beginShape();
    curveVertex(251, 111.5);
    curveVertex(251, 111.5);
    curveVertex(261, 144);
    curveVertex(263, 191.5);
    curveVertex(275.5, 211);
    curveVertex(284, 224);
    curveVertex(281, 226.5);
    curveVertex(273, 215);
    curveVertex(259.5, 194);
    curveVertex(256.5, 160.5);
    curveVertex(253, 129.5);
    curveVertex(249.5, 114.5);
    curveVertex(249.5, 114.5);
  endShape();

  fill(60, 84, 96);
  beginShape();
    curveVertex(237.5, 109.5);
    curveVertex(237.5, 109.5);
    curveVertex(251, 112);
    curveVertex(253, 129.5);
    curveVertex(256.5, 160.5);
    curveVertex(259.5, 194);
    curveVertex(273, 215);
    curveVertex(281, 226.5);
    curveVertex(281.5, 228);
    curveVertex(278.5, 227.5);
    curveVertex(258.5, 197.5);
    curveVertex(254.5, 181);
    curveVertex(254.5, 154);
    curveVertex(245, 113.5);
    curveVertex(245, 113.5);
  endShape();

  fill(228, 241, 247);
  beginShape();
    curveVertex(229.5, 112.5);
    curveVertex(229.5, 112.5);
    curveVertex(237.5, 109.5);
    curveVertex(245, 113.5);
    curveVertex(254.5, 154);
    curveVertex(254.5, 181);
    curveVertex(258.5, 197.5);
    curveVertex(278.5, 227.5);
    curveVertex(281.5, 228);
    curveVertex(270.5, 221);
    curveVertex(256,  197.5);
    curveVertex(250.5, 148);
    curveVertex(243, 115);
    curveVertex(229.5, 112.5);
    curveVertex(229.5, 112.5);
  endShape();

  // right edge ??? FIX
  fill(83, 121, 134);
  beginShape();
    curveVertex(292, 107);
    curveVertex(292, 107);
    curveVertex(301, 129.5);
    curveVertex(299, 161);
    curveVertex(287, 194.5);
    curveVertex(288, 193.5);
    curveVertex(284, 224);
    curveVertex(286, 224);
    curveVertex(290, 193.5);
    curveVertex(289, 194.5);
    curveVertex(301, 161);
    curveVertex(303, 129.5);
    curveVertex(294, 107);
    curveVertex(294, 107);
  endShape();
  
  fill(228, 241, 247); 
  beginShape();
    curveVertex(294, 107);
    curveVertex(294, 107);
    curveVertex(303, 129.5);
    curveVertex(301, 161);
    curveVertex(289, 194.5);
    curveVertex(290, 193.5);
    curveVertex(286, 224);
    curveVertex(284, 226.5);
    curveVertex(280, 227);
    curveVertex(281, 231);
    curveVertex(286, 229);
    curveVertex(289, 224);
    curveVertex(293, 193.5);
    curveVertex(292, 194.5);
    curveVertex(303, 161);
    curveVertex(305, 129.5);
    curveVertex(297, 107);
    curveVertex(297, 107);
    
    
  endShape();

  // NUMBERS
  curveTightness(-1);
  // 3
  noFill();
  stroke(41, 81, 83);
  beginShape();
    curveVertex(289, 115);
    curveVertex(289, 115);
    curveVertex(292, 112.5);
    curveVertex(291, 116);
    curveVertex(291, 116);
  endShape(); 
  beginShape();
    curveVertex(291, 116);
    curveVertex(291, 116);
    curveVertex(295.5, 117.5);
    curveVertex(290, 121);
    curveVertex(290, 121);
  endShape();

  // 4
  strokeWeight(1.5);
  line(295.5, 139.5, 295.5, 149.5);
  strokeWeight(.5);
  line(295.5, 139.5, 291.5, 145.5);
  strokeWeight(.1);
  line(291.5, 145.5, 298, 145.5);

  // 5
  strokeWeight(1.5);
  line(293, 169.5, 289, 168);
  strokeWeight(.5);
  line(289, 168, 287, 172);
  strokeWeight(1);
  beginShape();
    curveVertex(287, 172);
    curveVertex(287, 172);
    curveVertex(291.5, 176);
    curveVertex(285.5, 178);
    curveVertex(285.5, 178);
  endShape();

  // 6
  curveTightness(0);
  strokeWeight(.75);
  beginShape();
    curveVertex(282.5, 206);
    curveVertex(282.5, 206);
    curveVertex(281, 217.5);
    curveVertex(284, 222);
    curveVertex(284.5, 214.5);
    curveVertex(281.5, 212);
    curveVertex(281.5, 212);
  endShape();

  // partial 7, 8, 9
  curve(265.6, 198.8, 265, 197, 263.5, 187, 261.6, 181.8);
  point(261.5, 167.5);
  point(262, 160.5);
  line(258, 127, 261, 131.5);
  line(261, 131.5, 260, 137.5);

  curve(273.5, 113.5, 273.5, 113.5, 277.5, 126, 277.5, 126);
  line(277.5, 126, 277, 160.5);
  fill(41, 81, 83);
  ellipse(276.5, 164.5, 2, 8);
  noStroke();
  triangle(276, 168.5, 277.5, 186, 277.5, 168);

  // dial thing finish later
  /*
  fill(237, 251, 255);
  quad(243.5, 199.5, 243.5, 202.5, 248, 202, 248, 199.5);
  fill(4, 23, 29);
  quad(243.5, 199.5, 243.5, 202.5, 240.5, 202.5, 240, 200);
  */
}

// things need to finish: thing + stuff on clock
function drawClock2() {
  var hairCurves = [[433, 449, 430, 444, 374, 443, 366, 445], 
                    [441, 443, 430, 439, 436, 440, 437, 448],
                    [439, 438, 431, 434, 377, 438, 368, 443], 
                    [434, 433, 427, 429, 378, 433, 371, 436], 
                    [437, 431, 431, 428, 378, 429, 369, 435],
                    [439, 433, 435, 426, 378, 424, 370, 429],
                    [419, 409, 404, 409, 377, 421, 370, 428],
                    [418, 404, 410, 403, 376, 418, 369, 425],
                    [414, 398, 406, 397, 374, 413, 367, 419], 
                    [408, 388, 401, 390, 371, 410, 368, 415],
                    [401, 384, 392, 388, 369, 407, 365, 412],
                    [401, 379, 395, 383, 365, 404, 364, 407],
                    [403, 377, 396, 376, 365, 403, 363, 409],
                    [397, 365, 386, 370, 361, 399, 358, 405],
                    [384, 368, 379, 372, 360, 397, 356, 403],
                    [390, 361, 386, 364, 358, 393, 354, 401],
                    [388, 357, 382, 361, 358, 380, 353, 385],
                    [373, 361, 373, 361, 360, 372, 360, 372],
                    [371, 360, 371, 360, 359, 373, 359, 373],
                    [371, 359, 371, 359, 360, 368, 360, 368],
                    [367, 360, 367, 360, 360, 364, 360, 364],
                    [364, 359, 364, 359, 360, 360, 360, 360]];
  
  var beginColor = color(228, 226, 231); 
  var endColor = color(0);
  var iterations = 10;
  drawThing();
  drawClock();
  
  // things need to finish: shadows + mouth
  function drawThing() {
    noStroke();
    fill(228, 226, 231);
    // Outline of ... thing
    beginShape();
      curveVertex(396, 492);
      curveVertex(381, 483);
      curveVertex(365, 477);
      curveVertex(347, 464);
      curveVertex(304, 433);
      curveVertex(326, 357);
      curveVertex(364, 330);
      curveVertex(408, 319);
      curveVertex(448, 298);
      
      curveVertex(482, 282);
      curveVertex(601, 317);
      curveVertex(510, 341);

      curveVertex(509, 348);
      curveVertex(501, 351);
      curveVertex(494, 388);
      curveVertex(487, 405);
      curveVertex(473, 403);
      curveVertex(456, 402);
      curveVertex(439, 415);
      curveVertex(406, 431);
      curveVertex(407, 447);
      curveVertex(396, 454);
      curveVertex(403, 492);
      curveVertex(396, 492);
    endShape();

    // fade out tail (?)
    noFill();
    stroke(228, 226, 231);
    for(var a = 0; a < iterations; a += .5) {
      stroke(lerpColor(beginColor, endColor, a/iterations));
      beginShape();
        curveVertex(482 - a /2, 282 - a);
        curveVertex(482 - a /2 , 282 - a);
        curveVertex(601 + a, 317);
        curveVertex(510 + a / 2, 341 + a);
        curveVertex(510 + a / 2, 341 + a);
      endShape();
    }

    /*
    // shadows (fix first two, they look weird)
    fill(80, 47, 40);
    noStroke();
    beginShape();
      vertex(482, 282);
      vertex(510, 341);
      vertex(490, 364);
      vertex(467, 303);
      vertex(474, 281);
    endShape();

    fill("rgba(108, 87, 78, .8)");
    beginShape();
      //vertex(484, 357);
      vertex(490, 364);
      vertex(467, 303);
      vertex(440, 332);
      vertex(474, 398);
      vertex(485, 399);
    endShape();
    */

    fill(26, 10, 11);
    noStroke();
    beginShape();      
      curveVertex(401, 489);
      //curveVertex(396, 492);
      curveVertex(401, 489);
      curveVertex(381, 482);
      curveVertex(365, 476);
      curveVertex(347, 463);
      curveVertex(305, 433);
      
     // curveVertex(327, 360);
      curveVertex(322, 366);
      curveVertex(316, 397);
      curveVertex(319, 426);
      curveVertex(336, 451);
      curveVertex(353, 457);
      curveVertex(397, 483);
      curveVertex(397, 483);
      
    endShape();

    // hair?? (draw before mouth(???)) 
    stroke(82, 61, 39);
    strokeWeight(.5);
    for(var i = 0; i < hairCurves.length; i++) {
      curve(hairCurves[i][0], hairCurves[i][1], hairCurves[i][2], hairCurves[i][3], hairCurves[i][4], hairCurves[i][5], hairCurves[i][6], hairCurves[i][7], hairCurves[i][8]);
    }
    stroke(34, 23, 16);
    strokeWeight(1.25);
    noFill();
    beginShape();
      curveVertex(hairCurves[0][4], hairCurves[0][5]);
      for(var i = 0; i < hairCurves.length; i++) {
       curveVertex(hairCurves[i][4], hairCurves[i][5]);
      }
      curveVertex(hairCurves[hairCurves.length - 1][4], hairCurves[hairCurves.length - 1][5]);
    endShape();


    stroke(228, 226, 231);
    line(507.5, 348, 558, 349);

    // mouth(?)
    stroke(151, 173, 159);
    strokeWeight(1.5);
    fill(105, 81, 35);
    beginShape();
      curveVertex(403, 451);
      curveVertex(403, 451);
      curveVertex(420, 457);
      curveVertex(437, 461);
      curveVertex(427, 470);
      curveVertex(404, 467);
      curveVertex(404, 467);
    endShape();



  }

  // things need to finish: knob on clock
  function drawClock() {
    // back face
    noFill();
    strokeCap(ROUND);
    stroke(248, 248, 250);
    strokeWeight(6);
    beginShape();
      curveVertex(407.5, 320.5);
      curveVertex(407.5, 320.5);  
      curveVertex(380, 314);
      curveVertex(368, 319);
      curveVertex(369.5, 324.5);
      curveVertex(369.5, 324.5);
    endShape();

    stroke(32, 39, 49);
    strokeWeight(2.5);
    beginShape();
      curveVertex(407.5, 319.5);
      curveVertex(407.5, 319.5);  
      curveVertex(380, 313);
      curveVertex(368, 319);
      curveVertex(369.5, 326);
      curveVertex(369.5, 326);
    endShape();

    noStroke();
    fill(125, 173, 209);
    beginShape();
      curveVertex(407.5, 319.5);
      curveVertex(407.5, 319.5);  
      curveVertex(380, 313);
      curveVertex(368, 319);
      curveVertex(369.5, 327.5);
      curveVertex(369.5, 327.5);
    endShape();


    // Edge thing
    noFill();
    stroke(165, 196, 216);
    strokeWeight(15);
    beginShape();
      curveVertex(388, 330);
      curveVertex(388, 330);
      curveVertex(416.5, 347);
      curveVertex(442, 352.5);
      curveVertex(448.5, 334);
      curveVertex(439.5, 315.5);
      curveVertex(428, 314);
      curveVertex(428, 314);
    endShape();

    stroke(32, 39, 49);
    strokeWeight(10);
    beginShape();
      curveVertex(384, 329);
      curveVertex(384, 329);
      curveVertex(416.5, 349);
      curveVertex(444, 353.5);
      curveVertex(448.5, 334);
      curveVertex(439.5, 315.5);
      curveVertex(425, 312);
      curveVertex(425, 312);
    endShape();
    
    //stroke(227, 252, 255);
    stroke(165, 196, 216);
    strokeWeight(5);
    beginShape();
      curveVertex(381, 326);
      curveVertex(381, 326);
      curveVertex(416.5, 351);
      curveVertex(444, 353.5);
      curveVertex(450.5, 334);
      curveVertex(439.5, 315.5);
      curveVertex(422.5, 310.5);
      curveVertex(422.5, 310.5);
    endShape();


    // front Face
    noStroke();
    fill(221, 232, 236);
    beginShape();
      curveVertex(380, 324);
      curveVertex(380, 324);
      curveVertex(416.5, 351);
      curveVertex(444, 354.5);
      curveVertex(451.5, 334);
      curveVertex(440.5, 315.5);
      curveVertex(422.5, 309.5);
      curveVertex(407.5, 319.5);
      curveVertex(407.5, 319.5);
    endShape();

    // hands
    noFill();
    strokeWeight(.75);
    stroke(40, 42, 53);
    curve(397, 316, 407, 319.5, 427, 341, 433, 352);

    stroke(53, 58, 61);
    ellipse(407, 319.5, 1.5);
    noStroke();
    fill(155, 158, 160);
    ellipse(407, 319.5, 1);

    fill(40, 42, 53);
    ellipse(427, 342, 2, 3);
    triangle(427, 342.5, 432, 348.5, 427.5, 341.5);

    // numbers
    
    //Partial 9
    noFill();
    stroke(68, 81, 88);
    arc(421, 310, 2.5, 2.5, 0, 11 * Math.PI / 12);

    // 10
    line(436, 314, 439, 321);
    beginShape();
      curveVertex(432, 317);
      curveVertex(432, 317);
      curveVertex(436, 319);
      curveVertex(434, 323);
      curveVertex(431, 321);
      curveVertex(432, 317);
      curveVertex(432, 317);
    endShape();

    // 11
    line(446, 326, 448, 334);
    line(443, 328,  444, 335);

    // 12
    line(443, 346, 446, 352);
    beginShape();
      curveVertex(443, 353);
      curveVertex(443, 353);
      curveVertex(441, 356);
      curveVertex(439, 355);
      curveVertex(439, 355);
    endShape();
    line(439, 355, 440, 349);
    line(440, 349, 436, 352);

    // 1
    line(421, 352, 418, 346);
    
    // 2
    beginShape();
      curveVertex(410, 334);
      curveVertex(410, 334);
      curveVertex(408, 339);
      curveVertex(405, 336);
      curveVertex(405, 336);
    endShape();
    line(405, 336, 407, 329);
    line(407, 329, 402, 332);
  }
}

// things need to finish: dial
function drawClock3() {
  // edges for face
  noFill();
  strokeCap(ROUND);
  stroke(226, 130, 45);
  strokeWeight(16);
  beginShape();
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(124, 353);
    curveVertex(110, 325);
    curveVertex(154, 312.5);
    curveVertex(205, 317);
    curveVertex(205, 317);
  endShape();  

  strokeWeight(15);
  beginShape(); 
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(188, 426);
    curveVertex(201, 444);
    curveVertex(204, 468);
    curveVertex(210, 455);
    curveVertex(210, 431);
    curveVertex(220, 409);
    curveVertex(215, 363);
    curveVertex(221, 331);
    curveVertex(211, 316);
    curveVertex(211, 316);
  endShape();

  stroke(52,35, 14);
  strokeWeight(12);
  beginShape();
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(124, 353);
    curveVertex(110, 325);
    curveVertex(154, 312.5);
    curveVertex(207, 317);
    curveVertex(207, 317);
  endShape();  
  
  strokeWeight(10);
  beginShape(); 
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(188, 426);
    curveVertex(199, 444);
    curveVertex(204, 468);
    curveVertex(210, 455);
    curveVertex(210, 431);
    curveVertex(220, 409);
    curveVertex(215, 363);
    curveVertex(221, 331);
    curveVertex(207, 317);
    curveVertex(207, 317);
  endShape();
  
  
  stroke(226, 130, 45);
  strokeWeight(5);
  beginShape();
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(124, 353);
    curveVertex(108, 325);
    curveVertex(154, 309);
    curveVertex(211, 316);
    curveVertex(211, 316);
  endShape();

  stroke(226, 130, 45);
  strokeWeight(5);
  beginShape(); 
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(188, 426);
    curveVertex(201, 444);
    curveVertex(204, 468);
    curveVertex(210, 455);
    curveVertex(210, 431);
    curveVertex(220, 409);
    curveVertex(215, 363);
    curveVertex(221, 331);
    curveVertex(211, 316);
    curveVertex(211, 316);
  endShape();

  // darker blue face
  noStroke();
  fill(66, 142, 202);
  beginShape();
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(124, 353);
    curveVertex(108, 325);
    curveVertex(154, 308);
    curveVertex(212, 314);
    curveVertex(212, 314);
  endShape();

  // light blue face
  fill(202, 221, 231);
  beginShape(); 
    curveVertex(184, 365);
    curveVertex(184, 365);
    curveVertex(188, 426);
    curveVertex(198, 444);
    curveVertex(203, 471);
    curveVertex(213, 455);
    curveVertex(215, 431);
    curveVertex(224, 409);
    curveVertex(218, 363);
    curveVertex(221, 331);
    curveVertex(212, 314);
    curveVertex(212, 314);
  endShape();

  // NUMBERS

  // 12
  stroke(16, 30, 44);
  strokeWeight(.75);
  noFill();
  line(108, 328, 116, 332);

  beginShape();
    curveVertex(112, 327);
    curveVertex(112, 327);
    curveVertex(110, 323);
    curveVertex(114, 322);
    curveVertex(114, 322);
  endShape();
  line(114, 322, 117, 327);
  line(117, 327, 119, 323); 

  // 1  (1 is my new favorite number)
  line(134, 311, 139, 316);

  // 2
  beginShape();
    curveVertex(165, 314);
    curveVertex(165, 314);
    curveVertex(163, 310);
    curveVertex(167, 309);
    curveVertex(167, 309);
  endShape();
  line(167, 309, 169, 315);
  line(169, 315, 173, 311);

  // 3
  beginShape();
    curveVertex(200, 317);
    curveVertex(200, 317);
    curveVertex(202, 315);
    curveVertex(204, 319);
    curveVertex(204, 319);
  endShape();
  beginShape();
    curveVertex(204, 319);
    curveVertex(204, 319);
    curveVertex(208, 321);
    curveVertex(207, 325);
    curveVertex(203, 323);
    curveVertex(203, 323);
  endShape();

  // 4
  strokeWeight(1);
  line(212, 365, 212, 353);
  strokeWeight(.75);
  line(212, 353, 207, 362);
  strokeWeight(.5);
  line(207, 362, 216, 362);
  strokeWeight(.75);
  
  // 5
  line(218, 402, 212, 403);
  line(212, 403, 212, 407);
  line(212,  407, 214, 407);
  beginShape();
    curveVertex(214, 407);
    curveVertex(214, 407);
    curveVertex(217, 409);
    curveVertex(212, 411);
    curveVertex(212, 411);
  endShape();

  // 6 
  beginShape();
    curveVertex(206, 453);
    curveVertex(206, 453);
    curveVertex(201, 460);
    curveVertex(203, 466);
    curveVertex(206, 464);
    curveVertex(204, 461);
    curveVertex(204, 461);
  endShape();

  // 7
  line(187, 412, 193, 413);
  line(193, 413, 191, 419);
  line(191, 419, 191, 427);

  // hands
  fill(225, 236, 231);
  stroke(39, 50, 50);
  strokeWeight(1.5);
  line(194, 345, 140, 344);
  line(194, 345, 198, 375);
  noStroke();
  fill(39, 50, 50);
  ellipse(194, 345, 3);
  triangle(134, 343, 128, 343, 134, 344);
  ellipse(137, 344, 9, 3);
  ellipse(198, 377, 2, 5);
  triangle(197, 377.5, 198, 385, 199, 377);

  

}

function mouseClicked() {
   console.log("X: "+ mouseX + " Y: " + mouseY);
   if(mouseX < 315 && mouseX > 214 && mouseY < 227 && mouseY > 106) 
    enableClock1 = !enableClock1;
   

   if(mouseX < 598 && mouseX > 293 && mouseY < 475 && mouseY > 274) 
    enableClock2 = !enableClock2;
   

   if(mouseX < 231 && mouseX > 87 && mouseY < 484 && mouseY >296) 
     enableClock3 = !enableClock3;
   
   
   loop();

}