const btnJsonArray = document.querySelector('#cargarJSONArray');

btnJsonArray.addEventListener('click', obtenerDatosJsonArray);

function obtenerDatosJsonArray(){
    const url = 'data/empleados.json';

    fetch(url)
    .then(rs => rs.json())
    .then(rs => console.log(rs))
    .catch(ex => console.log(ex));
}