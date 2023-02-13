//SOBREESCRITURA

//UNA CLASE PADRE HEREDA A LA CLASE HIJA DETALLES
"use strict";
class Empleado {
  //CLASE PADRE
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetales() {
    return ` Empleado: nombre: ${this._nombre}, Sueldo: ${this._sueldo} `;
  }
}

class Gerente extends Empleado {
  //CLASE HIJA
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this._departamento = departamento;
  }

  obtenerDetales() {
    return `Gerente: ${super.obtenerDetales()} Departamento: ${
      this._departamento
    }`;
  }
}

function imprimir(impresion) {
  console.log(impresion.obtenerDetales()); //polimorfismo
}

let empleado1 = new Empleado("Juan", 5000);
let gerente1 = new Gerente("Carlos", 20000, "Sistemas");

imprimir(empleado1);
imprimir(gerente1);
