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
    console.log(windowWidth + " " + i);

    let pos_x = (windowWidth / 5) * i;

    ellipse(pos_x, v, 20, 20);
  });

  // finaliza
  noLoop();
}
