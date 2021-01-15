const carrito = [
    {nombre : 'Monitor', precio : 500},
    {nombre : 'CPU', precio: 3000000},
    {nombre : 'Teclado0', precio : 50},
    {nombre : 'Mouse', precio : 40}   
];

const newC = carrito.map( producto => producto);

console.log(newC);

console.log("-----");

const newC2 = carrito.map(function (producto){
    return producto;
});

console.log(newC2);

console.log("----");

carrito.forEach( prodcuto => console.log(prodcuto));

console.log("-----");

carrito.forEach(function (producto){
    console.log(producto);
})