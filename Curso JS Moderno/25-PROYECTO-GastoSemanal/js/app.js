//#region Variables
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos');
const lblTotal = document.querySelector('#total');
const lblRestante = document.querySelector('#restante');
const gastoInput = document.querySelector('#gasto');
const cantidadInput = document.querySelector('#cantidad'); 

//#endregion



//#region Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', () =>{
        preguntarPresupuesto();
    });
}

formulario.addEventListener('submit', e =>{
    e.preventDefault();

    if(gastoInput.value == '' && cantidadInput.value == ''){
        ui.imprimirAlerta("Los campos son obligatorios", "error")
    }
    else if(gastoInput.value == ''){
        ui.imprimirAlerta("El nombre del gasto es obligatorio", "error");
    }else if(cantidadInput.value == ''){
        ui.imprimirAlerta("La cantidad del gasto es obligatoria", "error");
    }else if(cantidadInput.value <= 0 || isNaN(cantidad.value)){
        ui.imprimirAlerta("La cantidad no es valida", "error");
    }else{
        //Pasa la validación

        const nombre = gastoInput.value;
        const valor = Number(cantidadInput.value);        
        const gasto = { id: Date.now() , nombre, valor}
        
        
        presupuesto.nuevoGasto(gasto);
        
        ui.imprimirAlerta("Registrado correctamente", "success");
       
        formulario.reset();


        // presupuesto.gastos.push({nombre: gasto.value, valor: cantidad.value});
        // presupuesto.restante -= cantidad.value;
        // ui.insertarPresupuesto(presupuesto);
        // ui.listaGastos(presupuesto.gastos);
        
    }
});

//#endregion



//#region Clases

class Presupuesto{
    constructor(valor){
        this.total = Number(valor);
        this.restante = Number(valor);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos.push(gasto);
        this.calcularRestante(); 
        //this.restante -= gasto.valor;
        //ui.insertarPresupuesto(this);
        ui.listaGastos(this.gastos);
    }
    
    calcularRestante(){
        const gastado = this.gastos.reduce((total, actual) => total + actual.valor, 0);
        this.restante = this.total - gastado;
    }

    modificarGastos(gastos){
        this.gastos = gastos;
        this.calcularRestante();
        ui.listaGastos(this.gastos);
    }
}

let presupuesto;


class UI{
    insertarPresupuesto(presupuesto){
        const {total, restante} = presupuesto;
        lblTotal.textContent = total;
        lblRestante.textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');

        if(tipo == "error"){
            div.classList.add('alert-danger');
        }
        else{
            div.classList.add('alert-success');
        }

        div.textContent = mensaje;

        document.querySelector('.primario').insertBefore(div, formulario);

        setTimeout(()=>{
            div.remove();
        }, 2000)
    }

    listaGastos(gastos){

        this.limpiarGastos();

        gastos.forEach(gasto =>{
            const { id, nombre, valor } = gasto;
            
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.dataset.id = id;
            li.textContent = nombre;

            const span = document.createElement('span');
            span.textContent = "$"+valor;
            span.className = 'badge badge-primary badge-pill';
            li.appendChild(span);
            
            const btnBorrar = document.createElement('button');
            btnBorrar.textContent = "x";
            btnBorrar.classList.add("btn", "btn-danger");
            btnBorrar.id = id;
                

            li.appendChild(btnBorrar);

            btnBorrar.addEventListener('click', e =>{

                e.preventDefault();
                const gastos = presupuesto.gastos.filter(presupuesto =>{
                    return presupuesto.id != Number(e.target.parentElement.getAttribute("data-id"));
                });
                presupuesto.modificarGastos(gastos);
                
            });
            

            listaGastos.appendChild(li);
        });

        ui.actualizarRestante(presupuesto.restante, presupuesto.total);
    }

    limpiarGastos(){
        while(listaGastos.firstChild){
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }

    actualizarRestante(restante, total){
        
        const divRestante = lblRestante.parentElement.parentElement;

        if(restante >= total * .50){
            divRestante.classList.remove("alert-danger");
            divRestante.classList.remove("alert-warning");
            divRestante.classList.add("alert-success");
        }else if(restante >= total * .25){
            divRestante.classList.remove("alert-success");
            divRestante.classList.remove("alert-danger");
            divRestante.classList.add("alert-warning");
        }else{
            divRestante.classList.remove("alert-success");
            divRestante.classList.remove("alert-warning");
            divRestante.classList.add("alert-danger");
        }
      
        lblRestante.textContent = restante;

        if(restante <= 0){
            ui.imprimirAlerta("El presupuesto se ha agotado", "error");
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

const ui = new UI();

//#endregion



//#region Funciones

function preguntarPresupuesto(){
    let valorPresupuesto = '';
    while(valorPresupuesto == ''){
        valorPresupuesto = prompt('¿Cual es el presupuesto?');
        if(!parseFloat(valorPresupuesto) || parseFloat(valorPresupuesto) <= 0){
            valorPresupuesto = '';
        }
    }
    
    presupuesto = new Presupuesto(valorPresupuesto);    
    ui.insertarPresupuesto(presupuesto);
}


//#endregion

