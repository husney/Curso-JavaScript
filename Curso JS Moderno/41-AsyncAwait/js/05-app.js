const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', datos);

// function obtenerDatos(){

//     fetch(url)
//     .then(rs => rs.json())
//     .then(resultados => {
//         console.log(resultados);
//     })
//     .catch(ex =>{
//         console.log(ex);
//     });
// }

async function datos(){
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    console.log(resultado)
}