let paraRadianos = function (angulo) {
  let valor = (angulo * Math.PI) / 180;

  return valor;
};

let ang = paraRadianos(180);

// 180 graus = 3.14 radianos

console.log(ang);
