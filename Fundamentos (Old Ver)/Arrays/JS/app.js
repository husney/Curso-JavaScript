

//let numeros = [10,20,30,40,50];
//console.log(numeros);


let meses = new Array("January", "February", "March", "April", "May", "June", "Juli",
                      "August", "September", "October", "November", "December");

//console.log(meses);
//console.log(Array.isArray(mezclado));
//mezclado.unshift("Nuevo valor");

/* let mezclado = ["Hola", 20, true, null, false, undefined, NaN];

mezclado.reverse();
console.log(mezclado);
 */

/* let arreglo1 = [1,2,3,4,5,6,7,8,9,10];
let arreglo2 = ["Hola", "Buen", "Día"];

let arregloUnido = arreglo1.concat(arreglo2);

console.log(arregloUnido); */

/* const frutas = ["Manzana", "Fresa", "Aguacate", "Mango", "Durazno"];
console.log(frutas);

frutas.sort();

console.log(frutas); */


let numeros = [1,5,2,10,100,200,500,25];

for(let i = 0; i < numeros.length; i++){
    for(let j = 0; j < numeros.length - 1; j++){
        if(numeros[j] > numeros[j+1]){
            let alt = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = alt;
        }
    }
}

console.log(numeros);
