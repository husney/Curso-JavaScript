
import {  datosCita, nuevaCita } from '../Clases/Funciones.js'

import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from './Selectores.js';

import { Citas } from './Citas.js'
import { UI } from './UI.js';

export let administrarCitas;
export let ui;

export class App {

    constructor(){
        this.eventListeners();
        administrarCitas = new Citas();
        ui = new UI(administrarCitas);
    }
    
    eventListeners() {

        formulario.addEventListener('submit', nuevaCita);

        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
    }
}