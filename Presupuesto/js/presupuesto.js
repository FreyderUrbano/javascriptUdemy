
console.log("PRESUPUESTO EN CURSO ......");

let ingresos = 0;
let egresos = 0;

const registrar = () => {
    let option = document.getElementById('opciones').value;
    let description = document.getElementById('descripcion').value;
    let valor = parseFloat(document.getElementById('valor').value);

    try {
        if (option === "positivo") {
            let ingreso = document.createElement('li');
            ingreso.textContent = `${description}, ${valor}`;
            document.getElementById('in').appendChild(ingreso);
            document.getElementById('ingresos').innerHTML = `${valor}`;
            ingresos += valor;
        } else if (option === "negativo") {
            let egreso = document.createElement('li');
            egreso.textContent = `${description}, ${valor}`;
            document.getElementById('eg').appendChild(egreso);
            document.getElementById('egresos').innerHTML = `${valor}`;
            egresos += valor;
        }
        presupuesto();
        valoresVacios();
    } catch (error) {
        alert('ERROR ENVIO DATOS')
    }
}

const valoresVacios = () => {
    let descripcion = document.getElementById('descripcion').value;
    let valor = parseFloat(document.getElementById('valor').value);

    if (descripcion === "" || valor === " ") {
        alert('Campo Vacios');
        return;
    }
    
}

const presupuesto = () => {
    let presupuesto = ingresos - egresos;
    document.getElementById('presupuestoTotal').innerHTML = `${presupuesto}`;
}

const eliminarIngreso = (elementoId, esIngreso) =>{
    let elemento = document.getElementById(elementoId);
    let valor = parseFloat(elemento.textContent.split(",")[1]);
    elemento.parentNode.removeChild(elemento);

    if(esIngreso){
        ingresos -= valor;
    }else {
        egresos -= valor;
    }
    presupuesto();
}

