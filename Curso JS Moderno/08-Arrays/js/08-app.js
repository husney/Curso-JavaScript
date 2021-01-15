const producto = {
    nombre : "Monito",
    precio : 200,
    disponible : true
}

const {nombre} = producto;

console.log(nombre);

// Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);

console.log("----");
const [, , , cuarto] = numeros;

console.log(cuarto);

