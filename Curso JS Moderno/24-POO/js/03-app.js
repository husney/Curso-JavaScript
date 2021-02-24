class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos(){
        console.log(`Nombre = ${this.nombre} Edad = ${this.edad}`);
    }
}

const per1 = new Persona("Persona 1", 20);

per1.mostrarDatos();

class Cliente extends Persona{
    constructor(nombre, edad, telefono){
        super(nombre, edad);
        this.telefono = telefono;
    }

    mostrarDatos(){
        console.log(`Nombre = ${this.nombre} Edad = ${this.edad} Telefono = ${this.telefono}`);
    }
}

const cli1 = new Cliente("Cliente 1", 25, 12345);
cli1.mostrarDatos(); 


