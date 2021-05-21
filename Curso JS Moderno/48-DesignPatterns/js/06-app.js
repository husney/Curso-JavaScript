//Mixin Pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`);
    },

    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    },

    mostrarEmail(){
        console.log(`Email: ${this.email}`);
    }
}

//Agergar funciones a una clase

Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const per1 = new Persona('Prueba', 'Preuba@gmail.com');
per1.mostrarInformacion();
per1.mostrarNombre();
per1.mostrarEmail();

const cli1 = new Cliente('PruebaCliente', 'Clietne@gmail.com', 'JS');
cli1.mostrarInformacion();
cli1.mostrarNombre();
cli1 .mostrarEmail();