
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tiutlo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log("Click en card");
});

infoDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log("Click en info");
});

tiutlo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log("Click en titulo");
});