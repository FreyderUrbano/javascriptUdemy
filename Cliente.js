class Cliente extends Persona {
  static contadorCliente = 0;

  constructor (fecha){
    this._idCliente = Cliente.contadorCliente;
    this._fecha = fecha;
 }

 get idCliente(){
    return this._idCliente;
 }

 get fecha(){
    return this._fecha;
 }
 set fecha( fecha ){
    this._fecha = fecha;
 }

 toString(){
    return `${super.toString()} ${this._idCliente} ${this._fecha}`;
 }
}
