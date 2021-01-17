for (let i = 0; i <= 100; i++){
    console.log(`Número: ${i}`);
}


console.log("______");

for(let i = 50; i >= 0; i--){
    console.log("Número " + i);
}

const carrito = [
    "Celular",
    "Gabinete",
    "Monitor",
    "Teclado",
    "Mouse",
    "Bafles",
    "RAM",
    "SSD"
];

console.log("----");

for(articulo in carrito){
    console.log(carrito[articulo]);
}

for(let i = 0; i <= 50; i++){
    //console.log( i % 2 == 0 ? `Número par ${i}`:'');
    if(i % 2 == 0){
        console.log(`Número par ${i}`);
    }
}

for(let i = 0; i <= 50; i += 3){
    console.log(i);
}

console.log("--------");

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}
 
