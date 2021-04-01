let DB;
document.addEventListener('DOMContentLoaded', () =>{
    crmDb();

    setTimeout( () =>{
        crearCliente();
    }, 2000);
});

function crmDb(){
    const crmDb = window.indexedDB.open("CRM", 1);

    //Si hay un error
    crmDb.onerror = function() {
        console.log("Hubo un error al crear la DB");
    }

    //Si se creo bien
    crmDb.onsuccess = function(){
        console.log("Base de datos creada"); 
        DB = crmDb.result;
    }

    crmDb.onupgradeneeded = function(e){
        
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre', 'nombre', {
            unique: false
        });
        
        objectStore.createIndex('email', 'email', {
            unique: true
        });

        objectStore.createIndex('telefono', 'telefono', {
            unique: false
        });
        
        console.log("Columnas creadas");
    }

}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');//readonly

    transaction.oncomplete = function(){
        console.log("transacción completada");
    }

    transaction.onerror = function(){
        console.log("Error en la transacción");
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 123123,
        nombre: "prueba",
        email: "c@c.com"
    }


    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}