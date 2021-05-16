function descargarClientes(){
    return new Promise((resolve, reject) =>{
        
        const error = false;

        setTimeout(()=>{
            if(error){
                resolve('Se han descargado los clientes correctamente');
            }else{
                reject("Error en la conexión");
            }
        },3000);

    });
}

//Async Await

async function ejecutar(){

    try{
        const respuesta = await descargarClientes();
        console.log(respuesta);
    }catch(error){
        console.log(error);
    }
}

ejecutar();