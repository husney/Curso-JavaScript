const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

carrito.forEach( producto => console.log(producto.nombre + " " + producto.precio));
console.log("----");

let total = 0;

carrito.forEach( producto => total += producto.precio);
console.log(total);

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado);

console.log("----"); 

const numeros = [1,123,1243,46,1243,75,23441,1];

let resultado2 = numeros.reduce((total, valor) => total + valor, 0);
console.log(resultado2);
