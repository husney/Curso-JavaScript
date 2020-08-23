//fucntion nombre(parametros, parametros){
//          Logica 
//}

/* function sumar(a, b){
    return a + b;
}

console.log(sumar(4,1)); */


/* function saludar(nombre = "Nombre por defecto"){
    console.log(`Hola ${nombre}`);
}

saludar("Santi"); */

//function expresssion
//Su sintaxis es similar a la de una variable

const sumar = function(a, b){
    return a + b;
}

//console.log(sumar(5,5));

//const saludar = function(nombre = "DEFAULT"){
//   console.log(`Hola ${nombre}`);
//}

//saludar("Santi");


//FUNCIONES IIFE (Automaticas)
//Inmediately Invoqued Function Expresion



/* (function(){
    console.log('Creando un IFFIE');
}());


const saludar = function(){
    console.log("Hola 1");
};

function saludo(){
    console.log("Hola 2");
}

(function saludar(){
    console.log("Hola 3");
}());
 */
 
/*  (function(nombre = "DEFAULT"){
    console.log(`Hola ${nombre}`);
 }()); */

 const saludar = (parametro)  => `Hola ${parametro}`;
 
//console.log(saludar("Pepe"));

const suma = (num1, num2) => num1 + num2;
//console.log(suma(5,5));

(function(nombre = "Bienvenido"){
    console.log(`Hola ${nombre}`);
}("Husney"));


//Funciones de objeto

const musica ={
    reproducir: function(id){
        console.log(`Reproduciendo mucica No ${id}`);
    },
    pausar: function(){
        console.log(`Pausa`);
    }
}

musica.borrar = function(id){
    console.log(`Canción No ${id} borrada`);
}

musica.borrar(5);









