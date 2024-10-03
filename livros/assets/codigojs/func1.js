let Hello = function () {
  let objetoDate = new Date();
  let hora = objetoDate.getHours();

  if (hora >= 18) {
    console.log("Boa Noite!");
  } else {
    console.log("Bom dia!");
  }
};

Hello();
