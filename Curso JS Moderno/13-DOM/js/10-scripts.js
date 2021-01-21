const enlace = document.createElement('a'); // p, img, section, input, select, option etc...
enlace.textContent = 'Nuevo Enlace';
enlace.href='#';
enlace.target="_blank";

const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //Lo coloca al final
navegacion.insertBefore(enlace, navegacion.children[1]);
//console.log(enlace);

const p1 = document.createElement('p');
p1.textContent = "Concierto";
p1.classList.add('categoria','concierto');


const p2 = document.createElement('p');
p2.textContent = "Concierto SCORE";
p2.classList.add('titulo');

const p3 = document.createElement('p');
p3.textContent = "1,200 por persona";
p3.classList.add('precio');

console.log(p1);
console.log(p2);
console.log(p3);


const img1 = document.createElement('img');
img1.src='img/hospedaje3.jpg';


const contenedor1 = document.createElement('div');
contenedor1.classList.add('info');

contenedor1.appendChild(p1);
contenedor1.appendChild(p2);
contenedor1.appendChild(p3);

console.log(contenedor1);
console.log(img1);

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(img1);
card.appendChild(contenedor1);

console.log(card);

const hacer = document.querySelector('.contenedor > .hacer > .contenedor-cards');
console.log(hacer);

hacer.appendChild(card);