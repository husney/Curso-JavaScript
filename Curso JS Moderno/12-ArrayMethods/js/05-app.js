const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let reusltado = '';

carrito.forEach((producto, indice) =>{
    if(producto.nombre === 'Tablet'){
        reusltado = carrito[indice];
    }
});

console.log(reusltado);

console.log("----");

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);

