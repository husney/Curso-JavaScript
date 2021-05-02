const btnApi = document.querySelector('#cargarAPI');

btnApi.addEventListener('click', datosApi);

function datosApi(){
    const url = 'https://picsum.photos/list';

    fetch(url)
    .then(rs => rs.json())
    .then(rs => agregeraHtml(rs));
}

function agregeraHtml(datos){
    const div = document.querySelector('#api');

    let html;

    datos.forEach(imagen =>{

        const {author, post_url} = imagen;
        html += 
        `
        <div>
            <h3>Autor: ${author}</h3>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        </div>
        `;
    });

    div.innerHTML = html;
}