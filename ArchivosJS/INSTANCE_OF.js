//INSTANS OF

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
//aplicacion de instanceof
//INSTANCEOF SOLO RESPONDE A CLASES PADRE
function determinarTipo(tipo) {
  console.log(tipo.obtenerDetales()); //polimorfismo
  if ( tipo instanceof Gerente ){
    console.log('ES UN OBJETO DE TIPO GERENTE');
    console.log( tipo._departamento);//elegimos el tipo departamaento dentro de Gerente
    //primero se debe llamar a la clase hija
  }
  else if( tipo instanceof Empleado){//despues a la clase padre
    console.log('ES UN OBJETO DE TIPO EMPLEADO');
  }

  else if( tipo instanceof Object){
    console.log('ES UN TIPO OBJECT');
    
  }
}

let empleado1 = new Empleado("Juan", 5000);
let gerente1 = new Gerente("Carlos", 20000, "Sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);