const paises = ['Estados unidos', 'Canda', 'Suiza', 'Colombia'];

function listarPaises(){
    console.log("------");
    console.table(paises);
}

function agregarPais(pais, callBack){
    paises.push(pais);
    callBack();
}

listarPaises();

agregarPais('Alemania', listarPaises);