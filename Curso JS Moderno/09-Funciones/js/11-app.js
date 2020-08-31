

const reproductor = {
    
    cancion: null,
    playList: [],
    reproducir: (cancion = 1) => {
        this.cancion = cancion;
        console.log("Reproduciendo " + cancion + " ...");
    },
    pausar: () => {
        console.log("Pausando canción...");
    },
    borrar: (cancion) => {
        console.log("Borrando canción: " + cancion + " ...");
    },
    crearPlaylist: function(nombre){
        this.playList.push(
            {
                nombreLista: nombre,
                lista: []

            }
        );
        console.log("Lista creada");
        
        
    },/* ,crearPlaylist2: nombre =>{
        this.playList.push(
            {
                nombreLista: nombre,
                lista: []

            }
        );
        console.log("Lista creada");
        
        
    }, */
    agregarALista: (nombre, cancion) =>{
        for(lista in this.playList){
            if(lista.nombreLista = nombre){
                lista.canciones.push(cancion);
                console.log("Canción Agregada");
            }
        }
    },
    set asignarCancion(cancion){ 
        this.cancion = cancion;
        console.log(`Reproduciendo ${this.cancion}`);
    },
    get obtenerCancion(){
        console.log(`Se esta reproduciendo ${this.cancion}`);
    }
}

reproductor.asignarCancion = "Stronger";
reproductor.obtenerCancion;



reproductor.reproducir();
reproductor.crearPlaylist("Electronica");
reproductor.crearPlaylist2("Rock");

reproductor.asignarCancion = "Stronger";
reproductor.obtenerCancion;
