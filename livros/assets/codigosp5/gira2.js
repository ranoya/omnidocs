function setup() {
  createCanvas(windowWidth, windowHeight);
}

let bola = {
  px: 0,
  py: 0,
  angulo: 0,
  raio: 50,
  gira: function (mX, mY) {
    this.px = Math.cos(this.angulo) * this.raio;
    this.py = Math.sin(this.angulo) * this.raio;
    this.ellipse(this.px + mX, this.py + mY, 20, 20);
    this.angulo = this.angulo + 0.01;
  },
};

let bolaA = { ...bola };
let bolaB = { ...bola };
let bolaC = { ...bola };

bolaA.angulo = 0.6;
bolaA.raio = 160;

bolaB.angulo = 1.4;
bolaB.raio = 200;

bolaC.angulo = 2.5;
bolaC.raio = 60;

function draw() {
  background(255);
  showlinegrid();
  fill(0);
  bolaA.gira(mouseX, mouseY);
  bolaB.gira(mouseX, mouseY);
  bolaC.gira(mouseX, mouseY);
}
