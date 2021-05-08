const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
const txtCiudad = document.querySelector('#ciudad');
const lstPais = document.querySelector('#pais');
const resultados = document.querySelector('#resultado');

window.onload = function(){
    formulario.addEventListener('submit', buscarClima);
}

function buscarClima(e){   
    e.preventDefault(); 
    
    if(txtCiudad.value.length > 0 && lstPais.value != ""){
        consultarApi();
    }else{
        mensaje("Los campos son requeridos");
        return;
    }
}

function consultarApi(){
    const ApiKey = 'cd8a1127668490d48bf6260bd6470036';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${txtCiudad.value},${lstPais.value}&appid=${ApiKey}`;
    
    spinner();
    fetch(url)
    .then(rs => rs.json())
    .then(rs =>{
        limpiarResultados();
        if(rs.cod == "404"){
            mensaje("Ciudad no encontrada");
        }else{
            mostrarClima(rs);
        }
    })
    .catch(ex => console.log(ex));
}

function spinner(){

    if(document.querySelector('.sk-cube-grid') == null){
        const divSpinner = document.createElement('div');
        divSpinner.classList.add('sk-cube-grid');
    
        divSpinner.innerHTML = `
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        `;
    
        resultados.appendChild(divSpinner);
    }else{
        document.querySelector('.sk-cube-grid').remove();
    }

    
}

function mostrarClima(clima){    
    const {  name, main: { temp, temp_max, temp_min } } = clima;

    const temperaturaC = kelvinToCc(temp);
    const temperatutraMax = kelvinToCc(temp_max);
    const temperaturaMin = kelvinToCc(temp_min);
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');

    const ciudad = document.createElement('p');
    ciudad.textContent = 'Clima de: ' + name + ' - ' + lstPais.value;
    ciudad.classList.add('font-bold', 'text-3xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${temperaturaC} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');
    

    const maxima = document.createElement('p');
    maxima.innerHTML = `Max: ${temperatutraMax} &#8451;`;
    maxima.classList.add('font-bold');

    const minima = document.createElement('p');
    minima.innerHTML = `Min: ${temperaturaMin} &#8451;`;
    minima.classList.add('font-bold');
  
    resultadoDiv.appendChild(ciudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(maxima);
    resultadoDiv.appendChild(minima);
    
    resultados.appendChild(resultadoDiv);
}

const kelvinToCc = grados => parseInt(grados - 273.15);

function limpiarResultados(){
    while(resultados.firstChild){
        resultados.firstChild.remove();
    }
}

function mensaje(mensaje){
    if(document.querySelector('.alerta') == null){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        }, 2000);
    }
}