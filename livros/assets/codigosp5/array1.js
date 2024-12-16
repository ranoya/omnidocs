// variáveis
let cor = "#2e8ec4";
let arr = [40, 66, 20, 100, 50];

function setup() {
  // cria o contexto gráfico
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(cor);
  showlinegrid();
}

function draw() {
  // processa a Array
  arr.map(function (v, i) {
    let pos_x = (windowWidth / 15) * i;
    ellipse(pos_x, v, 20, 20);
  });

  // finaliza
  noLoop();
}
