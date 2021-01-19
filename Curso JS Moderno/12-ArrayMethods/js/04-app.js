const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const valores = carrito.filter( prodcuto => prodcuto.precio == 100);
console.table(valores);

console.log("----");

const numeros = [];

for(let i = 1; i <= 50; i++){
    numeros.push(i);
}

const pares = numeros.filter( numero => numero % 2 == 0);
console.log(pares);