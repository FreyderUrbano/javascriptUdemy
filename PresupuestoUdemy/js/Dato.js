class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this.descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }

    set valor(valor){
        this.valor = valor;
    }
}