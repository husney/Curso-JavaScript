//"use strict";
const reproductor = {
    PlayList : [],
    reproducir : function(id){
        console.log(`Reproduciendo canción ${id} . . .`);
    },
    pausar : function(){
        console.log(`Pausando . . . `);
    },
    borrarCancion : function(id){
        console.log(`Borrando canción ${id} . . . `);
    },
    agregarPlayList : function(playList){
        this.PlayList.push(playList);
        console.log("Play list creada.");
    },
    listarPlayList : function(){
        console.log("PlayList");
        console.log("---------");
        this.PlayList.forEach(playList => console.log( "- " + playList.nombre));
        console.log("---------");
    },
    listarCancionesPlayList : function(nombrePlayList){
        let posicion = null; // Variable en donde se guardará la posición

        //Realiza un foreach de la lista de Play Lists y obitene la posición del nombre referenciado
        this.PlayList.forEach(playList => {
            if (playList.nombre == nombrePlayList){
                posicion = this.PlayList.indexOf(playList);                      
            }
        });

        //Se listan las canciones
        if (posicion != null){
            console.log(`Play List: ${this.PlayList[posicion].nombre}`);
            let numeroCancion = 1;
            this.PlayList[posicion].canciones.forEach( cancion =>{
                console.log(`   ${numeroCancion}- ${cancion}`);
                numeroCancion++;
            });
        }        
    },
    reproducirCancion : function(nombrePlayList, cancion){
        posicion = null;

        this.PlayList.forEach( list =>{
            if(list.nombre == nombrePlayList){
                posicion = this.PlayList.indexOf(list);
            }
        });

        if(posicion != null){
            console.log();
            cancion = this.PlayList[posicion].canciones[cancion - 1];
            console.log(`Reproduciendo ${cancion} ♬ . ♪ . ♫ . ♩`);
            console.log();
        }        
    }
}

//Object.seal(reproductor);

reproductor.reproducir(5);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrarCancion(5);

const playList1 = {
    nombre : "The score",
    canciones : [
        "Stronger",
        "Revolution",
        "Human",
        "Unsopotable"
    ]
}

const playList2 = {
    nombre : "Twenty One Pilots",
    canciones : [
        "StretOut",
        "Heathens",
        "Otra",
        "Otra más"
    ]
}

reproductor.agregarPlayList(playList1);
reproductor.agregarPlayList(playList2);
reproductor.listarPlayList();

reproductor.listarCancionesPlayList("The score");
reproductor.listarCancionesPlayList("Twenty One Pilots");

reproductor.reproducirCancion("The score", 1);
reproductor.reproducirCancion("The score", 4);

reproductor.reproducirCancion("Twenty One Pilots", 2);
reproductor.pausar();