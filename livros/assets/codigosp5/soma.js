// variáveis
var x1 = 0;

function setup() {
  // cria o contexto gráfico
  createCanvas(windowWidth, windowHeight);
  background(255);
  showlinegrid();
  stroke("#2e8ec4");
}

function draw() {
  // desenha linha
  line(x1, 0, 0, windowHeight);

  x1 = x1 + 2;

  // finaliza
  if (x1 > windowWidth) {
    noLoop();
  }
}
