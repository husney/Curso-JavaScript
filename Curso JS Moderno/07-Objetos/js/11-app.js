'use strict';
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
    },
    mostrarInfo : function() {
        console.log(`El porcuto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();

