class Persona{

    #nombre;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos(){
        console.log(`Nombre = ${this.#nombre} Edad = ${this.edad}`);
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }
}

const per1 = new Persona("Persona 1", 20);
console.log(per1.nombre);
per1.mostrarDatos();
per1.nombre = "Cambio"
console.log(per1.nombre);
per1.mostrarDatos();
