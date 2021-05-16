function descargarClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes...");
        setTimeout(()=>{
            resolve("Se han descargado los clientes correctamente");
        },5000);
    })
}

function descargarPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando pedidos...");
        setTimeout(()=>{
            resolve("Se han descargado los pedidos correctamente");
        },3000);
    })
}

app();

async function app(){
    try{

        const respuesta = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    }catch(error){
        console.log(error);
    }
}