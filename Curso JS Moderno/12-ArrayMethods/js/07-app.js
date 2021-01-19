const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre', 'Ocubre', 'Noviembre', 'Diciembre'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


const meses3 = meses.concat(meses2);
console.table(meses3);

console.log("----");

const mesesOperator = [... meses, ...meses2];


console.table(mesesOperator);