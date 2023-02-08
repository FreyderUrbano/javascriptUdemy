//funcion constructor de objetos de tipo persona

function Persona(nombre, apellido, email, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.nombreCompleto = function(){
        return this.nombre +' ' + this.apellido;
    }
}
//USO DE PROTOTYPE 
//SE VA A AGREGAR LA PROPIEDAD telefono a todos los objetos de tipo Persona 
Persona.prototype.telefono = '525425322';

let padre = new Persona('Juan', 'Perez', 'email@gmail', 'direccion');
console.log( padre );
padre.telefono = '99999999';
console.log(padre.telefono);
console.log(padre.nombreCompleto());

let madre = new Persona('Maria', 'Ramirez', 'Ma@gmail', 'CASA' );
console.log( madre );
madre.telefono = '8888888888';
console.log(madre.telefono);
console.log(madre.nombreCompleto());
//al modificar el nombre del objeto padre no afecta al objeto madre
padre.nombre = 'Jacobo';
console.log( padre );
//revisamos el objeto madre y sigue igual
console.log( madre );

//FORMA DE CREAR OBJETOS
let miObjeto = new Object();
let miObjeto1 = {};

let miCadena = new String('Hola');
let miArreglo = new Array();
// let miArreglo1 = new [];

//USO DE CALL EN JAVASCRIPT

let cosa1 = {
    nombre: 'Freyder',
    apellido: 'Urbano',
    nombreCompleto: function(titulo , telefono) {
        return titulo + ': ' + this.nombre +' '+ this.apellido + ', ' + telefono;
    }
}
let cosa2 = {
    nombre: 'Alejandro',
    apellido: 'Rosales',
}
//USO DE CALL para usar el metodo cosa1.nombreCompleto con los datos de 
//cosa2 

console.log(cosa1.nombreCompleto());
//ASI SE USA CALL
console.log(cosa1.nombreCompleto.call( cosa2,  'Ingniero', '3113402393' ));

//METODO APLY 

let cosa3 = {
    nombre: 'Freyder',
    apellido: 'Urbano',
    nombreCompleto: function(titulo , telefono) {
        //return this.nombre +' '+ this.apellido;
        return titulo + ': ' + this.nombre +' '+ this.apellido + ', ' + telefono;
    }
}
let cosa4 = {
    nombre: 'Alejandro',
    apellido: 'Rosales',
}

//USO DE APPLY para usar el metodo cosa1.nombreCompleto con los datos de 
//cosa2 
console.log(cosa3.nombreCompleto( 'Ingeniero', '3113402393' ));
//ASI SE USA CALL
let arreglo = ['Ingeniero', '2335824582']
console.log(cosa3.nombreCompleto.apply( cosa4, arreglo ));