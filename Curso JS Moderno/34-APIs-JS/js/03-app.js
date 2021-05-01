window.addEventListener('online', estado);
window.addEventListener('offline', estado);

function estado(){
    if(navigator.onLine){
        console.log("Está conectado");
    }else{
        console.log("No está conectado");
    }
}