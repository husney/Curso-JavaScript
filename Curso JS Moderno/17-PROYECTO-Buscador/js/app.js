//#region Variables
const resultados = document.querySelector('#resultado');
const years = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

let max = new Date().getFullYear();
let min = max - 10;

const datosBusqueda = {
    marca : null,
    year : null,
    precioMin : null,
    precioMax : null,
    puertas : null,
    transmision : null,
    color : null
}

//#endregion

//#region Funciones

//Muestra los automoviles
function mostrarAutos(){
    autos.forEach(auto =>{
        limpiarResutlados();
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
            Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmisión:  ${transmision}
        `;
        autoHtml.classList.add('autos');
        resultados.appendChild(autoHtml);
    })
}

//Llenar el select de las fechas

function agregarFechas(){

    const yearsSelect = [];

    autos.forEach(auto =>{

        const {year} = auto;

        if(!yearsSelect.includes(year)){
            yearsSelect.push(year);
        }
    });

    yearsSelect.sort();

    yearsSelect.forEach(year =>{
        
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;

        years.appendChild(option);
    });
}

function agregarYears(){

    // for(; min <= max; min++){
        
    //     const option = document.createElement('option');
    //     option.value = min;
    //     option.textContent = min;

    //     years.appendChild(option);
    // }

    for(let i = max; i >=  min; i--){
        
        const option = document.createElement('option');

        option.value = i;
        option.textContent = i;

        years.appendChild(option);
    }
}

//Filtra los datos de busqueda
function filtrarDatos(){
    const resultado = autos.filter(filtrarMarca).filter( flitrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    limpiarResutlados();
    if(resultado.length >0){
        resultado.forEach(auto =>{        
            const {marca, modelo, year, precio, puertas, color, transmision} = auto;
            const row = document.createElement('p');
            row.textContent = `
                Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmisión:  ${transmision}
            `;
            resultados.appendChild(row);
        });
    }else{
        const row = document.createElement('p');
        row.textContent = 'Lo sentimos, no hay autos que cumplan con los filtros establecidos...';
        row.style.background = "red";
        row.style.color = "white";
        resultados.appendChild(row);
    }
}

// Filtra los autos por la marca
function filtrarMarca(auto){
    const {marca}  = datosBusqueda;
    if(marca){
        return marca === auto.marca;
    }
    return auto;
    
}

// Filtra los autos por su año
function flitrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

// Filtra los autos por su precio minimo
function filtrarPrecioMin(auto){
    const {precioMin} = datosBusqueda;
    if(precioMin){
        return auto.precio >= precioMin ;
    }
    return auto;
}

// Filtra los autos por su precio maximo
function filtrarPrecioMax(auto){
    const {precioMax} = datosBusqueda;
    if(precioMax){
        return auto.precio <= precioMax;
    }
    return auto;
}

// Filtra los autos por su cantidad de puesrtas
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return puertas === auto.puertas;
    }
    return auto;
}

// Filtra los a utos por su transmision
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return transmision === auto.transmision;
    }
    return auto;
}

// Filtra los autos por su color
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return color === auto.color;
    }
    return auto;
}

// Limpiar el html de los resultados
function limpiarResutlados(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

//#endregion

//#region Eventos

document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();
    //agregarFechas();
    agregarYears();
});


marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarDatos();
});

years.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarDatos();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.precioMin = parseInt(e.target.value);
    filtrarDatos();
});

maximo.addEventListener('change', e =>{
    datosBusqueda.precioMax = parseInt(e.target.value);
    filtrarDatos();
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarDatos();
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarDatos();
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarDatos();
})

//#region 
