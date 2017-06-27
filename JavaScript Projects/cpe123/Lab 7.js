/* All code created by Ryan Solorzano
 * CPE 123
 * Lab 7
 * 11-14-16
 * Note: I do not know how to save the canvas then access it in draw, so I saved one instance, then uploaded it, and that is the Background.png.
 *       Trust me... all the setup code works, and it makes a random background every time. I just did not want to create even more massive 
 *       arrays storing all the leaves colors and such
 * Modeled after Tant de Foret's video
 */
var leaf1 = [[338, 173], [331, 178], [325, 185], [321, 192], [319, 201], [318, 210]];

var leaf2 = [[248, 16], [250, 46], [250, 60], [246, 78], [240, 96], [230, 116], [222, 128], [208, 142], [194, 152], [178, 160], [154, 168]];

var threeLeafCloverColors = [[49, 82, 76], [24, 44, 44], [144, 168, 96], [45, 89, 66], [250, 232, 168], [142, 161, 139], [157, 149, 69], [36, 117, 101]];
var numThreeLeafClovers = 12;

var roundLeafColors = [[85, 125, 86], [15, 29, 30], [120, 161, 137], [73, 83, 45], [119, 132, 65], [37, 91, 77]];
var roundLeafStemColors = [[133, 175, 123], [47, 79, 74], [81, 121, 100]];
// next part given by points, a size, rotation
// TODO: add the other 10 leaves
var roundLeaves = [[40, 200, 30, Math.PI / 6],
                   [10, 10, 60, -Math.PI * 2 / 3],
                   [360, 121, 40, -Math.PI * 3 / 4],
                   [370, 389, 70, Math.PI / 4],
                   [29, 280, 10, Math.PI / 3],
                   [82, 360, 12, -Math.PI * 5 / 6],
                   [400, 20, 70, -Math.PI / 10],
                   [200, 300, 30, Math.PI / 6]];

// properties are order of arguments in function without the colors, and with delta x and delta y at the end
// looking back, I should have created an object... oh well
var bugs;
var img1;


function preload() {
    img1 = loadImage("Background.jpg");
}

function setup() {
    bugs = [
        [random(0, 400), random(0, 400), 20, 20, random(0, 2 * PI), random(-3, 3), random(-3, 3)],
        [random(0, 400), random(0, 400), 10, 20, random(0, 2 * PI), random(-3, 3), random(-3, 3)],
        [random(0, 400), random(0, 400), 15, 25, random(0, 2 * PI), random(-3, 3), random(-3, 3)],
        [random(0, 400), random(0, 400), 20, 30, random(0, 2 * PI), random(-3, 3), random(-3, 3)],
        [random(0, 400), random(0, 400), 10, 15, random(0, 2 * PI), random(-3, 3), random(-3, 3)]];

    createCanvas(400, 400);
    background(63, 32, 27);

    drawAllRoundLeaves();

    drawAllClovers();

    drawLongLeaf(leaf1, color(30, 53, 34), 2, 25);
    drawLongLeaf(leaf2, color(131, 123, 41), 2.5, 35);


    //saveCanvas("Background", "jpg");

}



function draw() {
    image(img1, 0, 0, 400, 400);
    drawAllBugs();
    updateBugPositions();
}

function drawBug(x, y, wide, high, bodyColor1, bodyColor2, rotation, index) {
    var circleColors = [[189, 203, 129], [98, 105, 61], [180, 50, 26], [126, 9, 0], [45, 71, 63], [187, 154, 98], [209, 112, 81]];
    push();
    translate(x, y);
    rotate(rotation);

    // antenna
    noFill();
    stroke(bodyColor1);
    strokeWeight(.5);
    arc(wide, 0, 2 * wide, 7 * high, -PI, -PI / 2);
    arc(-wide, 0, 2 * wide, 7 * high, -PI / 2, -0);

    // Body... for some reason does not work without stroke
    strokeWeight(.1);
    fill(bodyColor1);
    curve(0, -8 * high, -wide / 2, -high / 2, wide / 2, -high / 2, 0, -8 * high);

    //head
    noStroke();
    ellipse(0, -high / 2, wide / 3, wide / 4);

    // ovalish things on body
    fill(bodyColor2);
    beginShape();
    curveVertex(wide / 1.9, -high / 2);
    curveVertex(wide / 2, -high / 2);
    curveVertex(wide / 10, -high / 4);
    curveVertex(wide / 20, high / 2.5);
    curveVertex(wide / 3, high / 4);
    endShape(CLOSE);
    beginShape();
    curveVertex(-wide / 1.9, -high / 2);
    curveVertex(-wide / 2, -high / 2);
    curveVertex(-wide / 10, -high / 4);
    curveVertex(-wide / 20, high / 2.5);
    curveVertex(-wide / 3, high / 4);
    endShape(CLOSE);

    // circles
    // Yup definately shouldve made an object
    if (bugs[index].length < 8) {
        for (var i = 0; i < 7; i++) {
            bugs[index].push(randomElementFromArray(circleColors));
        }
    }

    fill(bugs[index][5]);
    ellipse(wide / 4, -high / 6, wide / 3);
    fill(bugs[index][6]);
    ellipse(wide / 4, -high / 6, wide / 4.5);
    fill(bugs[index][7]);
    ellipse(wide / 4, -high / 6, wide / 9);

    fill(bugs[index][8]);
    ellipse(-wide / 4, -high / 6, wide / 3);
    fill(bugs[index][9]);
    ellipse(-wide / 4, -high / 6, wide / 4.5);
    fill(bugs[index][10]);
    ellipse(-wide / 4, -high / 6, wide / 9);

    pop();

}

function drawAllBugs() {
    for (var i = 0; i < bugs.length; i++) {
        drawBug(bugs[i][0], bugs[i][1], bugs[i][2], bugs[i][3], [132, 45, 20], [246, 126, 101], bugs[i][4], i);
    }
}

function updateBugPositions() {
    for (var i = 0; i < bugs.length; i++) {
        if (bugs[i][0] + bugs[i][5] > width || bugs[i][0] + bugs[i][5] < 0) {
            bugs[i][5] *= -1;
        }
        bugs[i][0] += bugs[i][5];
        if (bugs[i][1] + bugs[i][6] > height || bugs[i][1] + bugs[i][6] < 0) {
            bugs[i][6] *= -1;
        }
        bugs[i][1] += bugs[i][6];

        // I dont know why y has to be negative, but for some reason it works
        bugs[i][4] = atan2(bugs[i][5], -bugs[i][6]);
    }
}

function drawAllRoundLeaves() {
    for (var i = 0; i < roundLeaves.length; i++) {
        drawRoundLeaf(roundLeaves[i][0], roundLeaves[i][1], roundLeaves[i][2], 1.2, randomElementFromArray(roundLeafColors), randomElementFromArray(roundLeafStemColors), roundLeaves[i][3]);
    }
}

// right now is location is random, but should change to fixed later
function drawAllClovers() {
    for (var i = 0; i < numThreeLeafClovers; i++) {
        var randomX = random(width / 5, 3 * width / 4);
        var randomY = random(20, 5 * height / 6);
        var randomMin = random(10, 20);
        var randomMax = random(20, 40);

        drawThreeLeafClover(randomX, randomY, randomMin, randomMax,
            randomElementFromArray(threeLeafCloverColors),
            randomElementFromArray(threeLeafCloverColors));
    }
}

function drawTeardrop(tipX, tipY, width, length, rotation) {
    noStroke();
    push();
    translate(tipX, tipY);
    rotate(rotation);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(length * 4 / 5, -width);
    curveVertex(length, 0);
    curveVertex(length * 4 / 5, width);
    endShape(CLOSE);
    pop();
}

function drawLongLeaf(stemPoints, shade, branchWidth, branchLength) {
    noFill();
    stroke(shade);
    beginShape();
    curveVertex(stemPoints[0][0], stemPoints[0][1]);
    for (var i = 0; i < stemPoints.length; i++) {
        curveVertex(stemPoints[i][0], stemPoints[i][1]);
    }
    curveVertex(stemPoints[stemPoints.length - 1][0], stemPoints[stemPoints.length - 1][1]);
    endShape();
    noStroke();
    fill(shade);
    for (var i = 0; i < stemPoints.length; i++) {
        drawTeardrop(stemPoints[i][0], stemPoints[i][1], branchWidth, branchLength - i, random(PI / 4, 1) + (i / (stemPoints.length - 1)) / 4);
        drawTeardrop(stemPoints[i][0], stemPoints[i][1], branchWidth, branchLength - i, random(3.2, 3.5) - (i / (stemPoints.length - 1)) / 4);
    }

}

// Not sure if these are actually three leaf clovers... but thats what I'm going to call them
function drawThreeLeafClover(x, y, minRadius, maxRadius, outerColor, innerColor) {
    var initialTheta = random(0, 2 / 3 * PI);

    noStroke();
    for (var i = 0; i < 3; i++) {
        var tearDropLength = random(minRadius, maxRadius);
        fill(outerColor);
        drawTeardrop(x, y, tearDropLength / 2, tearDropLength, initialTheta + (i * 2 / 3 * PI));
        fill(innerColor);
        tearDropLength /= random(2, 3);
        drawTeardrop(x, y, tearDropLength / 2, tearDropLength, initialTheta + (i * 2 / 3 * PI));
    }
}


// drawn from polar cartiod, x and y at center of leaf
function drawRoundLeaf(x, y, a, b, leafColor, stemColor, rotation) {
    noStroke();
    fill(leafColor);
    push()
    translate(x, y);
    scale(1, .75);
    rotate(rotation);
    beginShape();
    for (var t = 0; t < 2 * PI; t += .1)
        curveVertex(calculatePoint(t)[0], calculatePoint(t)[1]);
    endShape();
    noFill();
    stroke(stemColor);
    strokeWeight(2);
    line(calculatePoint(0)[0] + 10, calculatePoint(0)[1], calculatePoint(PI)[0], calculatePoint(PI)[1]);
    for (var i = 1.75; i < 3; i += .35) {
        beginShape();
        curveVertex(calculatePoint(i)[0], calculatePoint(i)[1]);
        curveVertex(calculatePoint(i)[0], calculatePoint(i)[1]);
        curveVertex(calculatePoint(i)[0] + a / 5, 0);
        curveVertex(calculatePoint(i)[0], -calculatePoint(i)[1]);
        curveVertex(calculatePoint(i)[0], -calculatePoint(i)[1]);
        endShape();
    }
    pop();

    function calculatePoint(theta) {
        var radius = a * (b - cos(theta));
        return [radius * (cos(theta)),
        radius * (sin(theta))];
    }
}



function randomElementFromArray(arr) {
    return arr[Math.floor(random(0, arr.length))];
}

function mouseClicked() {
    console.log(mouseX + "\n" + mouseY);
    noLoop();
}