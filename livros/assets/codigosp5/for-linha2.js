// variáveis
let cor = "#2e8ec4";

function setup() {
  // cria o contexto gráfico
  createCanvas(windowWidth, windowHeight);
  background(255);
  showlinegrid();
}

function draw() {
  // apaga a tela
  background(255);
  showlinegrid();

  // aplica a cor para a linha
  stroke(cor);

  // loop que gera o desenho
  for (let x = 0; x < 100; x = x + 5) {
    line(x + mouseX, mouseY, mouseX, x + mouseY);
  }
}
