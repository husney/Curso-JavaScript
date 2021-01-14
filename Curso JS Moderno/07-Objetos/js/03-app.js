const producto = {
    nombre: "Monitor 20\"",
    precio: 300,
    disponible: true    
}

//Agregar nuevas propiedades a un Objeto

producto.imagen = "imagen.jpg";
console.log(producto);

delete producto.disponible;

console.log(producto);