const carrito = [
    "Celular",
    "Gabinete",
    "Monitor",
    "Teclado",
    "Mouse",
    "Bafles",
    "RAM",
    "SSD"
];

// carrito.forEach(function(elemento) {
//     console.log(elemento);
// })

carrito.forEach( x => console.log(x)); 

const nuevoArray = carrito.map(x => x);

console.table(nuevoArray);