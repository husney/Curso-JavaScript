'use strict';
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true,
    informacion : {        
        fabricacion : {
            pais : "China"
        }
    }
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}


console.log(producto);
console.log(medidas);
console.log("----");
const resultado = Object.assign(producto, medidas);
console.log(resultado);