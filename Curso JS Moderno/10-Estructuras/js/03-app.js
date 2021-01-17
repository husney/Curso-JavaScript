const dinero = 100;
const totalPagar = 300;

if (dinero >= totalPagar){
    console.log("Puede comprar el producto");
}else{
    console.log("No puede comprar por que no tiene el dinero suficiente");
    console.log("Le falta: " + (totalPagar - dinero));
}