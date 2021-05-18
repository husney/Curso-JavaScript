//Explicit Binding

function persona(p1, p2){
    console.log(`El nombre es: ${this.nombre}, escucha ${p1} y ${p2}`);
}

const informacion = {
    nombre : 'Juan'
}

const musicaFavorita = ["Ingles", "Electronica"];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nf = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nf();