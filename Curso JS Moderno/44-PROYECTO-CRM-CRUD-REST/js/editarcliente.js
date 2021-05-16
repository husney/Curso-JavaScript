import { buscarCliente, actualizarCliente } from './API.js';
import { mostrarMensaje, validar } from './funciones.js';

(function(){

    const formulario = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', validarCliente);

    formulario.addEventListener('submit', validarFormulario);

    const parametrosURL = new URLSearchParams(window.location.search);
    let idCliente;

    async function validarCliente(){
        const id = parametrosURL.get('id');

        if(id){
            const datos = await buscarCliente(id);

            idCliente = datos.id;
            nombre.value = datos.nombre;
            email.value = datos.email;
            telefono.value = datos.telefono;
            empresa.value = datos.empresa;
        }
    }

    function validarFormulario(e){
        e.preventDefault();

        const cliente = {
            id : idCliente,
            nombre : nombre.value,
            email : email.value,
            telefono : telefono.value,
            empresa : empresa.value
        }

        if(validar(cliente)){
            mostrarMensaje("Asigne todos los campos");
            return;
        }

        actualizarCliente(cliente);
    }

})();