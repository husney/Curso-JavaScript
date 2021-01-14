const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true,
    informacion : {
        medidas: {
            peso: "1kg",
            medida : "1m"
        },
        fabricacion : {
            pais : "china"
        }
    }
}

const { informacion:{medidas : {peso}} } = producto;

console.log(peso);