function result() {
  return document.getElementById("result");
}

function insert(num) {
  let numero = result();
  numero.innerHTML = numero.innerHTML + num;
}

function limpar() {
  result().innerHTML = "";
}

function apagar() {
  let resultado = result();
  let resulte = resultado.innerHTML;
  resultado.innerHTML = resulte.substring(0, resulte.length - 1);
}

function calc() {
  let resultado = result().innerHTML;

  if (resultado) {
    result().innerHTML = eval(resultado);
  } else {
    result().innerHTML = "Nada para calcular!";
  }
}
