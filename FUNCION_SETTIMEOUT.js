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

//LLAMADAS ASINCRONAS CON SETTIMEOUT

function timeOut() {
  console.log("SALUDO ASYNCRONO DESPUES DE 5 SEGUNDOS");
}

setTimeout(timeOut, 5000); //FUNCION CALLBACK
setTimeout(function () {
  console.log("SALUDO DESPUES DE 10 SEGUNDOS");
}, 10000);

setTimeout(() => console.log("SALUDO ASINCRONO DESPUES DE 15 SEGUNDOS"), 15000); 
