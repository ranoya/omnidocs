// variáveis
let x1 = 10;
let y1 = 10;
let x2 = 100;
let y2 = 50;
let cor = "#2e8ec4";

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
