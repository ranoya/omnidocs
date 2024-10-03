let Hello = function () {
  let objetoDate = new Date();
  let hora = objetoDate.getHours();

  if (hora >= 18) {
    return "Boa Noite!";
  } else {
    return "Bom dia!";
  }
};

let mensagem = Hello();

console.log(mensagem);
