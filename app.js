var t = 100;

var x = 100;
var y = 100;

var mpressed = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  x = Math.trunc(width * noise(t));
  y = Math.trunc(height * noise(t + 5));

  if (
    mpressed == 1 &&
    Math.abs(x - mouseX) <= 25 &&
    Math.abs(y - mouseY) <= 25
  ) {
    fill("green");
  } else {
    fill("red");
  }

  circle(x, y, 50);

  textSize(32);

  let l1 = `Circle X= ${x}`;
  let l2 = `Circle Y= ${y}`;
  let m1 = `Mouse X= ${mouseX}`;
  let m2 = `Mouse Y= ${mouseY}`;

  text(l1, 10, 30);
  text(l2, 10, 60);
  text(m1, 10, 90);
  text(m2, 10, 120);

  text(`Mouse Pressed: ${mpressed}`, 10, 150);

  t = t + 0.001;
}

function mousePressed() {
  mpressed = 1;
}

function mouseReleased() {
  mpressed = 0;
}
