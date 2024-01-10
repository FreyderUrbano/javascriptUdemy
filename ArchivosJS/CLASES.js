//CLASES EN JAVASCRIPT 

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let Hombre = new Persona('Carlos', 'Urbano');
console.log(Hombre);

let Mujer = new Persona('Laura', 'Urbano');
console.log(Mujer);

//metodos GET Y SET EN CLASES

class Persona1{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this.apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

let Hombre1 = new Persona('Carlos', 'Urbano');
Hombre1.nombre = 'Juan Carlos';//set nombre ('Juan Carlos')
console.log( Hombre1.nombre );// get nombre llama al atributo

//HOISTING 
//en clases el concepto de hoisting no se aplica, primero se debe crear la clase
//y luego se se la pueden crear los objetos de la clase que sean necesarios.

//HERENCIA EN JAVASCRIPT

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llama al constructor de la clase padre.
        this._departamento = departamento;
    }
    get departamento(){
        return this._departament;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}
console.log( Hombre1 );

let empleado1 = new Empleado('Freyder ', 'Juares', 'Sistemas');
console.log(empleado1);