export default ({
  p5,
  el = "iddoelemento",
  fcolorA = "#78008A",
  fcolorB = "#999999",
  fcolorC = "#f29610",
  fcolorD = "#edd21f",
  fcolorE = "#4fd9e0",
  bgcolor = "#eeeeee",
}) => {
  let sketch = function (p) {
    let a = 0.9;
    let raio = p.int(p.height / 2.8);
    let centerX = 75;
    let centerY = 75;
    let stSinX = -20;
    let stCosY = -5;
    let cotaY = 0;
    let mudaRaio = false;

    p.setup = function () {
      p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };

    p.mouseReleased = function () {
      mudaRaio = true;

      raio = p.dist(p.mouseX, p.mouseY, centerX, centerY);
    };

    p.draw = function () {
      p.background(bgcolor);

      if (mudaRaio == false) {
        raio = p.dist(p.mouseX, p.mouseY, centerX, centerY);
      }
      centerX = p.width / 2;
      centerY = p.height / 2;

      p.stroke(fcolorD);
      p.strokeWeight(1);
      p.line(
        centerX + p.cos(a) * raio,
        centerY + p.sin(a) * raio,
        centerX,
        centerY + p.sin(a) * raio
      );
      p.line(
        centerX + p.cos(a) * raio,
        centerY + p.sin(a) * raio,
        centerX + p.cos(a) * raio,
        centerY
      );

      p.push();
      p.translate(centerX + p.cos(a) * raio, centerY + p.sin(a) * raio);
      p.line(-10, 0, 10, 0);
      p.line(0, -10, 0, 10, 0);
      p.pop();

      p.noFill();
      p.stroke(fcolorB);
      p.strokeWeight(1);
      p.line(centerX, 0, centerX, p.width);
      p.line(0, centerY, p.width, centerY);
      p.rect(centerX + raio, centerY, 14, -14);
      p.fill(fcolorB);
      p.ellipse(centerX + raio + 7, centerY - 6, 2, 2);
      p.noFill();

      p.stroke(fcolorC);
      if (p.mouseY > centerY) {
        p.line(0, 60, p.cos(a) * raio + centerX, 60);
        p.line(p.cos(a) * raio + centerX, 55, p.cos(a) * raio + centerX, 65);
        p.line(
          p.cos(a) * raio + centerX,
          105,
          p.cos(a) * raio + centerX,
          centerY + stCosY * 3 - 50
        );
      } else {
        p.line(0, p.height - 60, p.cos(a) * raio + centerX, p.height - 60);
        p.line(
          p.cos(a) * raio + centerX,
          p.height - 55,
          p.cos(a) * raio + centerX,
          p.height - 65
        );
        p.line(
          p.cos(a) * raio + centerX,
          p.height - 105,
          p.cos(a) * raio + centerX,
          centerY + stCosY * 3 + 50
        );
      }

      if (p.mouseX > centerX) {
        p.line(120, 0, 120, p.sin(a) * raio + centerY);
        p.line(115, p.sin(a) * raio + centerY, 125, p.sin(a) * raio + centerY);
        p.line(
          155,
          p.sin(a) * raio + centerY,
          centerX + 80 + stSinX * 3.2,
          p.sin(a) * raio + centerY
        );
      } else {
        p.line(p.width - 120, 0, p.width - 120, p.sin(a) * raio + centerY);
        p.line(
          p.width - 115,
          p.sin(a) * raio + centerY,
          p.width - 125,
          p.sin(a) * raio + centerY
        );
        p.line(
          p.width - 155,
          p.sin(a) * raio + centerY,
          centerX + 150 + stSinX * 3.2,
          p.sin(a) * raio + centerY
        );
      }

      p.stroke(fcolorB);

      p.ellipse(centerX, centerY, 2 * raio, 2 * raio);
      p.strokeWeight(1);
      p.line(raio + centerX, 0, raio + centerX, p.height);
      p.strokeWeight(1);
      p.line(centerX, centerY, centerX + raio, centerY + p.tan(a) * raio);
      if (p.mouseX < centerX) {
        p.line(
          centerX,
          centerY,
          centerX + p.cos(a) * raio,
          centerY + p.sin(a) * raio
        );
      }
      p.fill(fcolorB);
      p.ellipse(p.cos(a) * raio + centerX, p.sin(a) * raio + centerY, 5, 5);

      p.noFill();
      p.stroke(fcolorA);
      p.strokeWeight(2);
      p.line(
        centerX,
        centerY,
        centerX + p.cos(a) * raio,
        centerY + p.sin(a) * raio
      );
      p.line(centerX, centerY, centerX + raio, centerY);
      p.fill(fcolorA);
      p.ellipse(p.cos(a) * raio + centerX, p.sin(a) * raio + centerY, 5, 5);
      p.ellipse(centerX + raio, centerY, 5, 5);

      p.stroke(fcolorD);
      p.strokeWeight(1);

      p.line(
        centerX + 115 + stSinX * 3.2,
        centerY,
        centerX + 115 + stSinX * 3.2,
        centerY + p.sin(a) * raio
      );
      p.line(
        centerX + 110 + stSinX * 3.2,
        centerY + p.sin(a) * raio,
        centerX + 120 + stSinX * 3.2,
        centerY + p.sin(a) * raio
      );

      p.line(
        centerX + p.cos(a) * raio,
        centerY - 5 + stCosY * 3,
        centerX + p.cos(a) * raio,
        centerY + 5 + stCosY * 3
      );
      p.line(
        centerX,
        centerY + stCosY * 3,
        centerX + p.cos(a) * raio,
        centerY + stCosY * 3
      );

      p.stroke(fcolorE);

      p.line(
        centerX + raio + 5,
        centerY + p.tan(a) * raio,
        centerX + raio - 5,
        centerY + p.tan(a) * raio
      );
      p.line(
        raio + centerX,
        centerY,
        raio + centerX,
        centerY + p.tan(a) * raio
      );

      p.noFill();
      p.stroke(fcolorA);
      p.strokeWeight(2);
      if (a > 0) {
        p.arc(centerX, centerY, raio / 2.5, raio / 2.5, -0.2, a + 0.2, p.OPEN);
      } else {
        p.arc(centerX, centerY, raio / 2.5, raio / 2.5, a - 0.2, 0.2, p.OPEN);
      }

      p.fill(fcolorB);
      p.textSize(12);
      p.noStroke();
      p.text("X = " + centerX, centerX + 10, 20);
      p.text("Y = " + centerY, 10, centerY - 8);

      p.fill(fcolorC);
      if (p.mouseY > centerY) {
        p.text(
          "X = " + p.nf(p.cos(a) * raio + centerX, 1, 2),
          p.cos(a) * raio + centerX + 10,
          65
        );
      } else {
        p.text(
          "X = " + p.nf(p.cos(a) * raio + centerX, 1, 2),
          p.cos(a) * raio + centerX + 10,
          p.height - 55
        );
      }

      if (p.mouseX > centerX) {
        p.text(
          "Y = " + p.nf(p.sin(a) * raio + centerY, 1, 2),
          95,
          p.sin(a) * raio + centerY + 15
        );
      } else {
        p.text(
          "Y = " + p.nf(p.sin(a) * raio + centerY, 1, 2),
          p.width - 155,
          p.sin(a) * raio + centerY + 15
        );
      }

      p.fill(fcolorA);
      p.textSize(12);
      p.text(
        p.int(p.degrees(a)),
        p.cos(a / 2) * 40 + centerX,
        p.sin(a / 2) * 40 + centerY + 6
      );
      p.text(
        "tan " + p.int(p.degrees(a)) + " = " + p.nf(p.tan(a), 1, 2),
        centerX + raio + 10,
        centerY + p.tan(a) * raio + 3
      );
      p.text(
        "cos " + p.int(p.degrees(a)) + " = " + p.nf(p.cos(a), 1, 2),
        centerX - 30 + p.cos(a) * raio,
        centerY + stCosY
      );
      p.text(
        "sin " + p.int(p.degrees(a)) + " = " + p.nf(p.sin(a), 1, 2),
        centerX + stSinX,
        centerY + 5 + p.sin(a) * raio
      );

      p.fill(fcolorC);
      if (p.mouseY > centerY) {
        p.text("R = " + p.int(raio), centerX - 15, centerY + raio + 15);
      } else {
        p.text("R = " + p.int(raio), centerX - 15, centerY - raio - 15);
      }

      p.fill(fcolorE);
      p.text(
        p.nf(p.tan(a) * raio, 1, 2),
        centerX + raio + 85,
        centerY + 3 + (p.tan(a) * raio) / 2
      );

      p.fill(fcolorD);

      p.text(
        p.nf(p.cos(a) * raio, 1, 2),
        centerX - 30 + (p.cos(a) * raio) / 2,
        centerY + stCosY * 2
      );
      p.text(
        p.nf(p.sin(a) * raio, 1, 2),
        centerX + 70 + stSinX * 2.5,
        centerY + 5 + (p.sin(a) * raio) / 2
      );

      a = p.atan2(p.mouseY - p.height / 2, p.mouseX - p.width / 2);

      if (p.mouseX > centerX) {
        stSinX = -80;
      } else {
        stSinX = +5;
      }

      if (p.mouseY > centerY) {
        stCosY = -20;
      } else {
        stCosY = 20;
      }
    };

    p.windowResized = function () {
      p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
