(function () {
  let DB;
  const listaClientes = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", function () {
    crearDB();

    if (window.indexedDB.open("CRM", 1)) {
      listarClientes();
    }

    listaClientes.addEventListener("click", eliminarCliente);
  });

  //Crea la base de datos
  function crearDB() {
    const openDB = window.indexedDB.open("CRM", 1);

    openDB.onerror = function () {
      console.log("Ha ocurrido un error al crear la Base de datos");
    };

    openDB.onsuccess = function () {
      DB = openDB.result;
    };

    openDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("clientes", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });
    };
  }

  function listarClientes() {
    limpiarLista();

    const db = window.indexedDB.open("CRM", 1);

    db.onerror = () => {
      console.log("No se ha podido abrir la conexión");
    };

    db.onsuccess = () => {
      DB = db.result;
      const objectStore = DB.transaction(["clientes"], "readonly").objectStore(
        "clientes");

      objectStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;

        if (cursor) {
          const { id, nombre, email, telefono, empresa } = cursor.value;

          listaClientes.innerHTML += `
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>
                                <p class="text-sm leading-10 text-gray-700">${email}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespeace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;

          // const tr = document.createElement('tr');

          // const nombreColumn = document.createElement('td');
          // nombreColumn.textContent = nombre;

          // const telefonoColumn = document.createElement('td');
          // telefonoColumn.textContent = telefono;

          // const empresaColumn = document.createElement('td');
          // empresaColumn.textContent = empresa;

          // tr.appendChild(nombreColumn);
          // tr.appendChild(telefonoColumn);
          // tr.appendChild(empresaColumn);

          // listaClientes.appendChild(tr);

          cursor.continue();
        }
      };
    };
  }

  function limpiarLista() {
    while (listaClientes.firstChild) {
      listaClientes.firstChild.remove();
    }
  }

  function eliminarCliente(e) {
    if (e.target.classList.contains("eliminar")) {
        //const id = Number(e.target.getAttribute('data-cliente'));
        const id = Number(e.target.dataset.cliente);
        
        if(confirm('Quieres elminar este cliente ?')){
            const transaction = DB.transaction('clientes', 'readwrite');
            const objectStore = transaction.objectStore('clientes');

            objectStore.delete(id);

            transaction.oncomplete = ()=>{
                e.target.parentElement.parentElement.remove();
            }

            transaction.onerror = ()=>{
                console.log("Hubo un error al eliminar el cliente");
            }

        }
    }
  }
})();
