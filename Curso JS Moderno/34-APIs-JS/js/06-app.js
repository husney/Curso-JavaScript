const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', speachAPI);


function speachAPI(){
    const speach = webkitSpeechRecognition;
    

    const recognition = new speach();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando ...';
    }

    recognition.onspeechend = function(){
        salida.textContent = 'Fin de la grabación...';
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0].transcript);

        const {transcript} = e.results[0][0]

        const speachE = document.createElement('p');
        speachE.textContent = transcript;

        document.querySelector('body').appendChild(speachE)
    }
}