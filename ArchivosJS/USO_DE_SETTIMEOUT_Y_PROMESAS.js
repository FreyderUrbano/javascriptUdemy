//
let promesa = new Promise((resolve) => {
    console.log('INICIO PROMESA');
    setTimeout(()=> resolve('saludos con promesa y timeout'), 5000);
    console.log('FIN PROMESA');
    
});

promesa.then(valor => console.log(valor)
);