let A = "Estou no escopo geral";

function teste1() {
  B =
    "Estou no escopo de teste1, mas sou geral (não fui declarada com let ou var)";
  console.log(A); // funcionará
  console.log(B); // funcionará
}

function teste2() {
  console.log(A); // funcionará
  console.log(B); // funcionará
}

teste1(); // executa teste1
teste2(); // executa teste2
