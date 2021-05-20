if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registro => console.log("El service worker se ha registrado: ", registro))
    .catch(ex => console.log("Ha sucedido un error al registrar el service worker ", ex));
}else{
    console.log("El navegador no soporta service worker");
}