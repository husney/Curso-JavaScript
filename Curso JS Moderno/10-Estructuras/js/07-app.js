

//Operador Ternario

//condición
//if | ?
//else | :


/* 
console.log(autenticado ? "Verdad" : "Falso");


const edad = 18;

acceso = edad >= 18 ? "Permitido" : "Denegado";

console.log(acceso);


const tema = "Obcuro";

tema == "Obcuro" ? console.log("Tema Obscuro") : console.log("Tema claro");
 */

const autenticado = true;
const puedePagar = true;

console.log(autenticado ? puedePagar ? "Si esta autenticado y puede pagar"
                : "Si esta autenticado, no puede pagar" : "No esta autenticado");
