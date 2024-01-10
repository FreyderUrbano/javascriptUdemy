//CLASES EN JAVASCRIPT

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let Hombre = new Persona("Carlos", "Urbano");
console.log(Hombre);

let Mujer = new Persona("Laura", "Urbano");
console.log(Mujer);

//metodos GET Y SET EN CLASES

class Persona1 {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //Sobreescribiendo el metodo de la clase padre (Objetc)
  toString() {
    //Se aplica polimorfismo que son multiples formas en tiempo de ejecucion
    //el metodo que se ejecuta depende si es una referencia de tipo padre
    //o de tipo hijo.
    return this.nombreCompleto();
  }
  //PALABRA STATIC EN  JAVASCRIPT
  //SE ASOCIA CON LA CLASE MAS NO CON LOS OBJETOS DE LA CLASE.
  static saludar() {
    console.log("SALUDOS DESDE METODO STATIC");
  }
  static saludar2(empleado1){
    console.log(empleado1.nombre + ' ' + empleado1.apellido);
  }
}

let Hombre1 = new Persona("Carlos", "Urbano");
Hombre1.nombre = "Juan Carlos"; //set nombre ('Juan Carlos')
console.log(Hombre1.nombre); // get nombre llama al atributo

//HOISTING
//en clases el concepto de hoisting no se aplica, primero se debe crear la clase
//y luego se se la pueden crear los objetos de la clase que sean necesarios.

//HERENCIA EN JAVASCRIPT

class Empleado extends Persona1 {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llama al constructor de la clase padre.
    this._departamento = departamento;
  }
  get departamento() {
    return this._departament;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}
console.log(Hombre1);

let empleado1 = new Empleado("Freyder ", "Juares", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

//HERENCIA DE METODOS.
console.log(empleado1.nombreCompleto());

//CLASE OBJECT = ES LA CLASE PADRE DE TODAS LAS CLASES
//metodo toString de la clase Object

console.log(empleado1.toString()); //sobreescribir toString ri a la linea 39

//USO DE STATIC
//NO SE PUEDE LLAMAR un METODO STATIC DESDE EL OBJETO
Persona1.saludar();
//SE DEBE LLAMAR DESDE LA CLASE
//AUNQUE SALE UN ERROR, EN LA TERMINAL SI IMPRIME EL METODO STATIC.
Persona1.saludar();
Persona1.saludar2(empleado1);

Empleado.saludar();
Empleado.saludar2(empleado1);
