//DECLARAR FUNCIONES
//se puede llamr una funcion antes o despues de delararla = concepto de HOISTING
miFuncion(8, 10);

function miFuncion(a,b){
    console.log('Suma ' + (a + b));
} 
//LLAMADO DE LA FUNCION
miFuncion(5, 2);

//PALABRA RETURN  EN FUNCIONES 

function miFuncion(a, b){
    return a + b;
}
//llamado de la funcion
let resultado = miFuncion(20, 50);
console.log(resultado);

//FUNCIONES DE TIPO EXPRESION 

//declararacion de una funcion de tipo expresion
let sumar  = function(a, b){return a + b};
res = sumar(1, 2);
console.log(res);

//FUNCIONES DE TIPO SELF-INVOKING

(function(a, b){
    console.log('Ejecutando la funcion ' + (a + b));
})(5 , 5);

//FUNCIONES COMO OBJETOS

function miFuncion(a,b){
    console.log(arguments.length);
    console.log('Suma ' + (a + b));
} 

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//FUNCIONES FLECHA EN JAVASCRIPT

const funcionTipoFlecha = (a, b) => a + b;
result = funcionTipoFlecha(5, 5);
console.log(result); 

//CONCEPTO DE ARGUMENTO Y PARAMETROS

let sumarNum = function(a, b){
    console.log(arguments[0]); 
    console.log(arguments[1]); 
    console.log(arguments[2]); 
    return a + b + arguments[2];
};

result = sumarNum(20, 50, 100);
console.log(result);

//EJERCIO DE ARGUMENTOS Y PARAMETROS

let valores = sumarTodo(5, 20, 11, 10, 2, 100, 200, 142, 10);
console.log(valores);

function sumarTodo(){
    let suma = 0;
    for(let i=0; i < arguments.length;i ++){
        suma += arguments[i];// suma = suma + arguments[i]
    }
   return suma;
}

//PASO POR VALOR 
//tipos primitivos
let y = 10;

function cambiarValor(a){ //a = x 
    a = 20;
}

//paso por valor
cambiarValor(y);//10
console.log(y);
// console.log(a);

//PASO POR REFERENCIA en funciones javascript

const persona = {
    nombre: 'Freyder',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'fABIO';
    p1.apellido = 'Urbano';
}
//PASOP POR REFENCIA
cambiarValorObjeto(persona);
console.log(persona);




