const carrito = [];

const producto = {
    nombre : "Monitor",
    precio : 400
}

carrito.push(producto);

console.log(carrito);

const producto2 = {
    nombre : "Celular",
    precio : 800
}

carrito.push(producto2);


const producto3 = {
    nombre : "Teclado",
    precio : 50
}

carrito.unshift(producto3);

console.table(carrito);
console.log(carrito[0]);