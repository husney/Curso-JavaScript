const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const fNombres = p => p.nombre;
const nombres = carrito.map(fNombres);
console.log(nombres);

const fMayor400 = p => p.precio > 400;
const rProductos = carrito.filter(fMayor400);
console.log(rProductos);