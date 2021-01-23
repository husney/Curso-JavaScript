const nav = document.querySelector('.navegacion');

//Registrar Evento

nav.addEventListener('click', () =>{
    console.log("click en el nav")
});

nav.addEventListener('mouseenter', () =>{
    console.log("Entrando a la navegación");
});

nav.addEventListener('mouseout', () =>{
    console.log("Saliendo de la navegación");
});

nav.addEventListener('mousedown', () =>{ //Cuando se espicha el click
    console.log('MouseDown');
});

nav.addEventListener('mouseup', () =>{
    console.log("MouseUp");
});

nav.addEventListener('dblclick', () =>{
    console.log("Doble Click");
});