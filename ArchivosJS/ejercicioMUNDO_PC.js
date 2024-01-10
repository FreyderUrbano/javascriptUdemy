class dispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    //cambios
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  toString() {
    return `Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

class Raton extends dispositivoEntrada {
  static contadorIdRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca); //errores
    this._idRaton = ++Raton.contadorIdRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return `Id_Raton: ${this._idRaton}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

let raton1 = new Raton("usb", "hp");

class Teclado extends dispositivoEntrada {
  static contadorIdTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca); //inicializamos los atributos de la clase padre
    this._idTeclado = ++Teclado.contadorIdTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Id_Teclado: ${this._idTeclado}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

let teclado1 = new Teclado("inalambrico", "dell");

class Monitor {
  static contadorMonitores = 0;

  constructor(marcaMonitor, tamañoMonitor) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marcaMonitor = marcaMonitor;
    this._tamañoMonitor = tamañoMonitor;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marcaMonitor() {
    return this._marcaMonitor;
  }
  set marcaMonitor(marcaMonitor) {
    this._marcaMonitor = marcaMonitor;
  }

  get tamañoMonitor() {
    return this._tamañoMonitor;
  }
  set tamañoMonitor(tamañoMonitor) {
    this._tamañoMonitor = tamañoMonitor;
  }
  toString() {
    return `Id_Monitor: ${this._idMonitor}, Marca_Monitor: ${this._marcaMonitor}, Tamaño_Monitor: ${this._tamañoMonitor}`;
  }
}

class Computadora {
  static contadorComputadora = 0;

  constructor(
    nombreComputadora,
    monitorComputadora,
    tecladoComputadora,
    ratonComputadora
  ) {
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombreComputadora = nombreComputadora;
    this._monitorComputadora = monitorComputadora;
    this._tecladoComputadora = tecladoComputadora;
    this._ratonComputadora = ratonComputadora;
  }

  get idComputadora() {
    return (this._idComputadora = idComputadora);
  }

  get nombreComputadora() {
    return (this._nombreComputadora = nombreComputadora);
  }
  set nombreComputadora(nombreComputadora) {
    this._nombreComputadora = nombreComputadora;
  }

  get monitorComputadora() {
    return (this._monitorComputadora = monitorComputadora);
  }
  set monitorComputadora(monitorComputadora) {
    this._monitorComputadora = monitorComputadora;
  }

  get tecladoComputadora() {
    return (this._tecladoComputadora = monitorComputadora);
  }
  set tecladoComputadora(tecladoComputadora) {
    this._tecladoComputadora = tecladoComputadora;
  }

  get ratonComputadora() {
    return (this._ratonComputadora = monitorComputadora);
  }
  set ratonComputadora(ratonComputadora) {
    this._ratonComputadora = ratonComputadora;
  }

  toString() {
    return `Computadora: ${this._idComputadora}, 
    Nombre: ${this._nombreComputadora}, 
    Monitor: ${this._monitorComputadora}, 
    Teclado: ${this._tecladoComputadora}, 
    Raton: ${this._ratonComputadora}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarCompu(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadoraOrden = " ";
    for (let computadora of this._computadoras) {
      computadoraOrden += `\n${computadora}`;
    }
    console.log(`Orden: ${this._idOrden} Computadora: ${computadoraOrden}`);
  }
}

let monitor1 = new Monitor("Dell", "15 pg");
let monitor2 = new Monitor("Samsung", "20 pg");
console.log(monitor1.toString());
console.log(monitor2.toString());

let dispositivo = new dispositivoEntrada(" teclado ", " samsung");
console.log(dispositivo);
let computadora1 = new Computadora("Samsung", monitor1, teclado1, raton1);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarCompu(computadora1);
orden1.mostrarOrden();