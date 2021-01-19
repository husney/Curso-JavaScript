const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes, i) => {
    console.log("Indice: " + i + " valor: " + mes);
});

const indice = meses.findIndex( mes => mes === "Enero");
console.log("____");
console.log(indice);

const indice2 = carrito.findIndex( producto => producto.nombre === "Teclado");
console.log(indice2);
console.log("----");

let posicion = null;
meses.forEach( mes =>{
     if(mes === 'Abril'){
        posicion = meses.indexOf(mes);        
     }     
});

console.log(posicion);

