const formulario = document.querySelector('#formulario');
const resultados = document.querySelector('#resultado');
const busqueda = document.querySelector('#busqueda');

formulario.addEventListener('submit', e =>{
    e.preventDefault();

    if(busqueda.value == ""){
        mostrarMensaje("Agregue un termino de búsqueda");
        return;
    }
    consultarAPI();
});

function consultarAPI(){

    const url = `https://jobs.github.com/positions.json?search=${busqueda.value}`;
    const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    axios.get(proxy)
    .then(rs =>{
        mostarResultados((JSON.parse(rs.data.contents)))
    })
    .catch(rs =>{
        mostrarMensaje(rs);
    })
}

function limpiarResultados(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

function mostarResultados(datos){  
    limpiarResultados()
    
    resultados.classList.add('grid');

    if(datos.length > 0){
        datos.forEach(dato =>{
            const { title, company, type, url} = dato;
    
            const div = document.createElement('div');
            div.innerHTML= 
            `
            <div class="shadow bg-white p-6 rounded">
            <h2 class="text-2xl font-light mb-4">${title}</h2>
            <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
            <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
            <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>
            `
            resultados.appendChild(div);
        })
    }else{
        mostrarMensaje("No hay resultados, intenta usar otro termino de búsqueda");
    }
}

function agregarJobs(datos){
    console.log(datos)
}

function mostrarMensaje(mensaje){
    
    if(!document.querySelector('.error')){
        const div = document.createElement('div');
        div.classList.add('bg-red-400', 'border-red-700', 'border-2', 'text-center', 'mx-auto', 'rounded', 'mt-5', 'error');
        div.textContent = mensaje;

        formulario.appendChild(div);
    
        setTimeout(()=>{
            div.remove();
        }, 2000);
    }
}