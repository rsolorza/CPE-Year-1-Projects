/* Code written by Julian Tan and Ryan Solorzano
 * 11/4/16
 * CPE 123- Computational Art
 * Project 3 
 */
var maxTheta, curve1Theta;
var curve1Finished;
var t;

function setup() {
    frameRate(30);
    createCanvas(600, 400);
    background(200, 200, 0);
    noStroke();
    for (var y = 0; y < height; y += 5) {
        for (var x = 0; x < width; x += 5) {
            if (imp_ellipse(1, 2, x, y, 150, 225, 130) < 0) {//yellow
                fill(random(200, 255), random(200, 255), random(0, 50));
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            } else if (imp_line(x, y, 300, 0, 300, 400) > 0) {
                fill(random(222, 242), random(81, 101), random(53, 73));
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            }

            if (imp_ellipse(1, 6, x, y, 150, 225, 50) < 0) { //white 
                fill(255);
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            }


            if (imp_ellipse(1, 1, x, y, 450, 250, 130) < 0) { // blue
                fill(random(75, 95), random(157, 177), random(200, 255));
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            }
            else if (imp_line(x, y, 300, 0, 300, 400) < 0) {
                fill(random(222, 242), random(81, 101), random(53, 73));
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            }

            if (imp_ellipse(1, 1, x, y, 450, 250, 50) < 0) { //white 
                fill(255);
                ellipse(x + random(-15, 15), y + random(-15, 15), 14, 6);
            }

            fill(255);
            rect(0, 0, 600, 175);
        }
    }
    maxTheta = 11 / 6 * PI;
    curve1Theta = 11 / 12 * PI;
    t = .34;
    drawSun(25, 205);
    drawRedBackground(75, 250);
}


function draw() {
    if (!curve1Finished)
        drawCurve1();
    else {
        drawCurve2();
    }
}

function drawRedBackground(innerRadius, outerRadius) {
    var point0, point1, point2, point3;

    strokeWeight(5);
    for (var radius = innerRadius; radius < outerRadius; radius += 2) {
        for (var theta = 0; theta < 2 * PI; theta += random(.1, PI / 3)) {
            point0 = parametricCircle(3 / 4 * width + 35, 67, radius, theta - random(.1, PI / 6));
            point1 = parametricCircle(3 / 4 * width + 35, 67, radius, theta);
            point2 = parametricCircle(3 / 4 * width + 35, 67, radius, theta + random(.1, PI / 6));
            point3 = parametricCircle(3 / 4 * width + 35, 67, radius, theta + random(PI / 6, PI / 3));
            stroke(255, 75, 34, random(100, 200));
            if (implicitLine(0, 175, width, 175, point1[0], point1[1]) < 0 && implicitLine(0, 175, width, 175, point2[0], point2[1]) < 0)
                curve(point0[0], point0[1], point1[0], point1[1], point2[0], point2[1], point3[0], point3[1]);
        }
    }
}

function drawSun(innerRadius, outerRadius) {
    var point1, point2;

    strokeWeight(2);
    for (var radius = innerRadius; radius < outerRadius; radius += 1) {
        for (var theta = 0; theta < 2 * PI; theta += random(.1, PI / 3)) {
            point1 = parametricCircle(width / 4, 140, radius, theta);
            point2 = parametricCircle(width / 4, 140, radius, theta + random(.1, PI / 3));
            stroke(255, 255 - (radius), 0);
            if (implicitLine(0, 175, width, 175, point1[0], point1[1]) < 0 && implicitLine(0, 175, width, 175, point2[0], point2[1]) < 0)
                curve(point1[0], point1[1], point1[0], point1[1], point2[0], point2[1], point2[0], point2[1]);
        }
    }
}

// this is the curve directly outside the sun
function drawCurve1() {
    var purpleColor = color(206, 70, 116);
    var darkBlueColor = color(61, 78, 134);
    var point0 = [];
    var point1 = [];
    var point2 = [];
    var point3 = [];
    strokeWeight(2);

    for (var i = 0; i < 35; i += 2) {
        var randomPoint1 = random(0, PI / 6);
        var randomPoint2 = random(0, PI / 6);
        var randomRadius1 = random(-2, 2);
        var randomRadius2 = random(-2, 2);

        point0.push(parametricCircle(width / 4, 140, 122 + i + randomRadius1, curve1Theta - PI / 3));

        if (curve1Theta - randomPoint1 > 11 / 12 * PI)
            point1.push(parametricCircle(width / 4, 140, 122 + i + randomRadius1, curve1Theta - randomPoint1));
        else
            point1.push(parametricCircle(width / 4, 140, 122 + i, curve1Theta));

        if (curve1Theta + randomPoint2 < maxTheta)
            point2.push(parametricCircle(width / 4, 140, 122 + i + randomRadius2, curve1Theta + randomPoint2));
        else
            point2.push(parametricCircle(width / 4, 140, 122 + i + randomRadius2, curve1Theta));

        point3.push(parametricCircle(width / 4, 140, 122 + i + randomRadius2, curve1Theta + PI / 3));
    }
    for (var a = 0; a < point1.length; a++) {
        if (a < 5)
            stroke(purpleColor);

        if (a < 11 && a > 5)
            stroke(darkBlueColor);

        if (a > 11)
            stroke(purpleColor);
        noFill();
        curve(point0[a][0], point0[a][1], point1[a][0], point1[a][1], point2[a][0], point2[a][1], point3[a][0], point3[a][1]);
    }

    if (curve1Theta < maxTheta)
        curve1Theta += random(0, PI / 10);
    else
        curve1Finished = true;
}

// the next result I got by accident... but I liked the results 
function drawCurve2() {
    frameRate(50);
    var point0 = [];
    var point1 = [];
    var point2 = [];
    var point3 = [];
    var purpleColor = color(206, 70, 116);
    var darkBlueColor = color(61, 78, 134);
    var lightBlueColor = color(69, 188, 231);

    for (var i = 0; i < 50; i++) {
        // 0, .05
        var randomPoint1 = random(0, .05);
        var randomPoint2 = random(0, .05);
        var step = .008;

        point0.push(parametricSwirl(width * 3 / 4 + 4, 67, 550 - 2 * i, 340 - 2 * i, 25, t - .1));
        point1.push(parametricSwirl(width * 3 / 4 + 4, 67, 550 - 2 * i, 340 - 2 * i, 25, t - randomPoint1));
        point2.push(parametricSwirl(width * 3 / 4 + 4, 67, 550 - 2 * i, 340 - 2 * i, 25, t + randomPoint2));
        point3.push(parametricSwirl(width * 3 / 4 + 4, 67, 550 - 2 * i, 340 - 2 * i, 25, t + .2));
    }

    for (var i = 0; i < point1.length; i++) {
        if (i < 18)
            stroke(purpleColor);
        if (i > 18 && i < 26)
            stroke(darkBlueColor);
        if (i > 26)
            stroke(lightBlueColor);
        curve(point0[i][0], point0[i][1], point1[i][0], point1[i][1], point2[i][0], point2[i][1], point3[i][0], point3[i][1]);
    }

    if (t > .05)
        //t -= step;
        t -= random(0, .008);
    else
        noLoop();

}


function parametricCircle(centerX, centerY, radius, theta) {
    return [centerX + radius * Math.cos(theta),
    centerY + radius * Math.sin(theta)];
}

function implicitLine(x0, y0, x1, y1, x, y) {
    return (y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0;
}

function parametricSwirl(x, y, ax, ay, b, t) {
    return [ax * t * Math.cos(b * t) + x,
    ay * t * Math.sin(b * t) + y];
}

function imp_ellipse(xLength, yLength, x, y, cX, cY, r) {
    return (sq(x - cX) / xLength + sq(y - cY) / yLength - sq(r));
}
function imp_line(x, y, x0, y0, x1, y1) {
    return ((y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0);
}