function getPanel() {
  return document.getElementById("result");
}

function insert(num) {
  let el = getPanel();
  el.innerHTML = el.innerHTML + num;
}

function limpar() {
  getPanel().innerHTML = "";
}

function apagar() {
  let el = getPanel();
  let value = el.innerHTML;
  el.innerHTML = value.substring(0, value.length - 1);
}

function calc() {
  let resultado = getPanel().innerHTML;

  if (resultado) {
    getPanel().innerHTML = eval(resultado);
  } else {
    getPanel().innerHTML = "Nada para calcular!";
  }
}
