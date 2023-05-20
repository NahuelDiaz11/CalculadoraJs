//creo un array con todos los elementos cuya clase sea btn
const botonesNumeros = Array.from(document.getElementsByClassName('btn'));
const pantallaElement = document.getElementById('pantalla');
const botonesOperaciones = Array.from(document.getElementsByClassName('operacion'));

let numeroAnterior;

//funcion flecha que llama a el evento donde se encuentra el numero
botonesNumeros.forEach(boton => boton.addEventListener("click", (evento) => numeroClickeado(evento.target.textContent) ));

botonesOperaciones.forEach(boton => boton.addEventListener("click", (evento) => operacionClickeada(evento.target.textContent) ));


function numeroClickeado(numero){
    //console.log(numero)
    //convierte los numeros en decimales
    pantallaElement.textContent = parseFloat(pantallaElement.textContent + numero);

};


function operacionClickeada(operacion){
    
    if (!numeroAnterior) {
        numeroAnterior = pantallaElement.textContent;
        
    }
    pantallaElement.textContent = 0;
    console.log(operacion,numeroAnterior)

}