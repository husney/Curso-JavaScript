/* 
const carrito = [
    {nombre: "Monitor 30 Pulgadas", precio: 400},
    {nombre: "Raizen 5 Xtreme", precio: 300},
    {nombre: "Teclado Mecanico", precio: 50},
    {nombre: "Mouse ROG", precio: 50},
    {nombre: "Bafles XzPro", precio: 25}
];

const nuevoArregloFunction = carrito.map(function(articulo){
    return `${articulo.nombre} Precio $${articulo.precio}`;
});

carrito.forEach( function (producto){
    console.log(producto.nombre + " Precio $"+producto.precio);
});


const nuevoArregloArrow = carrito.map( producto =>{
    return `${producto.nombre} Precio $${producto.precio}`;
});

carrito.forEach( articulo =>{
    console.log(articulo.nombre + " Precio $" +articulo.precio);
});



console.log(nuevoArregloArrow);


const nArray = carrito.map( producto => `${producto.nombre} Precio $${producto.precio}`);
nArray.forEach( articulo => console.log(articulo));
 */