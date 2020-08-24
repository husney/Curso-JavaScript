
const ropa = ["Camisa", "Pantalon", "Zapatos", "Reloj", "Manilla", "Medias", "Pantaloneta"];

ropa.forEach( (elemento) =>{
    console.log(elemento);
});

ropa.forEach(function(valor){
    console.log(valor);
});



/*

    array.forEach(function(valor){
        console.log(valor);
    });
    array.forEach(function(valor, index){
        console.log(index + ": " valor);
    });

    --------------------------------

    array.forEach( elemento => {
        console.log(elemento);
    });

    array.forEach( (index, elemento) => {
        console.log(index + ": "+ elemento);
    });



*/