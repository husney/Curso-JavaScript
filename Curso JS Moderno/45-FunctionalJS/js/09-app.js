const suma = (a, b, c) => a + b + c;

const parcial = a => b => c => suma(a, b, c);

// const pr1 = parcial(5);
// const pr2 = pr1(5);
// const pr3 = pr2(10);
//console.log(pr3);

const resultado = parcial(5)(4)(3);
console.log(resultado);
