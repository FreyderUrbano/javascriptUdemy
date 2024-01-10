//MANJO DE ERRORES JS
"use strict"//SE INICIA EN MODO ESTRICTO

//para manejar errores se usa el bloque try catch
try {
    let x = 10;//AL USAR EL BLOQUE TRY CATCH SE ENCUENTRA QUE EXISTEN ERRORES Y SE MUESTRAN EN CONSOLA PERO LOS ENCANPSULA 
    //EN EL BLOQUE TRY CATCH HACIENDO QUE EL CODIGO CONTINUE 
    miFuncion();
} catch (error) {
    console.log(error);
}
finally{//SIEMPRE SE VA A EJECUTAR // ES OPBIONAL 
    console.log('TERMINA LA REVISION DE ERRORES......');
    
}
console.log('EL CODIGO CONTINUA.......... DESPUES DEL BLOQUE TRY CATCH');





