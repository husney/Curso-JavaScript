const lstTipoMoneda = document.querySelector('#moneda');
const lstTipoCriptoMoneda = document.querySelector('#criptomonedas');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = () => {
    agregarCriptoMonedas();
}

const busqueda = {
    moneda: '',
    criptomoneda: ''
}

lstTipoMoneda.addEventListener('change', e => {
    e.preventDefault();
    busqueda[e.target.name] = e.target.value;
});

lstTipoCriptoMoneda.addEventListener('click', e => {
    e.preventDefault();
    busqueda[e.target.name] = e.target.value;
})

formulario.addEventListener('submit', e => {
    e.preventDefault();

    limpiarResultado();
    if (busqueda.moneda == '' || busqueda.criptomoneda == '') {
        mostrarMensaje("Por favor seleccione el tipo de moneda");
        return;
    }
    const spinner = document.createElement('a');

    spinner.innerHTML = `
    <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
    </div>
    `;
    resultado.appendChild(spinner);
    obtenerInformacion();
});

function limpiarResultado() {
    while (resultado.firstChild) {
        resultado.firstChild.remove();
    }
}

async function obtenerInformacion() {

    const { moneda, criptomoneda } = busqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    // fetch(url)
    // .then(rs => rs.json())
    // .then(rs => {
    //     agregarResultados(rs.DISPLAY[criptomoneda][moneda]);
    // })
    // .catch(ex =>{
    //     console.log(ex);
    // });

    try {
        const rs = await fetch(url);
        const data = await rs.json();
        agregarResultados(data.DISPLAY[criptomoneda][moneda]);
    } catch (ex) {
        mostrarMensaje(ex);
    }
}

function agregarResultados(datos) {

    const div = document.createElement('div');
    div.classList.add('resultados');

    const { PRICE, LASTUPDATE, HIGH24HOUR, LOW24HOUR, CHANGE24HOUR } = datos;

    div.innerHTML = `
        <p><strong>Precio: </strong> ${PRICE} </p>
        <p><strong>Ultima actualización: </strong> ${LASTUPDATE}</p>
        <p><strong>Más alto 24 horas: </strong> ${HIGH24HOUR}</p>
        <p><strong>Cambio en las 24 horas: </strong> ${CHANGE24HOUR}</p>
        <p><strong>Más bajo 24 horas: </strong> ${LOW24HOUR}</p>
    `;

    limpiarResultado();
    resultado.appendChild(div);

}

function obtenerCriptomonedas(criptomonedas) {
    return new Promise((resolve) => {
        resolve(criptomonedas);
    });
}

async function agregarCriptoMonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=COP`;

    // fetch(url)
    // .then(rs => rs.json())
    // .then(cripto => obtenerCriptomonedas(cripto))
    // .then(rs =>{
    //     rs.Data.forEach(criptoMoneda =>{

    //         const { Name, FullName } = criptoMoneda.CoinInfo;

    //         const option = document.createElement('option');
    //         option.value = Name;
    //         option.textContent = FullName;

    //         lstTipoCriptoMoneda.appendChild(option);

    //     }); 
    // })
    // .catch(ex =>{
    //     console.log(ex);
    // })

    try {
        const rs = await fetch(url);
        const datos = await rs.json();
        const criptomonedas = await obtenerCriptomonedas(datos)
        criptomonedas.Data.forEach(criptoMoneda => {

            const { Name, FullName } = criptoMoneda.CoinInfo;

            const option = document.createElement('option');
            option.value = Name;
            option.textContent = FullName;

            lstTipoCriptoMoneda.appendChild(option);

        });


    } catch (ex) {
        console.log(ex);
    }

}

function mostrarMensaje(mensaje) {
    if (!document.querySelector('.error')) {
        const div = document.createElement('div');
        div.textContent = mensaje;
        div.classList.add('error');

        resultado.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

}