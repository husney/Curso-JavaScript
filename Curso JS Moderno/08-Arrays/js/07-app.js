const carrito = [];

const producto = {
    nombre : "Monitor",
    precio : 400
}

const producto2 = {
    nombre : "Celular",
    precio : 800
}
 
const producto3 = {
    nombre : "Teclado",
    precio : 50
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);

// Eliminar ultimo elemento de un array

carrito.pop();

console.table(carrito);


// Eliminar al inicio de un array
carrito.shift();

console.table(carrito);

carrito.push(producto2);
carrito.push(producto);
carrito.unshift(producto3);

console.table(carrito);


// Eliminar un elemento segun su indice

carrito.splice(1,1);
console.table(carrito);

console.log(carrito.indexOf(producto));

