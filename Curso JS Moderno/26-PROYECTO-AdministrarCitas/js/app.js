//#region Elementos HTML

const formulario = document.querySelector('#nueva-cita');
const txtNombreMascota = document.querySelector('#mascota');
const txtPropietario = document.querySelector('#propietario');
const txtTelefono = document.querySelector('#telefono');
const inputFecha = document.querySelector('#fecha');
const inputHora = document.querySelector('#hora');
const txtSintomas = document.querySelector('#sintomas');
const listaCitas = document.querySelector('#citas');

let editando = false;


const btnCrearCita = formulario.querySelector('button[type="submit"]');


//#endregion

class Historial {

    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    modificarCitas(citas){
        this.citas = citas;
        ui.imprimirCitas(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita =>{
            return cita.id != id;
        });
        ui.imprimirCitas(this.citas);
    }

    editarCita(cita){
        const i = this.citas.findIndex(cita => cita.id == cita.id);
        this.citas[i] = cita;
    }
}

class UI {

    imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div');
        div.textContent = mensaje;
        div.classList.add('col-12', 'text-center', 'alert');
        if(tipo === "success"){
            div.classList.add('alert-success');
        }else{
            div.classList.add('alert-danger');
        }
        document.querySelector('#contenido').insertBefore(div, document.querySelector('.agregar-cita'));

        setTimeout(() =>{
            div.remove();
        }, 3000);
    }

    imprimirCitas(citas){

        this.limpiarHtml();
        
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;
            

            const pMascota = document.createElement('h2');
            const pPropietario = document.createElement('p');
            const pTelefono = document.createElement('p');
            const pFecha = document.createElement('p');
            const pHora = document.createElement('p');
            const pSintomas = document.createElement('p');
            

            pMascota.textContent = mascota;
            pMascota.classList.add('card-title', 'font-weight-bolder');

            pPropietario.innerHTML =`
                <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;
            pTelefono.innerHTML = `
                <span class="font-weight-bolder">Telefono:</span> ${telefono}
            `;

            pFecha.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;
            
            pHora.innerHTML =`
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            pSintomas.innerHTML=`
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
            `;

            const btnBorrar = document.createElement('button');
            btnBorrar.className = 'btn btn-danger';
            btnBorrar.innerHTML= `Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

            const btnEditar = document.createElement('button');
            btnEditar.className= 'btn btn-primary ml-1';
            btnEditar.innerHTML = `Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`

            btnBorrar.onclick = () => eliminarCita(id);
            btnEditar.onclick = () => editarCita(cita);

            divCita.appendChild(pMascota);
            divCita.appendChild(pPropietario);
            divCita.appendChild(pTelefono);
            divCita.appendChild(pFecha);
            divCita.appendChild(pHora);
            divCita.appendChild(pSintomas);
            divCita.appendChild(btnBorrar);
            divCita.appendChild(btnEditar);
            
            listaCitas.appendChild(divCita);
        });
    }

    limpiarHtml(){
        while(listaCitas.firstChild){
            listaCitas.removeChild(listaCitas.firstChild);
        }
    }
}

const ui = new UI();
const historial = new Historial();


const Cita = {
    id: null,
    mascota: null,
    propietario: null,
    telefono: null,
    fecha: null,
    hora: null,
    sintomas: null
}

//#region Eventos

eventListeners();

function eventListeners(){

    txtNombreMascota.addEventListener('input', datosCita);
    txtPropietario.addEventListener('input', datosCita);
    txtTelefono.addEventListener('input', datosCita);
    inputFecha.addEventListener('input', datosCita);
    inputHora.addEventListener('input', datosCita);
    txtSintomas.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
    
}

function eliminarCita(id){
    historial.eliminarCita(id);
}

function editarCita(cita){    
    editando = true;
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    txtNombreMascota.value = mascota;
    txtPropietario.value = propietario;
    txtTelefono.value = telefono;    
    txtSintomas.value = sintomas;
    inputFecha.value = fecha;
    inputHora.value = hora;

    Cita.id = id;
    Cita.mascota = mascota;
    Cita.propietario = propietario;
    Cita.telefono = telefono;
    Cita.sintomas = sintomas;
    Cita.fecha = fecha;
    Cita.hora = hora;

    btnCrearCita.textContent = "Editar cita";
}

//#endregion

//#region Funciones

function datosCita(e){
    Cita[e.target.name] = e.target.value;    
}

function nuevaCita(e){
    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas} = Cita;

    if(mascota === '' || propietario === '' || telefono === '' || fecha == null || hora == null || sintomas === ''){
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        return;
    }

   if(!editando){
    Cita.id = Date.now();
    historial.agregarCita({...Cita});
    ui.imprimirAlerta("Cita registrada", "success");
   }else{
    historial.editarCita({...Cita});
    ui.imprimirAlerta("Cita actualizada", "success");
    btnCrearCita.textContent ='Crear cita';
    editando = false;
   }
    debugger;
   resetearCita();
   formulario.reset();   
   ui.imprimirCitas(historial.citas);
}

function resetearCita(){
    Cita.mascota = null;
    Cita.propietario = null;
    Cita.telefono = null;
    Cita.fecha = null;
    Cita.hora = null;
    Cita.sintomas = null;
}

//#region 