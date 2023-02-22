//llamadas sincronas
//cuando una funcion1 empieza una tarea de cliente y llama a una funcion2 de servidor, la funcion1 tiene que esperar
//hasta que la funcion2 termine la tarea para continuar con su ejecucion.

//llmadas asincronas con funcione de tipo callback
//cuando la funcion1 hace una llamada a la funcion2 quien es de tipo callback, las dos pueden seguir trabjando y
//cuando la funcion2 termine su proceso le envia la respuesta a la funcion1 y esta continua su flujo hasta terminar

//la funcion setinterval llama una funcion callback como parametro y el tiempo de ejecucion en milisegundos

let reloj = () => {
  let fecha = new Date();
  console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

setInterval(reloj, 1000); //llama cada segundo la funcion reloj
