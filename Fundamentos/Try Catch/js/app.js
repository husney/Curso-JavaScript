
const cargar =function(){
    console.log(`Descargando...`);

    setTimeout(function(){
        console.log(`Completado!!`);
    }, 4000);
};

try{
    
    algo(); //(Error)
    
}catch(error){

    console.log("Error: " + error);
}finally{
    console.log("Esto se ejecutara siempre siempre");
}








