//Implicit Binding


const usuario = {
    nombre : 'juan',
    edad: 20,

    informacion(){
        console.log(`El nombre es: ${this.nombre} y la edad es ${this.edad}`)
    }
    ,
    mascota : {
        nombre: 'Hook',
        edad: 1,
        informacion(){
            console.log(`El nombre es: ${this.nombre} y la edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();