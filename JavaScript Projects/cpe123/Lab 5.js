/* All code creted by Ryan Solorzano
 * CPE 123
 * 1-1-16
 */
var t;
var upperBound;
var tStep;
var drawingColors;
var initialColor;
var targetColor;
var lerpAmount;
var lerpCounter;
var a, b, c;
var speed;

function setup() {
    createCanvas(400, 400);
    background(0);
    t = 0;
    tStep = .01;
    upperBound = Math.PI * 20;
    drawingColors = [color("#0000FF"), color("#FF0000"), color("#FF8000"), color("#FFFF00"), color("#00FF00"), color("#00FFFF"), color("#0080FF"),
    color("#7F00FF")];
    initialColor = pickRandomColor();
    targetColor = pickRandomColor();
    lerpAmount = lerpCounter = 0;

    a = 100;
    b = -10;
    c = 2.4;
    speed = 1; 
}

function draw() {
    drawParametricWithArcs(pickColor());
    if (t >= upperBound)
        noLoop();
}

function pointFromParametric(a, b, c, t) {
    return [(a * Math.sin(t) * Math.cos(-c * t)) - (b * Math.cos(t) * Math.sin(-c * t)),
    (a * Math.sin(t) * Math.sin(-c * t)) + (b * Math.cos(t) * Math.cos(-c * t))];
}

function drawParametricWithArcs(curveColor) {
    var x0 = pointFromParametric(a, b, c, t - tStep)[0] + width / 2;
    var y0 = pointFromParametric(a, b, c, t - tStep)[1] + height / 2;
    var x1 = pointFromParametric(a, b, c, t)[0] + width / 2;
    var y1 = pointFromParametric(a, b, c, t)[1] + height / 2;
    var x2 = pointFromParametric(a, b, c, t + tStep)[0] + width / 2;
    var y2 = pointFromParametric(a, b, c, t + tStep)[1] + height / 2;
    var x3 = pointFromParametric(a, b, c, t + 2 * tStep)[0] + width / 2;
    var y3 = pointFromParametric(a, b, c, t + 2 * tStep)[1] + height / 2;

    noFill();
    stroke(curveColor);
    curve(x0, y0, x1, y1, x2, y2, x3, y3);
    if (t < upperBound)
        t += tStep;
}

function pickColor() {
    lerpCounter += tStep;
    if (lerpAmount <= lerpCounter) {
        initialColor = targetColor;
        targetColor = pickRandomColor();
        lerpAmount = Math.round(random(upperBound / (20 * PI), upperBound / (10 * PI)));
        lerpCounter = 0;
        return initialColor;
    } else {
        return lerpColor(initialColor, targetColor, (lerpCounter / lerpAmount));
    }
}

function pickRandomColor() {
    return drawingColors[Math.round(random(0, drawingColors.length - 1))];
}

function buttonPressed() {
    background(0);
    t = 0;
    lerpAmount = lerpCounter = 0;
    if (!isNaN(Number(document.getElementById("inputA").value)) && Number(document.getElementById("inputA").value) !== 0)
        a = Number(document.getElementById("inputA").value);

    if (!isNaN(Number(document.getElementById("inputB").value)) && Number(document.getElementById("inputB").value) !== 0)
        b = Number(document.getElementById("inputB").value);

    if (!isNaN(Number(document.getElementById("inputC").value)) && Number(document.getElementById("inputC").value) !== 0)
        c = Number(document.getElementById("inputC").value);
    
    if (!isNaN(Number(document.getElementById("speed").value)) && Number(document.getElementById("speed").value) !== 0)
        speed = Number(document.getElementById("speed").value);

    tStep = .01 * speed;
    noLoop();
    loop();
}
