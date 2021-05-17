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

// const nombres = carrito.map(producto=> producto.nombre);

// const precios = carrito.map(producto => producto.precio);

// console.log(nombres);
// console.log(precios);

const nombres = producto => producto.nombre;

const resultadoNombres = carrito.map(nombres);
console.log(resultadoNombres);