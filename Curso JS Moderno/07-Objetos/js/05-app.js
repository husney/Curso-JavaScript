const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true,
    informacion : {
        medidas:{
            peso : "1kg",
            medida : "1m"
        },
        fabricacion:{
            pais : 'Colombia'
        }
    }
}

console.log(producto);

console.log("----");

console.log(producto.informacion.medidas.peso); 

