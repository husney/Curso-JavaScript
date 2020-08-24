/*

iterador (Se encuentra fuera)
let i = 0;

while(condición){
    Haga...
    aumento de iterador (Se encuentra dentro)
}


*/

let i1 = 0;

while(i1 <= 10){
    console.log(i1);
    i1++;
}



console.log("-------------");
let i2 = 10;
while(i2 >0){
    console.log(i2);
    i2--;
}


console.log("-------------");

let i3 = 0;

while(i3 <= 10){
    
    if(i3 == 5){
        break;
    }

    console.log(i3);

    i3++;
}

const ropa = ["Camisa", "Pantalon", "Zapatos", "Reloj", "Manilla"];

let i = 0;

while(i < ropa.length){
    console.log(ropa[i]);
    i++;
}

/*
    iterador (Va afuera)
    let i = 0;

    do{
        Haga... ALMENOS 1 VEZ
        i++; Aumento (Va adentro)
    }while(Condición);

    
*/

i = 0;

do{
    console.log(ropa[i]);
    i++;
}while(i < ropa.length);


let iDw = 0;

do{
    console.log(iDw);
    iDw++;
}while(iDw <= 10);

