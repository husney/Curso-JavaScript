const numeros = [1,2,3,4,5,[6,7,8,9,10]];
console.log(numeros);
console.log("-----");
console.table(numeros);
console.log("-----");
console.log(numeros[3]);
console.log(numeros[5][4]);

numeros.forEach(x => {
    console.log(x);
});


