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

class Monitor {
  static contadorMonitores = 0;

  constructor(marcaMonitor, tamañoMonitor) {
    this._idMonitor = Monitor.contadorMonitores;
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
// let dispositivo = new dispositivoEntrada( ' teclado ', ' samsung');
// console.log(dispositivo);
