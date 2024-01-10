//CLASE UDEMY PYTHON
let nombreCompleto = "Juan Manrrique";
console.log(nombreCompleto);
//SE PUEDEN DEFINIR VARIAS VARIABLES EN LA MISMA LINEA
let x, y;
(x = 20), (y = 50);
let z = x + y;
console.log(z);
//EJERCICIO DE PRACTICA
//ENCONTRAR NUMERO PAR
let a = 5;
if (a % 2 == 0) {
  console.log("Es un numero par");
} else {
  console.log("Es un numero inpar");
}
//EJEMPLO ES MAYOR DE 18 Años

let edad1 = 15,
  edad2 = 18;

if (edad1 >= edad2) {
  console.log("Es un adulto");
} else {
  console.log("Es menor de edad");
}
//OPERADORES LOGICOS EN JAVASCRIPT && // ambos deben ser verdaderos para true de lo contrario false

let comp = 2;
let valMin = 5;
let valMax = 20;

if (comp >= valMin && comp <= valMax) {
  console.log("ESTA EN RANGO");
} else {
  console.log("FUERA DE RANGO");
}
//OPERADOR OR  (||)  si cualquiera de los valores es true regresa un true

let vacaciones = false,
  diaDescanso = false;

if (vacaciones || diaDescanso) {
  console.log("VACACIONES");
} else {
  console.log("A TRABAJAR");
}
//OPERADOR TERNARIO
// es un metodo similar a IF pero en una sola linea
// en la variable valor se guarda el resultado de la evaluacion del valor que en este caso es (3>2) y
//retorna verdadero para este caso
let valor = 3 > 2 ? "verdadero" : "falso";
console.log(valor);

//EJERCICIO PREGUNTAR SI UN NUMERO ES PAR CON OPERADOR TERNARIO
let num = 13;
num = num % 2 == 0 ? "ES PAR" : "ES IMPAR";
console.log(num);

//CONVERTIR DE STRING A NUMERO

let miNumero = "50";
console.log(typeof miNumero);
//usando el metodo Number cambia de string a number el valor de miNumero y se almacena en edad
let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18) {
  console.log("PUEDE VOTAR");
} else {
  console.log("NO PUEDE VOTAR");
}

//el mismo ejercicio pero con operador ternario
let edadParaVotar = 18;
let edadVotante = "10";
let votar = Number(edadVotante);
votar = votar >= edadParaVotar ? "PUEDE EJERCER EL VOTO" : "NO PUEDE VOTAR";
console.log(votar);

//VERIFICAR SI ES UN NUMERO

let numero1 = "55";
let Numero = Number(numero1);
console.log(Numero);

//FUNCION ISNaN VALIDAR con isNaN si un numero es o no un numero.

if (isNaN(Numero)) {
  console.log("no es un numero");
} else {
  console.log("si es un numero");
  if (Numero >= 18) {
    console.log("EL " + Numero + "ES MAYOR QUE 18.");
  } else {
    console.log("EL " + Numero + "ES MENOR QUE 18");
  }
}

Numero =
  Numero >= 18
    ? "EL " + Numero + " ES MAYOR QUE 18 "
    : "EL " + Numero + " ES MENOR QUE 18";
console.log(Numero);

//PRECEDENCIA DE OPERADORES CON JAVASCRIPT

let val1 = 5;
let val2 = 10;
let res = ++val1 + val2--;
console.log(val1);
console.log(val2);
console.log(res);

let val3 = 10;

let resu = val2 + val3;
console.log(resu);

let resultado = 4 + (5 * 6) / 3;
console.log(resultado);

//SENTENCIAS DE CONTROL
//ASII FUNCIONA
let condicion = true;
//SI SE TIENE SOLO UNA LINEA DE CODIGO DENTRO DEL IF Y ELSE SE PUEDEN QUITAR LOS CORCHETES
//PERO POR BUENAS PRACTICAS NO SE DEBEN OMITIR
if (condicion) {
  console.log("CONSICION VERDADERA");
} else {
  console.log("CONDICION FALSA");
}

//===============================================================

let numero = 2;

if (numero === 1) {
  console.log("nuemro 1");
} else if (numero === 2) {
  console.log("nuemro 2");
} else if (numero === 3) {
  console.log("numero 3");
} else {
  console.log("numero desconocido");
}

//EJERCICIO CON ELSE IF

let mes = 15;
let estacion;

if (mes === 1) {
  console.log("ENERO");
  estacion = "INVIERNO";
} else if (mes === 2) {
  console.log("FEBRERO", (estacion = "INVIERNO"));
} else if (mes === 3) {
  console.log("MARZO", (estacion = "INVIERNO"));
} else if (mes === 4) {
  console.log("ABRIL", (estacion = "PRIMAVERA"));
} else if (mes === 5) {
  console.log("MAYO", (estacion = "PRIMAVERA"));
} else if (mes === 6) {
  console.log("JUNIO", (estacion = "VERANO"));
} else if (mes === 7) {
  console.log("JULIO", (estacion = "VERANO"));
} else if (mes === 8) {
  console.log("AGOSTO", (estacion = "OTOÑO"));
} else if (mes === 9) {
  console.log("SEPTIEMBRE", (estacion = "OTOÑO"));
} else if (mes === 10) {
  console.log("OCTUBRE", (estacion = "OTOÑO"));
} else if (mes === 11) {
  console.log("NOVIEMBRE", (estacion = "INVIERNO"));
} else if (mes === 12) {
  console.log("DICIEMBRE", (estacion = "INVIERNO"));
} else {
  console.log("SOLO EXISTEN 12 MESES");
}

//EJERCIIO CON ELSE IF

/*
6AM-11AM - buenos dias
12pm-18pm - buenas tardes
19pm-24pm - buenas noches
0am- 6am - DURMIENDO
*/

let hora = 22;
let saludo;

if (hora >= 6 && hora <= 11) {
  saludo = "BUENOS DIAS";
} else if (hora >= 12 && hora <= 18) {
  saludo = "BUENAS TARDES";
} else if (hora >= 19 && hora <= 24) {
  saludo = "BUENAS NOCHES";
} else if (hora <= 6) {
  saludo = "DURMIENDO";
} else {
  saludo = "NO MOLESTAR";
}
console.log(saludo);

//SWITCH EN JAVASCRIPT
//EJEMPLO NUEMRO A TEXTO CON SWITCH

let num1= 20;
let numTexto = "desconocido";

switch (num1) {
  case 1:
    numTexto = "NUMERO UNO";
    break;
  case 2:
    numTexto = "NUMERO DOS";
    break;
  case 3:
    numTexto = "NUMERO TRES";
    break;
  case 4:
    numTexto = "NUMERO CUATRO";
    break;
  default:
    numTexto = "FALLIDO";
}
console.log(numTexto);

//EJERCICIO ESTACION DEL A;O CON SWITCH

let meses = 6;
let eda = "indefinida";

switch (meses) {
  case 1: case 2: case 3: case 12:
    eda = "INVIERNO";
    break; 
    case 4: case 5: case 6: case 7: case 8:
    eda = "VERANO";
    break;
    case 9: case 10: case 10:
    eda = "PRIMAVERA";
    break;
  default:
    eda = "error";
}
console.log(eda);

//CICLOS EN JAVASCRIPT

//CICLO WHILE 

let contador = 0;

while (contador < 8) {
  console.log(contador);
  contador++;
}
console.log('fin ciclo while');

//CICLO DO WHILE

let cont = 0;

do{
  console.log(cont);
  cont++;
}while (cont < 2) {
  console.log('Fin ciclo while');
}

//CICLO FOR

for (let conta = 0; conta < 3; conta ++) {
  console.log(conta);
}
console.log('fin ciclo for');

//PALABRA BREAK EN JAVASCRIPT 

for (let contador = 0; contador <= 10; contador ++){
  if(contador % 2 == 0){
    console.log(contador);
    break;
  }
  console.log('fin del ciclo for');
}

//PALABRA CONTINUE EN JAVASCRITP

for( let contador = 0; contador <= 10; contador ++ ){
  if(contador %  2 !== 0){
    continue;//IR A LA SIGUIENTE OPERACION 
  }
  else{
    console.log(contador);
  }
}

//ETIQUETAS 
inicio:
for( let contador = 0; contador <= 10; contador ++ ){
  if(contador %  2 !== 0){
    continue inicio;//IR A LA SIGUIENTE OPERACION 
  }
  else{
    console.log(contador);
  }
}