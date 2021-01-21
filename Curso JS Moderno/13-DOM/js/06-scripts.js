const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
// console.log(encabezado.innerHTML);
// console.log(encabezado.textContent);
// console.log(encabezado.innerText);

document.querySelector('.contenido-hero h1').textContent = "Nuevo Heading";

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'