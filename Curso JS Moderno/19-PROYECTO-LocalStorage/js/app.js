//#region Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//#endregion

//#region Event Listeners
eventListeners();

function eventListeners(){

    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHtml();
    });
}

//#endregion


//#region Funciones

function agregarTweet(e){
    e.preventDefault();
    
    const tweet = document.querySelector('#tweet').value;
    
    if(tweet === ''){
        mostrarError("El tweet no puede estar vacio");
        return; //Corta la ejecución de la función
    }

    const tweetObj = {
        id: Date.now(),
        tweet //Si la llave es la misma al valor se puede omitir el valor
    }
    
    tweets = [...tweets, tweetObj];

    crearHtml();
    formulario.reset();
    
    
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function mostrarError(mensaje){
    const msg = document.createElement('p');
    msg.textContent = mensaje;
    msg.classList.add('error');
    
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msg);

    // Elimina el error
    setTimeout( () =>{
        msg.remove();
    }, 3000)
}

function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function crearHtml(){
    if(tweets.length > 0){
        limpiarHtml();
        tweets.forEach(tweet =>{
            const btnEliminar = document.createElement('a');
            btnEliminar.textContent = "X";
            btnEliminar.classList.add('borrar-tweet');
            
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.textContent = tweet.tweet;
            li.appendChild(btnEliminar);
            
            listaTweets.appendChild(li);
        });
        sincronizarStorage();
    }else{
        limpiarHtml();
    }
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id != id);
    console.log(tweets);
    crearHtml();
    sincronizarStorage();
}

//#endregion









//#region Propio
// //#region Elementos HTML
// const formulario = document.querySelector('#formulario')
// const btnAgregar = document.querySelector('#agregar');
// const tweetTxt = document.querySelector('#tweet');
// const listaTweets = document.querySelector('#lista-tweets  ')
// //#endregion

// //#region Eventos
// btnAgregar.addEventListener('click', agregarTweet);
// //#endregion

// //#region Funciones
// if(localStorage.getItem("tweets")){
//     mostrarTweets();
// }

// function agregarTweet(e){
//     e.preventDefault();
//     if(tweetTxt.value.length >0){
//         guardarLocalStorage(tweetTxt.value);
//     }
// }

// function guardarLocalStorage(valor){
//     if(localStorage.getItem("tweets")){
//         const tweets = JSON.parse(localStorage.getItem("tweets"));
//         tweets.push(valor);
//         localStorage.setItem("tweets", JSON.stringify(tweets));        
//     }else{
//         const tweet = [valor];
//         localStorage.setItem("tweets", JSON.stringify(tweet));
//     }
//     mostrarTweets();
//     formulario.reset();
// }

// function mostrarTweets(){
//     limpiarTweets();    
//     const tweets = JSON.parse(localStorage.getItem("tweets"));
//     let rowNumber = 0;
//     tweets.forEach(tweet =>{
          
//         const btnEliminar = document.createElement('a');
//         btnEliminar.textContent = "x";        
//         btnEliminar.style.textDecoration = "none";
//         btnEliminar.style.color = "red";
//         btnEliminar.style.fontWeight= "bold";
//         btnEliminar.href = "#";
//         btnEliminar.classList.add("btn-eliminar");
//         btnEliminar.id = `${rowNumber}`;
        
//         btnEliminar.onclick = () =>{
//             borrarTweet();
//         }

//         const tweetText = document.createElement('li');
//         tweetText.textContent = tweet;

//         tweetText.style.display = "flex";
//         tweetText.style.justifyContent = "space-between";

//         tweetText.appendChild(btnEliminar);
//         listaTweets.appendChild(tweetText);
//         rowNumber++;
//     });
// }

// function limpiarTweets(){
//     while(listaTweets.firstChild){
//         listaTweets.removeChild(listaTweets.firstChild);
//     }
// }

// function borrarTweet(id){
//     console.log("borrando");
// }

// // const btnsEliminar = document.querySelectorAll('.btn-eliminar');

// // btnsEliminar.forEach(item =>{
// //     item.addEventListener('click', e =>{
// //         const tweets = JSON.parse(localStorage.getItem("tweets"));
// //         tweets.splice(e.target.id, 1);
// //         localStorage.setItem("tweets", JSON.stringify(tweets));
// //         mostrarTweets();
// //     })
// // })
// //#endregion

//#endregion