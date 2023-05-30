// Obtiene referencias a los elementos relevantes del DOM
botonesNumeros = Array.from(document.getElementsByClassName("numero"));
botonesOperaciones = Array.from(document.getElementsByClassName("operacion"));
pantallaElement = document.getElementById("pantalla");
indicadorOperacionElement = document.getElementById("indicadorOperacion");


let pantalla = 0;
let numeroAnterior;
let numeroReinicia = false;
let historialOperaciones = []; // Arreglo para almacenar el historial de operaciones

// Eventos
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", (e) =>
    numeroClickado(parseInt(e.target.textContent))
  );
});

// Asigna eventos de clic para los botones de operaciones
botonesOperaciones.forEach((boton) => {
  boton.addEventListener("click", (e) =>
    operacionClickeada(e.target.textContent)
  );
});


document.getElementById("clear").addEventListener("click", limpiarNumeroActual);
document.getElementById("allClear").addEventListener("click", reset);
document.getElementById("punto").addEventListener("click", punto);

// Asigna eventos de teclado
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      numeroClickado(parseInt(e.key));
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      operacionClickeada(e.key);
      break;
    case "Enter":
      operacionClickeada("=");
      break;
    case "Escape":
      reset();
      break;
    case "Backspace":
      limpiarNumeroActual();
      break;
    case ".":
      punto();
      break;
  }
});

// Funciones

// Maneja el evento de clic en un número
function numeroClickado(numero) {
  if (numeroReinicia) {
    pantalla = 0;
    numeroReinicia = false;
  }
  numeroPantalla = parseFloat(pantalla);
  if (!isNaN(numeroPantalla)) {
    pantalla = parseFloat(pantalla.toString() + numero);
    actualizarPantalla();
  }
}

// Maneja el evento de clic en una operación
function operacionClickeada(operacion) {
  if (!numeroAnterior) {
    if (pantalla === 0) return;
    numeroAnterior = pantalla;
    indicadorOperacionElement.textContent = operacion;
    actualizarPantalla(0);
  } else {
    let resultado;
    switch (indicadorOperacionElement.textContent) {
      case "+":
        resultado = numeroAnterior + pantalla;
        break;
      case "-":
        resultado = numeroAnterior - pantalla;
        break;
      case "*":
        resultado = numeroAnterior * pantalla;
        break;
      case "/":
        if (pantalla === 0) {
          resultado = 0;
          break;
        }
        resultado = numeroAnterior / pantalla;
        break;
    }
    const operacionCompleta = `${numeroAnterior} ${indicadorOperacionElement.textContent} ${pantalla} = ${resultado}`; // Crea una cadena con la operación completa
    historialOperaciones.push(operacionCompleta); // Agrega la operación al historial de operaciones

    numeroAnterior = resultado;
    actualizarPantalla(resultado);
    indicadorOperacionElement.textContent = operacion;
    if (operacion === "=") {
      indicadorOperacionElement.textContent = undefined;
      numeroAnterior = undefined;
    }
    numeroReinicia = true;
    
    actualizarHistorial(); // Actualiza el historial después de cada operación
}
}

// Actualiza el historial en el DOM
function actualizarHistorial() {
const historialElement = document.getElementById("historial");
historialElement.innerHTML = "";

historialOperaciones.forEach((operacion) => {
const operacionElement = document.createElement("p");
operacionElement.textContent = operacion;
historialElement.appendChild(operacionElement);
});
}

// Actualiza el contenido de la pantalla
function actualizarPantalla(mensaje = pantalla) {
pantalla = mensaje;
pantallaElement.textContent = pantalla;
}

function limpiarNumeroActual() {
actualizarPantalla(0);
}


function reset() {
limpiarNumeroActual();
numeroAnterior = undefined;
indicadorOperacionElement.textContent = undefined;
}

// Maneja el evento de clic en el botón de punto decimal
function punto() {
if (Number.isInteger(pantalla)) {
actualizarPantalla(pantalla + ".");
}
}    