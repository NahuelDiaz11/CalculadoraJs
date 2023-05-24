//creo un array con todos los elementos cuya clase sea btn
const botonesNumeros = Array.from(document.getElementsByClassName('btn'));
const pantallaElement = document.getElementById('pantalla');
const botonesOperaciones = Array.from(document.getElementsByClassName('operacion'));
const indicadorOperacion = document.getElementById('indicadorOperacion');

let numeroAnterior;
let numeroReinicia = false;

//funcion flecha que llama a el evento donde se encuentra el numero
botonesNumeros.forEach(boton => boton.addEventListener("click", (evento) => numeroClickeado(evento.target.textContent)));
botonesOperaciones.forEach(boton => boton.addEventListener("click", (evento) => operacionClickeada(evento.target.textContent)));
document.getElementById("punto").addEventListener("click",punto => {

})

function numeroClickeado(numero) {
    //convierte los numeros en decimales
    if (numeroReinicia) {
        pantallaElement.textContent = parseFloat(numero);

    }
    else {
        pantallaElement.textContent = parseFloat(pantallaElement.textContent + numero);

    }

};



function operacionClickeada(operacion) {

    //si no hay numero anterior
    if (!numeroAnterior) {
        //si no hay operacion no devuelve nada
        if (pantallaElement.textContent === '0') return;
        numeroAnterior = parseFloat(pantallaElement.textContent);

    }
    //revisa cual operacion hay guardada
    else {
        let resultado;
        switch (indicadorOperacion.textContent) {
            case "+":
                resultado = numeroAnterior + parseFloat(pantallaElement.textContent);
                break;

            case "-":
                resultado = numeroAnterior -  parseFloat(pantallaElement.textContent);
                break;
            case "*":
                resultado = numeroAnterior *  parseFloat(pantallaElement.textContent);
                break;
            case "/":
                if (pantalla === 0) {
                    resultado = 0;
                    break;
                }
                resultado = numeroAnterior /  parseFloat(pantallaElement.textContent);
                break;
        }
        pantallaElement.textContent = resultado;
        numeroAnterior = resultado;
    }
    numeroReinicia = true;
    indicadorOperacion.textContent = operacion;

    console.log(operacion, numeroAnterior)

}

punto(){

};