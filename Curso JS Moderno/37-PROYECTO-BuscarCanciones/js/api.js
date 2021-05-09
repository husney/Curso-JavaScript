import * as UI from './interfaz.js';
import {mostrarMensaje} from './app.js';

export class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
        this.consultarApi();
    }

    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
        .then(rs => rs.json())
        .then(rs => {
            if(rs.lyrics){
                UI.divResultado.textContent = rs.lyrics;
                UI.headingResultado.textContent = `${this.cancion} de ${this.artista}`;
            }else{
                mostrarMensaje('La cancion no existe prueba con otras busqueda');
            }
        })
        .catch(ex => console.log(ex))
    }
}