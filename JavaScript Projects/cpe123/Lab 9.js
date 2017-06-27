/* Most code created by Ryan Solorzano
 * CPE 123- Computational Art 
 * Lab 9
 * Professor Workman
 */
/* Some code converted from SVG format using @darrylyeo's SVG-to-PJS converter: (just the custom shapes)
 * darryl-yeo.com/svg-to-processing-js-converter
 */
var doggie;
var ballX, ballY;



// Dog object
function dog(x, y, fLeg1Rot, fLeg2Rot, bLeg1Rot, bLeg2Rot, tailRot, headRot, speed) {
    this.xPos = x;
    this.yPos = y;
    this.fLeg1 = fLeg1Rot;
    this.fLeg2 = fLeg2Rot;
    this.bLeg1 = bLeg1Rot;
    this.bLeg2 = bLeg2Rot;
    this.tail = tailRot;
    this.head = headRot;
    this.speed = speed;
    this.bodyRotation = 0;

    this.legForward = true;
    this.tailForward = true;

    this.setPosition = function (x, y) {
        this.xPos = x;
        this.yPos = y;
    }

    this.updateRotationAndPosition = function () {
        if (this.legForward) {
            this.fLeg1 += .01;
            this.fLeg2 += .01;
            this.bLeg1 -= .01;
            this.bLeg2 -= .01;
            
            this.head += 0;
        } else {
            this.fLeg1 -= .01;
            this.fLeg2 -= .01;
            this.bLeg1 += .01;
            this.bLeg2 += .01;
            this.head += 0;
        }

        if(this.tailForward) 
            this.tail += .03;
        else 
            this.tail -= .03;
        if(Math.abs(this.tail) > radians(15))
            this.tailForward = !this.tailForward;

        if (Math.abs(this.fLeg1) > radians(7))
            this.legForward = !this.legForward;
        this.setPosition(this.xPos - this.speed, this.yPos);
    }

    this.draw = function () {
        push();
            strokeWeight(10);
            stroke(0);
            translate(this.xPos, this.yPos);           
            scale(.15);
            rotate(this.bodyRotation);

            //fLeg1 (front left leg if looking straight at dog)
            push();
                rotate(this.fLeg1);
                translate(10, 300);
                fill(206, 146, 71);
                stroke(0);
                beginShape();
                    vertex(90.12, 3);
                    bezierVertex(105.756, 35.08, 117.828, 68.778, 126.12, 103.49);
                    bezierVertex(152.97, 216.16, 133.24, 313.01, 117.12, 367.49);
                    vertex(117.12, 367.49);
                    bezierVertex(117.03, 367.49, 122.67, 430.49, 96.12, 458.99);
                    bezierVertex(75.92, 480.71, 52.38, 466.06, 16.62, 496.49);
                    bezierVertex(7.97, 503.85, -1.18, 511.83, 0.12, 520.49);
                    bezierVertex(2.57, 536.84, 40.72, 545.14, 66.12, 545.99);
                    bezierVertex(95.12, 546.99, 152.37, 539.74, 166.61, 505.49);
                    bezierVertex(176.18, 482.49, 158.76, 465.43, 171.11, 434.99);
                    bezierVertex(177.69, 418.76, 188.95, 408.08, 196.61, 401.99);
                    vertex(297.11, 0);
                endShape();
            pop();

            //bLeg1 (back left leg)
            push();
                translate(500, 100);
                rotate(this.bLeg1);
                fill(206, 146, 71);
                beginShape();
                    vertex(0, 52.5);
                    vertex(21, 246);
                    bezierVertex(24.914, 258.193, 30.465, 269.799, 37.5, 280.5);
                    bezierVertex(45.23, 292.22, 59.24, 309.5, 118.5, 346.5);
                    bezierVertex(158.21, 371.27, 165.86, 372.18, 178.5, 387);
                    bezierVertex(183.4, 392.74, 201.31, 415.28, 205.5, 447);
                    bezierVertex(214.66, 516.28, 152.43, 586.06, 152.7, 586.21);
                    bezierVertex(152.7, 586.21, 152.7, 586.21, 154.5, 583.49);
                    bezierVertex(139.578, 586.499, 125.002, 591.026, 111, 597);
                    bezierVertex(87.55, 607, 46.83, 622.12, 48, 637.5);
                    bezierVertex(49.06, 651.36, 83.48, 659.04, 94.5, 661.5);
                    bezierVertex(133.88, 670.29, 167.57, 660.28, 183, 655.5);
                    bezierVertex(195.445, 651.644, 207.499, 646.621, 219, 640.5);
                    vertex(333, 427.5);
                    bezierVertex(316.42, 412.91, 293.83, 388.92, 280.5, 354);
                    bezierVertex(259.59, 299.21, 275.76, 254.91, 277.5, 216);
                    bezierVertex(279.71, 166.4, 259.89, 94, 155.42, 0);
                endShape();
            pop();

            //white part of body
            stroke(0);
            fill(255);
            beginShape();
                vertex(0, 124);
                bezierVertex(6.09, 165.88, 20.78, 227.65, 59, 292);
                bezierVertex(75.66, 320, 106.31, 370.47, 166, 413);
                bezierVertex(177.832, 421.446, 190.19, 429.128, 203, 436);
                bezierVertex(293.1, 484.15, 382.67, 478.06, 457, 473);
                bezierVertex(495.59, 470.37, 521, 465.43, 546, 457);
                bezierVertex(576.46, 446.72, 597.82, 434.09, 613, 425);
                bezierVertex(662.18, 395.55, 666.58, 374.33, 705, 351);
                bezierVertex(720.13, 341.81, 727.43, 340.52, 793, 321);
                bezierVertex(836.14, 308.15, 905.44, 303.79, 912, 285);
                bezierVertex(930.81, 231.15, 518, -99.3, 160.11, 29.6);
                bezierVertex(84.52, 56.83, 30.59, 97.63, 0, 124);
            endShape();

            // outside of head
            push();
                rotate(this.head);
                translate(-400, -520);
                stroke(0);
                fill(255);
                strokeWeight(10);
                beginShape();
                    vertex(639.9, 445.58);
                    bezierVertex(637.28, 399.91, 604.84, 351.48, 573.9, 323.58);
                    bezierVertex(562.48, 313.28, 547.62, 303.38, 517.9, 283.58);
                    bezierVertex(485.18, 261.78, 457.35, 244.95, 437.9, 233.58);
                    vertex(418.9, 170.58);
                    vertex(276.9, 5.58);
                    bezierVertex(272.39, 2.13, 266.36, -1.42, 261.9, 0.58);
                    bezierVertex(253.36, 4.43, 261.69, 28.32, 259.9, 58.58);
                    bezierVertex(258.873, 75.072, 255.157, 91.286, 248.9, 106.58);
                    vertex(248.9, 106.58);
                    vertex(175.9, 58.58);
                    bezierVertex(168.02, 53.29, 165.14, 53.65, 163.9, 54.58);
                    bezierVertex(152.5, 63.14, 235.52, 152.58, 208.9, 210.58);
                    bezierVertex(199.9, 230.25, 189.37, 221.99, 165.9, 251.58);
                    bezierVertex(133.36, 292.58, 145.9, 318.16, 112.9, 356.58);
                    bezierVertex(102.67, 368.49, 91.08, 377.19, 67.9, 394.58);
                    bezierVertex(27.41, 424.96, 12.9, 426.58, 4.9, 442.58);
                    bezierVertex(-8.69, 469.66, 8.27, 509.08, 27.9, 531.58);
                    bezierVertex(77.54, 588.46, 173.65, 569.48, 177.9, 568.58);
                    bezierVertex(226.13, 558.36, 229.75, 536.38, 271.9, 536.58);
                    bezierVertex(276.69, 536.58, 330.52, 537.65, 365.9, 576.58);
                    bezierVertex(391.39, 604.58, 382.42, 624.94, 398.9, 636.58);
                    bezierVertex(449, 672, 646.78, 565.35, 639.9, 445.58);
                endShape();
                fill(0);
                translate(50, 500);
                beginShape();
                    vertex(0, 47);
                    bezierVertex(10.978, 49.214, 22.133, 50.442, 33.33, 50.67);
                    bezierVertex(46.83, 50.94, 56.86, 49.67, 67.33, 48.34);
                    bezierVertex(82.34, 46.636, 97.173, 43.625, 111.66, 39.34);
                    bezierVertex(117.77, 37.49, 130.37, 32.53, 155.33, 22.67);
                    bezierVertex(164.19, 19.17, 171.47, 16.27, 176.33, 14.34);
                    bezierVertex(177.519, 13.416, 178.534, 12.288, 179.33, 11.01);
                    bezierVertex(180.328, 9.644, 180.908, 8.019, 181, 6.33);
                    bezierVertex(180.95, 2.61, 177.08, 0.24, 176.67, 0);
                    bezierVertex(172.85, 1.75, 167.61, 4.08, 161.34, 6.67);
                    bezierVertex(145.341, 13.257, 128.981, 18.933, 112.34, 23.67);
                    bezierVertex(82, 32.38, 58, 39.27, 25.67, 39.67);
                    bezierVertex(17.325, 39.773, 8.98, 39.44, 0.67, 38.67);
                endShape();
            pop();


            // colored part of head
            push();
                rotate(this.head);
                translate(-250, -510);
                noStroke();
                fill(206, 146, 71);
                beginShape();
                    vertex(427.13, 326.64);
                    bezierVertex(410.5, 314.76, 374.46, 295.64, 311.13, 249.64);
                    bezierVertex(301.37, 242.56, 293.41, 236.64, 288.13, 232.64);
                    vertex(272.13, 173.64);
                    vertex(243.13, 127.64);
                    vertex(128.13, 3.64);
                    bezierVertex(127.77, 3.36, 121.04, -1.78, 115.13, 0.64);
                    bezierVertex(108.18, 3.48, 106.83, 15.03, 110.13, 22.64);
                    bezierVertex(113.13, 29.64, 120.61, 34.29, 129.13, 34.64);
                    vertex(202.13, 192.64);
                    bezierVertex(195.254, 190.491, 188.237, 188.82, 181.13, 187.64);
                    bezierVertex(173.51, 186.37, 146.62, 181.91, 125.13, 188.64);
                    bezierVertex(113.32, 192.34, 109.52, 197.42, 72.13, 239.64);
                    bezierVertex(35.05, 281.51, 31.64, 284.58, 24.13, 296.64);
                    bezierVertex(9.05, 320.86, -1.31, 337.5, 0.13, 360.64);
                    bezierVertex(0.48, 366.34, 3, 395.64, 28.13, 414.64);
                    bezierVertex(59.13, 438.02, 96.48, 424.64, 99.13, 423.64);
                    vertex(234.13, 549.64);
                    bezierVertex(238.19, 572.83, 248.4, 604.72, 275.13, 624.64);
                    bezierVertex(334.43, 668.83, 446.13, 632.64, 487.13, 562.64);
                    bezierVertex(533.29, 483.71, 485.6, 368.4, 427.13, 326.64);
                endShape();
                fill(0);
                ellipse(75, 350, 75,50);
            pop();

            // tail
            push();
                //translate(1000, -400);
                //rotate(this.tail);
                translate(1090, 0);
                rotate(this.tail);
                translate(-90, -400);
                
                
                fill(206, 146, 71);
                beginShape();
                    vertex(69.44, 418.34);
                    bezierVertex(57.13, 405.11, -5.83, 334.85, 0.44, 232.34);
                    bezierVertex(6.54, 132.69, 75.27, 47.98, 162.44, 16.34);
                    bezierVertex(230.06, -8.21, 342.62, -13.11, 396.44, 59.34);
                    bezierVertex(422.88, 94.93, 437.69, 152.61, 414.44, 193.34);
                    bezierVertex(381.15, 251.66, 270.09, 274.72, 157.44, 212.34);
                    bezierVertex(182.89, 218.4, 225.19, 224.45, 273.44, 211.34);
                    bezierVertex(302.06, 203.57, 331.11, 195.67, 344.44, 170.34);
                    bezierVertex(362.22, 136.55, 344.86, 85.34, 313.44, 63.34);
                    bezierVertex(262.76, 27.88, 181.17, 72.42, 142.44, 105.34);
                    bezierVertex(70.44, 166.56, 65.44, 256.57, 64.44, 275.34);
                    bezierVertex(60.44, 347.5, 88.22, 401.83, 101.44, 424.34);
                endShape();
                point(90, 400)
            pop();

            // body
            push();
                translate(-15, -200);
                noStroke();
                fill(206, 146, 71);
                
                beginShape();
                    vertex(0, 275);
                    bezierVertex(22, 264.754, 42.935, 252.36, 62.5, 238);
                    bezierVertex(79.78, 225.32, 113.39, 200.19, 143.5, 156);
                    bezierVertex(157.45, 135.53, 182.83, 97.39, 191, 42);
                    bezierVertex(193.047, 28.099, 193.884, 14.046, 193.5, 0);
                    bezierVertex(222.58, 37.93, 249.5, 49.28, 269, 52.5);
                    bezierVertex(301.3, 57.84, 323.55, 42.57, 355.5, 59);
                    bezierVertex(368.56, 65.72, 372.5, 72.2, 390, 79);
                    bezierVertex(410.61, 87, 428.46, 87.06, 438, 87);
                    bezierVertex(549.54, 86.29, 603.5, 77.5, 603.5, 77.5);
                    bezierVertex(674.5, 65.94, 682.85, 58.5, 756.5, 48.5);
                    bezierVertex(782.62, 44.94, 806.43, 41.69, 832, 40.5);
                    bezierVertex(948.77, 35.06, 1026, 70.5, 1026, 70.5);
                    bezierVertex(1111.37, 111.93, 1152.11, 184.5, 1171.5, 219);
                    bezierVertex(1196.78, 264, 1223.45, 311.5, 1219, 373);
                    bezierVertex(1215.73, 418.23, 1195.86, 467.88, 1170, 532.5);
                    bezierVertex(1159.47, 558.8, 1159.58, 560.61, 1157.5, 562.5);
                    bezierVertex(1114.26, 601.7, 988.63, 496.4, 816, 473);
                    bezierVertex(784.8, 468.77, 762.84, 468.68, 750, 469);
                    bezierVertex(697.26, 470.32, 679.79, 481.61, 604, 498);
                    bezierVertex(548.72, 510, 508.28, 518.43, 455, 517);
                    bezierVertex(424.11, 516.17, 428.59, 513.08, 372, 507);
                    bezierVertex(256.31, 494.58, 223.81, 506, 152, 483);
                    bezierVertex(126.67, 474.88, 113.9, 470.78, 98, 461);
                    bezierVertex(20.8, 413.52, 4.37, 314.91, 0, 275);
                endShape();
            pop();
            
            // Collar
            push();
                translate(-15,-200);
                fill(0);
                beginShape();
                    vertex(18, 321.33);
                    bezierVertex(61.07, 306.57, 90.93, 286.57, 109.33, 272);
                    bezierVertex(129.33, 256.16, 143.33, 240.78, 158, 224.67);
                    bezierVertex(175.27, 205.67, 195.36, 183.67, 210, 158.67);
                    bezierVertex(221.9, 138.39, 241.86, 96.35, 240.67, 30.67);
                    vertex(193, 0);
                    bezierVertex(190.58, 9.773, 188.247, 19.773, 186, 30);
                    bezierVertex(179.38, 60.19, 176, 81.48, 175, 87);
                    bezierVertex(167.43, 128.82, 133.51, 167.48, 112, 192);
                    bezierVertex(80.45, 227.764, 42.456, 257.276, 0, 279);
                endShape();
            pop();

            //fleg2 
            push();
                rotate(this.fLeg2);
                translate(150, 150);
                fill(206, 146, 71);
                beginShape();
                    vertex(0, 0);
                    bezierVertex(12.63, 34.86, 30, 83.3, 50.44, 141.27);
                    bezierVertex(121.34, 342.81, 132.77, 388.19, 139.49, 437.98);
                    bezierVertex(145.32, 481.15, 149.85, 544.14, 140.99, 622.47);
                    bezierVertex(123.329, 630.196, 107.103, 640.857, 93, 654);
                    bezierVertex(73.81, 671.87, 54.61, 687.89, 58.5, 699);
                    bezierVertex(62.86, 711.44, 91.1, 704.21, 184.5, 706.5);
                    bezierVertex(218.05, 707.32, 230.64, 708.65, 240, 699);
                    bezierVertex(253.72, 684.85, 247.14, 660.85, 240, 616.5);
                    bezierVertex(234.4, 581.72, 233.61, 546.28, 228, 511.5);
                    bezierVertex(213.27, 420.25, 252.38, 393.03, 258, 289.5);
                    bezierVertex(259.93, 254.04, 258.75, 202.74, 243, 139.5);
                endShape();
            pop();

            //bLeg2
            push();
                translate(750, 0);
                rotate(this.bLeg2);
                fill(206, 146, 71);
                beginShape();
                    vertex(27.56, 39);
                    bezierVertex(19.06, 50, 6.92, 68.85, 2.06, 94.5);
                    bezierVertex(-2.72, 119.69, 0.44, 146.68, 15.56, 181.5);
                    bezierVertex(39.4, 236.38, 104.19, 336.5, 209.05, 382.5);
                    bezierVertex(226.84, 390.3, 261.29, 403.36, 284.05, 438);
                    bezierVertex(296.05, 456.24, 300.64, 474.18, 303.55, 490.5);
                    bezierVertex(318.07, 571.92, 302.72, 682.76, 297.55, 716.99);
                    bezierVertex(292.39, 717.17, 252.15, 719.27, 228.55, 752.99);
                    bezierVertex(220.7, 764.22, 205.72, 791.77, 215.05, 805.49);
                    bezierVertex(225.2, 820.39, 265.84, 821.57, 390.54, 770.99);
                    vertex(452, 466.48);
                    bezierVertex(429.06, 451.77, 397.17, 426.18, 381.5, 385.48);
                    bezierVertex(358.79, 326.48, 386.22, 277.38, 399.5, 191.99);
                    bezierVertex(406.28, 148.37, 411.25, 83.25, 398, -0.01);
                endShape();
            pop();

        pop();
    }

    this.kneel = function() {
        if(this.bodyRotation  > radians(-5)){
            this.bodyRotation -= .01;
        } else if(this.fLeg1 > radians(-10)) {
            this.fLeg1 -= .01;
            this.fLeg2 -= .01;
            this.head -= .03;
        } else {
            this.happy();
        }
    }

    this.happy = function() {
        if(this.tailForward) 
            this.tail += .075;
        else 
            this.tail -= .075;
        if(Math.abs(this.tail) > radians(15))
            this.tailForward = !this.tailForward;
    }

    this.getPosition = function () {
        return [this.xPos, this.yPos];
    }
}

function setup() {
    createCanvas(600, 600);
    doggie = new dog(400, 300, .1, 0, 0, 0, 0, 0, 2);
    ballX = 350;
    ballY = 200; 
}

function draw() {
    drawBackground();
    drawBall(ballX, ballY);
    doggie.draw();   
    
    if(doggie.getPosition()[0] > 100)
        doggie.updateRotationAndPosition();
    else  {
        doggie.kneel();
    }
    if(ballX > 50)
        updateBallPosition();
    

}

function drawBackground() {
    background(0, 147, 255);

    noStroke();
    fill(24, 233, 0);
    ellipse(300, 600, 1500, 500);
    fill(255, 255, 0);
    ellipse(580, 30, 200);
}

function drawBall(x, y) {
    fill(0, 64, 233);
    ellipse(x, y, 20);
}

function updateBallPosition() {
    ballX -= 3;
    if(ballY < 360)
        ballY += 2;
    else 
        ballY +=1;
}