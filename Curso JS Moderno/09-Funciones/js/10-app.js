const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
};

function sumar(){
    return 1 + 1;
}

const arrowFunction = () =>  "Hola";

console.log(arrowFunction());


const suma = (n1, n2) => n1 + n2;

console.log(suma(5,3));

const validar = (n1, n2) => {
    if (n1 > n2){
        return n1;
    }
};

console.log(validar(5,3));