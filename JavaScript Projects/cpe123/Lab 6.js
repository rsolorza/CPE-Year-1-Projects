/* Code written by Ryan Solorzano
 * 11/7/16
 * CPE 123- Computational Art
 * Lab 6 
 * NOTE: this is the bare minimum; working on the rest
 */
var clouds = [];
var mountainEllipses = [];
var skyLines = [];


// Math.random() * (max - min) + min
function cloud() {
    this.wide = Math.random() * (60) + 60;
    this.high = Math.random() * (20) + 20;
    this.xPos = Math.random() * (400 - 2 * this.wide) + this.wide;
    this.yPos = Math.random() * (100 - this.high) + this.high;
    this.speed = Math.random() * (5);
    this.color = [Math.random() * (255 - 240) + 240, Math.random() * (255 - 240) + 240, Math.random() * (255 - 240) + 240, Math.random() * (225 - 125) + 125];
    this.drawCloud = function () {
        noStroke();
        fill(this.color);
        for (var i = this.yPos - this.high; i < this.high + this.yPos; i += .5) {
            for (var a = this.xPos - this.wide; a < this.wide + this.xPos; a += 4) {
                fill(this.color);
                if (implicitEllipse(a, i, this.xPos - this.wide / 5, this.yPos, this.wide / 3, this.high / 2) < 0 ||
                    implicitEllipse(a, i, this.xPos, this.yPos - this.high / 7, this.wide / 3, this.high / 2) < 0 ||
                    implicitEllipse(a, i, this.xPos + this.wide / 5, this.yPos, this.wide / 3, this.high / 2) < 0) {
                    ellipse(a + random(-1, 1), i + random(-1, 1), 5, 1);
                }
            }
        }
    }
    this.updatePosition = function () {
        if (this.xPos + this.speed < 400)
            this.xPos += this.speed;
        else
            this.xPos = -this.wide;
    }
}

function skyLine(x1, y1, x2, y2, lineColor) {
    var mX1 = x1;
    var mY1 = y1;
    var mX2 = x2;
    var mY2 = y2;
    this.mLineColor = lineColor;
    this.sketch = function () {
        noFill();
        strokeWeight(2)
        stroke(this.mLineColor);
        line(mX1, mY1, mX2, mY2);
    }
}

function ellipseAndLoccation(x, y, wide, high, shade) {
    var xPos = x;
    var yPos = y;
    var mWide = wide;
    var mHigh = high;
    var mShade = shade;
    this.drawEllipse = function () {
        noStroke();
        fill(mShade);
        ellipse(xPos, yPos, mWide, mHigh);
    }
}

function setup() {
    createCanvas(400, 400);
    var numClouds = random(2, 7);
    var tempCloud;
    for (var i = 0; i < numClouds; i++) {
        tempCloud = new cloud();
        clouds.push(tempCloud);
    }
    calculateMountains();
    calculateSky();
}

function draw() {
    background(255);
    noFill();
    for (var i = 0; i < skyLines.length; i++) {
        skyLines[i].sketch();
    }
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].drawCloud();
        clouds[i].updatePosition();
    }
    for (var i = 0; i < mountainEllipses.length; i++) {
        mountainEllipses[i].drawEllipse();
    }


}

function calculateMountains() {
    noStroke();
    for (var i = 5; i < height; i += 4) {
        for (var a = 5; a < width; a += 10) {
            if (implicitLine(a, i, 0, height * 3 / 4, width, height / 3 - random(25)) > 0 ||
                implicitEllipse(a, i, 400, 315, 450, 430) < 0) {
                var randomColor = color(150 - i/30, 91 - i/30, 0, random(150, 255));
                mountainEllipses.push(new ellipseAndLoccation(a + random(-2, 2), i + random(-2, 2), 14, 7, randomColor));
            }
        }
    }
}

function calculateSky() {
    strokeWeight(2);
    var randomColor;
    for (var i = 0; i < height; i += 2) {
        for (var a = 0; a < width; a += random(10, 13)) {
            randomColor = color(200, i / 1.5, 0, random(150, 255));
            if (implicitLine(a, i, 0, height * 3 / 4, width, height / 3) < 0 &&
                implicitEllipse(a, i, 400, 315, 450, 430) > 0) {
                var tempLine = new skyLine(a, i, a + random(10, 15), i, randomColor);
                skyLines.push(tempLine);
            }
        }
    }
}

function implicitCircle(x, y, centerX, centerY, radius) {
    return sq(x - centerX) + sq(centerY - y) - sq(radius);
}

function implicitLine(x0, y0, x1, y1, x, y) {
    return (y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0;
}

function implicitEllipse(x, y, centerX, centerY, w, h) {
    return (sq((x - centerX)) / sq(w / 2)) + (sq((y - centerY)) / sq(h / 2)) - 1;
}
