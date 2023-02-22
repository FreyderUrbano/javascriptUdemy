//await y async facilitan el uso de promesas
//await espera el resultado de una promesa

//ejemplo async/await

async function funcionConPromesaYawait() {
  let miPromesa = new Promise((resolve) => {
    resolve("SALUDO CON AWAIT");
  });
  console.log( await miPromesa );
  
}

funcionConPromesaYawait();
