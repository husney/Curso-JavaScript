import { mostrarMensaje, validar } from './funciones.js';
import { crearCliente } from './API.js';

(function(){

    const formulario = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');
    
    
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            empresa: empresa.value
        }

        if(validar(cliente)){
            mostrarMensaje("Asigne todos los valores necesarios");
        }else{
            crearCliente(cliente);
        }
    }    
})();