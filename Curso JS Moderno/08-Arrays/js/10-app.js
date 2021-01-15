const carrito = [
    {nombre: "Monitor", precio : 200},
    {nombre: "Teclado", precio : 50 },
    {nombre: "Mouse", precio: 40},
    {nombre: "CPU", precio: 3000000}
];

let nuevoArray = carrito.map(function (x){
    return x;
});

console.log(nuevoArray);