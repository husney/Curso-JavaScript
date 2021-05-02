const btnTxt = document.querySelector('#cargarTxt');

btnTxt.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/datos.txt';
    
    fetch(url)
    .then(rs => rs.text())
    .then(rs => console.log(rs))
    .catch(ex => console.log(ex));
}