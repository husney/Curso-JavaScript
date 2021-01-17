const dinero = 300;
const pagar = 500;
const tarjeta = false;

if( dinero >= pagar){
    console.log("Puede comprar");
}else if (dinero + 201 > pagar && tarjeta){
    console.log("Puede pagar con un prestamo de " + (pagar - dinero));
}else{
    console.log("No puede comprar");
}