//creacion de la clase persona
class Persona {
  static contadorPersona = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersona;
  }
  get idPersona() {
    return this._idPersona;
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
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  datosEmpleado() {
    return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`; //metodo template string
  }
  toString() {
    return this.datosEmpleado();
  }
}
//creacion de la clase empleado
class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return `${super.toString()}  ${this._idEmpleado}  ${this._sueldo}`; //tamplateString
  }
}
//creacion de la clase cliente
class Cliente extends Persona {
  static contadorCliente = 0;

  constructor(nombre, apellido, edad, fecha) {
    super(nombre, apellido, edad);
    this._idCliente = Cliente.contadorCliente;
    this._fecha = fecha;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fecha() {
    return this._fecha;
  }
  set fecha(fecha) {
    this._fecha = fecha;
  }

  toString() {
    return `${super.toString()} ${this._idCliente} ${this._fecha}`;
  }
}

//PRUEBA DE LAS CLASES PERSONA, EMPLEADO y CLIENTE

let persona1 = new Persona("Juan", "Oviedo", 39);
console.log(persona1.toString());

let persona2 = new Persona("Edgar", "Urbano", 50);
console.log(persona2.toString());

let empleado1 = new Empleado('Freyder', 'Urbano ', 39, 5000000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Larua', 'Quintero', 33, 200000000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Miguel', 'Cervantes', 30 , new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente( 'Juaquin', 'Ceron', 6 , new Date());
console.log( cliente2.toString());