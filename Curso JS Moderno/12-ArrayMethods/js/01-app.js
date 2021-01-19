const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Comprobar si un valor existe en un array

meses.forEach(mes =>{
    if (mes === "Enero"){
        console.log("Enero Si Existe");
    }
});

const resultado = meses.includes('Enero');
console.log(resultado);
console.log("----");

// En arrreglo de objetos se usa .some
const existe = carrito.some( producto => producto.nombre === 'Teclado' );

console.log(existe);  