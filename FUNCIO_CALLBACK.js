function miFuncion1() {
  console.log("TEXTO MI FUNCION 1");
}

function miFuncion2() {
  console.log("TEXTO MI FUNCION 2");
}

miFuncion1();
miFuncion2();

//CONCEPTO DE FUNCION DE TIPO CALLBACK

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, functionCallback) {
  let resultado = op1 + op2;
  functionCallback(`Valor de la suma: ${resultado}`);
}

sumar(8, 28, imprimir);
