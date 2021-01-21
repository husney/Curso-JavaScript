const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarBoton);

function mostrarOcultarBoton(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent= "Idioma y Moneda";
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = "X Cerrar";
    }
}

btnFlotante.addEventListener('mouseover', () =>{
    console.log("Mouse Over");
});


btnFlotante.addEventListener('mouseout', () =>{
    console.log("Mouse Out");
}); 