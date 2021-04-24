const paises = [];

function agregarPais(pais, callBack){
    console.clear();
    paises.push(pais);
    callBack();
}

function mostrarPaises(){
    paises.forEach(pais => {
        console.log(pais);
    });
}

function callBackHell(){
    setTimeout(() =>{
        agregarPais('Canada', mostrarPaises);
        setTimeout( () =>{
            agregarPais('Suiza', mostrarPaises);
            setTimeout(() =>{
                agregarPais('Colombia', mostrarPaises);
            }, 2000);
        }, 2000);
    }, 2000);

    

    
}

callBackHell();