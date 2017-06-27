/* All code written by Ryan Solorzano
 * 11-28-16
 * CPE 123- Lab 8
 * Julie Workman 
 */

var img;

function preload() {
    img1 = loadImage("me.jpg");
}

function setup() {
    createCanvas(img1.width, img1.height);
    background(0);
    loadPixels();
    drawBlackAndWhiteWithBackground(img1);
    drawNegativeBackground(img1);
    drawDifferentBackground(img1);
    updatePixels();
    drawAsPainting2(img1);

}

function drawBlackAndWhiteWithBackground(img) {
    img.loadPixels();
    var bright;
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            if (img.get(x, y)[0] > 120 && img.get(x, y)[1] < 60 && img.get(x, y)[2] < 60)
                set(x / 2, y / 2, img.get(x, y));
            else if (img.get(x, y)[2] < 60 && img.get(x, y)[0] < 35 && img.get(x, y)[1] < 40)
                set(x / 2, y / 2, img.get(x, y));
            else {
                bright = brightness(img.get(x, y));
                set(x / 2, y / 2, 255 * bright / 100);
            }
        }
    }
}

function drawNegativeBackground(img) {
    img.loadPixels();
    stroke(0);
    var bright;
    var arr;
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            arr = img.get(x, y);
            if (implicitLine(x / 2, y / 2 + img.height / 2, 370 / 2, img.height / 2, 300 / 2, img.height) > 0) {
                if (((arr[0] < 35 && arr[1] < 40 && arr[2] < 60) ||
                    ((arr[0] > 150 && arr[1] > 150 && arr[2] > 150))) &&
                    (implicitLine(x / 2, y / 2 + img.height / 2, 427 / 2, 445 / 2 + img.height / 2, 179 / 2, 530 / 2 + img.height / 2) > 0 ||
                        implicitLine(x / 2, y / 2 + img.height / 2, 179 / 2, 530 / 2 + img.height / 2, 97 / 2, 628 / 2 + img.height / 2) > 0))
                    makeNegative(arr);

                set(x / 2, y / 2 + img.height / 2, arr);
            } else {
                if (((arr[0] > 120 && arr[1] < 60 && arr[2] < 60) ||
                    (arr[0] > 200 && arr[1] > 200 && arr[2] > 180)) &&
                    implicitEllipse(x, y, 530, 292, 305, 500) > 0)
                    makeNegative(arr);
                set(x / 2, y / 2 + img.height / 2, arr);
            }
        }
    }

    function makeNegative(shade) {
        shade[0] = 255 - shade[0];
        shade[1] = 255 - shade[1];
        shade[2] = 255 - shade[2];
    }
}

function drawDifferentBackground(img) {
    img.loadPixels();
    stroke(0);
    var bright;
    var arr;
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            arr = img.get(x, y);
            if ((implicitLine(x / 2 + img.width / 2, y / 2 + img.height / 2, 370 / 2 + img.width / 2, img.height / 2, 300 / 2 + img.width / 2, img.height) > 0) &&
                (implicitLine(x / 2 + img.width / 2, y / 2 + img.height / 2, 427 / 2 + img.width / 2, 445 / 2 + img.height / 2, 179 / 2 + img.width / 2, 530 / 2 + img.height / 2) > 0 ||
                    implicitLine(x / 2 + img.width / 2, y / 2 + img.height / 2, 179 / 2 + img.width / 2, 530 / 2 + img.height / 2, 97 / 2 + img.width / 2, 628 / 2 + img.height / 2) > 0)) {
                if (arr[0] < 35 && arr[1] < 40 && arr[2] < 60)
                    arr = [18, 181, 0, 255];
                if (arr[0] > 150 && arr[1] > 150 && arr[2] > 150)
                    arr = [0, 110, 239, 255];
            } else {
                if (implicitEllipse(x, y, 530, 292, 305, 500) > 0) {
                    if (arr[0] > 120 && arr[1] < 60 && arr[2] < 60)
                        arr = [240, 218, 0, 255];
                    if (arr[0] > 200 && arr[1] > 200 && arr[2] > 180)
                        arr = [0, 110, 239, 255];
                }
            }
            set(x / 2 + img.width / 2, y / 2 + img.height / 2, arr);
        }
    }
}

function drawAsPainting2(img) {
    img.loadPixels();
    for (var y = 2; y < img.height; y++) {
        for (var x = 2; x < img.width; x++) {
            if ((implicitLine(x, y, 0, img.height, img.width / 2, img.height / 2) > 0 &&
                implicitLine(x, y, 895, img.height, 330, img.height / 2) < 0) ||
                implicitEllipse(x, y, 540, 292, 325, 500) < 0) {
                stroke(img.get(x, y));
                point(x / 2 + width / 2, y / 2, img.get(x, y));
            } else {
                noStroke();
                fill(img.get(x, y));
                if (x % 12 === 0 && y % 2 === 0)
                    ellipse(x / 2 + random(-3, 3) + width / 2, y / 2 + random(-3, 3), 6, 2);
            }
        }
    }
}

function implicitLine(x, y, x0, y0, x1, y1) {
    return (y0 - y1) * x + (x1 - x0) * y + x0 * y1 - x1 * y0;
}

function implicitEllipse(x, y, centerX, centerY, w, h) {
    return (sq((x - centerX)) / sq(w / 2)) + (sq((y - centerY)) / sq(h / 2)) - 1;
}
