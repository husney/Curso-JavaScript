const busqueda  = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => { //Al espichar una tecla
    console.log("Escribiendo . . . ");
});

busqueda.addEventListener('keyup', () =>{ // Al solatar una tecla
    console.log("Se solto la tecla");
});

busqueda.addEventListener('blur', () =>{ // Al salir de un elemento
    console.log("Saliendo del input");
});

busqueda.addEventListener('copy', () =>{ // Cuando se copia algo 
    console.log("Haz copiado algo...");
});

busqueda.addEventListener('paste', () =>{ // Al pegar algo
    console.log("Haz Pegado algo....");
});

busqueda.addEventListener('cut', () =>{ // Al cortar algo
    console.log("Cortaste algo...");
});

busqueda.addEventListener('input', () =>{ // Se ejecuta por los eventos keydown, keypu, cut, paste menos con paste ni con blur
    console.log("Evento de input");
});

// document.addEventListener('keydown', atajo);

// function atajo(){
//     console.log("Usando atajo");
// }