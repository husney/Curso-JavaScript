const meses = ['January', 'February', 'March', 'April', 'May'];

console.table(meses);


meses.forEach( x => {
    console.log(x);
})


console.log(meses.length);
console.log("---");

for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}