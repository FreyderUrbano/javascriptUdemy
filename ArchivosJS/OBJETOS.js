//objetos en javascript

let x = 10;
console.log(x.length);

//DEFINIR UN NUEVO OBJETO //AGREGAR METODOS A OBJETOS

let persona = {
  nombre: "Javier",
  apellido: "Ipaz",
  email: "javi@gmail",
  edad: 30,
  nombreCompleto: function () {
    //this es una variable que apunta al objeto que se esta trabajando
    //como es persona.
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.nombreCompleto());

console.log(persona);

// OTRA FORMA DE CREACION DE OBJETOS EN JAVASCRIPT

let persona2 = new Object();
persona2.nombre = "Caliche";
persona2.direccion = "Pasto Colombia";
persona2.telefono = "3112502398";
persona2.email = "Caliche@gmail.com";

console.log(persona2.telefono);

//acceder a las propiedades de los objetos

console.log(persona2.nombre);
console.log(persona["apellido"]);

//for in para recorrer cada una de las propiedades de un objeto

for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

//AGREGAR Y ELIMINAR PROPIEDADES A UN OBJETo

persona2.telefono = "3113402393";

console.log(persona2);

//eliminar

delete persona2.telefono;
console.log(persona2);

//FORMAS DE IMPRIMIR UN OBJETO

//CONCATENAR CADA VALOR DE CADA PROPIEDAD
console.log(persona2.nombre + persona2.direccion);
//otra for in
for (nombrePropiedad in persona2) {
  console.log(persona2[nombrePropiedad]);
}

//otra forma
let peopleArray = Object.values(persona2);
console.log(peopleArray);

//otra
let personaString = JSON.stringify(persona2);
console.log(personaString);

//METODO GET EN OBJETOS

let computadores = {
  marca: "Sony",
  empresa: "Legion",
  color: "negro",
  peso: "20k",
  get marcaEmpresa() {
    return this.marca + " " + this.empresa;
  },
};

console.log(computadores.marcaEmpresa);

//METODO SET

let compu = {
  tipo: "portatil",
  marca: "Acer",
  color: "rojo",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase(); //toUpercase convierte un string a mayusculas
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
};

console.log(compu.lang);
compu.lang = "en";
console.log(compu.lang);
console.log(compu.idioma);



