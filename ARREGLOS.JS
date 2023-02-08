//UN ARREGLO EN JAVASCRIPT ES UN TIPO OBJET QUE PERMITE ALMACENAR VARIOS 
//VALORES

//SINTAXIS PARA DECLARAR ARREGLOS

let autos1 = new Array('bmw', 'mercedes ', 'volvo');

const autos2 = ['bmw', 'mercedes ', 'volvo'];
console.log(autos2);

//ACEDER A LOS ELEMENTOS DE UN ARREGLO

console.log( autos2[0]);
console.log( autos2[1]);
console.log( autos2[2]);

//RECORRER LOS COMPONENTES DE UN ARREGLO
for(let i = 0; i < autos2.length; i ++ ){
    console.log(autos2[i]);
}

//MODIFICAR LOS VALORES DE UN ARREGLO 

autos2[1] = 'MercedesBenz';
console.log(autos2[1]);

//AGREGAR NUEVOS VALORES A UN ARREGLO 

autos2.push('KIA');
console.log(autos2);

//otras formas

console.log(autos2.length);
autos2[autos2.length] = 'Cadilac';
console.log(autos2);

//ingresar objetos en indices superiores dejando huecos 

autos2[7] =  'Porche';
console.log(autos2);

//PREGUNTAR SI ES UN ARRAY 

console.log(typeof autos2);

console.log(Array.isArray(autos2));

console.log(autos2 instanceof Array);