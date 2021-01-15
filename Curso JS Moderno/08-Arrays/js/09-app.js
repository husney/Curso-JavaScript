const carrito = [
    {nombre: "Monitor", precio : 200},
    {nombre: "Teclado", precio : 50 },
    {nombre: "Mouse", precio: 40},
    {nombre: "CPU", precio: 3000000}
];

/*for( let i = 0; i < carrito; i++){
    console.log(carrito[i].nombre + carrito[i].precio);
}*/

/*carrito.forEach( x => 
    console.log(`${x.nombre} | Precio: ${x.precio}`));*/

carrito.forEach(function(elemento){
    console.log(elemento);
});