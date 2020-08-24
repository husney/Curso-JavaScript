const ciudades = ["Londes", "New york", "Paris", "Vancouber"];
const ordenes = new Set([123,150,110,105]);
const datos = new Map();
datos.set("Nombre", "Pepe");
datos.set("Profesion", "Desarrollador web");

//.entries() regresa los elementos separados por llave(indice) y valor 
 
/* for(let entrada of ciudades.entries()){
     console.log(entrada);
 }
 */


//.values() regresa los valores del array (Es el default)
/* for(let entrada of ciudades.values()){
    console.log(entrada);
} */


//.values() por default
//.entires() keys y valores
//.keys() regresa las llaves de los elementos keys(indices)

/* for(valor of ciudades.entries()){
    console.log(valor);
}

for(valor of ordenes.entries()){
    console.log(valor);
}

for(valor of datos.entries()){
    console.log(valor);
} */

/* for(valor of ciudades.values()){
    console.log(valor);
}

for(valor of ordenes.values()){
    console.log(valor);
}

for(valor of datos.values()){
    console.log(valor);
} */


/* for(valor of ciudades.keys()){
    console.log(valor);
}

for(valor of ordenes.keys()){
    console.log(valor);
}

for(valor of datos.keys()){
    console.log(valor);
} */

/* let mensaje = "Aprendiendo JavaScript";

for(letra of mensaje){
    console.log(letra);
} */

/* const enlaces = document.getElementsByTagName("a");

for(enlace of enlaces){
    console.log(enlace.href);
} */


let numero = 5123;

for(nuum of numero){
    console.log(num);
}