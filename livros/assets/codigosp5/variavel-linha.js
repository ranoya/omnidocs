// variáveis
var x1 = 10;
var y1 = 10;
var x2 = 100;
var y2 = 50;
var cor = "#2e8ec4";

function setup() {
  // cria o contexto gráfico
  createCanvas(windowWidth, windowHeight);
  background(255);
  showlinegrid();
}

function draw() {
  // desenha linha
  stroke(cor);
  line(x1, y1, x2, y2);

  // finaliza
  noLoop();
}
