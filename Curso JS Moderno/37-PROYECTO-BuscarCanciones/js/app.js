import * as UI from './interfaz.js';
import {API} from './api.js';

UI.fmrBusqueda.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    const artista = UI.txtArtista.value;
    const cancion = UI.txtCancion.value;
    
    if(artista == '' || cancion == ''){
        mostrarMensaje("Error los datos son necearios");
    }else{
        const busqueda = new API(artista, cancion);
    }
}

export function mostrarMensaje(mensaje){
    UI.divMensaje.classList.add('error');
    UI.divMensaje.textContent = mensaje
    setTimeout(() =>{
        UI.divMensaje.textContent = '';
        UI.divMensaje.classList.remove('error');
    }, 2000);
}