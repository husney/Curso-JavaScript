document.addEventListener("DOMContentLoaded", () =>{
    Notification.requestPermission();

    const btnNotificar = document.querySelector('#verNotificacion');

    btnNotificar.addEventListener('click', ()=>{
        
        if(Notification.permission === 'granted'){
            const notificacion = new Notification('Notificación', {
                icon: 'img/logo.png',
                body: 'Este el el cuerpo de la notificación'
            });

            notificacion.onclick = function(){
                window.open('http://www.youtube.com');
            }
        }
    });

});
