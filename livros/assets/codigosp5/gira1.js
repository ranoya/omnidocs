let angulo = 0;
let raio = 50;
let px = 0;
let py = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function gira() {
  px = Math.cos(radians(angulo)) * raio;
  py = Math.sin(radians(angulo)) * raio;
  ellipse(px + mouseX, py + mouseY, 20, 20);
}

function draw() {
  background(255);
  fill(0);
  gira();
  angulo = angulo + 1;
}
