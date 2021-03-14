// function *generador(){
//     yield 1;
//     yield 'juan';
//     yield true,
//     yield 1 + 1;
// }

// const datos = generador();

// console.log(datos.next().value);
// console.log(datos.next());
// console.log(datos.next());
// console.log(datos.next())

const productos = ['Monitor', 'GPU', 'Chasis', 'Mother board'];

function *generador(fuenteDatos){

    // for(dato of fuenteDatos){
    //     yield dato;
    // }

    for(let i = 0; i < fuenteDatos.length; i++){
        yield fuenteDatos[i];
    }

}

const valores = generador(productos);
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());