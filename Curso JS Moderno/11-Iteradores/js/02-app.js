// for (let i = 0 ; i <= 10; i++){
//     if(i === 5){
//         continue;
//     }else{
//         console.log(i); 
//     }
// }


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


for(let i = 0; i < carrito.length; i++){
    if(carrito[i] == "Bafles"){
        continue;
    }
    console.log(carrito[i]);
}

console.log("---");

for(let i = 0; i < carrito.length; i++){
    if(carrito[i] === "Bafles"){
        break;
    }
    console.log(carrito[i]);
}