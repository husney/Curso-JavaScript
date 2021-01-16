const reproductor = {
    PlayLists : [],    
    reproducir : id => console.log(`Reproduciendo la canción ${id} ♬ . ♪ . ♫ . ♩`),
    pausar : () => console.log('Pausando . . .'),
    borrarCancion : id => console.log(`Borrando la canción ${id}`),
    agregarPlayList : function(lista){
        this.PlayLists.push(lista);
        console.log(`Agregando ${lista.nombre}`);
    },
    listarPlayLists : function(){
        if(this.PlayLists != null){
            console.log("Play Lists: ")
            this.PlayLists.forEach( lista =>{
                console.log("-" + lista.nombre);
            });
        }else{
            console.log(`No hay ninguna lista agregada por favor ingrese una`);
        }
    },
    listarCancionesPlayList : function(nombrePlayList){
        posicion = null;
        this.PlayLists.forEach(lista =>{
            if (lista.nombre == nombrePlayList){
                posicion = this.PlayLists.indexOf(lista);
            }
        });
        if(posicion != null){
            numCancion = 1;
            this.PlayLists[posicion].canciones.forEach(cancion =>{
                console.log(`   ${numCancion}- ${cancion}`);
                numCancion++;
            })
        }
    },
    reproducirCancion : function(nombrePlayList, numeroCancion){
        posicion = null;

        this.PlayLists.forEach(lista =>{
            if(lista.nombre == nombrePlayList){
                posicion = this.PlayLists.indexOf(lista);
            }
        });

        if(posicion != null){
            console.log();
            console.log(`Reproduciendo ${this.PlayLists[posicion].canciones[numeroCancion -1]} ♬ . ♪ . ♫ . ♩`);
            console.log();
        }
    }
};

const playList1 = {
    nombre : "The Score",
    canciones : [
        "Stronger",
        "Revolution",
        "Human",
        "Unsopotable"
    ]
};

const playList2 = {
    nombre : "Twenty One Pilots",
    canciones : [
        "StretOut",
        "Heathens",
        "Otra",
        "Otra más"
    ]
};

reproductor.agregarPlayList(playList1);
reproductor.agregarPlayList(playList2);

reproductor.listarPlayLists();
reproductor.listarCancionesPlayList("The Score");
reproductor.reproducirCancion("The Score", 2);

const persona = {
    nombre : '',
    get Nombre (){
        console.log(this.nombre);
    },
    set Nombre(Nombre){
        this.nombre = Nombre;
    }
}


persona.Nombre = "Prueba";
persona.Nombre;

persona.Nombre = "Asignado";
persona.Nombre;