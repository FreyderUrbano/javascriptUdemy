//ASYNC facilita el uso de promesas
//al colocar la palabra async antes de la definicon de un metodo significa que ese metodo esta obligado a regresar
//una promesa y asi se simplifica el uso de promesas

//se usa async para definir que una funcion o metodo va a regresar una promesa

let promesa = new Promise((resolve) => {
  setTimeout(() => resolve("SALUDO PROMETIDO"), 5000);
});

async function miFuncionConPromesa() {
  return "SALUDO CON PROMESA Y ASYNC";
}
miFuncionConPromesa().then((valor) => console.log(valor));
