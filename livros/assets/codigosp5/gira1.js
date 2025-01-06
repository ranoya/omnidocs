let angulo = 0;
let raio = 50;
let px = 0;
let py = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function gira(mX, mY) {
  px = Math.cos(angulo) * raio;
  py = Math.sin(angulo) * raio;
  ellipse(px + mX, py + mY, 20, 20);
  angulo = angulo + 0.01;
}

function draw() {
  background(255);
  showlinegrid();
  fill(0);
  gira(mouseX, mouseY);
}
