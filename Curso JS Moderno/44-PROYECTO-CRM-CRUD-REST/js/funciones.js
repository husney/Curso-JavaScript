export function mostrarMensaje(msg, type){

    const mensaje = document.querySelector('.msg');

    if(mensaje){
        mensaje.remove();
    }
    const div = document.createElement('div');
        div.classList.add('text-center', 'bordered', 'msg', 'mt-5', 'text-white',  'border-2', 'rounded', 'font-bold', 'p-4');

        if(type === "success"){
            div.classList.add('bg-green-400', 'border-green-700');
        }else{
            div.classList.add('bg-red-400', 'border-red-700');
        }

        div.textContent = msg;

        formulario.appendChild(div);

        setTimeout(()=>{
            div.remove();
        },2500);

}

export function validar(obj){
    return !Object.values(obj).every(attribute => attribute != "");
}