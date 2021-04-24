const aplicarDescuento = new Promise((resolve, reject) =>{
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});


aplicarDescuento
    .then( resultado => mostrarMensaje("El promise se ha ejecutado correctamente"))
    .catch( error => console.log(error));

function mostrarMensaje(mensaje){
    console.log(mensaje);
}

// fulfilled - "Promise cumplido"
// rejected  - "No se cumplio el promise"
// pending - La promesa no tiene idea de cual callback usar
