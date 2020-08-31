/* //BUENAS PRACTICAS

const autenticado = true;

//MAL 

if(autenticado == true){
    console.log("Autenticado");
}



//BIEN
if(autenticado){
    console.log("Autenticado")
}

// EL true en el if ya va implicito, lo que significa
//Si la condición que esta dentro del true es verdadera
//se ejecutara, si usamos un booleano y el ya es verdadero
//Este se ejecutara
//Si no queermos un verdadero podemos negarlo, es decir
//SI (! true) Si no es verdadero negacion de true == false 
//Es como decir si no es verdadero y si es verdad esto es true


const puntaje = 500;

//MAL

if(puntaje > 300){
    console.log("Buen puntaje");
}else if(puntaje > 450){ //Nunca se va a ejecutar 
    console.log("Exelente");//La primera condición se cumple
}                          //y rompe el flujo del IF


//Bien

if(puntaje > 450){
    console.log("Exelente");
}else if(puntaje > 300){
    console.log("Buen puntaje")
}

//Lo mejor es ir descartando las condiciones 
//Para que se ejecuten correctamente


//Tambien es buena practica para este tema
//Agregarlos dentro de una función pero con diferentes IF

function revisarPuntaje(){
    if(puntaje >400){
        console.log("Exelente");
        return; //Corta la ejecución de la función
    }

    if(puntaje > 300){
        console.log("Buen puntaje");
        return; //Corta la ejecución de la función
    }
}
 */