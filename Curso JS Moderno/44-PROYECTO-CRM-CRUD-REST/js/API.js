const URL = 'http://localhost:4000/clientes';
import{ mostrarMensaje } from './funciones.js';

export async function crearCliente(cliente){
    
    try{
        await fetch(URL, {
            method : 'POST',
            body : JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        window.location.href = 'index.html';

    }catch(ex){
        mostrarMensaje(ex);
    }
}

export async function obtenerClientes(){
    try{
        const respuesta = await fetch(URL);
        const datos = await respuesta.json();
        return datos;
    }catch(ex){
        console.log(ex);
    }
}

export async function eliminarCliente(idCliente){
    try{

        const respuesta = await fetch(`${URL}/${idCliente}`,{
            method: 'DELETE'
        });

        window.location.reload();

    }catch(ex){
        console.log(ex);
    }
}

export async function buscarCliente(id){
    try{

        const respuesta = await fetch(`${URL}/${id}`);
        const datos = await respuesta.json();
        return datos;
    }catch(ex){
        console.log(ex);
    }
}

export async function actualizarCliente(cliente){

    try{
        await fetch(`${URL}/${cliente.id}`, {
            method : 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(ex){
        console.log(ex);
    }
}