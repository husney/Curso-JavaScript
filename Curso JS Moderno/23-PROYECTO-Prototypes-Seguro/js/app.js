 //#region variables
const cotizacion = document.querySelector('#cotizar-seguro');
const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const tipoBasico = document.getElementsByName('basico');
//const tipoCompleto = document.getElementsByName('completo');
const formulario = document.querySelector('#cotizar-seguro');

const datos = {
    marca : null,
    year : null,
    tipo : null
}

//#region Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
    /*
        1 Americano = 1.15
        2 Asiatico = 1.05
        3 Europeo = 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case "1" :
            cantidad = base * 1.15;
            break;
        case "2" :
            cantidad = base * 1.05;
            break;
        case "3" :
            cantidad = base * 1.35;
            break;
    }

    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;



    /**
     *  Si el seguro es basico + 30%
     *  Si es completo 50% más
     */

    if(this.tipo == "basico"){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI( ) { }

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(), min = max - 20;

    for(let i = max; i >= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

UI.prototype.alertas = (mensaje, tipo) => {
    const div = document.createElement('div');
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    if(tipo == "success"){
        div.classList.add('correcto');
    }else{
        div.classList.add('error');
    }

    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () =>{
        div.remove();
    }, 3000);

};

UI.prototype.mostrarResultados = (seguro, total) =>{

    let {marca, year, tipo} = seguro;

    switch(marca){
        case "1":
            marca = "Americano";
            break;

        case "2":
            marca = "Asiatico";
            break;

        case "3":
            marca = "Europeo";
            break;
    }

    const resultadoDiv = document.querySelector('#resultado');

    if(resultadoDiv.childElementCount > 0){
        while(resultadoDiv.firstChild){
            resultadoDiv.removeChild(resultadoDiv.firstChild);
        }
    }



    const datos = document.createElement('div');
    datos.classList.add('mt-10');
    datos.innerHTML = `
        <p class="header">Resumen</p>
        <p>Maca: ${marca}</p>
        <p>Año: ${year}</p>
        <p>Tipo: <span class="capitalize">${tipo}</span></p>
        <p class="font-bold"><b>Total:</b> ${total}</p>
    `;

    const spinner = document.querySelector('#cargando');
    spinner.style.display = "block";


    setTimeout( () =>{
        spinner.style.display = "none";
        resultadoDiv.appendChild(datos);
        setTimeout( () =>{
            datos.remove();
        }, 3000);
    }, 3000);

};

const ui = new UI();


//#endregion

//#endregion

//#region Eventos

document.addEventListener('DOMContentLoaded', () =>{
    ui.llenarOpciones(); //Agrega los años al select

});

formulario.addEventListener('submit', cotizarSeguro);




// agregarAños();

// marca.addEventListener('change', e =>{
//     //datos.marca = e.target.selected;
// });



////#endregion


//#region funciones

function cotizarSeguro(e){
    e.preventDefault();

    datos.marca = (selectMarca.value !== "") ? selectMarca.value : null;

    datos.year = (selectYear.value !== "") ? selectYear.value : null;

    datos.tipo = document.querySelector('input[name="tipo"]:checked').value;

    const {marca, year, tipo} = datos;

    if(marca && year && tipo){
        ui.alertas('Cotizando...', 'success');
    }else{
        ui.alertas('Todos los campos son obligatorios', 'error');
        return;
    }

    // const resutlados = document.querySelector('#resultado div');
    // if(resutlados){
    //     resutlados.remove();
    // }

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    ui.mostrarResultados(seguro, total);
}


// function agregarAños(){
//     const yearActual = new Date().getFullYear();

//     for(let i = yearActual; i >= yearActual - 10 ; i--){
//         const option = document.createElement('option');
//         option.value = i;
//         option.textContent = i;
//         year.appendChild(option);
//     }
// }

//#endregion

