const btnJson = document.querySelector('#cargarJSON');

btnJson.addEventListener('click', obtenerDatosJson);

function obtenerDatosJson(){
    const url = 'data/empleado.json';
    
    fetch(url)
    .then(rs => rs.json())
    .then(rs => console.log(rs))
    .catch(ex => console.log(ex));
}