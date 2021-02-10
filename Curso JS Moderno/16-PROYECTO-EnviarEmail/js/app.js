//#region Variables

//#region Botones
const btnEnviar = document.querySelector('#enviar');

//#endregion

//#region Elementos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const formualrio = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');
//#endregion

//#endregion

//#region Funciones

eventListeners();   
function eventListeners(){ 
    // Al iniciar la app
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    btnReset.addEventListener('click', resetearFormulario);
    formualrio.addEventListener('submit', enviarEmail);
}

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); 
}

// Valida el formulario
function validarFormulario(e){    

    const error = document.querySelector('.error');
    const exprEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(error){
        error.remove();
    }
    
    
    if(e.target.value.length > 0){        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');        
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === "email"){
        

        if(exprEmail.test(e.target.value)){

            if(error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500'); 
            mostrarError("El email no es valido");
        }
    }

    if(exprEmail.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        btnEnviar.disabled = false;
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100','text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0 ){
        //formualrio.appendChild(mensajeError);
        formualrio.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }
}

// Enviar Email
function enviarEmail(e){
    e.preventDefault();    
    
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "flex";

    const parrafo = document.createElement('p');

    setTimeout(() =>{
        spinner.style.display = "none";

        
        parrafo.textContent = "El E-mail ha sido enviado correctamente";
        parrafo.classList.add('text-center', 'text-white', 'my-10', 'p-2', 'bg-green-500', 'font-bold', 'uppercase');
        formualrio.insertBefore(parrafo, spinner);
        setTimeout(() =>{
            parrafo.remove();
            //resetearFormulario();
        }, 2000);        
    },3000);
}

function resetearFormulario(e){
    formualrio.reset();
    iniciarApp();
}

//#endregion 