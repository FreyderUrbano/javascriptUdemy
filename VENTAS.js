class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }
  toString() {
    return `id_Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $ ${this._precio}`;
  }
}

//creacion clase ORDEN
class Orden {
  //entre Producto y Orden existe relacion de agregacion
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor(producto) {
    this._idOrden = ++ Orden.contadorOrdenes;
    this._productos = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto); //uso del metodo push agrega un producto al arreglo de productos
    } else {
      console.log("No se pueden agregar mas productos");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio; //totalVenta almacena la suma de los precios de cada producto
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productosOrden = "";

    for (let producto of this._productos) {
      productosOrden += producto.toString() + " ";
    }
    console.log(
      `Orden: ${
        this._idOrden
      }, Total: ${this.calcularTotal()}, Productos: ${productosOrden} `
    );
  }
}

let producto1 = new Producto(" Pan ", 500);
let producto2 = new Producto("Carro", 2000000);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);



orden1.mostrarOrden();

