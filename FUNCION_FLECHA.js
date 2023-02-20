//FUNCION FLECHA 

function miFuncion(){
    console.log('IMPRESION DE FUNCION NORMAL');
}
//CREACION FUNCION FLECHA // SINTAXIS DE LA FUNCION FLECHA // LA FUNCION FLECHA NO USA HOUSTING
const funcionFlecha = () => {
    console.log('MENSAJE DESDE FUNCION FLECHA');
}


const miFuncionFlecha = () =>{
    console.log('MI FUNCION FLECHA');
}

const saludar = () =>   {
    return 'SALUDOS DESDE FUNCION FLECHA';
}
console.log(saludar());

const saludar1 = () => 'otro saludo de funcion flecha';

console.log( saludar1());

//FUNCION FLECHA OBJETOS
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Fernandez'});
console.log(regresaObjeto());

//FUNCION FLECHA PARAMETROS

//funcion clasica
const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
    
}
// un solo parametro
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('saludo con parametros desde funcion flecha');

//varios parametros
const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log( funcionConVariosParametros(20,50));



miFuncion();
funcionFlecha();
