//muestra la pantalla
const pantalla = document.querySelector(".pantalla");
//crea un array con todos los botones
const botones = document.querySelectorAll(".btn");



botones.forEach(boton => {
    boton.addEventListener("click", () => {
      
    const botonApretado= boton.textContent;

    pantalla.textContent=botonApretado;

      
        
    })
})
