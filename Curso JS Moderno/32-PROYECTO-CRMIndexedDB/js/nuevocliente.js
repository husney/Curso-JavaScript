(function(){
    let DB;

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () =>{
        conectarDB();
    });

    function conectarDB(){
        const crmDB = window.indexedDB.open('CRM', 1);

        crmDB.onerror = function(){
            console.error("Hubo un error al abrir la conexión");
        }

        crmDB.onsuccess = function(){
            DB = crmDB.result;
        }
    }


    formulario.addEventListener('submit', e =>{
        validarCliente(e);
    });

    function validarCliente(e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const cliente = {
            id : Date.now(),
            nombre,
            email,
            telefono,
            empresa
        }
        crearCliente(cliente);
    }

    function crearCliente(cliente){


        const transaction = DB.transaction('clientes', 'readwrite');

        const objectStore = transaction.objectStore('clientes');
        

        objectStore.add(cliente);

        transaction.onerror = () =>{
            imprimirAlerta("No se ha podido guardar el cliente", 'error');
        }

        transaction.oncomplete = ()=>{
            imprimirAlerta('El cliente se ha guardado', 'success');
            setTimeout(()=>{
                window.location.href = 'index.html';
            }, 3000);
        }

        
    }

    function imprimirAlerta(mensaje, tipo){
        const alerta = document.querySelector('.alerta');

        if(!alerta){
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto' , 'mt-6', 'text-center', 'border', 'alerta');

            if(tipo === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            }else{
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            divMensaje.textContent = mensaje;

            formulario.appendChild(divMensaje);

            setTimeout(()=>{
                divMensaje.remove();
            }, 3000);
        }

    }


})();