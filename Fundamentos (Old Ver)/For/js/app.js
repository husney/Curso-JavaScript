/*

                  hasta | mientras repite
    for(inicio;    condición de final;          aumento/decremento){
        Haga...
    }

    for( let i = 0;  i <= 10; i++){
        Haga...
    }

    for(let i = 10; i >0; i--){
        Haga
    }

*/

const tiempo = function(val){
    setTimeout(function(){
        console.log(val)
    },3000);
}

for(let i = 1; i <= 10; i++){
    
    if(i == 5){
        console.log("Voy en el 5");
    }else{
        console.log(i);
    }
}

console.log("-------------------------");
console.log("For");
console.log("-------------------------");

const ropa = ["Camisa", "Pantalon", "Pantaloneta", "Zapatos", "Reloj", "Manilla"];

for(let i = 0; i < ropa.length; i++){
    console.log(ropa[i]);
}

console.log("-------------------------");
console.log("While");
console.log("-------------------------");

let itDo = 0;

while(itDo <= ropa.length){
    console.log(ropa[itDo]);
    itDo++;
}

console.log("-------------------------");
console.log("Do - While");
console.log("-------------------------");

let itDoW = 0;

do{
    console.log(ropa[itDoW]);
    itDoW++;
}while(itDoW < ropa.length);

console.log("-------------------------");
console.log("For Each");
console.log("-------------------------");


ropa.forEach( elemento =>{
    console.log(elemento);
});