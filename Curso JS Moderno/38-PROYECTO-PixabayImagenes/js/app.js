const formulario = document.querySelector('#formulario');
const txtBusqueda = document.querySelector('#termino');
const resultados = document.querySelector('#resultado');
const paginacion = document.querySelector('#paginacion');

const registrosPorPagina = 10;
let cantidadPaginas;
let iterador;
let paginaActual = 1;

window.onload = () =>{
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){    
    e.preventDefault();

    if(txtBusqueda.value == ""){
        mostrarAlerta('Por favor agregue un termino de busqueda');
        return;
    }else{
        buscarImagenes();
    }
}

function buscarImagenes(){

    const key = '21544488-70997e28d27af02e4fbf58eae';
    const url = `https://pixabay.com/api/?key=${key}&q=${txtBusqueda.value}&image_type=photo&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    fetch(url)
    .then(rs => rs.json())
    .then(rs => {
        cantidadPaginas = calcularPaginas(rs.totalHits);
        agregarImagen(rs)
    })
    .catch(ex => console.log(ex))
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total) / registrosPorPagina);
}

function *paginador(total){
    for(let i = 1; i <= total; i++){
        yield i;
    }
}

function agregarImagen(data){

    limpiarImagenes();
    data.hits.forEach(imagen =>{
        
        const { largeImageURL, likes, views } = imagen;

        const div = document.createElement('div');

        const img = document.createElement('img');
        img.style.objectFit = "cover";
        img.classList.add('mt-3');
        img.src = largeImageURL;

        const p = document.createElement('p');
        p.classList.add('text-center', 'w-100', 'bg-white', 'p-2');
        p.innerHTML = `
            <p><strong>${likes}</strong> Me gusta</p>
            <p><strong>${views}</strong> Vistas</p>
            <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                class="w-full bg-blue-800 hover:bg-blue-500 p-1 rounded block"
            >Ver imagen</a>
        `;
    
        div.appendChild(img);
        div.appendChild(p);
        resultados.appendChild(div);        
    });

    limpiarPaginador();
    imprimirPaginador();
}

function imprimirPaginador(){
    iterador = paginador(cantidadPaginas);

    while(true){
        const { value, done} = iterador.next();

        if(done) return;
        
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-10', 'rounded');

        boton.onclick = ()=>{
            paginaActual = value;
            buscarImagenes();
        }

        paginacion.appendChild(boton);
    }
}

function limpiarImagenes(){
    while(resultados.firstChild){
        resultados.firstChild.remove();
    }
}

function limpiarPaginador(){
    while(paginacion.firstChild){
        paginacion.firstChild.remove();
    }
}

function mostrarAlerta(mensaje){    
    
    if(document.querySelector('.mensaje-error') === null){
        const alerta = document.createElement('p');
    
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'mensaje-error');

        alerta.innerHTML =`<strong class="font-bold">Error</strong>
            <span class="block">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout(function(){
            alerta.remove();
        }, 3000);   
    }
}