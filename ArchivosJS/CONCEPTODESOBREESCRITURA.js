//SOBREESCRITURA

//UNA CLASE PADRE HEREDA A LA CLASE HIJA DETALLES
"use strict"
class Empleado {//CLASE PADRE
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetales() {
    return ` Empleado: nombre: ${this._nombre}, Sueldo: ${this._sueldo} `;
  }
}

class Gerente extends Empleado {//CLASE HIJA
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



let empleado1 = new Empleado("Juan", 5000);
console.log(empleado1.obtenerDetales());

let gerente1 = new Gerente("Carlos", 20000, "Sistemas");
console.log(gerente1);