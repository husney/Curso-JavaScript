function descargarClientes(){
    return new Promise((resolve, reject)=>{
        const error = false;

        setTimeout(() =>{
            if(!error){
                resolve("El listado de clientes se  ha descargado correctamente");
            }else{
                reject("Error al descargar el listado de clientes");
            }
        },3000);
    });
}

const ejecutar = async ()=>{

    try{
        console.log("Inicio de función");
        const resultado = await descargarClientes();
        console.log(resultado);
    }catch(error){  
        console.log(error);
    }
}

ejecutar();