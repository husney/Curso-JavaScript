const objeto = {
    nombre : 'Laura',
    apellido : 'Sanchez',
    edad: 23
}

for(dato in objeto){
    console.log(objeto[dato]);
}

for(let [llave, valor] of Object.entries(objeto)){
    console.log(valor);
    console.log(llave);    
}