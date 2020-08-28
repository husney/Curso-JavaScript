
const carrito = [
    {nombre: "Monitor 30 Pulgadas", precio: 300 },
    {nombre: "Raizen 5 Xtreme", precio: 400},
    {nombre: "Teclado mecanico", precio: 25},
    {nombre: "Mouse Gamer", precio: 25},
    {nombre: "Parlantes PRO-Z", precio: 20}
];

const nuevo = carrito.map( objeto => {
    return objeto.nombre;
});

console.log(nuevo);


