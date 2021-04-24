// const paises = [];

// const nuevoPais = pais => new Promise(resolve =>{
//     setTimeout( ()=>{
//         paises.push(pais);
//         resolve(`Agregando: ${pais}`);
//     }, 3000)
// });


// nuevoPais('Alemania')
//     .then(respuesta =>{
//         console.log(respuesta);
//         return nuevoPais('Francia');
//     }).then(respuesta =>{
//         console.log(respuesta);
//         return nuevoPais('Canada');
//     }).then(respuesta =>{
//         console.log(respuesta);
//     })

// let x = 10;

// console.log('1 Iniciando proceso...');

// setTimeout(()=>{
//     console.log('2 Inicio de operación...');
//     x = x * 2 + x;
// },2000);

// console.log('3 el resultado es: ' + x);


// console.log('---------------');

let y = 10;

const promesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        y = y * 10;
        console.log('Inicio de operación');
        resolve(y);
    }, 2000);
});
  
console.log('Inicio');

promesa.then( respuesta =>{
    console.log('El resultado es: ' + respuesta);
})