//Julian Tan
//Ryan Solorzano
//Theo Watkins

//    Clilckable areas
//Sun, Box thing, Door

var enableClock1 = false;
var enableClock2 = false;
var enableClock3 = false;
var clockRotate = 0;
var rotateClockwise = true;
var xDinosaur
var yDinosaur
var moveDinosaur

var faceX, faceY, count, originX, originY, angle, goingForward, speed;

function setup() {
  createCanvas(750, 563);
  goingForward = true;
  angle = PI/9;
  originX = 8.75;
  originY = 7.5;
  faceX = 75;
  faceY = 60;
  moveFace = false;
  count = 0;
  R = 0;
  G = 0;
  B = 0;
  speed = .05;
  xDinosaur = 160
  yDinosaur = 60
  moveDinosaur = false
}

function drawDinosaur (x,y)
{
   push()

    translate(x,y)


    fill(85,190,90)
    beginShape()
    curveVertex(40,114+(60 - yDinosaur))
    curveVertex(40,114+(60 - yDinosaur))
    curveVertex(37,69)
    curveVertex(33,50)
    curveVertex(30,42)
    curveVertex(7,43)
    curveVertex(4,40)
    curveVertex(5.5,37)
    curveVertex(23,18)
    curveVertex(26,15)
    curveVertex(28,15)
    curveVertex(31,15)
    curveVertex(37,18)
    curveVertex(46,30)
    curveVertex(52,44)
    curveVertex(56,61)
    curveVertex(60,80)
    curveVertex(63,113+(60 - yDinosaur))
    curveVertex(63,113+(60 - yDinosaur))
    endShape()

    beginShape()
    curveVertex(7,42)
    curveVertex(30,42)
    curveVertex(34,42)
    curveVertex(35,37)
    curveVertex(34,32)
    curveVertex(34,32)
    endShape()

    line(7,42,14,39)

    strokeWeight(.5)
    arc(26,23,6,6,PI,2*PI)
    line(23,23,29,23)

    fill(0)
    arc(26,23,5,5,0,PI)

    noStroke()
    fill(85,190,90)
    beginShape()
    curveVertex(35,110)
    curveVertex(40,114)
    curveVertex(50,115)
    curveVertex(63,113)
    curveVertex(75,110)
    endShape()

    push()
    stroke(85,190,90)
    strokeWeight(3)
    line(42,114,58,113)
    pop()

    fill(0)
    translate(8,38)
    rotate(-PI/4)
    ellipse(0,0,3,1)   


    pop()
}
function Theo(){
push();
  translate(350, 200);
  push();
  var xHouse = 140
  var yHouse = 146
  var roofColor =  150

  translate(xHouse,yHouse)


  fill(roofColor)
  quad(5,15,215,15,220,44,0,44)
  fill(255)
  quad(0,44,220,44,220,48,0,48)


  fill(140,80,50)

  rect(10,48,200,73)

for (var yLine = 48; yLine < 120; yLine += 4)

{

  strokeWeight(random(.1,.3))
  line(10,yLine,210,yLine)
}

  
  fill(255)
  stroke(40,30,20)

  strokeWeight(3)
  rect(36,52,14,16)
  strokeWeight(.5)
  line(41,52,41,68)
  line(46,52,46,68)
  line(36,62,50,62)
  strokeWeight(1.5)
  line(36,58,50,58)

  translate(34,0)

  strokeWeight(3)
  rect(36,52,14,16)
  strokeWeight(.5)
  line(41,52,41,68)
  line(46,52,46,68)
  line(36,62,50,62)
  strokeWeight(1.5)
  line(36,58,50,58)

  translate(66,0)

  strokeWeight(3)
  rect(36,52,14,16)
  strokeWeight(.5)
  line(41,52,41,68)
  line(46,52,46,68)
  line(36,62,50,62)
  strokeWeight(1.5)
  line(36,58,50,58)

  translate(34,0)

  strokeWeight(3)
  rect(36,52,14,16)
  strokeWeight(.5)
  line(41,52,41,68)
  line(46,52,46,68)
  line(36,62,50,62)
  strokeWeight(1.5)
  line(36,58,50,58)



  



    pop()

    fill(0)
    ellipse(210,170,30,10)

    push()

    translate(xHouse,yHouse)

    fill(255)
    stroke(40,30,20)

    strokeWeight(3)
    rect(36,78,14,26)
    strokeWeight(.5)
    line(41,78,41,104)
    line(46,78,46,104)
    line(36,83,50,83)
    line(36,88,50,88)
    line(36,98,50,98)
    strokeWeight(1.5)
    line(36,93,50,93)

    translate(34,0)

     strokeWeight(3)
    rect(36,78,14,26)
    strokeWeight(.5)
    line(41,78,41,104)
    line(46,78,46,104)
    line(36,83,50,83)
    line(36,88,50,88)
    line(36,98,50,98)
    strokeWeight(1.5)
    line(36,93,50,93)

    translate(66,0)

     strokeWeight(3)
    rect(36,78,14,26)
    strokeWeight(.5)
    line(41,78,41,104)
    line(46,78,46,104)
    line(36,83,50,83)
    line(36,88,50,88)
    line(36,98,50,98)
    strokeWeight(1.5)
    line(36,93,50,93)

    translate(34,0)

     strokeWeight(3)
    rect(36,78,14,26)
    strokeWeight(.5)
    line(41,78,41,104)
    line(46,78,46,104)
    line(36,83,50,83)
    line(36,88,50,88)
    line(36,98,50,98)
    strokeWeight(1.5)
    line(36,93,50,93)


    pop()

    push()

    translate(xHouse, yHouse)

    stroke(0)
    strokeWeight(1)
    fill(roofColor)
    quad(80,72,104,56,118,56,140,72)
    fill(255)
    rect(85,72,50,8)
    rect(85,117,50,8)
    //pillars
    rect(85,80,5,37)
    rect(92,80,5,37)
    rect(130,80,5,37)
    rect(123,80,5,37)
    //door
    fill(55,57,130)
    rect(100,80,20,37)

    strokeWeight(1)
    rect(104,80,4,6)
    rect(112,80,4,6)
    rect(104,92,4,8)
    rect(112,92,4,8)
    rect(104,106,4,8)
    rect(112,106,4,8)

    fill(163,138,30)
    noStroke()
    ellipse(118.5,99,2)

    pop()
         drawDinosaur(xDinosaur,yDinosaur)

    if (moveDinosaur && yDinosaur > -70)
    {
      yDinosaur-=1
      
    }
  pop();
}
function drawBody(x, y, size){
  push();
    translate(x, y);
    scale(size);

    fill(255, 0 ,0);
    beginShape(); //shoes
    vertex(10, 40);
    vertex(15,45);
    vertex(10,45);
    vertex(7.5, 42.5);
    vertex(5, 45);
    vertex(5, 40);
    endShape();
    beginShape(); //shoes
    vertex(-10, 40);
    vertex(-15,45);
    vertex(-10,45);
    vertex(-7.5, 42.5);
    vertex(-5, 45);
    vertex(-5, 40);
    endShape();

    fill(100);
    rect(5, 25, 5, 15); //legs
    rect(-10, 25, 5, 15);

    fill(60);
    beginShape(); //dress
    vertex(10, -20);
    vertex(25, 5);
    vertex(20, 7);
    vertex(10, -10);
    vertex(15, 25);
    vertex(-15, 25);
    vertex(-10, -10);
    vertex(-20, 7);
    vertex(-25, 5);
    vertex(-10, -20);
    endShape();

    fill(235, 214, 138);
    ellipse(24, 10, 10); //hands
    ellipse(-24, 10, 10);


  pop();
}
function drawFace(x, y, size, angle){
  /*face (moving) */
  push();
    fill(235, 214, 138);
    translate(x, y);
    scale(size);
    rotate(angle);

    beginShape();
    vertex(15 - originX, -10 - originY);
    vertex(15 - originX, 2.5 - originY);
    vertex(2.5 - originX, 12.5 - originY);
    vertex(-5 - originX, 12.5 - originY);
    endShape();

    beginShape();
    curveVertex(20 - originX, 25 - originY);
    curveVertex(-5 - originX, 12.5 - originY);
    curveVertex(-7 - originX, -7 - originY);
    curveVertex(2.5 - originX, -16 - originY);
    curveVertex(10 - originX, -15 - originY);
    curveVertex(15 - originX, -10 - originY);
    curveVertex(15 - originX, 0 - originY);
    endShape();

    fill(0);
    rect(-2.5 - originX, 5 - originY, 6, .5);
    rect(-5 - originX, -6 - originY, 5, .5);
    rect(5 - originX, -6 - originY, 5, .5);
    quad(1.5 - originX, -4 - originY, 2 - originX, -4 - originY, -.5 - originX, 1 - originY, -1 - originX, 1 - originY);
    rect(-1 - originX, 1 - originY, 2.5, .5);
  pop();
}
function drawStillFace(angle){
  push();
    translate(367, 230);
    scale(3);
    rotate(angle);

    fill(0);
    ellipse( 7 - originX, -10 - originY, 30, 29);

    fill(235, 214, 138);
    beginShape();
    vertex(15 - originX, -10.2 - originY);
    vertex(15 - originX, 2.5 - originY );
    vertex(2.5 - originX, 12.5 - originY );
    vertex(-5 - originX, 12.3 - originY );
    endShape();

    beginShape();
    curveVertex(20 - originX, 25 - originY );
    curveVertex(-5 - originX, 12.5 - originY );
    curveVertex(-7 - originX, -7 - originY );
    curveVertex(2.5 - originX, -16 - originY );
    curveVertex(10 - originX, -15 - originY );
    curveVertex(15 - originX, -10 - originY );
    curveVertex(15 - originX, 0 - originY );
    endShape();
  pop();

}
function bigEyes(x, y, size, angle){
  push();
    fill(255);
    translate(x, y);
    scale(size);
    rotate(angle);

    ellipse(7.5 - originX, -6 - originY, 6);
    ellipse(-2.5 - originX, -6 - originY, 6);
    fill(0);
    ellipse(6.5 - originX, -6 - originY, 2);
    ellipse(-3.5 - originX, -6 - originY, 2);
  pop();
}

function julian(){
      /*body*/
    noStroke();
  drawBody(355, 270, 2);

  /*face*/
  drawStillFace(angle);

  /*face moving*/
  drawFace(faceX, faceY, 3, angle);
  if(moveFace == true && faceX < 367 && faceY < 230){
    faceX += 1.743076923;
    faceY ++;
  }
  if(moveFace == true){
    count++;
    if(count > 175){ 
      bigEyes(367, 230, 3, angle);
      if (angle > -PI/4 && goingForward) {
        angle -= speed;
      }else{
        goingForward = false;
      }
      if (angle < PI/4 && !goingForward) {
        angle += speed;
      }
      else{
        goingForward = true
      }
    }
  }
}
function draw() {
  // Debug
  if (mouseIsPressed) {
    console.log("X: " + mouseX + " Y: " + mouseY)
  }
	background(0);
  drawPaining();

  Theo();
  
  
  
  //noLoop();

  if(enableClock1){
    drawClock1(clockRotate, 229, 110.5);
    rotateClock();
  }


  if(enableClock2) 
    drawClock2();
  
  
  if(enableClock3) 
    drawClock3();
  
}

// things need to finish: drawGround()
function drawPaining() {
  drawGround();
  drawSky();
  drawCliffs();
  drawCliffShadows();
  drawBox();
  drawBlueThing();
  julian();
  drawSun();
  drawTree();
  drawCliffReflection();
  
  function drawSun(){
    noStroke();
    fill(235, 214, 138);
    ellipse(75, 60, 150);
  }
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
// deltaX and deltaY are points where you want to rotate it about 
function drawClock1(degrees, deltaX, deltaY) {
  //deltaX = -229;
  //deltaY = -110.5;
  deltaX *= -1;
  deltaY *= -1;
  push();
  translate(-deltaX, -deltaY);
  rotate(degrees);
    noStroke();
    // back of clock
    stroke(194, 203, 198);
    fill(45, 37, 34);
    beginShape();
      curveVertex(229.5 + deltaX, 112.5 + deltaY);
      curveVertex(226 + deltaX, 116 + deltaY);
      curveVertex(219 + deltaX, 153.5 + deltaY);
      curveVertex(231 + deltaX, 187.5 + deltaY);
      curveVertex(246.5 + deltaX, 194 + deltaY);
      curveVertex(259 + deltaX, 158 + deltaY);
      curveVertex(256.5 + deltaX, 111.5 + deltaY);
      curveVertex(256.5 + deltaX, 111.5 + deltaY);
    endShape();

    noStroke();
    fill(78, 142, 190);
    // clock face
    beginShape();
      curveVertex(292 + deltaX, 107 + deltaY);
      curveVertex(292 + deltaX, 107 + deltaY);
      curveVertex(301 + deltaX, 129.5 + deltaY);
      curveVertex(299 + deltaX, 161 + deltaY);
      curveVertex(287 + deltaX, 194.5 + deltaY);
      curveVertex(288 + deltaX, 193.5 + deltaY);
      curveVertex(284 + deltaX, 224 + deltaY);
      curveVertex(275.5 + deltaX, 211 + deltaY);
      curveVertex(263 + deltaX, 191.5 + deltaY);
      curveVertex(261 + deltaX, 144 + deltaY);
      curveVertex(251 + deltaX, 111.5 + deltaY);
      curveVertex(251 + deltaX, 111.5 + deltaY);
    endShape();

    // left edge
    fill(228, 241, 247);
    beginShape();
      curveVertex(251 + deltaX, 111.5 + deltaY);
      curveVertex(251 + deltaX, 111.5 + deltaY);
      curveVertex(261 + deltaX, 144 + deltaY);
      curveVertex(263 + deltaX, 191.5 + deltaY);
      curveVertex(275.5 + deltaX, 211 + deltaY);
      curveVertex(284 + deltaX, 224 + deltaY);
      curveVertex(281 + deltaX, 226.5 + deltaY);
      curveVertex(273 + deltaX, 215 + deltaY);
      curveVertex(259.5 + deltaX, 194 + deltaY);
      curveVertex(256.5 + deltaX, 160.5 + deltaY);
      curveVertex(253 + deltaX, 129.5 + deltaY);
      curveVertex(249.5 + deltaX, 114.5 + deltaY);
      curveVertex(249.5 + deltaX, 114.5 + deltaY);
    endShape();

    fill(60, 84, 96);
    beginShape();
      curveVertex(237.5 + deltaX, 109.5 + deltaY);
      curveVertex(237.5 + deltaX, 109.5 + deltaY);
      curveVertex(251 + deltaX, 112 + deltaY);
      curveVertex(253 + deltaX, 129.5 + deltaY);
      curveVertex(256.5 + deltaX, 160.5 + deltaY);
      curveVertex(259.5 + deltaX, 194 + deltaY);
      curveVertex(273 + deltaX, 215 + deltaY);
      curveVertex(281 + deltaX, 226.5 + deltaY);
      curveVertex(281.5 + deltaX, 228 + deltaY);
      curveVertex(278.5 + deltaX, 227.5 + deltaY);
      curveVertex(258.5 + deltaX, 197.5 + deltaY);
      curveVertex(254.5 + deltaX, 181 + deltaY);
      curveVertex(254.5 + deltaX, 154 + deltaY);
      curveVertex(245 + deltaX, 113.5 + deltaY);
      curveVertex(245 + deltaX, 113.5 + deltaY);
    endShape();

    fill(228, 241, 247);
    beginShape();
      curveVertex(229.5 + deltaX, 112.5 + deltaY);
      curveVertex(229.5 + deltaX, 112.5 + deltaY);
      curveVertex(237.5 + deltaX, 109.5 + deltaY);
      curveVertex(245 + deltaX, 113.5 + deltaY);
      curveVertex(254.5 + deltaX, 154 + deltaY);
      curveVertex(254.5 + deltaX, 181 + deltaY);
      curveVertex(258.5 + deltaX, 197.5 + deltaY);
      curveVertex(278.5 + deltaX, 227.5 + deltaY);
      curveVertex(281.5 + deltaX, 228 + deltaY);
      curveVertex(270.5 + deltaX, 221 + deltaY);
      curveVertex(256 + deltaX,  197.5 + deltaY);
      curveVertex(250.5 + deltaX, 148 + deltaY);
      curveVertex(243 + deltaX, 115 + deltaY);
      curveVertex(229.5 + deltaX, 112.5 + deltaY);
      curveVertex(229.5 + deltaX, 112.5 + deltaY);
    endShape();

    // right edge ??? FIX
    fill(83, 121, 134);
    beginShape();
      curveVertex(292 + deltaX, 107 + deltaY);
      curveVertex(292 + deltaX, 107 + deltaY);
      curveVertex(301 + deltaX, 129.5 + deltaY);
      curveVertex(299 + deltaX, 161 + deltaY);
      curveVertex(287 + deltaX, 194.5 + deltaY);
      curveVertex(288 + deltaX, 193.5 + deltaY);
      curveVertex(284 + deltaX, 224 + deltaY);
      curveVertex(286 + deltaX, 224 + deltaY);
      curveVertex(290 + deltaX, 193.5 + deltaY);
      curveVertex(289 + deltaX, 194.5 + deltaY);
      curveVertex(301 + deltaX, 161 + deltaY);
      curveVertex(303 + deltaX, 129.5 + deltaY);
      curveVertex(294 + deltaX, 107 + deltaY);
      curveVertex(294 + deltaX, 107 + deltaY);
    endShape();
    
    fill(228, 241, 247); 
    beginShape();
      curveVertex(294 + deltaX, 107 + deltaY);
      curveVertex(294 + deltaX, 107 + deltaY);
      curveVertex(303 + deltaX, 129.5 + deltaY);
      curveVertex(301 + deltaX, 161 + deltaY);
      curveVertex(289 + deltaX, 194.5 + deltaY);
      curveVertex(290 + deltaX, 193.5 + deltaY);
      curveVertex(286 + deltaX, 224 + deltaY);
      curveVertex(284 + deltaX, 226.5 + deltaY);
      curveVertex(280 + deltaX, 227 + deltaY);
      curveVertex(281 + deltaX, 231 + deltaY);
      curveVertex(286 + deltaX, 229 + deltaY);
      curveVertex(289 + deltaX, 224 + deltaY);
      curveVertex(293 + deltaX, 193.5 + deltaY);
      curveVertex(292 + deltaX, 194.5 + deltaY);
      curveVertex(303 + deltaX, 161 + deltaY);
      curveVertex(305 + deltaX, 129.5 + deltaY);
      curveVertex(297 + deltaX, 107 + deltaY);
      curveVertex(297 + deltaX, 107 + deltaY);
      
      
    endShape();

    // NUMBERS
    curveTightness(-1);
    // 3
    noFill();
    stroke(41, 81, 83);
    beginShape();
      curveVertex(289 + deltaX, 115 + deltaY);
      curveVertex(289 + deltaX, 115 + deltaY);
      curveVertex(292 + deltaX, 112.5 + deltaY);
      curveVertex(291 + deltaX, 116 + deltaY);
      curveVertex(291 + deltaX, 116 + deltaY);
    endShape(); 
    beginShape();
      curveVertex(291 + deltaX, 116 + deltaY);
      curveVertex(291 + deltaX, 116 + deltaY);
      curveVertex(295.5 + deltaX, 117.5 + deltaY);
      curveVertex(290 + deltaX, 121 + deltaY);
      curveVertex(290 + deltaX, 121 + deltaY);
    endShape();

    // 4
    strokeWeight(1.5);
    line(295.5 + deltaX, 139.5 + deltaY, 295.5 + deltaX, 149.5 + deltaY);
    strokeWeight(.5);
    line(295.5 + deltaX, 139.5 + deltaY, 291.5 + deltaX, 145.5 + deltaY);
    strokeWeight(.1);
    line(291.5 + deltaX, 145.5 + deltaY, 298 + deltaX, 145.5 + deltaY);

    // 5
    strokeWeight(1.5);
    line(293 + deltaX, 169.5 + deltaY, 289 + deltaX, 168 + deltaY);
    strokeWeight(.5);
    line(289 + deltaX, 168 + deltaY, 287 + deltaX, 172 + deltaY);
    strokeWeight(1);
    beginShape();
      curveVertex(287 + deltaX, 172 + deltaY);
      curveVertex(287 + deltaX, 172 + deltaY);
      curveVertex(291.5 + deltaX, 176 + deltaY);
      curveVertex(285.5 + deltaX, 178 + deltaY);
      curveVertex(285.5 + deltaX, 178 + deltaY);
    endShape();

    // 6
    curveTightness(0);
    strokeWeight(.75);
    beginShape();
      curveVertex(282.5 + deltaX, 206 + deltaY);
      curveVertex(282.5 + deltaX, 206 + deltaY);
      curveVertex(281 + deltaX, 217.5 + deltaY);
      curveVertex(284 + deltaX, 222 + deltaY);
      curveVertex(284.5 + deltaX, 214.5 + deltaY);
      curveVertex(281.5 + deltaX, 212 + deltaY);
      curveVertex(281.5 + deltaX, 212 + deltaY);
    endShape();

    // partial 7, 8, 9
    curve(265.6 + deltaX, 198.8 + deltaY, 265 + deltaX, 197 + deltaY, 263.5 + deltaX, 187 + deltaY, 261.6 + deltaX, 181.8 + deltaY);
    point(261.5 + deltaX, 167.5 + deltaY);
    point(262 + deltaX, 160.5 + deltaY);
    line(258 + deltaX, 127 + deltaY, 261 + deltaX, 131.5 + deltaY);
    line(261 + deltaX, 131.5 + deltaY, 260 + deltaX, 137.5 + deltaY);

    curve(273.5 + deltaX, 113.5 + deltaY, 273.5 + deltaX, 113.5 + deltaY, 277.5 + deltaX, 126 + deltaY, 277.5 + deltaX, 126 + deltaY);
    line(277.5 + deltaX, 126 + deltaY, 277 + deltaX, 160.5 + deltaY);
    fill(41, 81, 83);
    ellipse(276.5 + deltaX, 164.5 + deltaY, 2, 8);
    noStroke();
    triangle(276 + deltaX, 168.5 + deltaY, 277.5 + deltaX, 186 + deltaY, 277.5 + deltaX, 168 + deltaY);

    // dial thing finish later
    /*
    fill(237, 251, 255);
    quad(243.5, 199.5, 243.5, 202.5, 248, 202, 248, 199.5);
    fill(4, 23, 29);
    quad(243.5, 199.5, 243.5, 202.5, 240.5, 202.5, 240, 200);
    */
  pop();
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
   //console.log("X: "+ mouseX + " Y: " + mouseY);
   //if(mouseX < 315 && mouseX > 214 && mouseY < 227 && mouseY > 106) 
    //enableClock1 = !enableClock1;
   

   //if(mouseX < 598 && mouseX > 293 && mouseY < 475 && mouseY > 274) 
    //enableClock2 = !enableClock2;
   

   if(mouseX < 231 && mouseX > 87 && mouseY < 484 && mouseY >296) 
     enableClock3 = !enableClock3;
   
   
   //loop();
   if(sq(mouseX-75) + sq(mouseY-60) - sq(75) < 0 && mouseY > 0){
    faceX = 75;
    faceY = 60;
    moveFace = !moveFace;
    count = 0;
    angle = PI/9;
    enableClock1 = !enableClock1;
  }

  if (mouseX<260 + 350 && mouseX>240 + 350 && mouseY<263 + 200 && mouseY>226 + 200)
    {
      yDinosaur=60
      moveDinosaur=true;
    }
}

function rotateClock() {
  if(rotateClockwise) {
    clockRotate+= .005;
    if(clockRotate >= .8) {
      rotateClockwise = false;
    }
  } else {
    clockRotate -= .005;
    if(clockRotate <= 0) {
      rotateClockwise = true;
    }
  }
}