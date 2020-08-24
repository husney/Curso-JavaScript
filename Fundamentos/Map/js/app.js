
const carrito = [
    {id: 1, producto: "libro"},
    {id: 2, producto: "Camisa"},
    {id: 3, producto: "Reloj"},
    {id: 4, producto: "Zapatos"}
];

const ordenes = [
    {
        ordenId : 1,
        total: 500,
        cliente: {
            nombre: "Santi"
        }
    
    },
    {
        ordenId: 2,
        total: 700,
        cliente: {
            nombre: "Valentina Marin"
        }
    },
    {
        ordenId: 3,
        total: 1000,
        cliente:{
            nombre: "Alejandra Duque"
        }
    }
];

let ordenTotal = ordenes.map(function (orden){
    return{
        idOrden: orden.ordenId,
        total: orden.total
    }
});

//console.log(ordenTotal);

let ordenesCliente = ordenes.map( orden =>{
    return {
        idOrden: orden.ordenId,
        cliente: orden.cliente.nombre
    }
});

//console.log(ordenesCliente);

let nuevasOrdenes = ordenes.map( orden =>{
    return {
        ordenId: orden.ordenId,
        ordenCliente: orden.cliente.nombre
    }
});


//console.log(nuevasOrdenes);


let ordenesIdTotal = ordenes.map(function(orden){
    return{
        ordenId: orden.ordenId,
        total: orden.total
    }
});

//console.log("-----------------");
//console.log(ordenesIdTotal);


const numeros = [1,2,3,4,5,6,7,8];


let nuevoArray = carrito.map(function(carrito){
    return carrito.producto;
});



let array2 = numeros.map(function(numero){
    return numero;
});

//console.log(array2);


/* for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].id + " " + carrito[i].producto);
} */




//For in funcionan para recorrer objetos
/*

    for(propiedad in objeto){
        objeto[propiedad]
    }
  
*/
const automovil = {
    modelo: "B10",
    motor: "10.5",
    year: 2020,
    marca: "BMW"
}

for(let propiedad in automovil){
    console.log(propiedad + " : " + automovil[propiedad]);

}


