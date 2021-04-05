(function(){

    let DB;

    const formulario = document.querySelector('#formulario');
    const btnAgregar = formulario.querySelector('input[type="submit"]');    
    const txtNombre = document.querySelector('#nombre');
    const txtEmail = document.querySelector('#email');
    const txtTelefono = document.querySelector('#telefono');
    const txtEmpresa = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', ()=>{

        conectarDB();

        const parametrosURL = new URLSearchParams(window.location.search);
        
        const idCliente = parametrosURL.get('id');
        
        if(idCliente){
            setTimeout( ()=>{
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function obtenerCliente(id){
        const transaction = DB.transaction('clientes', 'readwrite');
        const objectStore = transaction.objectStore('clientes');
        
        const cliente = objectStore.openCursor();

        cliente.onsuccess = (e)=>{
            const cursor = e.target.result;

            if(cursor){

                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }

                cursor.continue();
            }
        }
    }

    const clienteUpdate = {
        nombre : '',
        email : '',
        telefono : '',
        empresa : '',
        id: ''
    }

    function llenarFormulario(cliente){
        const {id, nombre, email, telefono, empresa} = cliente;

        txtNombre.value = nombre;
        txtEmail.value = email;
        txtTelefono.value = telefono; 
        txtEmpresa.value = empresa;

        clienteUpdate.id = Number(id);
    }

    function conectarDB(){
        const crmDb = window.indexedDB.open('CRM', 1);

        crmDb.onsuccess = ()=>{
            DB = crmDb.result;
        }
    }

    btnAgregar.addEventListener('click', e =>{
        e.preventDefault();

        if(txtNombre.value === '' || txtEmail.value === '' || txtTelefono.value === '' || txtEmpresa.value === ''){
            imprimirAlerta("Todos los campos son necesarios", "error");
            return;
        }

        clienteUpdate.nombre = txtNombre.value;
        clienteUpdate.email = txtEmail.value;
        clienteUpdate.telefono = txtTelefono.value;
        clienteUpdate.empresa = txtEmpresa.value;

        const transaction = DB.transaction('clientes', 'readwrite');
        const objectStore = transaction.objectStore('clientes');

        objectStore.put(clienteUpdate);

        transaction.oncomplete = ()=>{
            imprimirAlerta("Modificado correctamente", "success");
            limpiarCliente();
            setTimeout(()=>{
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = ()=>{
            imprimirAlerta("Error al modificar el cliente", "error");
        }

        

        
    });

    function limpiarCliente(){
        clienteUpdate.id = '';
        clienteUpdate.nombre = '';
        clienteUpdate.email = '';
        clienteUpdate.telefono = '';
        clienteUpdate.empresa = '';
    }

})();