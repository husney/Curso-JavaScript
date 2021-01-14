
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true,
    informacion : {
        medidas : {
            peso : "1kg",
            medida : "1m"
        },
        fabricacion : {
            pais : "China"
        }
    }
}

Object.freeze(producto);

console.log(producto);

//producto.nombre = "Monitor";

console.log(Object.isFrozen(producto)); 

