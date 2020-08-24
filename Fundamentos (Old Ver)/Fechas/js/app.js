


/* console.log(diaActual);

let navidad2020 = new Date("12/25/2020");

console.log(navidad2020); */


const diaActual  = new Date();

//get para obtener
//set para asignar
console.log(diaActual.getFullYear());//Año
console.log(diaActual.getMonth()); // Mes 
console.log(diaActual.getDate()); //Número del día en el mes
console.log(diaActual.getDay()); //Número del dia 0 a 6 (Lu,Ma, Mi, Jue, Vie, Sa, Do)
console.log(diaActual.getHours());//Hora 
console.log(diaActual.getMinutes()); //Minuto
console.log(diaActual.getTime()); //Milisegundos desde 1970

function sayHello(){
    console.log("Hola");
}

//Funciones
const hola = function(){
    console.log("Hola");
}

const hola2 = nombre => console.log("Hola " + nombre);

const hola3 = (nombre, apellido) => console.log("Hola" + nombre + " " + apellido);

(function(nombre = "Defaul"){
    console.log("Hola " + nombre );
}("Pepe"));

const musica = {
    reproducir: function(cancion){
        console.log("Reproduciendo cancion");
    }, 

    pausar: function(){
        console.log("Pausado");
    },

    eliminar(numero){
        console.log("Cancion eliminada No " + numero);
    }

}

musica.buscar = function (nombre){
    console.log("Buscando " + nombre);
}










