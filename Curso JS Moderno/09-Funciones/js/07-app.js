
/* const reproductor = {

    cancion: null,
    playList: [],
    reproducir: function(cancion = 00){
        this.cancion = cancion;
        console.log("Reproduciendo " + this.cancion + " ...");
    },
    pausar: function(){
        console.log("Pausando " + this.cancion + " ...");
    },
    borrar: function(){
        console.log("Borrando canción " + this.cancion + " ...");
    },
    crearPlaylist: function(nombre){
        this.playList.push(
            {
                nombreLista: nombre,
                canciones:[]
            }
       );
    },
    agregarCancionLista: function(nombre, cancion){
        for(lista of this.playList){
            if(lista.nombreLista === nombre){
                lista.canciones.push(cancion);
            }
        }
    },
    mostrarLista: function(nombre){
        for(lista of this.playList){
            numero = 1;
            if(lista.nombre = nombre){
                console.log("---- " + lista.nombre + " ----");
                for(cancion of lista.canciones){
                    console.log( numero + "- "+  cancion);
                    numero ++;
                }
                break;
            }
        }
    }

}

reproductor.crearPlaylist("Rock");
reproductor.crearPlaylist("Power");

reproductor.agregarCancionLista("Rock", "Sao");
reproductor.agregarCancionLista("Rock", "Fuck YOU");
reproductor.agregarCancionLista("Rock", "Dangerus");
reproductor.agregarCancionLista("Rock", "Stronger");

reproductor.agregarCancionLista("Power", "American Dream");
reproductor.agregarCancionLista("Power", "Blame");
reproductor.agregarCancionLista("Power", "idon't even to my self");
reproductor.agregarCancionLista("Power", "Supersonic");


reproductor.mostrarLista("Rock");
console.log(reproductor.playList[0]);


reproductor.mostrarLista("Power");
console.log(reproductor.playList[1]);


reproductor.reproducir();
reproductor.pausar();
 */


