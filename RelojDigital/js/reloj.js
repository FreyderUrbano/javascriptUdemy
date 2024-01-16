//FUNCIONES PARA RELOJ DIGITAL
console.log('reloj digital');
const mostrarReloj = () => {
    let tiempo = new Date();
    let hora = formatoHora(tiempo.getHours());
    let minutos = formatoHora(tiempo.getMinutes());
    let segundos = formatoHora(tiempo.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abrir', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'octubre', 'Noviembre', 'Diciembre'];
    const dias = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[tiempo.getDay()];
    let dia = tiempo.getDate();
    let mes = meses[tiempo.getMonth()];
    let ano = tiempo.getFullYear();
    let textoFecha = `${dia},${mes},${ano}`;

    document.getElementById('fecha').innerHTML = textoFecha;
    document.getElementById('contenedor').classList.toggle('animarReloj');// se obtine el id contenedor del div se llama a toda la lista de clases que tenga 
    //y con el metodo toggle que hace que se aplique o quite el efecto contennido en animarReloj cada 1 segundo.
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
    return hora;
}
//setInterval llama la funcion mostrarReloj cada segundo 
setInterval(mostrarReloj, 1000);