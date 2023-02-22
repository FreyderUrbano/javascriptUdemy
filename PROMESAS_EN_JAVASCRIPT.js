//EN UNA PROMESA SE USAN FUNCIONES DE TIPO CALLBACK 
//UNA PROMESA ES CODIGO QUE TIENE VARIOS ESTADOS 
//ENTOCES SE LANZA UNA PETICION PARA PROCESAR UN CODIGO EN CASO DE QUE LA PROMESA SE HAYA RESULTO CORRECTAMENTE RESOLVED .then()
//Y EN CASO CONTRARIO SE LLAMA EL CASO DE RECHAZADO O REJECTED .catch()
//UNA PROMESA QUE NO TERMINA EL PROCESO DE RESOLUCION ESTA EN PERIODO DE PENDIENTE O PENDING

//ejemplos

let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if(expresion){
        resolve('LA EXPRESION FUE RESUELTA');
    }
    else{
        reject('NO FUE RESUELTA');
    }
});

//ejecucion sin .catch()
miPromesa.then( valor => console.log(valor), error => console.log(error));

//ejecucion con .catch()
miPromesa.then( valor => console.log(valor)).catch( error => console.log(error));
