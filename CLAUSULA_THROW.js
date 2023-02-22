//MANJO DE ERRORES JS
"use strict"; //SE INICIA EN MODO ESTRICTO

let resultado = -1;

try {
  //x = 10;
  if (isNaN(resultado)) throw "no es un nuemro"; //uso de throw
  else if (resultado === " ") throw "ES CADENA VACIA";
  else if( resultado >= 0) throw 'VALOR POSITIVO';
  else if( resultado < 0 ) throw 'VALOR NEGATIVO';
} catch (error) {
  console.log(error);
  // console.log(error.name);
  // console.log(error.message);
} finally {
  console.log("TODOS LOS ERRORES FUERON REVISADOS");
}
console.log("EL PROGRAMA CONTINUA .....");
