//Singelton Pattern

let instancia = null;


class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('Prueba', 'Prueba@prueba.com');
console.log(persona);

const persona2 = new Persona('Persona2', 'Persona2@gmail.com');
console.log(persona2);