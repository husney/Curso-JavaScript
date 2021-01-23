// const hacer = document.querySelector('section.hacer');

// window.addEventListener('scroll', (e)=>{
//     console.log("Scrolleando...");
//     let scrollPxY = window.scrollY;
//     console.log(scrollPxY);

//     if(scrollPxY > 350 && scrollPxY <1201){
//         if(!hacer.classList.contains('cambio')){
//             hacer.classList.add('cambio');
//             console.log("Agregando clase");
//         }
//     }else{
//         if(hacer.classList.contains('cambio')){
//             hacer.classList.remove('cambio');
//             console.log("Removiendo Calse");
//         }
//     }
// });

window.addEventListener('scroll', (e)=> {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 668 && ubicacion.top > -430){
        console.log("visible")
    }


});