// DELCARACIÓN DE VARIABLES
//var (Version anterior) 
//let (Nueva version) 
//const (Nueva version)


//VAR (ANTICUADA)
 var name = "Husney";
 //Permite reescribir la variable
 //Permite re declarar la variable

//LET (ACTUAL)
let nombre = "Husney";
//Permite reescribir la variable
//No permite re declarar la variable

//CONST (ACTUAL PARA CONSTANTES) 
const pi = 3.1415;

//Metodos de Texto

//concat() concatenación
//toUpperCase() Mayusculas
//toLowerCase() Minusculas
//indexOf() Posicion
//subString() Recortar de un texto (inicio "desde") (inicio , fin)
//slice() igual que subString pero permite usar negativos para iniciar dese la derecha
//split() transformación de texto a array por medio del punto de ruptura especificado
//replace() cambia el texto (valor a reemplazar, reemplazo)
//includes() regresa true si el valor si existe y false si no existe
//repeat(cantidad) repite el valor la cantidad de veces establecida

//let tecnologia = "JavaScript";
//console.log(tecnologia.repeat(5));



//Metodos de números
//Math.PI regresa el número PI
//Math.round(número) Redondea un número
//Math.ceil(núero) Redondea el número hacia arriba si su decimal mayor a 0 ejm = 4.1
//Math.floor(número) Redondea un número hacia abajo sin importar si su decimal es 4.9
//Math.sqrt(número) Regresa la raiz cuadrada de un número
//Math.abs(número) Regersa el número en su forma absoluta (Positiva)
//Math.pow(número, potencia) regresa un número elevado a una potencia
//Math.min(númeroS) Regresa el número menor de una serie de números
//Math.max(númeroS) Regresa el número mayor de una serie de números
//Math.random() Genera un número aleatorio

    let numero;

    numero = Math.PI;

    numero = Math.round(2.5);

    numero = Math.ceil(2.2);

    numero = Math.floor(4.8);

    numero = Math.sqrt(225);

    numero = Math.pow(2, 5);

    numero = Math.min(4,2,6,7,4,7,200);

    numero = Math.max(1,2,3,4,5,6,7,8,9,1000);

    numero = Math.random();



console.log(Math.random());

