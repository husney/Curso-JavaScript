/* 
const meses = ["January", "February", "March", "May"];

console.table(meses);

console.log("________ For _________");

for(let i = 0; i <meses.length; i++){
    console.log(meses[i]);
}

console.log("________ For of _______");
for(mes of meses){
    console.log(mes);
}

//For In es para objetos si se usa en un array
//Solo imprime el indice


console.log("________IIFE___FOR______");
(function(){
    for(let i = 0; i < meses.length; i++ ){
        console.log(meses[i]);
    }
}());

console.log("________For each arrow_________");

meses.forEach( mes =>{
    console.log(mes);
});


console.log("________For_each function______");

meses.forEach(function(mes){
    console.log(mes);
});

console.log("________While______");

let itW = 0;

while(itW < meses.length){
    console.log(meses[itW]);
    itW++;
}

console.log("________Do While______");

let itDW = 0;
do{
    console.log(meses[itDW]);
    itDW++;
}while(itDW < meses.length); */