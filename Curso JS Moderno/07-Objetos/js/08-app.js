/* "use strict"; */
//Todo el código entrara en modo estricto

/* const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
 */
Object.seal( producto );
//No permite ni agregar ni eliminar propiedades
//pero si permite modificar las existentes

/* producto.precio = 500;
console.log(producto.precio); */
//producto.cantidad = 10;
//delete producto.precio;

/* console.log(Object.isSealed(producto)); */



//Object.freeze(producto);

//producto.disponible = true;
//producto.cantidad = 10;
//delete producto.precio;
//console.log(Object.isFrozen(producto));


