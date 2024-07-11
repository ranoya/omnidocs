// variáveis
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

  // loop que gera o desenho
  for (let x = 0; x < 200; x = x + 5) {
    line(x, 0, 0, x);
  }

  // finaliza
  noLoop();
}
